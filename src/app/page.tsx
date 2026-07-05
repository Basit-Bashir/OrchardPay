import type { Metadata } from "next";
import LandingPageClient from "./LandingPageClient";

export const metadata: Metadata = {
  title: "OrchardPay | Mandi Accounting & Grower Billing Statement Software",
  description: "The modern accounting ledger, invoice builder, and SMS-notification software built specifically for horticulture wholesalers, fruit commission agents (arhtiyas), and growers in Indian APMC mandis like Sopore, Azadpur, and Nashik.",
};

export default function LandingPage() {
  return <LandingPageClient />;
}
