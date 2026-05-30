import { prisma } from "@/lib/prisma";
import { ok, fail, handle } from "@/lib/api";
import { requireSession } from "@/lib/auth";
import { batchTransactionSchema } from "@/lib/validations";
import { notifyGrowerOfSale, notifyGrowerOfBatchSale } from "@/lib/notify";

export async function GET(req: Request) {
  return handle(async () => {
    const session = await requireSession();
    const sp = new URL(req.url).searchParams;
    const growerId = sp.get("growerId") || undefined;
    const fruitType = sp.get("fruitType")?.trim() || undefined;
    const from = sp.get("from");
    const to = sp.get("to");

    const receivedAt: { gte?: Date; lte?: Date } = {};
    if (from) receivedAt.gte = new Date(from);
    if (to) {
      const end = new Date(to);
      end.setHours(23, 59, 59, 999);
      receivedAt.lte = end;
    }

    const txns = await prisma.transaction.findMany({
      where: {
        buyerFirmId: session.buyerFirmId,
        ...(growerId ? { growerId } : {}),
        ...(fruitType ? { fruitType: { contains: fruitType } } : {}),
        ...(receivedAt.gte || receivedAt.lte ? { receivedAt } : {}),
      },
      orderBy: { receivedAt: "desc" },
      include: { grower: { select: { name: true, mobile: true } } },
    });

    return ok(txns);
  });
}

export async function POST(req: Request) {
  return handle(async () => {
    const session = await requireSession();
    const parsed = batchTransactionSchema.safeParse(await req.json());
    if (!parsed.success) return fail(parsed.error.issues[0]?.message ?? "Invalid input");

    const {
      growerId,
      items,
      freight,
      commissionRate,
      labourRate,
      associationRate,
      printingCharge,
      miscellaneousRate,
      notes,
      draftId,
    } = parsed.data;

    const grower = await prisma.grower.findFirst({
      where: { id: growerId, buyerFirmId: session.buyerFirmId },
    });
    if (!grower) return fail("Grower not found", 404);

    const firm = await prisma.buyerFirm.findUnique({
      where: { id: session.buyerFirmId },
      select: { firmName: true },
    });

    const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);

    const createdTxns = [];
    for (const item of items) {
      const grossAmount = Math.round(item.quantity * item.rate * 100) / 100;
      const commission = Math.round(grossAmount * (commissionRate / 100) * 100) / 100;
      const labour = Math.round(item.quantity * labourRate * 100) / 100;
      
      const itemFreight = totalQuantity > 0 ? Math.round(((item.quantity / totalQuantity) * freight) * 100) / 100 : 0;
      const itemPrinting = totalQuantity > 0 ? Math.round(((item.quantity / totalQuantity) * printingCharge) * 100) / 100 : 0;
      
      const association = Math.round(grossAmount * (associationRate / 100) * 100) / 100;
      const miscellaneous = Math.round(grossAmount * (miscellaneousRate / 100) * 100) / 100;
      
      const totalExpenses = commission + labour + itemFreight + association + itemPrinting + miscellaneous;
      const totalAmount = Math.round((grossAmount - totalExpenses) * 100) / 100;

      const txn = await prisma.transaction.create({
        data: {
          growerId,
          buyerFirmId: session.buyerFirmId,
          fruitType: item.fruitType,
          quantity: item.quantity,
          unit: item.unit,
          rate: item.rate,
          grossAmount,
          commission,
          labour,
          freight: itemFreight,
          association,
          printing: itemPrinting,
          miscellaneous,
          totalAmount,
          notes: notes || null,
        },
      });
      createdTxns.push(txn);
    }

    const itemsDescription = items
      .map((item) => `${item.fruitType} (${item.quantity} ${item.unit}) @ ₹${item.rate}/${item.unit}`)
      .join(", ");
    
    const totalGross = items.reduce((sum, item) => sum + item.quantity * item.rate, 0);
    const totalNet = createdTxns.reduce((sum, t) => sum + t.totalAmount, 0);
    const totalExpenses = Math.round((totalGross - totalNet) * 100) / 100;

    const sent = await notifyGrowerOfBatchSale({
      growerId: grower.id,
      growerName: grower.name,
      growerMobile: grower.mobile,
      firmName: firm?.firmName ?? "OrchardPay",
      itemsDescription,
      totalAmount: totalNet,
      grossAmount: totalGross,
      expensesAmount: totalExpenses,
    });

    if (sent) {
      const txnIds = createdTxns.map((t) => t.id);
      await prisma.transaction.updateMany({
        where: { id: { in: txnIds } },
        data: { notified: true },
      });
    }

    if (draftId) {
      await prisma.draftTransaction.update({
        where: { id: draftId },
        data: { status: "approved" },
      });
    }

    return ok({ ok: true, count: createdTxns.length }, 201);
  });
}
