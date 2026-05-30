"use client";

import NextLink from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Box, Button, Flex, Heading, IconButton, Stack, Text } from "@chakra-ui/react";
import { useState, useEffect, type ReactNode } from "react";
import { api } from "@/lib/client";

const NAV = [
  { href: "/dashboard", label: "Dashboard", icon: "📊" },
  { href: "/transactions", label: "Transactions", icon: "💰" },
  { href: "/growers", label: "Growers", icon: "🌿" },
  { href: "/migration", label: "Data migration", icon: "📦" },
  { href: "/reports", label: "Reports", icon: "📄" },
  { href: "/settings", label: "Settings", icon: "⚙️" },
];

function HamburgerIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

export function AppShell({
  children,
  firmName,
  uniqueId,
}: {
  children: ReactNode;
  firmName: string;
  uniqueId: string;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Close drawer on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Prevent body scrolling when drawer is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  async function logout() {
    await api("/api/auth/logout", { method: "POST" });
    router.push("/login");
  }

  const sidebarContent = (
    <>
      <Flex align="center" justify="space-between" mb={1}>
        <Heading size="md">OrchardPay</Heading>
        {/* Close button – only visible on mobile */}
        <IconButton
          aria-label="Close menu"
          variant="ghost"
          color="green.200"
          _hover={{ bg: "green.700" }}
          size="sm"
          display={{ base: "flex", md: "none" }}
          onClick={() => setMobileOpen(false)}
        >
          <CloseIcon />
        </IconButton>
      </Flex>
      <Text fontSize="xs" color="green.200" mb={8}>{uniqueId}</Text>
      <Stack gap={1} flex="1">
        {NAV.map((item) => {
          const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
          return (
            <Button
              key={item.href}
              asChild
              justifyContent="flex-start"
              variant={active ? "solid" : "ghost"}
              colorPalette="green"
              color={active ? undefined : "green.50"}
              _hover={{ bg: "green.700" }}
            >
              <NextLink href={item.href}>
                <Text as="span" mr={2} fontSize="md">{item.icon}</Text>
                {item.label}
              </NextLink>
            </Button>
          );
        })}
      </Stack>
      <Box mt="auto" pt={4} borderTopWidth="1px" borderColor="green.700">
        <Text fontSize="xs" color="green.300" mb={2} fontWeight="medium">{firmName}</Text>
        <Button
          size="sm"
          variant="outline"
          color="green.100"
          borderColor="green.600"
          _hover={{ bg: "green.700" }}
          w="full"
          onClick={logout}
        >
          Log out
        </Button>
      </Box>
    </>
  );

  return (
    <Flex minH="100vh" bg="gray.50">
      {/* Desktop sidebar – permanently visible */}
      <Box
        as="aside"
        w="260px"
        bg="green.800"
        color="white"
        p={6}
        display={{ base: "none", md: "flex" }}
        flexDirection="column"
        position="sticky"
        top={0}
        h="100vh"
      >
        {sidebarContent}
      </Box>

      {/* Mobile overlay backdrop */}
      {mobileOpen && (
        <Box
          position="fixed"
          inset={0}
          bg="blackAlpha.600"
          zIndex={40}
          display={{ base: "block", md: "none" }}
          onClick={() => setMobileOpen(false)}
          style={{
            animation: "fadeIn 0.2s ease-out",
          }}
        />
      )}

      {/* Mobile slide-out drawer */}
      <Box
        as="aside"
        position="fixed"
        top={0}
        left={0}
        h="100vh"
        w="280px"
        bg="green.800"
        color="white"
        p={6}
        zIndex={50}
        display={{ base: "flex", md: "none" }}
        flexDirection="column"
        transform={mobileOpen ? "translateX(0)" : "translateX(-100%)"}
        transition="transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
        boxShadow={mobileOpen ? "2xl" : "none"}
      >
        {sidebarContent}
      </Box>

      {/* Main content area */}
      <Flex direction="column" flex="1" minW={0}>
        <Flex as="header" bg="white" px={{ base: 4, md: 8 }} py={4} align="center" justify="space-between" borderBottomWidth="1px" gap={3}>
          {/* Hamburger – only visible on mobile */}
          <IconButton
            aria-label="Open navigation menu"
            variant="ghost"
            size="sm"
            display={{ base: "flex", md: "none" }}
            onClick={() => setMobileOpen(true)}
          >
            <HamburgerIcon />
          </IconButton>
          <Text fontWeight="semibold" color="gray.700" truncate>{firmName}</Text>
          <Button size="sm" variant="outline" onClick={logout} display={{ base: "none", md: "inline-flex" }}>Log out</Button>
        </Flex>
        <Box as="main" p={{ base: 4, md: 8 }} flex="1">
          {children}
        </Box>
      </Flex>

      {/* Inline keyframes for the backdrop fade */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </Flex>
  );
}
