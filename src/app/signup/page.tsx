import type { Metadata } from "next";
import SignupPageClient from "./SignupPageClient";

export const metadata: Metadata = {
  title: "Register Mandi Firm Account | OrchardPay",
  description: "Create an OrchardPay account. Register your fruit APMC wholesaler firm, invite staff, set up custom statement watermarks, and start tracking grower transactions.",
};

export default function SignupPage() {
  return <SignupPageClient />;
}
