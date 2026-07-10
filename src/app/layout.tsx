import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import { Providers } from "./providers";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://orchardpay.tech"),
  title: {
    default: "OrchardPay | Mandi Accounting & Grower Billing Statement Software",
    template: "%s | OrchardPay"
  },
  description: "The modern accounting ledger, invoice builder, and SMS-notification software built specifically for horticulture wholesalers, fruit commission agents (arhtiyas), and growers in Indian APMC mandis.",
  keywords: [
    "OrchardPay",
    "mandi billing software",
    "APMC commission agent app",
    "mandi ledger software",
    "grower SMS billing",
    "horticulture software India",
    "fruit purchase ledger",
    "Sopore fruit mandi software",
    "Azadpur mandi billing app",
    "agricultural trading ledger",
    "commission agent accounting"
  ],
  authors: [{ name: "Sudo Technologies" }],
  creator: "Sudo Technologies",
  publisher: "OrchardPay",
  icons: {
    icon: "/orchard_pay_logo.png",
    shortcut: "/orchard_pay_logo.png",
    apple: "/orchard_pay_logo.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://orchardpay.tech",
    title: "OrchardPay | Mandi Accounting & Grower Billing Statement Software",
    description: "The modern accounting ledger, invoice builder, and SMS-notification software built specifically for horticulture wholesalers, fruit commission agents (arhtiyas), and growers in Indian APMC mandis.",
    siteName: "OrchardPay",
    images: [
      {
        url: "/orchard_pay_logo.png",
        width: 512,
        height: 512,
        alt: "OrchardPay Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OrchardPay | Mandi Accounting & Grower Billing Statement Software",
    description: "The modern accounting ledger, invoice builder, and SMS-notification software built specifically for horticulture wholesalers, fruit commission agents (arhtiyas), and growers in Indian APMC mandis.",
    images: ["/orchard_pay_logo.png"],
  },
  alternates: {
    canonical: "https://orchardpay.tech",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "OrchardPay",
  "operatingSystem": "All",
  "applicationCategory": "BusinessApplication",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "INR"
  },
  "description": "OrchardPay is a specialized mandi ledger and billing platform for fresh produce commission agents, horticulture buyers, and growers in Indian APMC markets.",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "ratingCount": "1420"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${plusJakartaSans.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <style dangerouslySetInnerHTML={{ __html: `
          html, body, p, span, button, input, select, textarea, td, th {
            font-family: var(--font-inter), sans-serif !important;
          }
          h1, h2, h3, h4, h5, h6 {
            font-family: var(--font-plus-jakarta-sans), sans-serif !important;
          }
        `}} />
      </head>
      <body suppressHydrationWarning>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

