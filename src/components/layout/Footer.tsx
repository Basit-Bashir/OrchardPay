"use client";

import NextLink from "next/link";
import { Box, Container, Flex, SimpleGrid, Stack, Text, chakra } from "@chakra-ui/react";

export function Footer() {
  return (
    <Box bg="gray.950" color="gray.400" py={16} borderTopWidth="1px" borderColor="gray.900">
      <Container maxW="6xl">
        <SimpleGrid columns={{ base: 1, md: 4 }} gap={10} mb={14}>
          
          {/* Logo Column */}
          <Stack gap={5}>
            <Flex align="center" gap={2.5}>
              <img
                src="/orchard_pay_logo.png"
                alt="OrchardPay Logo"
                style={{ width: "28px", height: "28px", objectFit: "contain" }}
              />
              <Text fontWeight="extrabold" color="white" fontSize="md">OrchardPay</Text>
            </Flex>
            <Text fontSize="xs" color="gray.500" lineHeight="relaxed">
              The modern accounting, invoice-generation, and notification ledger built explicitly for fresh produce commission wholesalers and growers.
            </Text>
          </Stack>

          {/* Links Column 1 */}
          <Stack gap={3}>
            <Text fontWeight="black" color="white" fontSize="xs" textTransform="uppercase" letterSpacing="wider">Platform</Text>
            <chakra.a href="/#features" fontSize="xs" color="gray.500" _hover={{ color: "green.400" }} transition="color 0.2s">Features</chakra.a>
            <chakra.a href="/#roi-calculator" fontSize="xs" color="gray.500" _hover={{ color: "green.400" }} transition="color 0.2s">ROI Calculator</chakra.a>
            <chakra.a href="/#pricing" fontSize="xs" color="gray.500" _hover={{ color: "green.400" }} transition="color 0.2s">Pricing Plans</chakra.a>
            <NextLink href="/login" style={{ fontSize: "12px", color: "var(--chakra-colors-gray-500)" }}>Live Demo</NextLink>
          </Stack>

          {/* Links Column 2 */}
          <Stack gap={3}>
            <Text fontWeight="black" color="white" fontSize="xs" textTransform="uppercase" letterSpacing="wider">Resources</Text>
            <chakra.a href="/#faq" fontSize="xs" color="gray.500" _hover={{ color: "green.400" }} transition="color 0.2s">Support FAQ</chakra.a>
            <chakra.a asChild fontSize="xs" color="gray.500" _hover={{ color: "green.400" }} transition="color 0.2s">
              <NextLink href="/refund-policy">Refund Policy</NextLink>
            </chakra.a>
            <chakra.a asChild fontSize="xs" color="gray.500" _hover={{ color: "green.400" }} transition="color 0.2s">
              <NextLink href="/privacy-policy">Privacy Policy</NextLink>
            </chakra.a>
            <chakra.a asChild fontSize="xs" color="gray.500" _hover={{ color: "green.400" }} transition="color 0.2s">
              <NextLink href="/terms-of-service">Terms of Service</NextLink>
            </chakra.a>
            <chakra.a href="/sitemap.xml" target="_blank" fontSize="xs" color="gray.500" _hover={{ color: "green.400" }} transition="color 0.2s">
              Sitemap XML
            </chakra.a>
          </Stack>

          {/* Links Column 3 */}
          <Stack gap={3}>
            <Text fontWeight="black" color="white" fontSize="xs" textTransform="uppercase" letterSpacing="wider">Enterprise Grade</Text>
            <Flex gap={2} wrap="wrap">
              <Text bg="gray.900" color="gray.400" fontSize="9px" px={2} py={0.8} borderRadius="md" fontWeight="bold">Prisma &amp; SQLite</Text>
              <Text bg="gray.900" color="gray.400" fontSize="9px" px={2} py={0.8} borderRadius="md" fontWeight="bold">Next.js 15 AppRouter</Text>
              <Text bg="gray.900" color="gray.400" fontSize="9px" px={2} py={0.8} borderRadius="md" fontWeight="bold">Chakra UI v3</Text>
            </Flex>
            <Text fontSize="10px" color="gray.600">Built for high-volume transactions and low latency delivery.</Text>
          </Stack>

        </SimpleGrid>

        <Flex justify="space-between" align="center" borderTopWidth="1px" borderColor="gray.900" pt={8} wrap="wrap" gap={4}>
          <Text fontSize="xs" color="gray.600">&copy; {new Date().getFullYear()} OrchardPay. All rights reserved.</Text>
          <Text fontSize="xs" color="gray.600">Designed and developed by Sudo Technologies</Text>
        </Flex>
      </Container>
    </Box>
  );
}
