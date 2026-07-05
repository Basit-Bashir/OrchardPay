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

export default function PrivacyPolicyPageClient() {
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
              <Text letterSpacing="wider" textTransform="uppercase">Data Protection &amp; Security</Text>
            </Flex>
            <Heading
              as="h1"
              size="2xl"
              fontWeight="black"
              color="gray.900"
              letterSpacing="-0.02em"
            >
              Privacy Policy
            </Heading>
            <Text fontSize="md" color="gray.600" maxW="2xl" lineHeight="relaxed">
              Learn how OrchardPay collects, protects, and handles your mandi ledger data.
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
              Your Privacy is Our Priority
            </Heading>
            <Text fontSize="sm" color="gray.600" lineHeight="relaxed">
              At OrchardPay, we respect the privacy of commission agents, wholesalers, staff, and growers. We are committed to safeguarding the ledger data, transactions, and contact information you store on our platform. We never sell your business info or transaction records to third parties.
            </Text>
          </Box>

          {/* Detailed Policy Grid */}
          <Stack gap={6}>
            
            {/* 1. Information We Collect */}
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
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10 9 9 9 8 9" />
                  </svg>
                </Box>
                <Stack gap={2} flex="1">
                  <Heading size="sm" color="gray.850" fontWeight="black">
                    1. Information We Collect
                  </Heading>
                  <Text fontSize="sm" color="gray.600" lineHeight="relaxed">
                    We collect minimal but necessary information to provide our services:
                  </Text>
                  <Box as="ul" style={{ paddingLeft: "20px", fontSize: "14px", color: "var(--chakra-colors-gray-600)", lineHeight: "1.7" }}>
                    <li><b>Account Information:</b> Firm names, phone numbers, registered addresses, and billing credentials when you purchase a subscription.</li>
                    <li><b>Mandi Ledger Data:</b> Transactions, growers names, fruit lot weights, crate/peti counts, unit rates, and totals.</li>
                    <li><b>Communication Data:</b> The phone numbers of growers to whom automated SMS alerts are sent on your behalf.</li>
                  </Box>
                </Stack>
              </Flex>
            </Box>

            {/* 2. How We Use Data */}
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
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                  </svg>
                </Box>
                <Stack gap={2} flex="1">
                  <Heading size="sm" color="gray.850" fontWeight="black">
                    2. How We Use Your Information
                  </Heading>
                  <Text fontSize="sm" color="gray.600" lineHeight="relaxed">
                    Your information is utilized solely to operate and improve OrchardPay:
                  </Text>
                  <Box as="ul" style={{ paddingLeft: "20px", fontSize: "14px", color: "var(--chakra-colors-gray-600)", lineHeight: "1.7" }}>
                    <li>To render your customized watermarked billing statements and accounting ledgers.</li>
                    <li>To fire SMS receipts immediately to your growers when a sale is entered.</li>
                    <li>To manage secure user sessions and enforce role permissions inside your team.</li>
                    <li>To process renewal payments and service billing.</li>
                  </Box>
                </Stack>
              </Flex>
            </Box>

            {/* 3. Data Protection and Security */}
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
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </Box>
                <Stack gap={2} flex="1">
                  <Heading size="sm" color="gray.850" fontWeight="black">
                    3. Data Protection and Security
                  </Heading>
                  <Text fontSize="sm" color="gray.600" lineHeight="relaxed">
                    We take security seriously and enforce enterprise-grade data shielding measures:
                  </Text>
                  <Box as="ul" style={{ paddingLeft: "20px", fontSize: "14px", color: "var(--chakra-colors-gray-600)", lineHeight: "1.7" }}>
                    <li>All server communications are encrypted using HTTPS/TLS protocols.</li>
                    <li>Ledger data is managed in secure SQLite and Prisma instances with daily automated backups.</li>
                    <li>Password hashes are encrypted using salt-strengthened bcrypt algorithms.</li>
                    <li>Your account data can only be accessed by invited admins, staff, or hamaals with authorized credentials.</li>
                  </Box>
                </Stack>
              </Flex>
            </Box>

            {/* 4. Data Sharing and Export */}
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
                    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                    <polyline points="16 6 12 2 8 6" />
                    <line x1="12" y1="2" x2="12" y2="15" />
                  </svg>
                </Box>
                <Stack gap={2} flex="1">
                  <Heading size="sm" color="gray.850" fontWeight="black">
                    4. Third-Party Sharing &amp; Data Portability
                  </Heading>
                  <Text fontSize="sm" color="gray.600" lineHeight="relaxed">
                    We share data with external tools exclusively when required to provide services (e.g., triggering SMS alerts through licensed network gateways, routing credit payments). We do not share records with advertising networks. Additionally, you retain full ownership of your records; you can download your grower statements, CSV datasets, and account audits at any time.
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
