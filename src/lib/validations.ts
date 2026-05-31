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
});

export const transactionSchema = z.object({
  growerId: z.string().min(1, "Select a grower"),
  fruitType: z.string().trim().min(1, "Fruit type is required"),
  quantity: z.coerce.number().positive("Quantity must be greater than 0"),
  unit: z.enum(["kg", "peti", "daba"]).default("kg"),
  rate: z.coerce.number().positive("Rate must be greater than 0"),
  notes: z.string().trim().optional().or(z.literal("")),
});

export const transactionItemSchema = z.object({
  fruitType: z.string().trim().min(1, "Fruit type is required"),
  quantity: z.coerce.number().positive("Quantity must be greater than 0"),
  unit: z.enum(["kg", "peti", "daba"]).default("kg"),
  rate: z.coerce.number().positive("Rate must be greater than 0"),
});

export const batchTransactionSchema = z.object({
  growerId: z.string().min(1, "Select a grower"),
  items: z.array(transactionItemSchema).min(1, "At least one item is required"),
  freight: z.coerce.number().nonnegative("Freight must be 0 or greater").default(0),
  commissionRate: z.coerce.number().nonnegative("Commission rate must be 0 or greater").default(12),
  labourRate: z.coerce.number().nonnegative("Labour rate must be 0 or greater").default(3),
  associationRate: z.coerce.number().nonnegative("Association rate must be 0 or greater").default(0.10),
  printingCharge: z.coerce.number().nonnegative("Printing charge must be 0 or greater").default(1),
  miscellaneousRate: z.coerce.number().nonnegative("Miscellaneous rate must be 0 or greater").default(0.90),
  notes: z.string().trim().optional().or(z.literal("")),
  draftId: z.string().trim().optional(),
});

export const paymentSchema = z.object({
  growerId: z.string().min(1, "Select a grower"),
  amount: z.coerce.number().positive("Amount must be greater than 0"),
  notes: z.string().trim().optional().or(z.literal("")),
  paidAt: z.coerce.date().optional(),
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
  firmName: z.string().trim().min(2),
  ownerName: z.string().trim().min(2),
  logoUrl: z.string().trim().optional().nullable(),
});

export const staffSchema = z.object({
  name: z.string().trim().min(2, "Name is required"),
  mobile,
  role: z.enum(["staff", "admin", "buyer", "hamaal"]).default("staff"),
});

export const draftTransactionSchema = z.object({
  growerId: z.string().min(1, "Select a grower"),
  fruitType: z.string().trim().min(1, "Fruit type is required"),
  quantity: z.coerce.number().positive("Quantity must be greater than 0"),
  unit: z.enum(["kg", "peti", "daba"]).default("kg"),
  rate: z.coerce.number().positive("Rate must be greater than 0"),
  notes: z.string().trim().optional().or(z.literal("")),
});

export type SignupInput = z.infer<typeof signupSchema>;
export type GrowerInput = z.infer<typeof growerSchema>;
export type TransactionInput = z.infer<typeof transactionSchema>;
export type BatchTransactionInput = z.infer<typeof batchTransactionSchema>;
export type PaymentInput = z.infer<typeof paymentSchema>;
export type MigrationRow = z.infer<typeof migrationRowSchema>;
