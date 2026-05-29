import type { Metadata } from "next";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "HortiTrack",
  description: "Fruit purchase tracking for horticulture buyers and growers.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
