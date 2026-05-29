import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("Starting data migration for historical transactions...");
  
  // Find all transactions where grossAmount is still 0 (which is the default for new column)
  const txns = await prisma.transaction.findMany({
    where: {
      grossAmount: 0,
    },
  });

  console.log(`Found ${txns.length} transactions to update.`);

  let updatedCount = 0;
  for (const txn of txns) {
    // Set grossAmount to the existing totalAmount (which was the gross amount previously)
    await prisma.transaction.update({
      where: { id: txn.id },
      data: {
        grossAmount: txn.totalAmount,
      },
    });
    updatedCount++;
  }

  console.log(`Successfully migrated ${updatedCount} transactions.`);
}

main()
  .catch((e) => {
    console.error("Migration failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
