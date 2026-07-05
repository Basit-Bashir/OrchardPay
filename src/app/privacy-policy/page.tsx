import type { Metadata } from "next";
import PrivacyPolicyPageClient from "./PrivacyPolicyPageClient";

export const metadata: Metadata = {
  title: "Privacy Policy | OrchardPay Mandi Platform",
  description: "Read OrchardPay's Privacy Policy. Understand how we protect your mandi records, grower data, SMS logs, and ledger transactions.",
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyPageClient />;
}
