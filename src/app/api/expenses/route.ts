import { prisma } from "@/lib/prisma";
import { ok, fail, handle } from "@/lib/api";
import { requireSession } from "@/lib/auth";
import { expenseSchema } from "@/lib/validations";

export async function GET(req: Request) {
  return handle(async () => {
    const session = await requireSession();
    const sp = new URL(req.url).searchParams;
    const category = sp.get("category") || undefined;
    const from = sp.get("from") || undefined;
    const to = sp.get("to") || undefined;

    const expenses = await prisma.expense.findMany({
      where: {
        buyerFirmId: session.buyerFirmId,
        ...(category ? { category } : {}),
        ...((from || to) ? {
          date: {
            ...(from ? { gte: new Date(from) } : {}),
            ...(to ? { lte: new Date(to) } : {}),
          }
        } : {}),
      },
      orderBy: { date: "desc" },
    });

    return ok(expenses);
  });
}

export async function POST(req: Request) {
  return handle(async () => {
    const session = await requireSession();
    const parsed = expenseSchema.safeParse(await req.json());
    if (!parsed.success) return fail(parsed.error.issues[0]?.message ?? "Invalid input");

    const { title, amount, category, date, notes } = parsed.data;

    const expense = await prisma.expense.create({
      data: {
        buyerFirmId: session.buyerFirmId,
        title,
        amount,
        category,
        date: date || new Date(),
        notes: notes || null,
      },
    });

    return ok(expense, 201);
  });
}
