import { prisma } from "./prisma";
import { sendSms } from "./sms";

function inr(n: number) {
  return n.toLocaleString("en-IN", { maximumFractionDigits: 0 });
}

/**
 * Sends the "produce sold" SMS to a grower and records a Notification row.
 * Returns whether the SMS was dispatched successfully.
 */
export async function notifyGrowerOfSale(params: {
  growerId: string;
  growerName: string;
  growerMobile: string;
  firmName: string;
  fruitType: string;
  quantity: number;
  unit: string;
  rate: number;
  totalAmount: number;
  grossAmount?: number;
  expensesAmount?: number;
}): Promise<boolean> {
  const gross = params.grossAmount !== undefined && params.grossAmount > 0 ? params.grossAmount : (params.quantity * params.rate);
  const expenses = params.expensesAmount !== undefined ? params.expensesAmount : Math.max(0, gross - params.totalAmount);

  const message = expenses > 0
    ? `Hi ${params.growerName}, your ${params.fruitType} (${params.quantity} ${params.unit}) was sold at ` +
      `₹${inr(params.rate)}/${params.unit}. Gross: ₹${inr(gross)}. Expenses: ₹${inr(expenses)}. Net Credit: ₹${inr(params.totalAmount)}. ` +
      `Thank you for your business! - ${params.firmName}`
    : `Hi ${params.growerName}, your ${params.fruitType} (${params.quantity} ${params.unit}) was sold at ` +
      `₹${inr(params.rate)}/${params.unit}. Total: ₹${inr(params.totalAmount)}. ` +
      `Thank you for your business! - ${params.firmName}`;

  const result = await sendSms(params.growerMobile, message);

  await prisma.notification.create({
    data: {
      growerId: params.growerId,
      message,
      status: result.success ? "sent" : "failed",
      type: "transaction",
    },
  });

  return result.success;
}

export async function notifyGrowerOfBatchSale(params: {
  growerId: string;
  growerName: string;
  growerMobile: string;
  firmName: string;
  itemsDescription: string;
  totalAmount: number;
  grossAmount?: number;
  expensesAmount?: number;
}): Promise<boolean> {
  const hasDetails = params.grossAmount !== undefined && params.expensesAmount !== undefined;
  
  const message = hasDetails
    ? `Hi ${params.growerName}, your produce [${params.itemsDescription}] was sold. Gross: ₹${inr(params.grossAmount!)}. Expenses: ₹${inr(params.expensesAmount!)}. Net Credit: ₹${inr(params.totalAmount)}. - ${params.firmName}`
    : `Hi ${params.growerName}, your produce [${params.itemsDescription}] was sold. Total Amount: ₹${inr(params.totalAmount)}. Thank you for your business! - ${params.firmName}`;

  const result = await sendSms(params.growerMobile, message);

  await prisma.notification.create({
    data: {
      growerId: params.growerId,
      message,
      status: result.success ? "sent" : "failed",
      type: "transaction",
    },
  });

  return result.success;
}
