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
    badge: "Mandi-Optimized",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    )
  },
  {
    title: "Instant SMS Receipts",
    desc: "Send immediate automatic SMS summaries to growers showing rates, quantities, and net balances. Zero delay, zero disputes.",
    badge: "99.9% Delivery",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    )
  },
  {
    title: "Watermarked Printables",
    desc: "Generate professional statements of accounts with your own firm logo automatically rendered as a header and subtle background watermark.",
    badge: "Anti-Counterfeit",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 9V2h12v7M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
        <rect x="6" y="14" width="12" height="8" />
      </svg>
    )
  },
  {
    title: "Excel/CSV Smart Import",
    desc: "Migrate historical transactions from spreadsheets instantly. The smart mapper handles columns automatically with no data loss.",
    badge: "1-Click Import",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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
    badge: "Multi-Firm",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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
    badge: "Secure Access",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    )
  }
];

const testimonials = [
  {
    quote: "OrchardPay has completely resolved our grower dispute issues. Before, growers would dispute rates sent over the phone. Now, they receive an automatic SMS receipt the second their fruit lot is weighed. It's a game-changer.",
    name: "Haji Mohammad Yousuf",
    role: "Senior Commission Agent",
    mandi: "Sopore Fruit Mandi",
    initials: "HY"
  },
  {
    quote: "We manage over 150 active growers during the grape season. Importing data from spreadsheets used to take hours every night. With OrchardPay's Excel Smart Import, we upload our daily statements in 2 minutes.",
    name: "Sanjay Patil",
    role: "Proprietor, Patil & Sons",
    mandi: "Nashik APMC Market",
    initials: "SP"
  },
  {
    quote: "Managing multiple firm profiles under one phone number is exactly what we needed. I can switch from my Apple trading ledger to my Pear trading ledger in one click. The watermarked statements are very professional.",
    name: "Arvinder Singh",
    role: "Arhtiya & Wholesaler",
    mandi: "Azadpur Mandi, Delhi",
    initials: "AS"
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

// Reusable FAQ Accordion Item Component
function FAQAccordionItem({ q, a }: { q: string; a: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Box
      borderWidth="1px"
      borderRadius="2xl"
      bg="rgba(255, 255, 255, 0.7)"
      backdropFilter="blur(8px)"
      borderColor={isOpen ? "green.200" : "gray.200"}
      transition="all 0.3s cubic-bezier(0.16, 1, 0.3, 1)"
      shadow={isOpen ? "lg" : "sm"}
      overflow="hidden"
    >
      <Flex
        p={5}
        justify="space-between"
        align="center"
        cursor="pointer"
        onClick={() => setIsOpen(!isOpen)}
        userSelect="none"
        _hover={{ bg: "rgba(240, 253, 244, 0.5)" }}
      >
        <Text fontWeight="bold" color="gray.800" fontSize="md" pr={4}>
          {q}
        </Text>
        <Box
          transform={isOpen ? "rotate(180deg)" : "rotate(0)"}
          transition="transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)"
          color="green.600"
          display="inline-flex"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </Box>
      </Flex>
      <Box
        maxH={isOpen ? "200px" : "0px"}
        opacity={isOpen ? 1 : 0}
        overflow="hidden"
        transition="all 0.3s cubic-bezier(0.16, 1, 0.3, 1)"
      >
        <Box p={5} pt={0} color="gray.600" fontSize="sm" lineHeight="relaxed" borderTopWidth="1px" borderColor="gray.100" bg="rgba(249, 250, 251, 0.5)">
          {a}
        </Box>
      </Box>
    </Box>
  );
}

export default function LandingPage() {
  // ROI Calculator State
  const [growersCount, setGrowersCount] = useState(60);
  const [dailyVolume, setDailyVolume] = useState(350); // crates/peti/daba per day

  // Phone lead state
  const [leadPhone, setLeadPhone] = useState("");

  // ROI calculations
  const totalMonthlyVolume = dailyVolume * 30;
  const estimatedLedgerDues = growersCount * dailyVolume * 165 * 30;
  const hoursSavedPerWeek = Math.round(growersCount * 0.4 + (dailyVolume / 60) * 2.5);
  const disputeDropPercent = "98.5%";
  const revenueLeakPrevented = Math.round((growersCount * dailyVolume * 22) * 0.012);

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (leadPhone.trim()) {
      window.location.href = `/signup?plan=pro&phone=${encodeURIComponent(leadPhone.trim())}`;
    }
  };

  return (
    <Box minH="100vh" bg="gray.50" color="gray.800" overflowX="hidden" className="grid-bg">
      <Navbar />

      {/* Hero Section */}
      <Box
        position="relative"
        overflow="hidden"
        py={{ base: 16, md: 28 }}
        bg="radial-gradient(circle at 10% 20%, rgba(220, 252, 231, 0.3) 0%, rgba(250, 250, 250, 1) 90%)"
      >
        {/* Glow Effects */}
        <Box position="absolute" top="-10%" left="50%" transform="translateX(-50%)" w="800px" h="450px" bg="radial-gradient(circle, rgba(74, 222, 128, 0.12) 0%, rgba(74, 222, 128, 0) 70%)" filter="blur(80px)" pointerEvents="none" />
        <Box position="absolute" bottom="0" right="-10%" w="500px" h="500px" bg="radial-gradient(circle, rgba(45, 212, 191, 0.08) 0%, rgba(45, 212, 191, 0) 70%)" filter="blur(60px)" pointerEvents="none" />

        <Container maxW="6xl" position="relative" zIndex={2}>
          <SimpleGrid columns={{ base: 1, lg: 2 }} gap={12} alignItems="center">
            
            {/* Hero Left Content */}
            <Stack gap={6}>
              <Box>
                <Flex
                  className="animate-fade-in-up"
                  align="center"
                  gap={1.5}
                  fontSize="xs"
                  fontWeight="bold"
                  color="green.700"
                  bg="linear-gradient(135deg, rgba(220, 252, 231, 0.8), rgba(204, 251, 241, 0.8))"
                  backdropFilter="blur(4px)"
                  borderWidth="1px"
                  borderColor="green.200"
                  display="inline-flex"
                  px={3.5}
                  py={1.5}
                  borderRadius="full"
                  mb={5}
                  shadow="sm"
                >
                  <Box w="6px" h="6px" borderRadius="full" bg="green.500" className="animate-ping" />
                  <Text letterSpacing="wide" textTransform="uppercase">Connecting Fruit Buyers &amp; Growers</Text>
                </Flex>

                <Heading
                  size="3xl"
                  lineHeight="1.1"
                  fontWeight="black"
                  color="gray.900"
                  letterSpacing="-0.03em"
                  className="animate-fade-in-up animate-delay-1"
                >
                  The Mandi Ledger,{" "}
                  <chakra.span
                    style={{
                      background: "linear-gradient(to right, var(--chakra-colors-green-600), var(--chakra-colors-teal-500))",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Evolved.
                  </chakra.span>
                </Heading>
              </Box>

              <Text className="animate-fade-in-up animate-delay-2" fontSize="lg" color="gray.600" lineHeight="relaxed">
                Automate records for fruit lots, send instant rate updates to growers via automated SMS, and print custom watermarked statements of accounts in seconds.
              </Text>

              {/* CRO Optimized Lead Form */}
              <Box className="animate-fade-in-up animate-delay-3" pt={2}>
                <chakra.form onSubmit={handleLeadSubmit}>
                  <Flex
                    direction={{ base: "column", sm: "row" }}
                    gap={2.5}
                    bg="white"
                    p={2}
                    borderRadius="2xl"
                    shadow="xl"
                    borderWidth="1px"
                    borderColor="gray.200"
                    maxW="lg"
                    _focusWithin={{ borderColor: "green.400", shadow: "2xl" }}
                    transition="all 0.3s"
                  >
                    <chakra.input
                      placeholder="Enter mobile number"
                      type="tel"
                      value={leadPhone}
                      onChange={(e) => setLeadPhone(e.target.value)}
                      required
                      px={4}
                      h="50px"
                      fontSize="md"
                      fontWeight="medium"
                      color="gray.800"
                      border="none"
                      outline="none"
                      bg="transparent"
                      _placeholder={{ color: "gray.400" }}
                      style={{ width: "100%" }}
                    />
                    <Button
                      type="submit"
                      colorPalette="green"
                      size="lg"
                      px={8}
                      h="50px"
                      borderRadius="xl"
                      fontWeight="bold"
                      shadow="md"
                      _hover={{ shadow: "lg", transform: "translateY(-1px)" }}
                      transition="all 0.2s"
                    >
                      Register Firm
                    </Button>
                  </Flex>
                </chakra.form>
                
                {/* Secondary link */}
                <Flex align="center" gap={2} mt={3} pl={3}>
                  <Text fontSize="xs" color="gray.400">or check live demo:</Text>
                  <NextLink href="/login" style={{ fontSize: "12px", color: "var(--chakra-colors-green-600)", fontWeight: 700, textDecoration: "underline" }}>
                    Explore Live Demo Account &rarr;
                  </NextLink>
                </Flex>
              </Box>

              {/* Trust markers */}
              <SimpleGrid columns={{ base: 2, sm: 3 }} gap={4} pt={4} className="animate-fade-in-up animate-delay-4">
                <Flex align="center" gap={2}>
                  <Box p={1} bg="green.50" color="green.600" borderRadius="full">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </Box>
                  <Text fontSize="xs" fontWeight="bold" color="gray.600">Immediate Setup</Text>
                </Flex>
                <Flex align="center" gap={2}>
                  <Box p={1} bg="green.50" color="green.600" borderRadius="full">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </Box>
                  <Text fontSize="xs" fontWeight="bold" color="gray.600">No Credit Card Needed</Text>
                </Flex>
                <Flex align="center" gap={2}>
                  <Box p={1} bg="green.50" color="green.600" borderRadius="full">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </Box>
                  <Text fontSize="xs" fontWeight="bold" color="gray.600">Instant Excel Migrator</Text>
                </Flex>
              </SimpleGrid>
            </Stack>

            {/* Hero Right Content - Modern Interactive-Looking Dashboard Mockup */}
            <Box
              position="relative"
              bg="rgba(255, 255, 255, 0.75)"
              backdropFilter="blur(16px)"
              borderRadius="3xl"
              shadow="2xl"
              borderWidth="1px"
              borderColor="rgba(255, 255, 255, 0.4)"
              p={6}
              overflow="hidden"
              className="animate-float"
              transition="all 0.3s"
              _hover={{ transform: "translateY(-4px) scale(1.01)", shadow: "3xl" }}
            >
              {/* Fake Window Controls */}
              <Flex gap={1.5} mb={5} justify="space-between" align="center">
                <Flex gap={1.5}>
                  <Box w="11px" h="11px" borderRadius="full" bg="red.400" />
                  <Box w="11px" h="11px" borderRadius="full" bg="yellow.400" />
                  <Box w="11px" h="11px" borderRadius="full" bg="green.400" />
                </Flex>
                <Box bg="rgba(0,0,0,0.04)" px={3} py={1} borderRadius="full">
                  <Text fontSize="9px" color="gray.500" fontWeight="bold" letterSpacing="widest" textTransform="uppercase">Live System Status</Text>
                </Box>
              </Flex>

              {/* Fake Dashboard Header */}
              <Flex justify="space-between" align="center" mb={6}>
                <Box>
                  <Text fontSize="9px" color="green.600" fontWeight="extrabold" textTransform="uppercase" letterSpacing="wider">Mandi Partner Portal</Text>
                  <Heading size="md" color="gray.800" fontWeight="extrabold">Daily Ledger Summary</Heading>
                </Box>
                <Flex align="center" gap={1.5} bg="green.50" color="green.700" px={2.5} py={1} borderRadius="lg" borderWidth="1px" borderColor="green.200">
                  <Box w="6px" h="6px" borderRadius="full" bg="green.500" />
                  <Text fontSize="10px" fontWeight="bold">ACTIVE SESSION</Text>
                </Flex>
              </Flex>

              {/* Quick statistics cards */}
              <SimpleGrid columns={3} gap={3} mb={6}>
                <Box bg="white" p={3.5} borderRadius="2xl" shadow="sm" borderWidth="1px" borderColor="gray.100" _hover={{ transform: "scale(1.02)" }} transition="transform 0.2s">
                  <Text fontSize="9px" color="gray.400" fontWeight="bold" textTransform="uppercase" mb={1}>Total Dues</Text>
                  <Text fontSize="sm" fontWeight="black" color="gray.800">₹18,42,500</Text>
                </Box>
                <Box bg="white" p={3.5} borderRadius="2xl" shadow="sm" borderWidth="1px" borderColor="gray.100" _hover={{ transform: "scale(1.02)" }} transition="transform 0.2s">
                  <Text fontSize="9px" color="gray.400" fontWeight="bold" textTransform="uppercase" mb={1}>Crates Today</Text>
                  <Text fontSize="sm" fontWeight="black" color="green.600">+340 peti</Text>
                </Box>
                <Box bg="white" p={3.5} borderRadius="2xl" shadow="sm" borderWidth="1px" borderColor="gray.100" _hover={{ transform: "scale(1.02)" }} transition="transform 0.2s">
                  <Text fontSize="9px" color="gray.400" fontWeight="bold" textTransform="uppercase" mb={1}>SMS Gateway</Text>
                  <Text fontSize="sm" fontWeight="black" color="teal.500">99.9% Online</Text>
                </Box>
              </SimpleGrid>

              {/* Live Mock Table */}
              <Box bg="white" borderWidth="1px" borderColor="gray.100" borderRadius="2xl" overflow="hidden" shadow="sm">
                <Box as="table" w="full" fontSize="11px">
                  <Box as="thead" bg="gray.50">
                    <Box as="tr" textAlign="left" color="gray.500">
                      <Box as="th" px={4} py={3} fontWeight="bold" textTransform="uppercase" fontSize="9px" letterSpacing="wider">Grower</Box>
                      <Box as="th" px={4} py={3} fontWeight="bold" textTransform="uppercase" fontSize="9px" letterSpacing="wider">Qty / Fruit</Box>
                      <Box as="th" px={4} py={3} fontWeight="bold" textTransform="uppercase" fontSize="9px" letterSpacing="wider">Rate</Box>
                      <Box as="th" px={4} py={3} fontWeight="bold" textTransform="uppercase" fontSize="9px" letterSpacing="wider" textAlign="right">Status</Box>
                    </Box>
                  </Box>
                  <Box as="tbody">
                    <Box as="tr" borderTopWidth="1px" bg="white" _hover={{ bg: "green.50/20" }} transition="background 0.2s">
                      <Box as="td" px={4} py={3} fontWeight="bold" color="gray.700">Ramesh Singh</Box>
                      <Box as="td" px={4} py={3} color="gray.600">120 peti (Apples)</Box>
                      <Box as="td" px={4} py={3} fontWeight="semibold" color="gray.700">₹1,200</Box>
                      <Box as="td" px={4} py={3} textAlign="right">
                        <Text as="span" bg="green.50" color="green.700" px={2.5} py={0.8} borderRadius="md" fontWeight="black" fontSize="8px" borderWidth="1px" borderColor="green.200" shadow="sm">SMS SENT</Text>
                      </Box>
                    </Box>
                    <Box as="tr" borderTopWidth="1px" bg="gray.50/50" _hover={{ bg: "green.50/20" }} transition="background 0.2s">
                      <Box as="td" px={4} py={3} fontWeight="bold" color="gray.700">Asha Patil</Box>
                      <Box as="td" px={4} py={3} color="gray.600">450 kg (Grapes)</Box>
                      <Box as="td" px={4} py={3} fontWeight="semibold" color="gray.700">₹85</Box>
                      <Box as="td" px={4} py={3} textAlign="right">
                        <Text as="span" bg="green.50" color="green.700" px={2.5} py={0.8} borderRadius="md" fontWeight="black" fontSize="8px" shadow="sm">SMS SENT</Text>
                      </Box>
                    </Box>
                    <Box as="tr" borderTopWidth="1px" bg="white" _hover={{ bg: "green.50/20" }} transition="background 0.2s">
                      <Box as="td" px={4} py={3} fontWeight="bold" color="gray.700">Sunil Kumar</Box>
                      <Box as="td" px={4} py={3} color="gray.600">80 daba (Mango)</Box>
                      <Box as="td" px={4} py={3} fontWeight="semibold" color="gray.700">₹600</Box>
                      <Box as="td" px={4} py={3} textAlign="right">
                        <Text as="span" bg="green.50" color="green.700" px={2.5} py={0.8} borderRadius="md" fontWeight="black" fontSize="8px" shadow="sm">SMS SENT</Text>
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
                opacity="0.03"
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

      {/* Features Section */}
      <Box id="features" py={{ base: 20, md: 28 }} bg="white" position="relative">
        <Box position="absolute" top="0" left="0" right="0" h="1px" bg="linear-gradient(to right, transparent, gray.200, transparent)" />
        
        <Container maxW="6xl">
          <Stack align="center" gap={4} mb={20} textAlign="center">
            <Heading size="xs" color="green.600" fontWeight="bold" textTransform="uppercase" letterSpacing="widest">
              Tailored Features
            </Heading>
            <Heading size="2xl" fontWeight="black" color="gray.900" maxW="2xl" letterSpacing="-0.02em" lineHeight="1.15">
              Built for high-volume fruit Wholesalers &amp; Commission Agents
            </Heading>
            <Text color="gray.500" maxW="xl" fontSize="md">
              Ditch manual ledger notebooks, lost invoices, and telephone disputes. OrchardPay keeps your mandi business in sync in real time.
            </Text>
          </Stack>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={8}>
            {features.map((feat) => (
              <Flex
                key={feat.title}
                direction="column"
                p={7}
                bg="white"
                borderWidth="1px"
                borderRadius="2xl"
                borderColor="gray.200"
                transition="all 0.3s cubic-bezier(0.16, 1, 0.3, 1)"
                _hover={{
                  shadow: "2xl",
                  transform: "translateY(-6px)",
                  borderColor: "green.300",
                }}
                position="relative"
                overflow="hidden"
              >
                <Box
                  bg="linear-gradient(135deg, rgba(74, 222, 128, 0.1), rgba(45, 212, 191, 0.1))"
                  color="green.600"
                  p={3.5}
                  borderRadius="xl"
                  h="fit-content"
                  w="fit-content"
                  mb={6}
                >
                  {feat.icon}
                </Box>
                <Box flex="1">
                  <Flex align="center" gap={2} mb={2.5}>
                    <Heading size="sm" color="gray.850" fontWeight="black">
                      {feat.title}
                    </Heading>
                    <Text fontSize="9px" fontWeight="bold" bg="green.50" color="green.700" px={2} py={0.5} borderRadius="full">
                      {feat.badge}
                    </Text>
                  </Flex>
                  <Text color="gray.500" fontSize="sm" lineHeight="relaxed">
                    {feat.desc}
                  </Text>
                </Box>
              </Flex>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* Social Proof / Testimonials Section */}
      <Box py={{ base: 20, md: 28 }} bg="gray.50" position="relative">
        <Container maxW="6xl">
          <Stack align="center" gap={4} mb={16} textAlign="center">
            <Heading size="xs" color="green.600" fontWeight="bold" textTransform="uppercase" letterSpacing="widest">
              Trusted by Arhtiyas
            </Heading>
            <Heading size="2xl" fontWeight="black" color="gray.900" maxW="2xl" letterSpacing="-0.02em" lineHeight="1.15">
              Success stories from India's leading fruit markets
            </Heading>
            <Text color="gray.500" maxW="xl" fontSize="md">
              See how commission wholesalers are increasing speed and eliminating billing disputes.
            </Text>
          </Stack>

          <SimpleGrid columns={{ base: 1, lg: 3 }} gap={8}>
            {testimonials.map((test, index) => (
              <Box
                key={index}
                bg="white"
                p={8}
                borderRadius="3xl"
                borderWidth="1px"
                borderColor="gray.200"
                shadow="sm"
                position="relative"
                transition="transform 0.3s"
                _hover={{ transform: "scale(1.02)" }}
              >
                {/* Quotes Graphic */}
                <Text
                  position="absolute"
                  top="2"
                  right="6"
                  fontSize="7xl"
                  fontWeight="black"
                  color="green.50"
                  lineHeight="none"
                  userSelect="none"
                  pointerEvents="none"
                >
                  “
                </Text>

                {/* Rating */}
                <Flex gap={1} mb={6}>
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ color: "#FBBF24" }}>
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </Flex>

                <Text color="gray.600" fontSize="sm" lineHeight="relaxed" fontStyle="italic" mb={8} position="relative" zIndex={2}>
                  "{test.quote}"
                </Text>

                <Flex align="center" gap={3.5} borderTopWidth="1px" borderColor="gray.100" pt={4}>
                  <Flex
                    w="40px"
                    h="40px"
                    borderRadius="full"
                    bg="linear-gradient(135deg, var(--chakra-colors-green-500), var(--chakra-colors-teal-600))"
                    color="white"
                    fontWeight="black"
                    fontSize="sm"
                    align="center"
                    justify="center"
                    shadow="sm"
                  >
                    {test.initials}
                  </Flex>
                  <Box>
                    <Text fontWeight="extrabold" color="gray.850" fontSize="sm">{test.name}</Text>
                    <Text fontSize="11px" color="gray.400" fontWeight="semibold">{test.role}</Text>
                    <Text fontSize="10px" color="green.600" fontWeight="bold" mt={0.5} bg="green.50" px={2} py={0.2} borderRadius="md" display="inline-block">
                      {test.mandi}
                    </Text>
                  </Box>
                </Flex>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* Interactive ROI Calculator Section */}
      <Box id="roi-calculator" py={{ base: 20, md: 28 }} bg="green.50/40" position="relative">
        <Container maxW="5xl">
          <Stack align="center" gap={3} mb={16} textAlign="center">
            <Heading size="xs" color="green.600" fontWeight="bold" textTransform="uppercase" letterSpacing="widest">
              Savings Estimator
            </Heading>
            <Heading size="2xl" fontWeight="black" color="green.900" letterSpacing="-0.02em" lineHeight="1.15">
              Calculate your business returns
            </Heading>
            <Text color="green.800/80" maxW="lg" fontSize="md">
              Adjust the sliders to estimate the weekly hours and revenue leaks saved by switching to OrchardPay.
            </Text>
          </Stack>

          <Box
            bg="white"
            p={{ base: 6, md: 10 }}
            borderRadius="3xl"
            shadow="xl"
            borderWidth="1px"
            borderColor="green.100"
          >
            <SimpleGrid columns={{ base: 1, md: 2 }} gap={12} alignItems="center">
              
              {/* Sliders Container */}
              <Stack gap={8}>
                <Box>
                  <Flex justify="space-between" align="baseline" mb={3}>
                    <Text fontWeight="extrabold" color="gray.700" fontSize="sm">Active Growers</Text>
                    <Text fontWeight="black" color="green.700" fontSize="md">{growersCount} growers</Text>
                  </Flex>
                  <input
                    type="range"
                    min="5"
                    max="500"
                    value={growersCount}
                    onChange={(e) => setGrowersCount(parseInt(e.target.value))}
                    style={{
                      width: "100%",
                      accentColor: "var(--chakra-colors-green-600)",
                      cursor: "pointer",
                      height: "6px",
                      borderRadius: "3px"
                    }}
                  />
                  <Flex justify="space-between" fontSize="10px" color="gray.400" mt={2} fontWeight="bold">
                    <Text>5 GROWERS</Text>
                    <Text>500 GROWERS</Text>
                  </Flex>
                </Box>

                <Box>
                  <Flex justify="space-between" align="baseline" mb={3}>
                    <Text fontWeight="extrabold" color="gray.700" fontSize="sm">Daily Crate/Peti Volume</Text>
                    <Text fontWeight="black" color="green.700" fontSize="md">{dailyVolume} crates</Text>
                  </Flex>
                  <input
                    type="range"
                    min="10"
                    max="2000"
                    value={dailyVolume}
                    onChange={(e) => setDailyVolume(parseInt(e.target.value))}
                    style={{
                      width: "100%",
                      accentColor: "var(--chakra-colors-green-600)",
                      cursor: "pointer",
                      height: "6px",
                      borderRadius: "3px"
                    }}
                  />
                  <Flex justify="space-between" fontSize="10px" color="gray.400" mt={2} fontWeight="bold">
                    <Text>10 CRATES</Text>
                    <Text>2,000 CRATES</Text>
                  </Flex>
                </Box>

                <Box bg="gray.50" p={4} borderRadius="2xl" borderWidth="1px" borderColor="gray.150">
                  <Text fontSize="xs" color="gray.400" lineHeight="relaxed" fontWeight="medium">
                    Estimates are calculated based on typical mandi wholesale commissions (8% average) and dispute resolution times reported by active commission agents.
                  </Text>
                </Box>
              </Stack>

              {/* Calculator Output Display */}
              <Box
                bg="linear-gradient(135deg, var(--chakra-colors-green-700), var(--chakra-colors-teal-800))"
                color="white"
                p={8}
                borderRadius="3xl"
                shadow="2xl"
                position="relative"
                overflow="hidden"
              >
                {/* Glow ring in card */}
                <Box position="absolute" top="-20%" right="-20%" w="200px" h="200px" bg="rgba(255,255,255,0.06)" borderRadius="full" filter="blur(20px)" />

                <Heading size="sm" mb={6} fontWeight="black" borderBottomWidth="1px" borderColor="rgba(255,255,255,0.15)" pb={3.5} textTransform="uppercase" letterSpacing="wider">
                  Monthly Impact Summary
                </Heading>

                <Stack gap={5}>
                  <Flex justify="space-between" align="center">
                    <Text fontSize="xs" opacity="0.8" fontWeight="bold">Hours Saved / Week:</Text>
                    <Text fontSize="lg" fontWeight="black" bg="rgba(255,255,255,0.1)" px={3} py={1} borderRadius="lg">{hoursSavedPerWeek} hrs</Text>
                  </Flex>
                  <Flex justify="space-between" align="center">
                    <Text fontSize="xs" opacity="0.8" fontWeight="bold">Dispute Rate Drop:</Text>
                    <Text fontSize="lg" fontWeight="black" color="green.200" bg="rgba(255,255,255,0.1)" px={3} py={1} borderRadius="lg">{disputeDropPercent}</Text>
                  </Flex>
                  <Flex justify="space-between" align="center">
                    <Text fontSize="xs" opacity="0.8" fontWeight="bold">Revenue Leaks Prevented:</Text>
                    <Text fontSize="lg" fontWeight="black" bg="rgba(255,255,255,0.1)" px={3} py={1} borderRadius="lg">₹{revenueLeakPrevented.toLocaleString("en-IN")}/mo</Text>
                  </Flex>
                  
                  <Box borderTopWidth="1px" borderColor="rgba(255,255,255,0.15)" pt={4}>
                    <Flex justify="space-between" align="center" mb={2}>
                      <Text fontSize="xs" fontWeight="bold" opacity="0.7">Volume Managed:</Text>
                      <Text fontSize="sm" fontWeight="extrabold">{totalMonthlyVolume.toLocaleString()} crates/mo</Text>
                    </Flex>
                    <Flex justify="space-between" align="center">
                      <Text fontSize="xs" fontWeight="bold" opacity="0.7">Ledger Dues Tracked:</Text>
                      <Text fontSize="sm" fontWeight="extrabold" color="green.200">₹{estimatedLedgerDues.toLocaleString("en-IN")}</Text>
                    </Flex>
                  </Box>
                </Stack>
              </Box>

            </SimpleGrid>
          </Box>
        </Container>
      </Box>

      {/* Pricing Section */}
      <Box id="pricing" py={{ base: 20, md: 28 }} bg="white">
        <Container maxW="5xl">
          <Stack align="center" gap={3} mb={16} textAlign="center">
            <Heading size="xs" color="green.600" fontWeight="bold" textTransform="uppercase" letterSpacing="widest">
              Pricing Plans
            </Heading>
            <Heading size="2xl" fontWeight="black" color="gray.900" letterSpacing="-0.02em">
              Simple, Annual Pricing
            </Heading>
            <Text color="gray.500" maxW="lg" fontSize="md">
              Empower your mandi business with instant ledger updates, automatic SMS receipts, and professional print outputs.
            </Text>
          </Stack>

          <SimpleGrid columns={{ base: 1, md: 2 }} gap={8} maxW="4xl" mx="auto" px={4}>
            
            {/* Card 1: Single Firm Plan */}
            <Box
              bg="white"
              borderRadius="3xl"
              borderWidth="1px"
              borderColor="gray.200"
              p={{ base: 8, md: 10 }}
              position="relative"
              transition="all 0.3s cubic-bezier(0.16, 1, 0.3, 1)"
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              _hover={{ shadow: "2xl", transform: "translateY(-4px)", borderColor: "green.300" }}
            >
              <Box>
                <Text fontSize="xs" fontWeight="black" color="green.600" textTransform="uppercase" letterSpacing="wider" mb={3}>
                  Single Firm Plan
                </Text>
                <Flex align="baseline" mb={1}>
                  <Heading size="2xl" fontWeight="black" color="gray.900">
                    ₹3,999
                  </Heading>
                  <Text fontSize="sm" fontWeight="semibold" color="gray.400" ml={1}>
                    / year
                  </Text>
                </Flex>
                <Text fontSize="11px" fontWeight="bold" color="green.700" bg="green.50" display="inline-block" px={2.5} py={0.8} borderRadius="lg" mb={6}>
                  Billed annually (Equivalent to ₹333/month)
                </Text>
                <Text color="gray.500" fontSize="sm" mb={8} lineHeight="relaxed">
                  Perfect for growing commission agents wanting to digitize their mandi workflow.
                </Text>

                <Stack gap={4} mb={10}>
                  <Flex align="center" gap={3}>
                    <Box color="green.600">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </Box>
                    <Text fontSize="sm" color="gray.700" fontWeight="medium">Single Business Profile (1 Firm)</Text>
                  </Flex>
                  <Flex align="center" gap={3}>
                    <Box color="green.600">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </Box>
                    <Text fontSize="sm" color="gray.700" fontWeight="medium">Unlimited fruit lot records</Text>
                  </Flex>
                  <Flex align="center" gap={3}>
                    <Box color="green.600">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </Box>
                    <Text fontSize="sm" color="gray.700" fontWeight="medium">Standard SMS Delivery Gateway</Text>
                  </Flex>
                  <Flex align="center" gap={3}>
                    <Box color="green.600">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </Box>
                    <Text fontSize="sm" color="gray.700" fontWeight="medium">Standard Excel / CSV Reports</Text>
                  </Flex>
                  <Flex align="center" gap={3}>
                    <Box color="green.600">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </Box>
                    <Text fontSize="sm" color="gray.700" fontWeight="medium">2 Staff Member Invitations</Text>
                  </Flex>
                  <Flex align="center" gap={3} opacity={0.5}>
                    <Box color="red.500">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                    </Box>
                    <Text fontSize="sm" color="gray.500" textDecoration="line-through">Custom Logo Watermarked statements (Premium USP)</Text>
                  </Flex>
                </Stack>
              </Box>

              <Button asChild colorPalette="green" variant="outline" size="lg" w="full" shadow="sm" h="54px" borderRadius="xl">
                <NextLink href={`/signup?plan=pro`}>Register Single Firm</NextLink>
              </Button>
            </Box>

            {/* Card 2: Multi Firm Plan */}
            <Box
              bg="white"
              borderRadius="3xl"
              borderWidth="2px"
              borderColor="green.500"
              p={{ base: 8, md: 10 }}
              position="relative"
              transition="all 0.3s cubic-bezier(0.16, 1, 0.3, 1)"
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              shadow="xl"
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
                fontSize="10px"
                fontWeight="black"
                px={4}
                py={1.5}
                borderRadius="full"
                boxShadow="md"
                textTransform="uppercase"
                letterSpacing="widest"
                className="animate-pulse-badge"
              >
                Best Value
              </Box>

              <Box>
                <Text fontSize="xs" fontWeight="black" color="green.600" textTransform="uppercase" letterSpacing="wider" mb={3} mt={2}>
                  Multi Firm Plan
                </Text>
                <Flex align="baseline" mb={1}>
                  <Heading size="2xl" fontWeight="black" color="gray.900">
                    ₹6,999
                  </Heading>
                  <Text fontSize="sm" fontWeight="semibold" color="gray.400" ml={1}>
                    / year
                  </Text>
                </Flex>
                <Text fontSize="11px" fontWeight="bold" color="green.750" bg="green.50" display="inline-block" px={2.5} py={0.8} borderRadius="lg" mb={6}>
                  Billed annually (Equivalent to ₹583/month)
                </Text>
                <Text color="gray.500" fontSize="sm" mb={8} lineHeight="relaxed">
                  Complete setup for large mandi operations requiring multiple device sync, custom logos, and priority support.
                </Text>

                <Stack gap={4} mb={10}>
                  <Flex align="center" gap={3}>
                    <Box color="green.600">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </Box>
                    <Text fontSize="sm" color="gray.700" fontWeight="bold">Multiple Business Profiles (Switch easily)</Text>
                  </Flex>
                  <Flex align="center" gap={3}>
                    <Box color="green.600">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </Box>
                    <Text fontSize="sm" color="gray.700" fontWeight="bold">Unlimited lot records &amp; bills</Text>
                  </Flex>
                  <Flex align="center" gap={3}>
                    <Box color="green.600">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </Box>
                    <Text fontSize="sm" color="gray.700" fontWeight="bold">Priority SMS Delivery Gateway</Text>
                  </Flex>
                  <Flex align="center" gap={3} bg="green.50/50" p={1.5} borderRadius="lg" borderWidth="1px" borderColor="green.100">
                    <Box color="green.600">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </Box>
                    <Text fontSize="sm" color="green.800" fontWeight="extrabold">Custom Firm Logo &amp; Watermarked Print PDF (USP)</Text>
                  </Flex>
                  <Flex align="center" gap={3}>
                    <Box color="green.600">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </Box>
                    <Text fontSize="sm" color="gray.700" fontWeight="bold">Unlimited Staff Members</Text>
                  </Flex>
                  <Flex align="center" gap={3}>
                    <Box color="green.600">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </Box>
                    <Text fontSize="sm" color="gray.700" fontWeight="bold">Dedicated Support Manager (24/7)</Text>
                  </Flex>
                </Stack>
              </Box>

              <Button asChild colorPalette="green" size="lg" w="full" shadow="md" h="54px" borderRadius="xl">
                <NextLink href={`/signup?plan=premium`}>Get Multi Firm Plan</NextLink>
              </Button>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* FAQ Section */}
      <Box id="faq" py={{ base: 20, md: 28 }} bg="gray.50" position="relative">
        <Container maxW="4xl">
          <Stack align="center" gap={3} mb={16} textAlign="center">
            <Heading size="xs" color="green.600" fontWeight="bold" textTransform="uppercase" letterSpacing="widest">
              Got Questions?
            </Heading>
            <Heading size="2xl" fontWeight="black" color="gray.900" letterSpacing="-0.02em" lineHeight="1.15">
              Frequently Asked Questions
            </Heading>
            <Text color="gray.500" maxW="md" fontSize="md">
              Everything you need to know about setting up your commission agent profile on OrchardPay.
            </Text>
          </Stack>

          <Stack gap={4}>
            {faqs.map((faq, i) => (
              <FAQAccordionItem key={i} q={faq.q} a={faq.a} />
            ))}
          </Stack>
        </Container>
      </Box>

      {/* Call To Action Banner */}
      <Box
        bg="linear-gradient(135deg, var(--chakra-colors-green-700), var(--chakra-colors-teal-800))"
        color="white"
        py={{ base: 20, md: 24 }}
        position="relative"
        overflow="hidden"
      >
        {/* Glow rings in banner */}
        <Box position="absolute" top="-50%" left="-10%" w="400px" h="400px" bg="rgba(255,255,255,0.05)" borderRadius="full" filter="blur(40px)" />
        <Box position="absolute" bottom="-50%" right="-10%" w="400px" h="400px" bg="rgba(255,255,255,0.05)" borderRadius="full" filter="blur(40px)" />

        <Container maxW="4xl" textAlign="center" position="relative" zIndex={2}>
          <Heading size="2xl" fontWeight="black" mb={4} letterSpacing="-0.02em" lineHeight="1.15">
            Ready to upgrade your Mandi Operations?
          </Heading>
          <Text fontSize="lg" opacity="0.9" mb={10} maxW="xl" mx="auto" lineHeight="relaxed">
            Join the leading wholesalers who trust OrchardPay to handle millions in daily transactions with zero ledger errors. Try our live demo account now.
          </Text>
          <Flex gap={4.5} justify="center" wrap="wrap">
            <Button asChild size="lg" colorPalette="white" color="green.800" bg="white" _hover={{ bg: "gray.100", transform: "translateY(-1px)" }} px={8} shadow="lg" h="54px" borderRadius="xl">
              <NextLink href="/signup">Register Your Firm</NextLink>
            </Button>
            <Button asChild size="lg" variant="outline" color="white" borderColor="white" _hover={{ bg: "rgba(255,255,255,0.1)", transform: "translateY(-1px)" }} px={8} h="54px" borderRadius="xl">
              <NextLink href="/login">Explore Live Demo</NextLink>
            </Button>
          </Flex>
        </Container>
      </Box>

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
              <chakra.a href="#features" fontSize="xs" color="gray.500" _hover={{ color: "green.400" }} transition="color 0.2s">Features</chakra.a>
              <chakra.a href="#roi-calculator" fontSize="xs" color="gray.500" _hover={{ color: "green.400" }} transition="color 0.2s">ROI Calculator</chakra.a>
              <chakra.a href="#pricing" fontSize="xs" color="gray.500" _hover={{ color: "green.400" }} transition="color 0.2s">Pricing Plans</chakra.a>
              <NextLink href="/login" style={{ fontSize: "12px", color: "var(--chakra-colors-gray-500)" }}>Live Demo</NextLink>
            </Stack>

            {/* Links Column 2 */}
            <Stack gap={3}>
              <Text fontWeight="black" color="white" fontSize="xs" textTransform="uppercase" letterSpacing="wider">Resources</Text>
              <chakra.a href="#faq" fontSize="xs" color="gray.500" _hover={{ color: "green.400" }} transition="color 0.2s">Support FAQ</chakra.a>
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

      {/* Modern CSS keyframe animations for the landing page */}
      <style>{`
        .grid-bg {
          background-image: radial-gradient(rgba(74, 222, 128, 0.08) 1.5px, transparent 1.5px);
          background-size: 24px 24px;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(24px);
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
            box-shadow: 0 10px 15px -3px rgba(74,187,120,0.4), 0 4px 6px -2px rgba(74,187,120,0.2);
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
        .animate-delay-4 {
          animation-delay: 0.4s;
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
