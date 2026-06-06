import { prisma } from "../src/lib/prisma";

async function runDbTests() {
  console.log("=== Starting Database Schema Integration Tests ===");
  try {
    // 1. Find or create a buyer firm to run tests against
    let firm = await prisma.buyerFirm.findFirst();
    if (!firm) {
      firm = await prisma.buyerFirm.create({
        data: {
          uniqueId: "test-firm-123",
          firmName: "Test Firm Ltd",
          ownerName: "Owner Test",
          mobile: "+919999999999",
        },
      });
      console.log("Created temporary Buyer Firm.");
    }

    // 2. Create a test grower
    const grower = await prisma.grower.create({
      data: {
        name: "Test Grower Programmatic",
        mobile: "+918888888888",
        buyerFirmId: firm.id,
      },
    });
    console.log("Created test Grower:", grower.id);

    // 3. Create a test seller
    const seller = await prisma.seller.create({
      data: {
        name: "Test Seller Programmatic",
        mobile: "+917777777777",
        buyerFirmId: firm.id,
      },
    });
    console.log("Created test Seller:", seller.id);

    // 4. Test Case: Grower only Transaction
    const txnGrowerOnly = await prisma.transaction.create({
      data: {
        buyerFirmId: firm.id,
        growerId: grower.id,
        sellerId: null,
        fruitType: "Apples",
        quantity: 50,
        unit: "peti",
        rate: 80,
        totalAmount: 4000,
      },
    });
    console.log("PASSED: Transaction with Grower only created. ID:", txnGrowerOnly.id);

    // 5. Test Case: Seller only Transaction
    const txnSellerOnly = await prisma.transaction.create({
      data: {
        buyerFirmId: firm.id,
        growerId: null,
        sellerId: seller.id,
        fruitType: "Pomegranates",
        quantity: 30,
        unit: "kg",
        rate: 150,
        totalAmount: 4500,
      },
    });
    console.log("PASSED: Transaction with Seller only created. ID:", txnSellerOnly.id);

    // 6. Test Case: Both Grower and Seller Transaction
    const txnBoth = await prisma.transaction.create({
      data: {
        buyerFirmId: firm.id,
        growerId: grower.id,
        sellerId: seller.id,
        fruitType: "Grapes",
        quantity: 20,
        unit: "daba",
        rate: 200,
        totalAmount: 4000,
      },
    });
    console.log("PASSED: Transaction with both Grower and Seller created. ID:", txnBoth.id);

    // 7. Cleanup
    await prisma.transaction.deleteMany({
      where: {
        id: { in: [txnGrowerOnly.id, txnSellerOnly.id, txnBoth.id] },
      },
    });
    console.log("Cleaned up transactions.");

    await prisma.grower.delete({ where: { id: grower.id } });
    console.log("Cleaned up test Grower.");

    await prisma.seller.delete({ where: { id: seller.id } });
    console.log("Cleaned up test Seller.");

    console.log("\n=== DATABASE SCHEMA INTEGRATION TESTS PASSED ===");
  } catch (error) {
    console.error("DATABASE SCHEMA INTEGRATION TESTS FAILED:", error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

runDbTests();
