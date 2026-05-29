import { prisma } from "@/lib/prisma";
import { ok, fail, handle } from "@/lib/api";
import { otpVerifySchema } from "@/lib/validations";
import { verifyOtp } from "@/lib/otp";
import { setSessionCookie } from "@/lib/auth";

export async function POST(req: Request) {
  return handle(async () => {
    const body = await req.json();
    const parsed = otpVerifySchema.safeParse(body);
    if (!parsed.success) return fail(parsed.error.issues[0]?.message ?? "Invalid input");

    const { mobile, otp } = parsed.data;
    const valid = await verifyOtp(mobile, otp);
    if (!valid) return fail("Invalid or expired OTP", 401);

    const user = await prisma.user.findFirst({ where: { mobile } });
    if (!user) return fail("Account not found", 404);

    await setSessionCookie({
      userId: user.id,
      buyerFirmId: user.buyerFirmId,
      mobile: user.mobile,
      role: user.role,
    });

    return ok({ ok: true });
  });
}
