import { prisma } from "@/lib/prisma";
import { ok, fail, handle } from "@/lib/api";
import { requireSession } from "@/lib/auth";
import { staffSchema } from "@/lib/validations";

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  return handle(async () => {
    const { id } = await params;
    const session = await requireSession();

    // Prevent self-deletion
    if (id === session.userId) {
      return fail("You cannot delete yourself.", 400);
    }

    // Verify user belongs to same buyer firm
    const targetUser = await prisma.user.findFirst({
      where: { id, buyerFirmId: session.buyerFirmId },
    });

    if (!targetUser) {
      return fail("Team member not found.", 404);
    }

    await prisma.user.delete({
      where: { id },
    });

    return ok({ message: "Team member removed successfully." });
  });
}

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  return handle(async () => {
    const { id } = await params;
    const session = await requireSession();

    const body = await req.json();
    const parsed = staffSchema.safeParse(body);
    if (!parsed.success) {
      return fail(parsed.error.issues[0]?.message ?? "Invalid input");
    }

    const { name, mobile, role } = parsed.data;

    // Verify user belongs to same buyer firm
    const targetUser = await prisma.user.findFirst({
      where: { id, buyerFirmId: session.buyerFirmId },
    });

    if (!targetUser) {
      return fail("Team member not found.", 404);
    }

    // Prevent self-demotion: cannot change own role
    if (id === session.userId && role !== targetUser.role) {
      return fail("You cannot demote or change your own role.", 400);
    }

    // Prevent updating mobile number for the registering buyer role
    if (targetUser.role === "buyer" && mobile !== targetUser.mobile) {
      return fail("The mobile number associated with the registered firm cannot be updated.", 400);
    }

    // Verify mobile number is not already in use by another user in the same firm
    const duplicate = await prisma.user.findFirst({
      where: {
        mobile,
        buyerFirmId: session.buyerFirmId,
        NOT: { id },
      },
    });

    if (duplicate) {
      return fail("This mobile number is already in use by another team member.", 409);
    }

    const updated = await prisma.user.update({
      where: { id },
      data: { name, mobile, role },
      select: { id: true, name: true, mobile: true, role: true, createdAt: true },
    });

    return ok(updated);
  });
}
