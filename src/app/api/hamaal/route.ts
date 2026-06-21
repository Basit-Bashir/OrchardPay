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

    const { growerId, sellerId, newSellerName, fruitType, quantity, unit, rate, notes } = parsed.data;

    if (!growerId && !sellerId && !newSellerName) {
      return fail("Select at least a Grower or a Seller", 400);
    }

    let finalSellerId = sellerId || null;
    if (!finalSellerId && newSellerName && newSellerName.trim()) {
      const nameClean = newSellerName.trim();
      const existing = await prisma.seller.findFirst({
        where: { name: nameClean, buyerFirmId: session.buyerFirmId },
      });
      if (existing) {
        finalSellerId = existing.id;
      } else {
        // Generate clean unique 10-digit dummy mobile starting with 9
        const dummyMobile = `9${Math.floor(100000000 + Math.random() * 900000000)}`;
        const newSeller = await prisma.seller.create({
          data: {
            name: nameClean,
            mobile: dummyMobile,
            buyerFirmId: session.buyerFirmId,
          },
        });
        finalSellerId = newSeller.id;
      }
    }

    if (growerId) {
      const grower = await prisma.grower.findFirst({
        where: { id: growerId, buyerFirmId: session.buyerFirmId },
      });
      if (!grower) return fail("Grower not found", 404);
    }

    if (finalSellerId) {
      const seller = await prisma.seller.findFirst({
        where: { id: finalSellerId, buyerFirmId: session.buyerFirmId },
      });
      if (!seller) return fail("Seller not found", 404);
    }

    const draft = await prisma.draftTransaction.create({
      data: {
        growerId: growerId || null,
        sellerId: finalSellerId,
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
