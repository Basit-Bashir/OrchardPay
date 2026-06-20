import { prisma } from "@/lib/prisma";
import { ok, fail, handle } from "@/lib/api";
import { requireSession } from "@/lib/auth";
import { growerItemChargeSchema } from "@/lib/validations";

export async function GET(req: Request) {
  return handle(async () => {
    const session = await requireSession();
    const sp = new URL(req.url).searchParams;
    const growerId = sp.get("growerId") || undefined;

    const charges = await prisma.growerItemCharge.findMany({
      where: {
        buyerFirmId: session.buyerFirmId,
        ...(growerId ? { growerId } : {}),
      },
      include: {
        grower: {
          select: { name: true, mobile: true },
        },
      },
      orderBy: { issuedAt: "desc" },
    });

    return ok(charges);
  });
}

export async function POST(req: Request) {
  return handle(async () => {
    const session = await requireSession();
    const parsed = growerItemChargeSchema.safeParse(await req.json());
    if (!parsed.success) return fail(parsed.error.issues[0]?.message ?? "Invalid input");

    const { growerId, itemName, quantity, rate, notes, issuedAt } = parsed.data;

    const grower = await prisma.grower.findFirst({
      where: { id: growerId, buyerFirmId: session.buyerFirmId },
    });
    if (!grower) return fail("Grower not found", 404);

    const amount = Math.round(quantity * rate * 100) / 100;

    const charge = await prisma.growerItemCharge.create({
      data: {
        growerId,
        buyerFirmId: session.buyerFirmId,
        itemName,
        quantity,
        rate,
        amount,
        notes: notes || null,
        issuedAt: issuedAt || new Date(),
      },
    });

    return ok(charge, 201);
  });
}
