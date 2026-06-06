import { prisma } from "@/lib/prisma";
import { ok, fail, handle } from "@/lib/api";
import { requireSession } from "@/lib/auth";
import { sellerPaymentSchema } from "@/lib/validations";

export async function GET(req: Request) {
  return handle(async () => {
    const session = await requireSession();
    const sp = new URL(req.url).searchParams;
    const sellerId = sp.get("sellerId") || undefined;

    const payments = await prisma.sellerPayment.findMany({
      where: {
        buyerFirmId: session.buyerFirmId,
        ...(sellerId ? { sellerId } : {}),
      },
      orderBy: { paidAt: "desc" },
      include: { seller: { select: { name: true, mobile: true } } },
    });

    return ok(payments);
  });
}

export async function POST(req: Request) {
  return handle(async () => {
    const session = await requireSession();
    const parsed = sellerPaymentSchema.safeParse(await req.json());
    if (!parsed.success) return fail(parsed.error.issues[0]?.message ?? "Invalid input");

    const { sellerId, amount, notes, paidAt } = parsed.data;

    const seller = await prisma.seller.findFirst({
      where: { id: sellerId, buyerFirmId: session.buyerFirmId },
    });
    if (!seller) return fail("Seller not found", 404);

    const payment = await prisma.sellerPayment.create({
      data: {
        sellerId,
        buyerFirmId: session.buyerFirmId,
        amount,
        notes: notes || null,
        paidAt: paidAt || new Date(),
      },
    });

    return ok(payment, 201);
  });
}
