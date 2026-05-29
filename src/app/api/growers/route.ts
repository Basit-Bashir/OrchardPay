import { prisma } from "@/lib/prisma";
import { ok, fail, handle } from "@/lib/api";
import { requireSession } from "@/lib/auth";
import { growerSchema } from "@/lib/validations";

export async function GET(req: Request) {
  return handle(async () => {
    const session = await requireSession();
    const q = new URL(req.url).searchParams.get("q")?.trim();

    const growers = await prisma.grower.findMany({
      where: {
        buyerFirmId: session.buyerFirmId,
        ...(q
          ? { OR: [{ name: { contains: q } }, { mobile: { contains: q } }] }
          : {}),
      },
      orderBy: { createdAt: "desc" },
      include: { _count: { select: { transactions: true } } },
    });

    return ok(growers);
  });
}

export async function POST(req: Request) {
  return handle(async () => {
    const session = await requireSession();
    const parsed = growerSchema.safeParse(await req.json());
    if (!parsed.success) return fail(parsed.error.issues[0]?.message ?? "Invalid input");

    const { name, mobile, address } = parsed.data;
    const existing = await prisma.grower.findUnique({
      where: { mobile_buyerFirmId: { mobile, buyerFirmId: session.buyerFirmId } },
    });
    if (existing) return fail("A grower with this mobile already exists.", 409);

    const grower = await prisma.grower.create({
      data: { name, mobile, address: address || null, buyerFirmId: session.buyerFirmId },
    });
    return ok(grower, 201);
  });
}
