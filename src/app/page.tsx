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
  Text,
  SimpleGrid,
  Input,
  chakra
} from "@chakra-ui/react";
import { Navbar } from "@/components/layout/Navbar";

const Select = chakra("select");

const features = [
  {
    title: "Multi-Unit Deliveries",
    desc: "Record fruit deliveries in Kg, Peti, or Daba simultaneously. Perfect for the chaotic environment of busy mandis.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--chakra-colors-green-500)" }}>
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    )
  },
  {
    title: "Instant SMS Receipts",
    desc: "Send immediate automatic SMS summaries to growers showing rates, quantities, and net balances. Zero delay, zero disputes.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--chakra-colors-green-500)" }}>
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    )
  },
  {
    title: "Watermarked Printables",
    desc: "Generate professional statements of accounts with your own firm logo automatically rendered as a header and subtle background watermark.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--chakra-colors-green-500)" }}>
        <path d="M6 9V2h12v7M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
        <rect x="6" y="14" width="12" height="8" />
      </svg>
    )
  },
  {
    title: "Excel/CSV Smart Import",
    desc: "Migrate historical transactions from spreadsheets instantly. The smart mapper handles columns automatically with no data loss.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--chakra-colors-green-500)" }}>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    )
  },
  {
    title: "Multi-Business Profiles",
    desc: "Manage multiple distinct mandi firms under a single mobile number. Switch between profiles instantly with a custom dropdown without logging out.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--chakra-colors-green-500)" }}>
        <path d="M17 2.1l4 4-4 4" />
        <path d="M3 22v-6c0-1.1.9-2 2-2h14" />
        <path d="M7 11.9L3 7.9 7 3.9" />
        <path d="M21 2v6c0 1.1-.9 2-2 2H5" />
      </svg>
    )
  },
  {
    title: "Role-Based Permissions",
    desc: "Invite staff, admins, or hamaals to your ledger. Protect high-level business settings and reports while allowing staff to record entries.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--chakra-colors-green-500)" }}>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    )
  }
];

const faqs = [
  {
    q: "How does the SMS system send alerts without internet?",
    a: "OrchardPay runs on a cloud-based gateway. When you record a transaction, our backend processes it and triggers the SMS instantly. No specialized hardware is needed in your mandi stall."
  },
  {
    q: "Can I manage multiple mandi firms under the same phone number?",
    a: "Absolutely! With our Multi Firm Plan, you can register multiple businesses under a single mobile number. You can instantly switch between profiles and keep separate records for each firm."
  },
  {
    q: "Can we manage multiple staff members under the same firm?",
    a: "Yes! In your Settings page, you can invite team members as either 'admin', 'staff', or 'hamaal'. Staff can record entries, while admins can manage settings and view firm financial statements."
  },
  {
    q: "Is there a limit to the historical data we can import?",
    a: "No. Our CSV/Excel smart import utility handles files with thousands of transaction rows smoothly, creating growers and linking invoices automatically."
  },
  {
    q: "Why is the company logo watermark useful?",
    a: "Investors and high-market wholesalers require branded billing. By adding your company logo, every print or PDF statement automatically embeds your brand, preventing counterfeit billing disputes."
  }
];

export default function LandingPage() {
  // ROI Calculator State
  const [growersCount, setGrowersCount] = useState(60);
  const [dailyVolume, setDailyVolume] = useState(350); // crates/peti/daba per day

  // ROI calculations
  const totalMonthlyVolume = dailyVolume * 30;
  const estimatedLedgerDues = growersCount * dailyVolume * 165 * 30;
  const hoursSavedPerWeek = Math.round(growersCount * 0.4 + (dailyVolume / 60) * 2.5);
  const disputeDropPercent = "98.5%";
  const revenueLeakPrevented = Math.round((growersCount * dailyVolume * 22) * 0.012);

  return (
    <Box minH="100vh" bg="gray.50" color="gray.800" overflowX="hidden" fontFamily="system-ui, sans-serif">

      <Navbar />

      {/* 2. Hero Section */}
      <Box
        position="relative"
        overflow="hidden"
        py={{ base: 12, md: 24 }}
        bg="radial-gradient(circle at 10% 20%, rgba(224, 242, 233, 0.4) 0%, rgba(250, 250, 250, 1) 90%)"
      >
        <Container maxW="6xl">
          <SimpleGrid columns={{ base: 1, lg: 2 }} gap={12} alignItems="center">

            {/* Hero Left Content */}
            <Stack gap={6}>
              <Box>
                <Text
                  className="animate-fade-in-up"
                  fontSize="xs"
                  fontWeight="bold"
                  color="green.600"
                  letterSpacing="wider"
                  textTransform="uppercase"
                  bg="green.50"
                  display="inline-block"
                  px={3}
                  py={1}
                  borderRadius="full"
                  mb={4}
                >
                  Connecting Fruit Buyers & Growers Seamlessly
                </Text>
                <Heading
                  size="3xl"
                  lineHeight="1.1"
                  fontWeight="black"
                  color="gray.900"
                  letterSpacing="-0.03em"
                  className="animate-fade-in-up animate-delay-1"
                >
                  Modern Ledger &amp; Billing for the{" "}
                  <chakra.span
                    style={{
                      background: "linear-gradient(to right, var(--chakra-colors-green-600), var(--chakra-colors-teal-500))",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Fruit Market
                  </chakra.span>
                </Heading>
              </Box>

              <Text className="animate-fade-in-up animate-delay-2" fontSize="lg" color="gray.600" lineHeight="relaxed">
                Automate records for fruit lots, send instant rate updates to growers via automated SMS, and print custom watermarked statements of accounts in seconds.
              </Text>

              <Flex className="animate-fade-in-up animate-delay-3" gap={4} wrap="wrap" pt={2}>
                <Button asChild size="lg" colorPalette="green" px={8} shadow="md">
                  <NextLink href="/signup">Create Free Account</NextLink>
                </Button>
                <Button asChild size="lg" variant="outline" colorPalette="green" px={8}>
                  <NextLink href="/login">Try Demo Login</NextLink>
                </Button>
              </Flex>

              {/* Trust markers */}
              <Flex align="center" gap={6} pt={4} wrap="wrap">
                <Flex align="center" gap={1.5}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" style={{ color: "var(--chakra-colors-green-600)" }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <Text fontSize="xs" fontWeight="semibold" color="gray.600">Free 14-Day Trial</Text>
                </Flex>
                <Flex align="center" gap={1.5}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" style={{ color: "var(--chakra-colors-green-600)" }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <Text fontSize="xs" fontWeight="semibold" color="gray.600">No Credit Card Needed</Text>
                </Flex>
                <Flex align="center" gap={1.5}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" style={{ color: "var(--chakra-colors-green-600)" }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <Text fontSize="xs" fontWeight="semibold" color="gray.600">Instant Excel Migrator</Text>
                </Flex>
              </Flex>
            </Stack>

            {/* Hero Right Content - Stylized Interactive-Looking Dashboard Mockup */}
            <Box
              position="relative"
              bg="white"
              borderRadius="2xl"
              shadow="2xl"
              borderWidth="1px"
              borderColor="gray.200"
              p={6}
              overflow="hidden"
              className="animate-float"
              transition="all 0.3s"
              _hover={{ transform: "scale(1.01)" }}
            >
              {/* Fake Window Controls */}
              <Flex gap={1.5} mb={5}>
                <Box w="10px" h="10px" borderRadius="full" bg="red.400" />
                <Box w="10px" h="10px" borderRadius="full" bg="yellow.400" />
                <Box w="10px" h="10px" borderRadius="full" bg="green.400" />
                <Text fontSize="10px" color="gray.400" ml={4} mt={-0.5} fontWeight="medium">Dashboard - OrchardPay</Text>
              </Flex>

              {/* Fake Dashboard Header */}
              <Flex justify="space-between" align="center" mb={6}>
                <Box>
                  <Text fontSize="10px" color="gray.400" fontWeight="bold" textTransform="uppercase">Mandi Partner Portal</Text>
                  <Heading size="sm" color="gray.700">Daily Ledger Summary</Heading>
                </Box>
                <Text fontSize="11px" fontWeight="semibold" bg="green.50" color="green.700" px={2} py={0.5} borderRadius="md">
                  Active Session
                </Text>
              </Flex>

              {/* Quick statistics cards */}
              <SimpleGrid columns={3} gap={3} mb={6}>
                <Box bg="gray.50" p={3} borderRadius="lg" borderWidth="1px">
                  <Text fontSize="10px" color="gray.500">Total Dues</Text>
                  <Text fontSize="sm" fontWeight="bold" color="gray.800">₹18,42,500</Text>
                </Box>
                <Box bg="gray.50" p={3} borderRadius="lg" borderWidth="1px">
                  <Text fontSize="10px" color="gray.500">Crates Today</Text>
                  <Text fontSize="sm" fontWeight="bold" color="green.700">+340 peti</Text>
                </Box>
                <Box bg="gray.50" p={3} borderRadius="lg" borderWidth="1px">
                  <Text fontSize="10px" color="gray.500">SMS Gateway</Text>
                  <Text fontSize="sm" fontWeight="bold" color="teal.600">100% Online</Text>
                </Box>
              </SimpleGrid>

              {/* Live Mock Table */}
              <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
                <Box as="table" w="full" fontSize="11px">
                  <Box as="thead" bg="gray.100">
                    <Box as="tr" textAlign="left" color="gray.600">
                      <Box as="th" p={2} fontWeight="bold">Grower</Box>
                      <Box as="th" p={2} fontWeight="bold">Qty / Fruit</Box>
                      <Box as="th" p={2} fontWeight="bold">Rate</Box>
                      <Box as="th" p={2} fontWeight="bold" textAlign="right">Status</Box>
                    </Box>
                  </Box>
                  <Box as="tbody">
                    <Box as="tr" borderTopWidth="1px" bg="white">
                      <Box as="td" p={2} fontWeight="semibold" color="green.700">Ramesh Singh</Box>
                      <Box as="td" p={2}>120 peti (Apples)</Box>
                      <Box as="td" p={2}>₹1,200</Box>
                      <Box as="td" p={2} textAlign="right">
                        <Text as="span" bg="green.100" color="green.800" px={1.5} py={0.2} borderRadius="md" fontWeight="bold" fontSize="9px">SMS SENT</Text>
                      </Box>
                    </Box>
                    <Box as="tr" borderTopWidth="1px" bg="gray.50">
                      <Box as="td" p={2} fontWeight="semibold" color="green.700">Asha Patil</Box>
                      <Box as="td" p={2}>450 kg (Grapes)</Box>
                      <Box as="td" p={2}>₹85</Box>
                      <Box as="td" p={2} textAlign="right">
                        <Text as="span" bg="green.100" color="green.800" px={1.5} py={0.2} borderRadius="md" fontWeight="bold" fontSize="9px">SMS SENT</Text>
                      </Box>
                    </Box>
                    <Box as="tr" borderTopWidth="1px" bg="white">
                      <Box as="td" p={2} fontWeight="semibold" color="green.700">Sunil Kumar</Box>
                      <Box as="td" p={2}>80 daba (Mango)</Box>
                      <Box as="td" p={2}>₹600</Box>
                      <Box as="td" p={2} textAlign="right">
                        <Text as="span" bg="green.100" color="green.800" px={1.5} py={0.2} borderRadius="md" fontWeight="bold" fontSize="9px">SMS SENT</Text>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>

              {/* Watermark preview simulation overlay */}
              <Box
                position="absolute"
                top="40%"
                left="50%"
                transform="translate(-50%, -50%)"
                pointerEvents="none"
                opacity="0.04"
                zIndex="9"
              >
                <svg width="250" height="250" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 22h20L12 2z" />
                </svg>
              </Box>
            </Box>

          </SimpleGrid>
        </Container>
      </Box>

      {/* 3. Features Section */}
      <Box id="features" py={{ base: 16, md: 24 }} bg="white">
        <Container maxW="6xl">

          <Stack align="center" gap={4} mb={16} textAlign="center">
            <Heading size="lg" color="green.700" fontWeight="bold" textTransform="uppercase" letterSpacing="widest" fontSize="sm">
              Tailored features
            </Heading>
            <Heading size="2xl" fontWeight="extrabold" color="gray.900" maxW="2xl" letterSpacing="-0.02em">
              Built for high-volume fruit Wholesalers &amp; Commission Agents
            </Heading>
            <Text color="gray.600" maxW="xl">
              Ditch manual ledger notebooks, lost invoices, and telephone disputes. OrchardPay keeps your mandi business in sync in real time.
            </Text>
          </Stack>

          <SimpleGrid columns={{ base: 1, md: 2 }} gap={8}>
            {features.map((feat) => (
              <Flex
                key={feat.title}
                gap={4}
                p={6}
                borderWidth="1px"
                borderRadius="xl"
                borderColor="gray.200"
                transition="all 0.3s"
                _hover={{ shadow: "md", transform: "translateY(-2px)", borderColor: "green.200" }}
              >
                <Box
                  bg="green.50"
                  p={3}
                  borderRadius="lg"
                  h="fit-content"
                  color="green.600"
                >
                  {feat.icon}
                </Box>
                <Box>
                  <Heading size="md" color="gray.800" mb={2} fontWeight="bold">
                    {feat.title}
                  </Heading>
                  <Text color="gray.600" fontSize="sm" lineHeight="relaxed">
                    {feat.desc}
                  </Text>
                </Box>
              </Flex>
            ))}
          </SimpleGrid>

        </Container>
      </Box>

      {/* 4. Interactive ROI Calculator Section (Investor & User Wow Section) */}
      <Box id="roi-calculator" py={{ base: 16, md: 24 }} bg="green.50">
        <Container maxW="5xl">

          <Stack align="center" gap={3} mb={12} textAlign="center">
            <Heading size="lg" color="green.700" fontWeight="bold" textTransform="uppercase" letterSpacing="widest" fontSize="sm">
              Savings estimator
            </Heading>
            <Heading size="2xl" fontWeight="extrabold" color="green.900">
              Calculate your business returns
            </Heading>
            <Text color="green.750" maxW="lg">
              Adjust the values to see the immediate time and cash leakages you stop by switching to OrchardPay.
            </Text>
          </Stack>

          <Box bg="white" p={{ base: 6, md: 10 }} borderRadius="2xl" shadow="xl" borderWidth="1px" borderColor="green.100">
            <SimpleGrid columns={{ base: 1, md: 2 }} gap={10}>

              {/* Sliders Container */}
              <Stack gap={6}>
                <Box>
                  <Flex justify="space-between" mb={2}>
                    <Text fontWeight="semibold" color="gray.700" fontSize="sm">Active Growers</Text>
                    <Text fontWeight="bold" color="green.700">{growersCount} growers</Text>
                  </Flex>
                  <input
                    type="range"
                    min="5"
                    max="500"
                    value={growersCount}
                    onChange={(e) => setGrowersCount(parseInt(e.target.value))}
                    style={{ width: "100%", accentColor: "var(--chakra-colors-green-600)", cursor: "pointer" }}
                  />
                  <Flex justify="space-between" fontSize="10px" color="gray.400" mt={1}>
                    <Text>5</Text>
                    <Text>500</Text>
                  </Flex>
                </Box>

                <Box>
                  <Flex justify="space-between" mb={2}>
                    <Text fontWeight="semibold" color="gray.700" fontSize="sm">Daily Crate/Peti Volume</Text>
                    <Text fontWeight="bold" color="green.700">{dailyVolume} crates</Text>
                  </Flex>
                  <input
                    type="range"
                    min="10"
                    max="2000"
                    value={dailyVolume}
                    onChange={(e) => setDailyVolume(parseInt(e.target.value))}
                    style={{ width: "100%", accentColor: "var(--chakra-colors-green-600)", cursor: "pointer" }}
                  />
                  <Flex justify="space-between" fontSize="10px" color="gray.400" mt={1}>
                    <Text>10</Text>
                    <Text>2,000</Text>
                  </Flex>
                </Box>

                <Box bg="gray.50" p={4} borderRadius="lg" borderWidth="1px" borderColor="gray.200">
                  <Text fontSize="xs" color="gray.500" lineHeight="relaxed">
                    Estimates are calculated based on typical mandi wholesale commissions (8% average) and dispute handling times reported by commission agents.
                  </Text>
                </Box>
              </Stack>

              {/* Calculator Output Display */}
              <Box bg="linear-gradient(135deg, var(--chakra-colors-green-600), var(--chakra-colors-teal-600))" color="white" p={6} borderRadius="xl" shadow="md">
                <Heading size="md" mb={6} fontWeight="bold" borderBottomWidth="1px" borderColor="rgba(255,255,255,0.2)" pb={2}>
                  OrchardPay Monthly Impact
                </Heading>

                <Stack gap={4}>
                  <Flex justify="space-between" align="center">
                    <Text fontSize="xs" opacity="0.9">Hours Saved / Week:</Text>
                    <Text fontSize="lg" fontWeight="bold">{hoursSavedPerWeek} hrs</Text>
                  </Flex>
                  <Flex justify="space-between" align="center">
                    <Text fontSize="xs" opacity="0.9">Dispute Rate Drop:</Text>
                    <Text fontSize="lg" fontWeight="bold" color="teal.100">{disputeDropPercent}</Text>
                  </Flex>
                  <Flex justify="space-between" align="center">
                    <Text fontSize="xs" opacity="0.9">Revenue Leak Prevented:</Text>
                    <Text fontSize="lg" fontWeight="bold">₹{revenueLeakPrevented.toLocaleString("en-IN")}/mo</Text>
                  </Flex>
                  <Flex justify="space-between" align="center" pt={4} borderTopWidth="1px" borderColor="rgba(255,255,255,0.2)">
                    <Text fontSize="xs" fontWeight="bold">Monthly Volume Managed:</Text>
                    <Text fontSize="md" fontWeight="bold">{totalMonthlyVolume.toLocaleString()} crates</Text>
                  </Flex>
                  <Flex justify="space-between" align="center">
                    <Text fontSize="xs" fontWeight="bold">Estimated Dues Tracked:</Text>
                    <Text fontSize="md" fontWeight="bold">₹{estimatedLedgerDues.toLocaleString("en-IN")}</Text>
                  </Flex>
                </Stack>
              </Box>

            </SimpleGrid>
          </Box>

        </Container>
      </Box>

      {/* 4.5. Pricing Section */}
      <Box id="pricing" py={{ base: 16, md: 24 }} bg="white">
        <Container maxW="5xl">
          <Stack align="center" gap={3} mb={16} textAlign="center">
            <Heading size="lg" color="green.700" fontWeight="bold" textTransform="uppercase" letterSpacing="widest" fontSize="sm">
              Pricing Plans
            </Heading>
            <Heading size="2xl" fontWeight="extrabold" color="gray.900" letterSpacing="-0.02em">
              Simple, Predictable Pricing
            </Heading>
            <Text color="gray.600" maxW="lg">
              Empower your mandi business with instant ledger updates, automatic SMS receipts, and professional print outputs.
            </Text>
          </Stack>

          <SimpleGrid columns={{ base: 1, md: 2 }} gap={8} maxW="4xl" mx="auto" px={4}>
            {/* Card 1: Monthly Price, Charged Yearly */}
            <Box
              bg="white"
              borderRadius="2xl"
              borderWidth="1px"
              borderColor="gray.200"
              p={{ base: 6, md: 8 }}
              position="relative"
              transition="all 0.3s"
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              _hover={{ shadow: "xl", transform: "translateY(-4px)", borderColor: "green.300" }}
            >
              <Box>
                <Text fontSize="xs" fontWeight="bold" color="green.600" textTransform="uppercase" letterSpacing="wider" mb={2}>
                  Single Firm Plan
                </Text>
                <Heading size="xl" fontWeight="extrabold" color="gray.900" mb={1}>
                  ₹3,999<Text as="span" fontSize="sm" fontWeight="medium" color="gray.500"> / year</Text>
                </Heading>
                <Text fontSize="xs" fontWeight="semibold" color="green.700" bg="green.50" display="inline-block" px={2.5} py={0.5} borderRadius="full" mb={6}>
                  Billed annually (Equivalent to ₹333/mo)
                </Text>
                <Text color="gray.600" fontSize="sm" mb={6}>
                  Perfect for growing commission agents wanting to digitize their mandi workflow.
                </Text>

                <Stack gap={3.5} mb={8}>
                  <Flex align="center" gap={2.5}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" style={{ color: "var(--chakra-colors-green-600)" }}>
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <Text fontSize="sm" color="gray.700">Single Business Profile (1 Firm)</Text>
                  </Flex>
                  <Flex align="center" gap={2.5}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" style={{ color: "var(--chakra-colors-green-600)" }}>
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <Text fontSize="sm" color="gray.700">Unlimited fruit lot records</Text>
                  </Flex>
                  <Flex align="center" gap={2.5}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" style={{ color: "var(--chakra-colors-green-600)" }}>
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <Text fontSize="sm" color="gray.700">Instant Automated SMS Alerts</Text>
                  </Flex>
                  <Flex align="center" gap={2.5}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" style={{ color: "var(--chakra-colors-green-600)" }}>
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <Text fontSize="sm" color="gray.700">Excel / CSV Smart Reports</Text>
                  </Flex>
                  <Flex align="center" gap={2.5}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" style={{ color: "var(--chakra-colors-green-600)" }}>
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <Text fontSize="sm" color="gray.700">2 Staff Member Invitations</Text>
                  </Flex>
                </Stack>
              </Box>

              <Button asChild colorPalette="green" variant="outline" size="lg" w="full" shadow="sm">
                <NextLink href="/signup?plan=pro">Start 14-Day Free Trial</NextLink>
              </Button>
            </Box>

            {/* Card 2: Yearly Price, Charged Yearly */}
            <Box
              bg="white"
              borderRadius="2xl"
              borderWidth="2px"
              borderColor="green.500"
              p={{ base: 6, md: 8 }}
              position="relative"
              transition="all 0.3s"
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              shadow="lg"
              _hover={{ shadow: "2xl", transform: "translateY(-4px)" }}
            >
              {/* Popular Badge */}
              <Box
                position="absolute"
                top="-3.5"
                left="50%"
                transform="translateX(-50%)"
                bg="linear-gradient(135deg, var(--chakra-colors-green-600), var(--chakra-colors-teal-600))"
                color="white"
                fontSize="xs"
                fontWeight="extrabold"
                px={4}
                py={1}
                borderRadius="full"
                boxShadow="md"
                textTransform="uppercase"
                letterSpacing="wider"
                className="animate-pulse-badge"
              >
                Best Value
              </Box>

              <Box>
                <Text fontSize="xs" fontWeight="bold" color="green.600" textTransform="uppercase" letterSpacing="wider" mb={2} mt={2}>
                  Multi Firm Plan
                </Text>
                <Heading size="xl" fontWeight="extrabold" color="gray.900" mb={1}>
                  ₹6,999<Text as="span" fontSize="sm" fontWeight="medium" color="gray.500"> / year</Text>
                </Heading>
                <Text fontSize="xs" fontWeight="semibold" color="green.750" bg="green.50" display="inline-block" px={2.5} py={0.5} borderRadius="full" mb={6}>
                  Billed annually (Equivalent to ₹583/mo)
                </Text>
                <Text color="gray.600" fontSize="sm" mb={6}>
                  Complete setup for large mandi operations requiring multiple device sync, custom logos, and priority support.
                </Text>

                <Stack gap={3.5} mb={8}>
                  <Flex align="center" gap={2.5}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" style={{ color: "var(--chakra-colors-green-600)" }}>
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <Text fontSize="sm" color="gray.700" fontWeight="semibold">Multiple Business Profiles (Switch easily)</Text>
                  </Flex>
                  <Flex align="center" gap={2.5}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" style={{ color: "var(--chakra-colors-green-600)" }}>
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <Text fontSize="sm" color="gray.700" fontWeight="semibold">Unlimited lot records &amp; bills</Text>
                  </Flex>
                  <Flex align="center" gap={2.5}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" style={{ color: "var(--chakra-colors-green-600)" }}>
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <Text fontSize="sm" color="gray.700">Priority SMS Delivery Gateway</Text>
                  </Flex>
                  <Flex align="center" gap={2.5}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" style={{ color: "var(--chakra-colors-green-600)" }}>
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <Text fontSize="sm" color="gray.700">Custom Firm Logo &amp; Watermarked Print PDF</Text>
                  </Flex>
                  <Flex align="center" gap={2.5}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" style={{ color: "var(--chakra-colors-green-600)" }}>
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <Text fontSize="sm" color="gray.700">Unlimited Staff Members</Text>
                  </Flex>
                  <Flex align="center" gap={2.5}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" style={{ color: "var(--chakra-colors-green-600)" }}>
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <Text fontSize="sm" color="gray.700">Dedicated Support Manager (24/7)</Text>
                  </Flex>
                </Stack>
              </Box>

              <Button asChild colorPalette="green" size="lg" w="full" shadow="md">
                <NextLink href="/signup?plan=premium">Get Multi Firm Plan</NextLink>
              </Button>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* 5. FAQs Section */}
      <Box id="faq" py={{ base: 16, md: 24 }} bg="white">
        <Container maxW="4xl">

          <Stack align="center" gap={3} mb={16} textAlign="center">
            <Heading size="lg" color="green.700" fontWeight="bold" textTransform="uppercase" letterSpacing="widest" fontSize="sm">
              Got questions?
            </Heading>
            <Heading size="2xl" fontWeight="extrabold" color="gray.900" letterSpacing="-0.02em">
              Frequently Asked Questions
            </Heading>
            <Text color="gray.500" maxW="md">
              Everything you need to know about setting up your commission agent profile on OrchardPay.
            </Text>
          </Stack>

          <Stack gap={6}>
            {faqs.map((faq, i) => (
              <Box key={i} p={5} borderWidth="1px" borderRadius="xl" bg="gray.50">
                <Text fontWeight="bold" color="gray.800" fontSize="md" mb={2}>
                  {faq.q}
                </Text>
                <Text color="gray.600" fontSize="sm" lineHeight="relaxed">
                  {faq.a}
                </Text>
              </Box>
            ))}
          </Stack>

        </Container>
      </Box>

      {/* 6. Call To Action (Bottom Banner) */}
      <Box bg="linear-gradient(135deg, var(--chakra-colors-green-700), var(--chakra-colors-teal-800))" color="white" py={{ base: 16, md: 20 }}>
        <Container maxW="4xl" textAlign="center">
          <Heading size="2xl" fontWeight="extrabold" mb={4}>
            Ready to upgrade your Mandi Operations?
          </Heading>
          <Text fontSize="lg" opacity="0.9" mb={8} maxW="xl" mx="auto">
            Join the leading wholesalers who trust OrchardPay to handle millions in daily transactions with zero ledger errors.
            Start your free demo account now.
          </Text>
          <Flex gap={4} justify="center" wrap="wrap">
            <Button asChild size="lg" colorPalette="white" color="green.800" bg="white" _hover={{ bg: "gray.100" }} px={8} shadow="lg">
              <NextLink href="/signup">Register Your Firm</NextLink>
            </Button>
            <Button asChild size="lg" variant="outline" color="white" borderColor="white" _hover={{ bg: "rgba(255,255,255,0.1)" }} px={8}>
              <NextLink href="/login">Explore Live Demo</NextLink>
            </Button>
          </Flex>
        </Container>
      </Box>

      {/* 7. Footer Section */}
      <Box bg="gray.900" color="gray.400" py={12} borderTopWidth="1px" borderColor="gray.850">
        <Container maxW="6xl">
          <SimpleGrid columns={{ base: 1, md: 4 }} gap={8} mb={10}>

            {/* Logo Column */}
            <Stack gap={4}>
              <Flex align="center" gap={2}>
                <Box
                  bg="green.500"
                  w="24px"
                  h="24px"
                  borderRadius="md"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  color="white"
                  fontWeight="bold"
                  fontSize="sm"
                >
                  O
                </Box>
                <Text fontWeight="bold" color="white" fontSize="md">OrchardPay</Text>
              </Flex>
              <Text fontSize="xs" color="gray.500" lineHeight="relaxed">
                The modern accounting, invoice-generation, and notification ledger built explicitly for fresh produce commission wholesalers and growers.
              </Text>
            </Stack>

            {/* Links Column 1 */}
            <Stack gap={3}>
              <Text fontWeight="bold" color="white" fontSize="xs" textTransform="uppercase">Platform</Text>
              <chakra.a href="#features" fontSize="xs" color="gray.400" _hover={{ color: "green.400" }}>Features</chakra.a>
              <chakra.a href="#roi-calculator" fontSize="xs" color="gray.400" _hover={{ color: "green.400" }}>ROI Calculator</chakra.a>
              <chakra.a href="#pricing" fontSize="xs" color="gray.400" _hover={{ color: "green.400" }}>Pricing</chakra.a>
              <NextLink href="/login" style={{ fontSize: "12px", color: "var(--chakra-colors-gray-400)" }}>Live Demo</NextLink>
            </Stack>

            {/* Links Column 2 */}
            <Stack gap={3}>
              <Text fontWeight="bold" color="white" fontSize="xs" textTransform="uppercase">Resources</Text>
              <chakra.a href="#faq" fontSize="xs" color="gray.400" _hover={{ color: "green.400" }}>Support FAQ</chakra.a>
              <chakra.a href="#" fontSize="xs" color="gray.400" _hover={{ color: "green.400" }}>Privacy Policy</chakra.a>
              <chakra.a href="#" fontSize="xs" color="gray.400" _hover={{ color: "green.400" }}>Terms of Service</chakra.a>
            </Stack>

            {/* Links Column 3 (Tech Stack / Badges) */}
            <Stack gap={3}>
              <Text fontWeight="bold" color="white" fontSize="xs" textTransform="uppercase">Enterprise Grade</Text>
              <Flex gap={2} wrap="wrap">
                <Text bg="gray.850" color="gray.300" fontSize="10px" px={2} py={0.5} borderRadius="md" fontWeight="semibold">Prisma &amp; SQLite</Text>
                <Text bg="gray.850" color="gray.300" fontSize="10px" px={2} py={0.5} borderRadius="md" fontWeight="semibold">Next.js 15 AppRouter</Text>
                <Text bg="gray.850" color="gray.300" fontSize="10px" px={2} py={0.5} borderRadius="md" fontWeight="semibold">Chakra UI v3</Text>
              </Flex>
              <Text fontSize="10px" color="gray.600">Built for high-volume transactions and low latency delivery.</Text>
            </Stack>

          </SimpleGrid>

          <Flex justify="space-between" align="center" borderTopWidth="1px" borderColor="gray.800" pt={8} wrap="wrap" gap={4}>
            <Text fontSize="xs" color="gray.600">&copy; {new Date().getFullYear()} OrchardPay. All rights reserved.</Text>
            <Text fontSize="xs" color="white">Designed and developed by Sudo Technologies</Text>
          </Flex>

        </Container>
      </Box>

      {/* Modern CSS keyframe animations for the landing page */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
          100% { transform: translateY(0px); }
        }
        @keyframes pulse {
          0% {
            transform: translateX(-50%) scale(1);
            box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);
          }
          50% {
            transform: translateX(-50%) scale(1.05);
            box-shadow: 0 10px 15px -3px rgba(72,187,120,0.4), 0 4px 6px -2px rgba(72,187,120,0.2);
          }
          100% {
            transform: translateX(-50%) scale(1);
            box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-delay-1 {
          animation-delay: 0.1s;
          opacity: 0;
          animation-fill-mode: forwards;
        }
        .animate-delay-2 {
          animation-delay: 0.2s;
          opacity: 0;
          animation-fill-mode: forwards;
        }
        .animate-delay-3 {
          animation-delay: 0.3s;
          opacity: 0;
          animation-fill-mode: forwards;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-pulse-badge {
          animation: pulse 3s infinite ease-in-out;
        }
      `}</style>

    </Box>
  );
}
