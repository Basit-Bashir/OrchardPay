import { prisma } from "@/lib/prisma";
import { ok, fail, handle } from "@/lib/api";
import { requireSession } from "@/lib/auth";
import { staffSchema } from "@/lib/validations";

export async function GET() {
  return handle(async () => {
    const session = await requireSession();
    const users = await prisma.user.findMany({
      where: { buyerFirmId: session.buyerFirmId },
      orderBy: { createdAt: "asc" },
      select: { id: true, name: true, mobile: true, role: true, createdAt: true },
    });
    return ok(users);
  });
}

export async function POST(req: Request) {
  return handle(async () => {
    const session = await requireSession();
    const parsed = staffSchema.safeParse(await req.json());
    if (!parsed.success) return fail(parsed.error.issues[0]?.message ?? "Invalid input");

    const { name, mobile, role } = parsed.data;
    const existing = await prisma.user.findUnique({
      where: { mobile_buyerFirmId: { mobile, buyerFirmId: session.buyerFirmId } },
    });
    if (existing) return fail("This mobile is already a team member.", 409);

    const user = await prisma.user.create({
      data: { name, mobile, role, buyerFirmId: session.buyerFirmId },
      select: { id: true, name: true, mobile: true, role: true, createdAt: true },
    });
    return ok(user, 201);
  });
}
