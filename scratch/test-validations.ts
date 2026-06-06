import { transactionSchema, batchTransactionSchema, draftTransactionSchema } from "../src/lib/validations";

function runTests() {
  console.log("=== Testing Validation Schemas ===");

  const testCases = [
    {
      name: "Grower only - Valid",
      payload: { growerId: "grower-123", fruitType: "Apple", quantity: 10, unit: "kg" as const, rate: 50 },
      shouldSucceed: true,
    },
    {
      name: "Seller only - Valid",
      payload: { sellerId: "seller-123", fruitType: "Apple", quantity: 10, unit: "kg" as const, rate: 50 },
      shouldSucceed: true,
    },
    {
      name: "Both Grower and Seller - Invalid",
      payload: { growerId: "grower-123", sellerId: "seller-123", fruitType: "Apple", quantity: 10, unit: "kg" as const, rate: 50 },
      shouldSucceed: false,
    },
    {
      name: "Neither - Invalid",
      payload: { fruitType: "Apple", quantity: 10, unit: "kg" as const, rate: 50 },
      shouldSucceed: false,
    },
    {
      name: "Both empty strings - Invalid",
      payload: { growerId: "", sellerId: "", fruitType: "Apple", quantity: 10, unit: "kg" as const, rate: 50 },
      shouldSucceed: false,
    },
  ];

  console.log("\n--- Testing transactionSchema ---");
  for (const tc of testCases) {
    const res = transactionSchema.safeParse(tc.payload);
    if (res.success === tc.shouldSucceed) {
      console.log(`PASS: ${tc.name}`);
    } else {
      console.error(`FAIL: ${tc.name}. Expected success: ${tc.shouldSucceed}, got: ${res.success}`);
      if (!res.success) {
        console.error("Errors:", res.error.issues);
      }
    }
  }

  console.log("\n--- Testing draftTransactionSchema ---");
  for (const tc of testCases) {
    const res = draftTransactionSchema.safeParse(tc.payload);
    if (res.success === tc.shouldSucceed) {
      console.log(`PASS: ${tc.name}`);
    } else {
      console.error(`FAIL: ${tc.name}. Expected success: ${tc.shouldSucceed}, got: ${res.success}`);
      if (!res.success) {
        console.error("Errors:", res.error.issues);
      }
    }
  }

  const batchTestCases = [
    {
      name: "Batch: Grower only - Valid",
      payload: { growerId: "grower-123", items: [{ fruitType: "Apple", quantity: 10, unit: "kg" as const, rate: 50 }] },
      shouldSucceed: true,
    },
    {
      name: "Batch: Seller only - Valid",
      payload: { sellerId: "seller-123", items: [{ fruitType: "Apple", quantity: 10, unit: "kg" as const, rate: 50 }] },
      shouldSucceed: true,
    },
    {
      name: "Batch: Both - Invalid",
      payload: { growerId: "grower-123", sellerId: "seller-123", items: [{ fruitType: "Apple", quantity: 10, unit: "kg" as const, rate: 50 }] },
      shouldSucceed: false,
    },
    {
      name: "Batch: Neither - Invalid",
      payload: { items: [{ fruitType: "Apple", quantity: 10, unit: "kg" as const, rate: 50 }] },
      shouldSucceed: false,
    },
  ];

  console.log("\n--- Testing batchTransactionSchema ---");
  for (const tc of batchTestCases) {
    const res = batchTransactionSchema.safeParse(tc.payload);
    if (res.success === tc.shouldSucceed) {
      console.log(`PASS: ${tc.name}`);
    } else {
      console.error(`FAIL: ${tc.name}. Expected success: ${tc.shouldSucceed}, got: ${res.success}`);
      if (!res.success) {
        console.error("Errors:", res.error.issues);
      }
    }
  }
}

runTests();
