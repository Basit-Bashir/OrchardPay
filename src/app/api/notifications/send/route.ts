import { prisma } from "@/lib/prisma";
import { ok, fail, handle } from "@/lib/api";
import { requireSession } from "@/lib/auth";
import { notifyGrowerOfSale } from "@/lib/notify";

/** Re-sends the sale SMS for an existing transaction. Body: { transactionId } */
export async function POST(req: Request) {
  return handle(async () => {
    const session = await requireSession();
    const { transactionId } = await req.json();
    if (!transactionId) return fail("transactionId is required");

    const txn = await prisma.transaction.findFirst({
      where: { id: transactionId, buyerFirmId: session.buyerFirmId },
      include: { grower: true, buyerFirm: { select: { firmName: true } } },
    });
    if (!txn) return fail("Transaction not found", 404);

    const sent = await notifyGrowerOfSale({
      growerId: txn.grower.id,
      growerName: txn.grower.name,
      growerMobile: txn.grower.mobile,
      firmName: txn.buyerFirm.firmName,
      fruitType: txn.fruitType,
      quantity: txn.quantity,
      unit: txn.unit,
      rate: txn.rate,
      totalAmount: txn.totalAmount,
    });

    if (sent && !txn.notified) {
      await prisma.transaction.update({ where: { id: txn.id }, data: { notified: true } });
    }

    return ok({ sent });
  });
}
