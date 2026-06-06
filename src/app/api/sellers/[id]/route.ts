import { prisma } from "@/lib/prisma";
import { ok, fail, handle } from "@/lib/api";
import { requireSession } from "@/lib/auth";
import { sellerSchema } from "@/lib/validations";

type Ctx = { params: Promise<{ id: string }> };

async function getOwned(id: string, firmId: string) {
  const seller = await prisma.seller.findFirst({ where: { id, buyerFirmId: firmId } });
  return seller;
}

export async function GET(_req: Request, { params }: Ctx) {
  return handle(async () => {
    const session = await requireSession();
    const { id } = await params;
    const seller = await prisma.seller.findFirst({
      where: { id, buyerFirmId: session.buyerFirmId },
      include: {
        transactions: { orderBy: { receivedAt: "desc" } },
        payments: { orderBy: { paidAt: "desc" } },
        buyerFirm: { select: { logoUrl: true, firmName: true } },
      },
    });
    if (!seller) return fail("Seller not found", 404);
    return ok(seller);
  });
}

export async function PATCH(req: Request, { params }: Ctx) {
  return handle(async () => {
    const session = await requireSession();
    const { id } = await params;
    if (!(await getOwned(id, session.buyerFirmId))) return fail("Seller not found", 404);

    const parsed = sellerSchema.safeParse(await req.json());
    if (!parsed.success) return fail(parsed.error.issues[0]?.message ?? "Invalid input");

    const { name, mobile, address } = parsed.data;
    const updated = await prisma.seller.update({
      where: { id },
      data: { name, mobile, address: address || null },
    });
    return ok(updated);
  });
}

export async function DELETE(_req: Request, { params }: Ctx) {
  return handle(async () => {
    const session = await requireSession();
    const { id } = await params;
    if (!(await getOwned(id, session.buyerFirmId))) return fail("Seller not found", 404);

    await prisma.seller.delete({ where: { id } });
    return ok({ ok: true });
  });
}
