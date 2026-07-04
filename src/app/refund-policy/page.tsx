"use client";

import { useEffect } from "react";
import NextLink from "next/link";
import {
  Box,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
  SimpleGrid,
  Button,
  chakra
} from "@chakra-ui/react";
import { Navbar } from "@/components/layout/Navbar";

export default function RefundPolicyPage() {
  useEffect(() => {
    document.title = "Refund Policy | OrchardPay";
  }, []);

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
              <Text letterSpacing="wider" textTransform="uppercase">Billing &amp; Customer Support</Text>
            </Flex>
            <Heading
              as="h1"
              size="2xl"
              fontWeight="black"
              color="gray.900"
              letterSpacing="-0.02em"
            >
              Refund Policy
            </Heading>
            <Text fontSize="md" color="gray.600" maxW="2xl" lineHeight="relaxed">
              Transparent, fair, and simple billing rules for the OrchardPay mandi management platform.
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
            {/* Soft background glow */}
            <Box position="absolute" top="-20px" right="-20px" w="100px" h="100px" bg="rgba(74, 222, 128, 0.05)" borderRadius="full" filter="blur(20px)" />
            
            <Heading size="md" color="green.800" fontWeight="bold" mb={3}>
              Our Commitment to You
            </Heading>
            <Text fontSize="sm" color="gray.600" lineHeight="relaxed">
              At OrchardPay, we strive to build standard-setting tools for fruit commission agents and wholesalers. We understand that mandi operations can be fast-paced and testing software must be stress-free. That is why we offer a clear, customer-friendly refund policy to guarantee you peace of mind.
            </Text>
          </Box>

          {/* Detailed Policy Grid */}
          <Stack gap={6}>
            
            {/* Rule 1: 7-Day Risk-Free Trial */}
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
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </Box>
                <Stack gap={2} flex="1">
                  <Heading size="sm" color="gray.850" fontWeight="black">
                    1. 7-Day Money-Back Guarantee
                  </Heading>
                  <Text fontSize="sm" color="gray.600" lineHeight="relaxed">
                    We offer a <b>7-day money-back guarantee</b> on both our <b>Single Firm Plan</b> and <b>Multi Firm Plan</b>. If you register your firm and decide OrchardPay is not the right fit for your mandi stall or ledger workflow, you can request a 100% full refund within 7 calendar days of your initial payment. No questions asked.
                  </Text>
                </Stack>
              </Flex>
            </Box>

            {/* Rule 2: Refund Eligibility */}
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
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </Box>
                <Stack gap={2} flex="1">
                  <Heading size="sm" color="gray.850" fontWeight="black">
                    2. Refund Eligibility Criteria
                  </Heading>
                  <Text fontSize="sm" color="gray.600" lineHeight="relaxed">
                    To be eligible for a refund, the following criteria must be met:
                  </Text>
                  <Box as="ul" style={{ paddingLeft: "20px", fontSize: "14px", color: "var(--chakra-colors-gray-600)", lineHeight: "1.7" }}>
                    <li>The refund request must be submitted within 7 days from the transaction date.</li>
                    <li>The account must not have been flagged for fraudulent activity or terms violations.</li>
                    <li>Refunds apply strictly to initial subscription plans and do not cover custom third-party integrations or dedicated migration labor fees (if any).</li>
                  </Box>
                </Stack>
              </Flex>
            </Box>

            {/* Rule 3: How to Request */}
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
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </Box>
                <Stack gap={2} flex="1">
                  <Heading size="sm" color="gray.850" fontWeight="black">
                    3. How to Request your Refund
                  </Heading>
                  <Text fontSize="sm" color="gray.600" lineHeight="relaxed">
                    Requesting a refund is simple and fast. Reach out directly to our billing support channels:
                  </Text>
                  <Box as="ul" style={{ paddingLeft: "20px", fontSize: "14px", color: "var(--chakra-colors-gray-600)", lineHeight: "1.7" }}>
                    <li><b>Email:</b> Send an email containing your business profile details, phone number, and transaction receipt to <chakra.span fontWeight="bold" color="green.750">billing@orchardpay.in</chakra.span>.</li>
                    <li><b>Phone Support:</b> Reach out to your dedicated account manager or call us directly at our billing helpline.</li>
                  </Box>
                  <Text fontSize="sm" color="gray.600" mt={1}>
                    Once approved, refunds are processed immediately. The funds typically reflect in your bank account, credit card, or UPI wallet within <b>5 to 7 business days</b> depending on your bank's processing cycles.
                  </Text>
                </Stack>
              </Flex>
            </Box>

            {/* Rule 4: Cancellations */}
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
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <line x1="9" y1="9" x2="15" y2="15" />
                    <line x1="15" y1="9" x2="9" y2="15" />
                  </svg>
                </Box>
                <Stack gap={2} flex="1">
                  <Heading size="sm" color="gray.850" fontWeight="black">
                    4. Cancellation Policy
                  </Heading>
                  <Text fontSize="sm" color="gray.600" lineHeight="relaxed">
                    You can cancel your subscription at any time. When you cancel, your account remains active with all premium features (such as watermarks, team members, and SMS updates) until the end of your current annual billing cycle. No further renewal charges will be applied. We do not provide partial refunds for the unused months of an active annual billing cycle if cancellation happens after the first 7 days.
                  </Text>
                </Stack>
              </Flex>
            </Box>

          </Stack>

          {/* Help Callout */}
          <Box
            bg="linear-gradient(135deg, var(--chakra-colors-green-700), var(--chakra-colors-teal-800))"
            color="white"
            p={{ base: 8, md: 10 }}
            borderRadius="3xl"
            shadow="lg"
            textAlign="center"
          >
            <Heading size="md" fontWeight="black" mb={2}>
              Have questions about your account?
            </Heading>
            <Text fontSize="sm" opacity="0.9" maxW="lg" mx="auto" mb={6}>
              If you have any doubts regarding billing, renewals, invoices, or need help setting up your ledger profiles, our support agents are here to assist you 24/7.
            </Text>
            <Flex gap={4} justify="center" wrap="wrap">
              <Button asChild bg="white" color="green.800" _hover={{ bg: "gray.100" }} borderRadius="xl" px={6}>
                <a href="mailto:support@orchardpay.in">Email Support</a>
              </Button>
              <Button asChild variant="outline" color="white" borderColor="white" _hover={{ bg: "rgba(255, 255, 255, 0.1)" }} borderRadius="xl" px={6}>
                <NextLink href="/#faq">Read FAQs</NextLink>
              </Button>
            </Flex>
          </Box>

        </Stack>
      </Container>

      {/* Footer Section */}
      <Box bg="gray.950" color="gray.400" py={16} borderTopWidth="1px" borderColor="gray.900">
        <Container maxW="6xl">
          <SimpleGrid columns={{ base: 1, md: 4 }} gap={10} mb={14}>
            
            {/* Logo Column */}
            <Stack gap={5}>
              <Flex align="center" gap={2.5}>
                <Box
                  bg="green.500"
                  w="28px"
                  h="28px"
                  borderRadius="lg"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  color="white"
                  fontWeight="black"
                  fontSize="md"
                  shadow="sm"
                >
                  O
                </Box>
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
