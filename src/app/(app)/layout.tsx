import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { AppShell } from "@/components/layout/AppShell";

export default async function AppLayout({ children }: { children: React.ReactNode }) {
  const session = await getSession();
  if (!session) redirect("/login");

  const firm = await prisma.buyerFirm.findUnique({
    where: { id: session.buyerFirmId },
    select: { firmName: true, uniqueId: true },
  });
  if (!firm) redirect("/login");

  return (
    <AppShell firmName={firm.firmName} uniqueId={firm.uniqueId}>
      {children}
    </AppShell>
  );
}
