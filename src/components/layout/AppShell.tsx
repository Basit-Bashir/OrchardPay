"use client";

import NextLink from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Box, Button, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import type { ReactNode } from "react";
import { api } from "@/lib/client";

const NAV = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/transactions", label: "Transactions" },
  { href: "/growers", label: "Growers" },
  { href: "/migration", label: "Data migration" },
  { href: "/reports", label: "Reports" },
  { href: "/settings", label: "Settings" },
];

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

  async function logout() {
    await api("/api/auth/logout", { method: "POST" });
    router.push("/login");
  }

  return (
    <Flex minH="100vh" bg="gray.50">
      <Box as="aside" w="260px" bg="green.800" color="white" p={6} display={{ base: "none", md: "block" }}>
        <Heading size="md" mb={1}>HortiTrack</Heading>
        <Text fontSize="xs" color="green.200" mb={8}>{uniqueId}</Text>
        <Stack gap={1}>
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
                <NextLink href={item.href}>{item.label}</NextLink>
              </Button>
            );
          })}
        </Stack>
      </Box>

      <Flex direction="column" flex="1" minW={0}>
        <Flex as="header" bg="white" px={8} py={4} align="center" justify="space-between" borderBottomWidth="1px">
          <Text fontWeight="semibold" color="gray.700">{firmName}</Text>
          <Button size="sm" variant="outline" onClick={logout}>Log out</Button>
        </Flex>
        <Box as="main" p={{ base: 4, md: 8 }} flex="1">
          {children}
        </Box>
      </Flex>
    </Flex>
  );
}
