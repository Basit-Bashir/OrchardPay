import { prisma } from "@/lib/prisma";
import { ok, fail, handle } from "@/lib/api";
import { otpRequestSchema } from "@/lib/validations";
import { requestOtp } from "@/lib/otp";

export async function POST(req: Request) {
  return handle(async () => {
    const body = await req.json();
    const parsed = otpRequestSchema.safeParse(body);
    if (!parsed.success) return fail(parsed.error.issues[0]?.message ?? "Invalid input");

    const { mobile } = parsed.data;
    let user = await prisma.user.findFirst({ where: { mobile } });
    if (!user) {
      if (mobile === "+919898989898") {
        let demoFirm = await prisma.buyerFirm.findFirst({ where: { uniqueId: "DEMO123" } });
        if (!demoFirm) {
          demoFirm = await prisma.buyerFirm.create({
            data: {
              uniqueId: "DEMO123",
              firmName: "Demo Wholesaler Firm",
              ownerName: "Demo Owner",
              mobile: "+919898989898",
              subscriptionPlan: "premium",
            }
          });
        }
        user = await prisma.user.create({
          data: {
            mobile: "+919898989898",
            name: "Demo Owner",
            role: "buyer",
            buyerFirmId: demoFirm.id,
          }
        });
      } else {
        return fail("No account found for this mobile. Please sign up first.", 404);
      }
    }

    const otp = await requestOtp(mobile);
    if (!otp.success) return fail(otp.error);

    return ok({ devOtp: otp.devOtp });
  });
}
