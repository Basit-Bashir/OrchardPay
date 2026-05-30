import { prisma } from "@/lib/prisma";
import { ok, fail, handle } from "@/lib/api";
import { requireSession } from "@/lib/auth";

type Ctx = { params: Promise<{ draftId: string }> };

export async function GET(_req: Request, { params }: Ctx) {
  return handle(async () => {
    const session = await requireSession();
    if (session.role === "hamaal") return fail("Unauthorized", 403);
    const { draftId } = await params;

    const draft = await prisma.draftTransaction.findFirst({
      where: {
        id: draftId,
        buyerFirmId: session.buyerFirmId,
      },
      include: {
        grower: { select: { name: true } },
      },
    });

    if (!draft) return fail("Draft transaction not found", 404);

    return ok(draft);
  });
}

export async function DELETE(_req: Request, { params }: Ctx) {
  return handle(async () => {
    const session = await requireSession();
    if (session.role === "hamaal") return fail("Unauthorized", 403);
    const { draftId } = await params;

    const draft = await prisma.draftTransaction.findFirst({
      where: {
        id: draftId,
        buyerFirmId: session.buyerFirmId,
      },
    });

    if (!draft) return fail("Draft transaction not found", 404);

    await prisma.draftTransaction.delete({
      where: { id: draftId },
    });

    return ok({ ok: true });
  });
}
