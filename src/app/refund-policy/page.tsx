import type { Metadata } from "next";
import RefundPolicyPageClient from "./RefundPolicyPageClient";

export const metadata: Metadata = {
  title: "Refund Policy | OrchardPay Mandi Platform",
  description: "Read OrchardPay's Refund Policy. Learn about our 7-day money-back guarantee for mandi billing subscription plans.",
};

export default function RefundPolicyPage() {
  return <RefundPolicyPageClient />;
}
