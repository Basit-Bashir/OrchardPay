import { prisma } from "@/lib/prisma";
import { ok, fail, handle } from "@/lib/api";
import { requireSession } from "@/lib/auth";
import { expenseSchema } from "@/lib/validations";

type Ctx = { params: Promise<{ id: string }> };

export async function PUT(req: Request, { params }: Ctx) {
  return handle(async () => {
    const { id } = await params;
    const session = await requireSession();
    
    const parsed = expenseSchema.safeParse(await req.json());
    if (!parsed.success) return fail(parsed.error.issues[0]?.message ?? "Invalid input");

    const { title, amount, category, date, notes } = parsed.data;

    const existing = await prisma.expense.findFirst({
      where: { id, buyerFirmId: session.buyerFirmId },
    });
    if (!existing) return fail("Expense not found", 404);

    const updated = await prisma.expense.update({
      where: { id },
      data: {
        title,
        amount,
        category,
        date: date || new Date(),
        notes: notes || null,
      },
    });

    return ok(updated);
  });
}

export async function DELETE(_req: Request, { params }: Ctx) {
  return handle(async () => {
    const { id } = await params;
    const session = await requireSession();

    const existing = await prisma.expense.findFirst({
      where: { id, buyerFirmId: session.buyerFirmId },
    });
    if (!existing) return fail("Expense not found", 404);

    await prisma.expense.delete({
      where: { id },
    });

    return ok({ message: "Expense deleted successfully" });
  });
}
