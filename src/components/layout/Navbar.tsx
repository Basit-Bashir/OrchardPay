"use client";

import { useState } from "react";
import NextLink from "next/link";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Stack,
  chakra,
} from "@chakra-ui/react";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <Box
      as="nav"
      position="sticky"
      top="0"
      zIndex="100"
      bg="rgba(255, 255, 255, 0.85)"
      backdropFilter="blur(12px)"
      borderBottomWidth="1px"
      borderColor="gray.200"
      w="full"
    >
      <Container maxW="6xl" py={4}>
        <Flex justify="space-between" align="center">

          {/* Logo */}
          <NextLink href="/" style={{ textDecoration: "none" }}>
            <Flex align="center" gap={2} cursor="pointer">
              <Box
                bg="linear-gradient(135deg, var(--chakra-colors-green-500), var(--chakra-colors-teal-600))"
                w="32px"
                h="32px"
                borderRadius="lg"
                display="flex"
                alignItems="center"
                justifyContent="center"
                color="white"
                fontWeight="bold"
                fontSize="lg"
                shadow="sm"
              >
                O
              </Box>
              <Heading
                size="md"
                fontWeight="bold"
                style={{
                  background: "linear-gradient(to right, var(--chakra-colors-green-600), var(--chakra-colors-teal-600))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                OrchardPay
              </Heading>
            </Flex>
          </NextLink>

          {/* Desktop Navigation Links */}
          <Flex align="center" gap={8} display={{ base: "none", md: "flex" }}>
            <chakra.a href="/#features" fontSize="sm" fontWeight="medium" color="gray.600" _hover={{ color: "green.600" }} transition="color 0.2s">
              Features
            </chakra.a>
            <chakra.a href="/#roi-calculator" fontSize="sm" fontWeight="medium" color="gray.600" _hover={{ color: "green.600" }} transition="color 0.2s">
              ROI Calculator
            </chakra.a>
            <chakra.a href="/#pricing" fontSize="sm" fontWeight="medium" color="gray.600" _hover={{ color: "green.600" }} transition="color 0.2s">
              Pricing
            </chakra.a>
            <chakra.a href="/#faq" fontSize="sm" fontWeight="medium" color="gray.600" _hover={{ color: "green.600" }} transition="color 0.2s">
              FAQs
            </chakra.a>
          </Flex>

          {/* Desktop CTAs */}
          <Flex align="center" gap={4} display={{ base: "none", md: "flex" }}>
            <Button asChild variant="ghost" colorPalette="green" size="sm">
              <NextLink href="/login">Log in</NextLink>
            </Button>
            <Button asChild colorPalette="green" size="sm" shadow="sm">
              <NextLink href="/signup">Register Firm</NextLink>
            </Button>
          </Flex>

          {/* Mobile Menu Icon */}
          <Button
            display={{ base: "flex", md: "none" }}
            variant="outline"
            size="sm"
            onClick={() => setMobileOpen(!mobileOpen)}
            px={2}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </Button>

        </Flex>

        {/* Mobile Dropdown Menu */}
        {mobileOpen && (
          <Stack gap={4} mt={4} py={4} borderTopWidth="1px" borderColor="gray.100" display={{ base: "flex", md: "none" }}>
            <chakra.a href="/#features" fontSize="sm" fontWeight="medium" onClick={() => setMobileOpen(false)}>
              Features
            </chakra.a>
            <chakra.a href="/#roi-calculator" fontSize="sm" fontWeight="medium" onClick={() => setMobileOpen(false)}>
              ROI Calculator
            </chakra.a>
            <chakra.a href="/#pricing" fontSize="sm" fontWeight="medium" onClick={() => setMobileOpen(false)}>
              Pricing
            </chakra.a>
            <chakra.a href="/#faq" fontSize="sm" fontWeight="medium" onClick={() => setMobileOpen(false)}>
              FAQs
            </chakra.a>
            <Flex gap={2} pt={2}>
              <Button asChild variant="outline" colorPalette="green" size="sm" flex={1}>
                <NextLink href="/login" onClick={() => setMobileOpen(false)}>Log in</NextLink>
              </Button>
              <Button asChild colorPalette="green" size="sm" flex={1}>
                <NextLink href="/signup" onClick={() => setMobileOpen(false)}>Register Firm</NextLink>
              </Button>
            </Flex>
          </Stack>
        )}

      </Container>
    </Box>
  );
}
