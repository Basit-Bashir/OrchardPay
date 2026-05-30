// Force recompilation to pick up newly generated Prisma Client schema updates
import { prisma } from "@/lib/prisma";
import { ok, fail, handle } from "@/lib/api";
import { requireSession } from "@/lib/auth";

type Ctx = { params: Promise<{ id: string }> };

export async function GET(_req: Request, { params }: Ctx) {
  return handle(async () => {
    const session = await requireSession();
    const { id: growerId } = await params;

    // Verify grower belongs to the firm
    const grower = await prisma.grower.findFirst({
      where: { id: growerId, buyerFirmId: session.buyerFirmId },
    });
    if (!grower) return fail("Grower not found", 404);

    const agreements = await prisma.agreement.findMany({
      where: { growerId },
      orderBy: { createdAt: "desc" },
    });

    return ok(agreements);
  });
}

export async function POST(req: Request, { params }: Ctx) {
  return handle(async () => {
    const session = await requireSession();
    const { id: growerId } = await params;

    // Verify grower belongs to the firm
    const grower = await prisma.grower.findFirst({
      where: { id: growerId, buyerFirmId: session.buyerFirmId },
    });
    if (!grower) return fail("Grower not found", 404);

    const body = await req.json();
    const { pledgedProduce, paymentTerms, installments, buyerSign, validUntil } = body;

    if (!pledgedProduce) return fail("Pledged produce is required");
    if (!buyerSign) return fail("Buyer signature is required");

    let installmentsStr = "[]";
    if (installments) {
      if (!Array.isArray(installments)) {
        return fail("Installments must be an array");
      }
      for (const inst of installments) {
        if (typeof inst.amount !== "number" || inst.amount <= 0) {
          return fail("Each installment must have a valid positive amount");
        }
        if (!inst.dueDate) {
          return fail("Each installment must have a due date");
        }
      }
      installmentsStr = JSON.stringify(installments);
    }

    const agreement = await prisma.agreement.create({
      data: {
        growerId,
        pledgedProduce,
        paymentTerms: paymentTerms || `${installments?.length || 0} installments`,
        installments: installmentsStr,
        buyerSign,
        validUntil: validUntil ? new Date(validUntil) : null,
      },
    });

    return ok(agreement);
  });
}
