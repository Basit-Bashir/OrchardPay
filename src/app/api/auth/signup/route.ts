import { prisma } from "@/lib/prisma";
import { ok, fail, handle } from "@/lib/api";
import { signupSchema } from "@/lib/validations";
import { generateBuyerFirmId } from "@/lib/uniqueId";
import { requestOtp } from "@/lib/otp";

export async function POST(req: Request) {
  return handle(async () => {
    const body = await req.json();
    const parsed = signupSchema.safeParse(body);
    if (!parsed.success) {
      return fail(parsed.error.issues[0]?.message ?? "Invalid input");
    }
    const { firmName, ownerName, mobile } = parsed.data;

    const existing = await prisma.buyerFirm.findUnique({ where: { mobile } });
    if (existing) {
      return fail("An account with this mobile already exists. Please log in.", 409);
    }

    const uniqueId = await generateBuyerFirmId();
    const firm = await prisma.buyerFirm.create({
      data: {
        uniqueId,
        firmName,
        ownerName,
        mobile,
        users: { create: { mobile, name: ownerName, role: "buyer" } },
      },
    });

    const otp = await requestOtp(mobile);
    if (!otp.success) return fail(otp.error);

    return ok({ uniqueId: firm.uniqueId, devOtp: otp.devOtp });
  });
}
