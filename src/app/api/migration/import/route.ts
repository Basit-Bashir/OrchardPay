import { prisma } from "@/lib/prisma";
import { ok, fail, handle } from "@/lib/api";
import { requireSession } from "@/lib/auth";
import { migrationImportSchema } from "@/lib/validations";

export async function POST(req: Request) {
  return handle(async () => {
    const session = await requireSession();
    const firmId = session.buyerFirmId;

    const parsed = migrationImportSchema.safeParse(await req.json());
    if (!parsed.success) return fail(parsed.error.issues[0]?.message ?? "Invalid rows");

    let imported = 0;
    let growersCreated = 0;
    const errors: { row: number; message: string }[] = [];

    // cache grower lookups by mobile within this import
    const growerByMobile = new Map<string, string>();

    for (let i = 0; i < parsed.data.rows.length; i++) {
      const row = parsed.data.rows[i];
      try {
        let growerId = growerByMobile.get(row.growerMobile);
        if (!growerId) {
          const existing = await prisma.grower.findUnique({
            where: { mobile_buyerFirmId: { mobile: row.growerMobile, buyerFirmId: firmId } },
          });
          if (existing) {
            growerId = existing.id;
          } else {
            const created = await prisma.grower.create({
              data: { name: row.growerName, mobile: row.growerMobile, buyerFirmId: firmId },
            });
            growerId = created.id;
            growersCreated++;
          }
          growerByMobile.set(row.growerMobile, growerId);
        }

        const totalAmount = Math.round(row.quantity * row.rate * 100) / 100;
        await prisma.transaction.create({
          data: {
            growerId,
            buyerFirmId: firmId,
            fruitType: row.fruitType,
            quantity: row.quantity,
            rate: row.rate,
            totalAmount,
            notified: true, // historical data — no SMS
          },
        });
        imported++;
      } catch (e) {
        errors.push({ row: i + 1, message: (e as Error).message });
      }
    }

    return ok({ imported, growersCreated, errors, skipped: errors.length });
  });
}
