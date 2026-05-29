import { prisma } from "./prisma";

/**
 * Generates the next sequential buyer firm id in the form HORT-BUYER-00001.
 * Counts existing firms; loops to guard against the rare race where the id
 * already exists.
 */
export async function generateBuyerFirmId(): Promise<string> {
  let n = (await prisma.buyerFirm.count()) + 1;
  // guard against collisions
  for (let attempt = 0; attempt < 1000; attempt++) {
    const candidate = `HORT-BUYER-${String(n).padStart(5, "0")}`;
    const existing = await prisma.buyerFirm.findUnique({ where: { uniqueId: candidate } });
    if (!existing) return candidate;
    n++;
  }
  throw new Error("Could not allocate a unique firm id");
}
