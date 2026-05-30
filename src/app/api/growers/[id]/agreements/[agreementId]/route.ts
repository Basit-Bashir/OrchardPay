// Force recompile to pick up custom output directory
import { prisma } from "@/lib/prisma";
import { ok, fail, handle } from "@/lib/api";
import { requireSession } from "@/lib/auth";

type Ctx = { params: Promise<{ id: string; agreementId: string }> };

export async function GET(_req: Request, { params }: Ctx) {
  return handle(async () => {
    const session = await requireSession();
    const { id: growerId, agreementId } = await params;

    const agreement = await prisma.agreement.findFirst({
      where: {
        id: agreementId,
        growerId: growerId,
        grower: {
          buyerFirmId: session.buyerFirmId,
        },
      },
      include: {
        grower: {
          include: {
            buyerFirm: {
              select: {
                firmName: true,
                logoUrl: true,
                ownerName: true,
              },
            },
          },
        },
      },
    });

    if (!agreement) return fail("Agreement not found", 404);

    return ok(agreement);
  });
}

export async function DELETE(_req: Request, { params }: Ctx) {
  return handle(async () => {
    const session = await requireSession();
    const { id: growerId, agreementId } = await params;

    const agreement = await prisma.agreement.findFirst({
      where: {
        id: agreementId,
        growerId: growerId,
        grower: {
          buyerFirmId: session.buyerFirmId,
        },
      },
    });

    if (!agreement) return fail("Agreement not found", 404);

    await prisma.agreement.delete({
      where: { id: agreementId },
    });

    return ok({ ok: true });
  });
}
