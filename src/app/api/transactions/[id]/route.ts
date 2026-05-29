import { prisma } from "@/lib/prisma";
import { ok, fail, handle } from "@/lib/api";
import { requireSession } from "@/lib/auth";

type Ctx = { params: Promise<{ id: string }> };

export async function GET(_req: Request, { params }: Ctx) {
  return handle(async () => {
    const session = await requireSession();
    const { id } = await params;
    const txn = await prisma.transaction.findFirst({
      where: { id, buyerFirmId: session.buyerFirmId },
      include: { grower: { select: { name: true, mobile: true } } },
    });
    if (!txn) return fail("Transaction not found", 404);
    return ok(txn);
  });
}

export async function DELETE(_req: Request, { params }: Ctx) {
  return handle(async () => {
    const session = await requireSession();
    const { id } = await params;
    const txn = await prisma.transaction.findFirst({
      where: { id, buyerFirmId: session.buyerFirmId },
    });
    if (!txn) return fail("Transaction not found", 404);
    await prisma.transaction.delete({ where: { id } });
    return ok({ ok: true });
  });
}
