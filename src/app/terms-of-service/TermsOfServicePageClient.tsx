"use client";

import NextLink from "next/link";
import {
  Box,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
  SimpleGrid,
  chakra
} from "@chakra-ui/react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function TermsOfServicePageClient() {
  return (
    <Box minH="100vh" bg="gray.50" color="gray.800" overflowX="hidden" className="grid-bg">
      <Navbar />

      {/* Hero Header Section */}
      <Box
        position="relative"
        overflow="hidden"
        py={{ base: 12, md: 20 }}
        bg="radial-gradient(circle at 10% 20%, rgba(220, 252, 231, 0.25) 0%, rgba(250, 250, 250, 1) 90%)"
        borderBottomWidth="1px"
        borderColor="gray.200"
      >
        {/* Decorative Glow */}
        <Box
          position="absolute"
          top="-10%"
          left="50%"
          transform="translateX(-50%)"
          w="600px"
          h="300px"
          bg="radial-gradient(circle, rgba(74, 222, 128, 0.08) 0%, rgba(74, 222, 128, 0) 70%)"
          filter="blur(60px)"
          pointerEvents="none"
        />

        <Container maxW="4xl" position="relative" zIndex={2}>
          <Stack gap={4} align="center" textAlign="center">
            <Flex
              align="center"
              gap={1.5}
              fontSize="xs"
              fontWeight="bold"
              color="green.750"
              bg="linear-gradient(135deg, rgba(220, 252, 231, 0.8), rgba(204, 251, 241, 0.8))"
              backdropFilter="blur(4px)"
              borderWidth="1px"
              borderColor="green.200"
              display="inline-flex"
              px={3.5}
              py={1.5}
              borderRadius="full"
              shadow="sm"
            >
              <Text letterSpacing="wider" textTransform="uppercase">Rules &amp; Agreement</Text>
            </Flex>
            <Heading
              as="h1"
              size="2xl"
              fontWeight="black"
              color="gray.900"
              letterSpacing="-0.02em"
            >
              Terms of Service
            </Heading>
            <Text fontSize="md" color="gray.600" maxW="2xl" lineHeight="relaxed">
              By using the OrchardPay mandi management platform, you agree to these legal and operational terms.
            </Text>
            <Text fontSize="xs" fontWeight="bold" color="gray.400" mt={2}>
              LAST UPDATED: JULY 4, 2026
            </Text>
          </Stack>
        </Container>
      </Box>

      {/* Main Content Section */}
      <Container maxW="4xl" py={16}>
        <Stack gap={10}>
          
          {/* Intro Card */}
          <Box
            bg="rgba(255, 255, 255, 0.8)"
            backdropFilter="blur(12px)"
            p={{ base: 6, md: 8 }}
            borderRadius="3xl"
            borderWidth="1px"
            borderColor="green.100"
            shadow="md"
            position="relative"
            overflow="hidden"
          >
            <Box position="absolute" top="-20px" right="-20px" w="100px" h="100px" bg="rgba(74, 222, 128, 0.05)" borderRadius="full" filter="blur(20px)" />
            
            <Heading size="md" color="green.800" fontWeight="bold" mb={3}>
              Usage Agreement
            </Heading>
            <Text fontSize="sm" color="gray.600" lineHeight="relaxed">
              These Terms of Service govern your use of OrchardPay. The platform is operated by Sudo Technologies to help fruit commission agents, arhtiyas, and wholesalers digitize their mandi workflow. Please read these terms carefully before creating a firm ledger or subscribing to our annual plans.
            </Text>
          </Box>

          {/* Detailed Terms Grid */}
          <Stack gap={6}>
            
            {/* 1. Account & Verification */}
            <Box
              bg="white"
              p={{ base: 6, md: 8 }}
              borderRadius="3xl"
              borderWidth="1px"
              borderColor="gray.200"
              shadow="sm"
              transition="all 0.3s"
              _hover={{ shadow: "md", borderColor: "green.200" }}
            >
              <Flex gap={4} align="flex-start" direction={{ base: "column", sm: "row" }}>
                <Box
                  bg="green.50"
                  color="green.600"
                  p={3.5}
                  borderRadius="2xl"
                  display="inline-flex"
                  h="fit-content"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="8.5" cy="7" r="4" />
                    <polyline points="17 11 19 13 23 9" />
                  </svg>
                </Box>
                <Stack gap={2} flex="1">
                  <Heading size="sm" color="gray.850" fontWeight="black">
                    1. Account Integrity and Verification
                  </Heading>
                  <Text fontSize="sm" color="gray.600" lineHeight="relaxed">
                    To access OrchardPay, users register using their mobile phone numbers verified by OTP (One-Time Password) authorization. You agree to:
                  </Text>
                  <Box as="ul" style={{ paddingLeft: "20px", fontSize: "14px", color: "var(--chakra-colors-gray-600)", lineHeight: "1.7" }}>
                    <li>Provide accurate, current registration data.</li>
                    <li>Safeguard credentials and restrict unauthorized users from accessing the system.</li>
                    <li>Accept full accountability for all recorded mandi entries, transaction values, SMS alerts, and invoices generated under your account profile.</li>
                  </Box>
                </Stack>
              </Flex>
            </Box>

            {/* 2. Billing & Subscription */}
            <Box
              bg="white"
              p={{ base: 6, md: 8 }}
              borderRadius="3xl"
              borderWidth="1px"
              borderColor="gray.200"
              shadow="sm"
              transition="all 0.3s"
              _hover={{ shadow: "md", borderColor: "green.200" }}
            >
              <Flex gap={4} align="flex-start" direction={{ base: "column", sm: "row" }}>
                <Box
                  bg="green.50"
                  color="green.600"
                  p={3.5}
                  borderRadius="2xl"
                  display="inline-flex"
                  h="fit-content"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="1" x2="12" y2="23" />
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </Box>
                <Stack gap={2} flex="1">
                  <Heading size="sm" color="gray.850" fontWeight="black">
                    2. Billing, Fees, and Renewal
                  </Heading>
                  <Text fontSize="sm" color="gray.600" lineHeight="relaxed">
                    OrchardPay subscriptions operate on prepaid annual cycles.
                  </Text>
                  <Box as="ul" style={{ paddingLeft: "20px", fontSize: "14px", color: "var(--chakra-colors-gray-600)", lineHeight: "1.7" }}>
                    <li><b>Fees:</b> Subscriptions will be billed annually on the date of activation at the price corresponding to your selected plan.</li>
                    <li><b>Guarantees:</b> Initial orders are covered by a 7-day refund guarantee. Details are listed in our <NextLink href="/refund-policy" style={{ color: "var(--chakra-colors-green-600)", fontWeight: "bold", textDecoration: "underline" }}>Refund Policy</NextLink>.</li>
                    <li><b>Overdue Payments:</b> We reserve the right to suspend platform tools, CSV exporting features, and SMS generation if renewal billing fails.</li>
                  </Box>
                </Stack>
              </Flex>
            </Box>

            {/* 3. Fair SMS Usage Policy */}
            <Box
              bg="white"
              p={{ base: 6, md: 8 }}
              borderRadius="3xl"
              borderWidth="1px"
              borderColor="gray.200"
              shadow="sm"
              transition="all 0.3s"
              _hover={{ shadow: "md", borderColor: "green.200" }}
            >
              <Flex gap={4} align="flex-start" direction={{ base: "column", sm: "row" }}>
                <Box
                  bg="green.50"
                  color="green.600"
                  p={3.5}
                  borderRadius="2xl"
                  display="inline-flex"
                  h="fit-content"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                </Box>
                <Stack gap={2} flex="1">
                  <Heading size="sm" color="gray.850" fontWeight="black">
                    3. SMS Gateway Fair Use Policy
                  </Heading>
                  <Text fontSize="sm" color="gray.600" lineHeight="relaxed">
                    Our platform integrates automated SMS tools to alert growers about transactions. Using these capabilities to send promotional span, fraudulent payment alerts, or abusive content is strictly illegal. Accounts triggering unverified or malicious SMS alerts will be terminated immediately without a refund.
                  </Text>
                </Stack>
              </Flex>
            </Box>

            {/* 4. Limitation of Liability */}
            <Box
              bg="white"
              p={{ base: 6, md: 8 }}
              borderRadius="3xl"
              borderWidth="1px"
              borderColor="gray.200"
              shadow="sm"
              transition="all 0.3s"
              _hover={{ shadow: "md", borderColor: "green.200" }}
            >
              <Flex gap={4} align="flex-start" direction={{ base: "column", sm: "row" }}>
                <Box
                  bg="green.50"
                  color="green.600"
                  p={3.5}
                  borderRadius="2xl"
                  display="inline-flex"
                  h="fit-content"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                </Box>
                <Stack gap={2} flex="1">
                  <Heading size="sm" color="gray.850" fontWeight="black">
                    4. Platform Disclaimers
                  </Heading>
                  <Text fontSize="sm" color="gray.600" lineHeight="relaxed">
                    OrchardPay provides ledger accounting resources as a tool to assist your business, but we do not verify the mathematical correctness of manual entries or file uploads. The service is provided "as is". Sudo Technologies is not liable for data entry errors, lost transaction logs, or ledger disputes between commission agents and growers.
                  </Text>
                </Stack>
              </Flex>
            </Box>

          </Stack>

        </Stack>
      </Container>

      <Footer />

      {/* Embedded CSS style rules */}
      <style>{`
        .grid-bg {
          background-image: radial-gradient(rgba(74, 222, 128, 0.08) 1.5px, transparent 1.5px);
          background-size: 24px 24px;
        }
      `}</style>
    </Box>
  );
}
