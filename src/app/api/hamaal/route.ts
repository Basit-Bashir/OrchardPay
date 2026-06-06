import { prisma } from "@/lib/prisma";
import { ok, fail, handle } from "@/lib/api";
import { requireSession } from "@/lib/auth";
import { draftTransactionSchema } from "@/lib/validations";

export async function GET() {
  return handle(async () => {
    const session = await requireSession();
    if (session.role !== "hamaal") return fail("Unauthorized", 403);

    const drafts = await prisma.draftTransaction.findMany({
      where: { createdById: session.userId },
      orderBy: { createdAt: "desc" },
      include: {
        grower: { select: { name: true } },
        seller: { select: { name: true } },
      },
    });
    return ok(drafts);
  });
}

export async function POST(req: Request) {
  return handle(async () => {
    const session = await requireSession();
    if (session.role !== "hamaal") return fail("Unauthorized", 403);

    const body = await req.json();
    const parsed = draftTransactionSchema.safeParse(body);
    if (!parsed.success) return fail(parsed.error.issues[0]?.message ?? "Invalid input");

    const { growerId, sellerId, fruitType, quantity, unit, rate, notes } = parsed.data;

    if ((growerId && sellerId) || (!growerId && !sellerId)) {
      return fail("Select either a Grower or a Seller, but not both", 400);
    }

    if (growerId) {
      const grower = await prisma.grower.findFirst({
        where: { id: growerId, buyerFirmId: session.buyerFirmId },
      });
      if (!grower) return fail("Grower not found", 404);
    }

    if (sellerId) {
      const seller = await prisma.seller.findFirst({
        where: { id: sellerId, buyerFirmId: session.buyerFirmId },
      });
      if (!seller) return fail("Seller not found", 404);
    }

    const draft = await prisma.draftTransaction.create({
      data: {
        growerId: growerId || null,
        sellerId: sellerId || null,
        buyerFirmId: session.buyerFirmId,
        fruitType,
        quantity,
        unit,
        rate,
        notes: notes || null,
        createdById: session.userId,
      },
    });

    return ok(draft, 201);
  });
}
