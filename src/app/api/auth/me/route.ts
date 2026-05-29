import { prisma } from "@/lib/prisma";
import { ok, fail, handle } from "@/lib/api";
import { getSession } from "@/lib/auth";

export async function GET() {
  return handle(async () => {
    const session = await getSession();
    if (!session) return fail("Unauthorized", 401);

    const firm = await prisma.buyerFirm.findUnique({
      where: { id: session.buyerFirmId },
      select: { id: true, uniqueId: true, firmName: true, ownerName: true, subscriptionPlan: true },
    });

    return ok({ session, firm });
  });
}
