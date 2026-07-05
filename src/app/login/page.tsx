import type { Metadata } from "next";
import LoginPageClient from "./LoginPageClient";

export const metadata: Metadata = {
  title: "Log In | OrchardPay Mandi Ledger",
  description: "Access your OrchardPay commission agent firm profile, manage your ledger, record daily fruit transactions, and send SMS billing receipts.",
};

export default function LoginPage() {
  return <LoginPageClient />;
}
