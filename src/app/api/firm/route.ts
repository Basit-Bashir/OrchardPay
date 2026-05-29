import { prisma } from "@/lib/prisma";
import { ok, fail, handle } from "@/lib/api";
import { requireSession } from "@/lib/auth";
import { updateFirmSchema } from "@/lib/validations";

export async function GET() {
  return handle(async () => {
    const session = await requireSession();
    const firm = await prisma.buyerFirm.findUnique({
      where: { id: session.buyerFirmId },
      select: {
        uniqueId: true, firmName: true, ownerName: true, mobile: true,
        subscriptionPlan: true, subscriptionExpiry: true, createdAt: true,
        logoUrl: true,
      },
    });
    if (!firm) return fail("Firm not found", 404);
    return ok(firm);
  });
}

export async function PATCH(req: Request) {
  return handle(async () => {
    const session = await requireSession();
    const parsed = updateFirmSchema.safeParse(await req.json());
    if (!parsed.success) return fail(parsed.error.issues[0]?.message ?? "Invalid input");

    const firm = await prisma.buyerFirm.update({
      where: { id: session.buyerFirmId },
      data: parsed.data,
      select: { firmName: true, ownerName: true, logoUrl: true },
    });
    return ok(firm);
  });
}
