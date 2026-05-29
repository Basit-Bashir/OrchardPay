import { prisma } from "@/lib/prisma";
import { ok, fail, handle } from "@/lib/api";
import { requireSession } from "@/lib/auth";
import { paymentSchema } from "@/lib/validations";

export async function GET(req: Request) {
  return handle(async () => {
    const session = await requireSession();
    const sp = new URL(req.url).searchParams;
    const growerId = sp.get("growerId") || undefined;

    const payments = await prisma.payment.findMany({
      where: {
        buyerFirmId: session.buyerFirmId,
        ...(growerId ? { growerId } : {}),
      },
      orderBy: { paidAt: "desc" },
      include: { grower: { select: { name: true, mobile: true } } },
    });

    return ok(payments);
  });
}

export async function POST(req: Request) {
  return handle(async () => {
    const session = await requireSession();
    const parsed = paymentSchema.safeParse(await req.json());
    if (!parsed.success) return fail(parsed.error.issues[0]?.message ?? "Invalid input");

    const { growerId, amount, notes, paidAt } = parsed.data;

    const grower = await prisma.grower.findFirst({
      where: { id: growerId, buyerFirmId: session.buyerFirmId },
    });
    if (!grower) return fail("Grower not found", 404);

    const payment = await prisma.payment.create({
      data: {
        growerId,
        buyerFirmId: session.buyerFirmId,
        amount,
        notes: notes || null,
        paidAt: paidAt || new Date(),
      },
    });

    return ok(payment, 201);
  });
}
