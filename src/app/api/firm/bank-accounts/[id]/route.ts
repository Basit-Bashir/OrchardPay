import { prisma } from "@/lib/prisma";
import { ok, fail, handle } from "@/lib/api";
import { requireSession } from "@/lib/auth";

type Ctx = { params: Promise<{ id: string }> };

export async function PATCH(req: Request, { params }: Ctx) {
  return handle(async () => {
    const session = await requireSession();
    const { id } = await params;
    const body = await req.json();

    const account = await prisma.bankAccount.findFirst({
      where: { id, buyerFirmId: session.buyerFirmId },
    });
    if (!account) return fail("Bank account not found", 404);

    if (body.isPrimary) {
      // Set all other accounts of this firm to false
      await prisma.bankAccount.updateMany({
        where: { buyerFirmId: session.buyerFirmId, NOT: { id } },
        data: { isPrimary: false },
      });

      const updated = await prisma.bankAccount.update({
        where: { id },
        data: { isPrimary: true },
      });
      return ok(updated);
    }

    // Otherwise, normal update if fields provided
    const updated = await prisma.bankAccount.update({
      where: { id },
      data: {
        bankName: body.bankName !== undefined ? body.bankName : undefined,
        accNumber: body.accNumber !== undefined ? body.accNumber : undefined,
        bankAddress: body.bankAddress !== undefined ? body.bankAddress : undefined,
      },
    });

    return ok(updated);
  });
}

export async function DELETE(req: Request, { params }: Ctx) {
  return handle(async () => {
    const session = await requireSession();
    const { id } = await params;

    const account = await prisma.bankAccount.findFirst({
      where: { id, buyerFirmId: session.buyerFirmId },
    });
    if (!account) return fail("Bank account not found", 404);

    await prisma.bankAccount.delete({
      where: { id },
    });

    // If the deleted account was primary, make the most recent remaining one primary
    if (account.isPrimary) {
      const nextPrimary = await prisma.bankAccount.findFirst({
        where: { buyerFirmId: session.buyerFirmId },
        orderBy: { createdAt: "desc" },
      });
      if (nextPrimary) {
        await prisma.bankAccount.update({
          where: { id: nextPrimary.id },
          data: { isPrimary: true },
        });
      }
    }

    return ok({ ok: true });
  });
}
