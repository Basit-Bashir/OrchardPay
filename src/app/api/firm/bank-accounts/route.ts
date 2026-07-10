import { prisma } from "@/lib/prisma";
import { ok, fail, handle } from "@/lib/api";
import { requireSession } from "@/lib/auth";
import { bankAccountSchema } from "@/lib/validations";

export async function GET() {
  return handle(async () => {
    const session = await requireSession();
    const accounts = await prisma.bankAccount.findMany({
      where: { buyerFirmId: session.buyerFirmId },
      orderBy: { createdAt: "desc" },
    });
    return ok(accounts);
  });
}

export async function POST(req: Request) {
  return handle(async () => {
    const session = await requireSession();
    const parsed = bankAccountSchema.safeParse(await req.json());
    if (!parsed.success) return fail(parsed.error.issues[0]?.message ?? "Invalid input");

    const { bankName, accNumber, bankAddress, isPrimary } = parsed.data;

    // Check if this is the first account, if so make it primary
    const existingCount = await prisma.bankAccount.count({
      where: { buyerFirmId: session.buyerFirmId },
    });
    const makePrimary = existingCount === 0 || isPrimary;

    if (makePrimary) {
      // Set all other accounts to not primary
      await prisma.bankAccount.updateMany({
        where: { buyerFirmId: session.buyerFirmId },
        data: { isPrimary: false },
      });
    }

    const account = await prisma.bankAccount.create({
      data: {
        buyerFirmId: session.buyerFirmId,
        bankName,
        accNumber,
        bankAddress: bankAddress || null,
        isPrimary: makePrimary,
      },
    });

    return ok(account, 201);
  });
}
