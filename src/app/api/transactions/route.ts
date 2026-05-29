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

    const { growerId, items, notes } = parsed.data;

    const grower = await prisma.grower.findFirst({
      where: { id: growerId, buyerFirmId: session.buyerFirmId },
    });
    if (!grower) return fail("Grower not found", 404);

    const firm = await prisma.buyerFirm.findUnique({
      where: { id: session.buyerFirmId },
      select: { firmName: true },
    });

    const createdTxns = [];
    for (const item of items) {
      const totalAmount = Math.round(item.quantity * item.rate * 100) / 100;
      const txn = await prisma.transaction.create({
        data: {
          growerId,
          buyerFirmId: session.buyerFirmId,
          fruitType: item.fruitType,
          quantity: item.quantity,
          unit: item.unit,
          rate: item.rate,
          totalAmount,
          notes: notes || null,
        },
      });
      createdTxns.push(txn);
    }

    const itemsDescription = items
      .map((item) => `${item.fruitType} (${item.quantity} ${item.unit}) @ ₹${item.rate}/${item.unit}`)
      .join(", ");
    
    const totalSum = items.reduce((sum, item) => sum + item.quantity * item.rate, 0);

    const sent = await notifyGrowerOfBatchSale({
      growerId: grower.id,
      growerName: grower.name,
      growerMobile: grower.mobile,
      firmName: firm?.firmName ?? "HortiTrack",
      itemsDescription,
      totalAmount: totalSum,
    });

    if (sent) {
      const txnIds = createdTxns.map((t) => t.id);
      await prisma.transaction.updateMany({
        where: { id: { in: txnIds } },
        data: { notified: true },
      });
    }

    return ok({ ok: true, count: createdTxns.length }, 201);
  });
}
