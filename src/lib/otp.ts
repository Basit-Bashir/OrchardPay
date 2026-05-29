import bcrypt from "bcryptjs";
import { prisma } from "./prisma";
import { sendSms } from "./sms";

const OTP_TTL_MS = 10 * 60 * 1000; // 10 minutes
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 3;

function randomOtp(): string {
  return String(Math.floor(100000 + Math.random() * 900000));
}

export type OtpRequestResult =
  | { success: true; devOtp?: string }
  | { success: false; error: string };

export async function requestOtp(mobile: string): Promise<OtpRequestResult> {
  const since = new Date(Date.now() - RATE_LIMIT_WINDOW_MS);
  const recent = await prisma.otp.count({
    where: { mobile, createdAt: { gte: since } },
  });
  if (recent >= RATE_LIMIT_MAX) {
    return { success: false, error: "Too many OTP requests. Try again in a few minutes." };
  }

  const otp = randomOtp();
  const otpHash = await bcrypt.hash(otp, 10);
  const expiresAt = new Date(Date.now() + OTP_TTL_MS);

  await prisma.otp.create({ data: { mobile, otpHash, expiresAt } });

  await sendSms(mobile, `Your HortiTrack verification code is ${otp}. It expires in 10 minutes.`);

  // In console/dev mode, return the OTP so the UI can show it for easy testing.
  const devOtp = (process.env.SMS_PROVIDER ?? "console") === "console" ? otp : undefined;
  return { success: true, devOtp };
}

export async function verifyOtp(mobile: string, otp: string): Promise<boolean> {
  const candidates = await prisma.otp.findMany({
    where: { mobile, expiresAt: { gt: new Date() } },
    orderBy: { createdAt: "desc" },
    take: 5,
  });

  for (const candidate of candidates) {
    if (await bcrypt.compare(otp, candidate.otpHash)) {
      // consume all OTPs for this mobile on success
      await prisma.otp.deleteMany({ where: { mobile } });
      return true;
    }
  }
  return false;
}
