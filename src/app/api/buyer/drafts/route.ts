import { prisma } from "@/lib/prisma";
import { ok, fail, handle } from "@/lib/api";
import { requireSession } from "@/lib/auth";

export async function GET() {
  return handle(async () => {
    const session = await requireSession();
    if (session.role === "hamaal") return fail("Unauthorized", 403);

    const drafts = await prisma.draftTransaction.findMany({
      where: {
        buyerFirmId: session.buyerFirmId,
        status: "pending",
      },
      orderBy: { createdAt: "desc" },
      include: {
        grower: { select: { name: true } },
        createdBy: { select: { name: true, mobile: true } },
      },
    });

    return ok(drafts);
  });
}
