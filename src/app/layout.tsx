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
  title: "OrchardPay",
  description: "Fruit purchase tracking for horticulture buyers and growers.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${plusJakartaSans.variable} ${inter.variable}`}>
      <head>
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
