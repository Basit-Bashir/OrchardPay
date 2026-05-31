import { prisma } from "@/lib/prisma";
import { ok, fail, handle } from "@/lib/api";
import { requireSession, setSessionCookie } from "@/lib/auth";
import { updateFirmSchema } from "@/lib/validations";
import { generateBuyerFirmId } from "@/lib/uniqueId";

export async function GET() {
  return handle(async () => {
    const session = await requireSession();
    const firm = await prisma.buyerFirm.findUnique({
      where: { id: session.buyerFirmId },
      select: {
        uniqueId: true, firmName: true, ownerName: true, mobile: true,
        subscriptionPlan: true, subscriptionExpiry: true, createdAt: true,
        logoUrl: true,
      },
    });
    if (!firm) return fail("Firm not found", 404);
    return ok(firm);
  });
}

export async function PATCH(req: Request) {
  return handle(async () => {
    const session = await requireSession();
    const parsed = updateFirmSchema.safeParse(await req.json());
    if (!parsed.success) return fail(parsed.error.issues[0]?.message ?? "Invalid input");

    const firm = await prisma.buyerFirm.update({
      where: { id: session.buyerFirmId },
      data: parsed.data,
      select: { firmName: true, ownerName: true, logoUrl: true },
    });
    return ok(firm);
  });
}

export async function POST(req: Request) {
  return handle(async () => {
    const session = await requireSession();
    const body = await req.json();
    const { firmName, ownerName } = body;
    if (!firmName || !ownerName) {
      return fail("Firm name and owner name are required", 400);
    }

    const activeFirm = await prisma.buyerFirm.findUnique({
      where: { id: session.buyerFirmId },
      select: { subscriptionPlan: true, subscriptionExpiry: true },
    });

    if (!activeFirm || activeFirm.subscriptionPlan !== "premium") {
      return fail("Upgrade to Mandi Premium to add multiple businesses.", 403);
    }

    const uniqueId = await generateBuyerFirmId();

    const newFirm = await prisma.buyerFirm.create({
      data: {
        uniqueId,
        firmName,
        ownerName,
        mobile: session.mobile,
        subscriptionPlan: activeFirm.subscriptionPlan,
        subscriptionExpiry: activeFirm.subscriptionExpiry,
        users: {
          create: {
            mobile: session.mobile,
            name: ownerName,
            role: "buyer",
          },
        },
      },
    });

    const newUser = await prisma.user.findUnique({
      where: {
        mobile_buyerFirmId: {
          mobile: session.mobile,
          buyerFirmId: newFirm.id,
        },
      },
    });

    if (newUser) {
      await setSessionCookie({
        userId: newUser.id,
        buyerFirmId: newFirm.id,
        mobile: session.mobile,
        role: newUser.role,
      });
    }

    return ok({ firm: newFirm });
  });
}
