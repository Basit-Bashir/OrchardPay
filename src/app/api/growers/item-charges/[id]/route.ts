import { prisma } from "@/lib/prisma";
import { ok, fail, handle } from "@/lib/api";
import { requireSession } from "@/lib/auth";

type Ctx = { params: Promise<{ id: string }> };

export async function DELETE(_req: Request, { params }: Ctx) {
  return handle(async () => {
    const { id } = await params;
    const session = await requireSession();

    const existing = await prisma.growerItemCharge.findFirst({
      where: { id, buyerFirmId: session.buyerFirmId },
    });
    if (!existing) return fail("Charge record not found", 404);

    await prisma.growerItemCharge.delete({
      where: { id },
    });

    return ok({ message: "Charge record deleted successfully" });
  });
}
