import { prisma } from "@/lib/prisma";
import { ok, handle } from "@/lib/api";
import { requireSession } from "@/lib/auth";

export async function GET(req: Request) {
  return handle(async () => {
    const session = await requireSession();

    // Fetch the notifications for growers belonging to the active firm
    const notifications = await prisma.notification.findMany({
      where: {
        grower: {
          buyerFirmId: session.buyerFirmId,
        },
      },
      orderBy: { sentAt: "desc" },
      include: {
        grower: {
          select: {
            name: true,
            mobile: true,
          },
        },
      },
    });

    const provider = process.env.SMS_PROVIDER ?? "console";

    return ok({
      notifications,
      provider,
    });
  });
}
