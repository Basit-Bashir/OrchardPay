import type { Metadata } from "next";
import TermsOfServicePageClient from "./TermsOfServicePageClient";

export const metadata: Metadata = {
  title: "Terms of Service | OrchardPay",
  description: "Read the Terms of Service for OrchardPay, the mandi ledger software platform for horticulture produce transaction logging and grower notifications.",
};

export default function TermsOfServicePage() {
  return <TermsOfServicePageClient />;
}
