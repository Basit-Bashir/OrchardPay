import { prisma } from "@/lib/prisma";
import { ok, fail, handle } from "@/lib/api";
import { requireSession, setSessionCookie } from "@/lib/auth";

export async function POST(req: Request) {
  return handle(async () => {
    const session = await requireSession();
    const { buyerFirmId } = await req.json();

    if (!buyerFirmId) {
      return fail("buyerFirmId is required", 400);
    }

    // Verify that this user (identified by session's mobile) is associated with the target firm
    const user = await prisma.user.findUnique({
      where: {
        mobile_buyerFirmId: {
          mobile: session.mobile,
          buyerFirmId: buyerFirmId,
        },
      },
    });

    if (!user) {
      return fail("Firm not associated with your account", 403);
    }

    // Update the session cookie with the new active firm
    await setSessionCookie({
      userId: user.id,
      buyerFirmId: user.buyerFirmId,
      mobile: user.mobile,
      role: user.role,
    });

    return ok({ success: true });
  });
}
