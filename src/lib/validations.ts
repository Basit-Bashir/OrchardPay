import { z } from "zod";

const mobile = z
  .string()
  .trim()
  .regex(/^\+?[0-9]{10,15}$/, "Enter a valid mobile number (10-15 digits)");

export const signupSchema = z.object({
  firmName: z.string().trim().min(2, "Firm name is required"),
  ownerName: z.string().trim().min(2, "Owner name is required"),
  mobile,
  plan: z.string().trim().optional(),
});

export const otpRequestSchema = z.object({
  mobile,
});

export const otpVerifySchema = z.object({
  mobile,
  otp: z.string().trim().regex(/^[0-9]{6}$/, "OTP must be 6 digits"),
});

export const growerSchema = z.object({
  name: z.string().trim().min(2, "Name is required"),
  mobile,
  address: z.string().trim().optional().or(z.literal("")),
  codeName: z.string().trim().optional().or(z.literal("")),
});

export const sellerSchema = z.object({
  name: z.string().trim().min(2, "Name is required"),
  mobile,
  address: z.string().trim().optional().or(z.literal("")),
});

export const transactionSchema = z.object({
  growerId: z.string().trim().optional().or(z.literal("")),
  sellerId: z.string().trim().optional().or(z.literal("")),
  fruitType: z.string().trim().min(1, "Fruit type is required"),
  quantity: z.coerce.number().positive("Quantity must be greater than 0"),
  unit: z.enum(["kg", "peti", "daba"]).default("kg"),
  rate: z.coerce.number().positive("Rate must be greater than 0"),
  notes: z.string().trim().optional().or(z.literal("")),
}).refine(data => data.growerId || data.sellerId, {
  message: "Select at least a Grower or a Seller",
  path: ["growerId"],
});

export const transactionItemSchema = z.object({
  fruitType: z.string().trim().min(1, "Fruit type is required"),
  quantity: z.coerce.number().positive("Quantity must be greater than 0"),
  unit: z.enum(["kg", "peti", "daba"]).default("kg"),
  rate: z.coerce.number().positive("Rate must be greater than 0"),
});

export const batchTransactionSchema = z.object({
  growerId: z.string().trim().optional().or(z.literal("")),
  sellerId: z.string().trim().optional().or(z.literal("")),
  items: z.array(transactionItemSchema).min(1, "At least one item is required"),
  freight: z.coerce.number().nonnegative("Freight must be 0 or greater").default(0),
  commissionRate: z.coerce.number().nonnegative("Commission rate must be 0 or greater").default(12),
  labourRate: z.coerce.number().nonnegative("Labour rate must be 0 or greater").default(3),
  associationRate: z.coerce.number().nonnegative("Association rate must be 0 or greater").default(0.10),
  printingCharge: z.coerce.number().nonnegative("Printing charge must be 0 or greater").default(1),
  miscellaneousRate: z.coerce.number().nonnegative("Miscellaneous rate must be 0 or greater").default(0.90),
  notes: z.string().trim().optional().or(z.literal("")),
  draftId: z.string().trim().optional(),
}).refine(data => data.growerId || data.sellerId, {
  message: "Select at least a Grower or a Seller",
  path: ["growerId"],
});

export const paymentSchema = z.object({
  growerId: z.string().min(1, "Select a grower"),
  amount: z.coerce.number().positive("Amount must be greater than 0"),
  notes: z.string().trim().optional().or(z.literal("")),
  paidAt: z.coerce.date().optional(),
  method: z.string().optional().nullable(),
  bankTransferType: z.string().optional().nullable(),
  bankName: z.string().optional().nullable(),
  bankAccNumber: z.string().optional().nullable(),
  bankAddress: z.string().optional().nullable(),
});

export const sellerPaymentSchema = z.object({
  sellerId: z.string().min(1, "Select a seller"),
  amount: z.coerce.number().positive("Amount must be greater than 0"),
  notes: z.string().trim().optional().or(z.literal("")),
  paidAt: z.coerce.date().optional(),
});

export const expenseSchema = z.object({
  title: z.string().trim().min(1, "Title/Description is required"),
  amount: z.coerce.number().positive("Amount must be greater than 0"),
  category: z.string().trim().min(1, "Category is required"),
  date: z.coerce.date().optional(),
  notes: z.string().trim().optional().or(z.literal("")),
});

export const growerItemChargeSchema = z.object({
  growerId: z.string().min(1, "Select a grower"),
  itemName: z.string().trim().min(1, "Item name is required"),
  quantity: z.coerce.number().positive("Quantity must be greater than 0"),
  rate: z.coerce.number().nonnegative("Rate must be 0 or greater"),
  notes: z.string().trim().optional().or(z.literal("")),
  issuedAt: z.coerce.date().optional(),
});

export const migrationRowSchema = z.object({
  growerName: z.string().trim().min(1),
  growerMobile: z.string().trim().min(1),
  fruitType: z.string().trim().min(1),
  quantity: z.coerce.number().positive(),
  rate: z.coerce.number().positive(),
});

export const migrationImportSchema = z.object({
  rows: z.array(migrationRowSchema).min(1, "No rows to import"),
});

export const updateFirmSchema = z.object({
  firmName: z.string().trim().min(2).optional(),
  ownerName: z.string().trim().min(2).optional(),
  logoUrl: z.string().trim().optional().nullable(),
  deductionsConfig: z.string().trim().optional().nullable(),
  bankName: z.string().trim().optional().nullable(),
  bankAccNumber: z.string().trim().optional().nullable(),
  bankAddress: z.string().trim().optional().nullable(),
});

export const DEFAULT_DEDUCTIONS = JSON.stringify([
  { id: "commission", name: "Commission", type: "percentage", value: 12 },
  { id: "labour", name: "Labour", type: "fixed_per_unit", value: 3 },
  { id: "association", name: "Association", type: "percentage", value: 0.10 },
  { id: "printing", name: "Printing", type: "fixed_flat", value: 1 },
  { id: "miscellaneous", name: "Miscellaneous", type: "percentage", value: 0.90 }
]);

export const staffSchema = z.object({
  name: z.string().trim().min(2, "Name is required"),
  mobile,
  role: z.enum(["staff", "admin", "buyer", "hamaal"]).default("staff"),
});

export const draftTransactionSchema = z.object({
  growerId: z.string().trim().optional().or(z.literal("")),
  sellerId: z.string().trim().optional().or(z.literal("")),
  newSellerName: z.string().trim().optional(),
  fruitType: z.string().trim().min(1, "Fruit type is required"),
  quantity: z.coerce.number().positive("Quantity must be greater than 0"),
  unit: z.enum(["kg", "peti", "daba"]).default("kg"),
  rate: z.coerce.number().positive("Rate must be greater than 0"),
  notes: z.string().trim().optional().or(z.literal("")),
}).refine(data => data.growerId || data.sellerId || data.newSellerName, {
  message: "Select at least a Grower or a Seller",
  path: ["growerId"],
});

export type SignupInput = z.infer<typeof signupSchema>;
export type GrowerInput = z.infer<typeof growerSchema>;
export type SellerInput = z.infer<typeof sellerSchema>;
export type TransactionInput = z.infer<typeof transactionSchema>;
export type BatchTransactionInput = z.infer<typeof batchTransactionSchema>;
export type PaymentInput = z.infer<typeof paymentSchema>;
export type SellerPaymentInput = z.infer<typeof sellerPaymentSchema>;
export type MigrationRow = z.infer<typeof migrationRowSchema>;
export type ExpenseInput = z.infer<typeof expenseSchema>;
export type GrowerItemChargeInput = z.infer<typeof growerItemChargeSchema>;

export const bankAccountSchema = z.object({
  bankName: z.string().trim().min(2, "Bank name is required"),
  accNumber: z.string().trim().min(2, "Account number is required"),
  bankAddress: z.string().trim().optional().or(z.literal("")),
  isPrimary: z.boolean().optional(),
});

export type BankAccountInput = z.infer<typeof bankAccountSchema>;

