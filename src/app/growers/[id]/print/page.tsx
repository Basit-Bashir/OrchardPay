"use client";

import { use, useEffect, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { Box, Flex, Heading, Spinner, Stack, Text, Button, SimpleGrid } from "@chakra-ui/react";
import { api } from "@/lib/client";

type Txn = {
  id: string;
  fruitType: string;
  quantity: number;
  unit: string;
  rate: number;
  totalAmount: number;
  receivedAt: string;
};

type Payment = {
  id: string;
  amount: number;
  notes: string | null;
  paidAt: string;
};

type GrowerDetail = {
  id: string;
  name: string;
  mobile: string;
  address: string | null;
  transactions: Txn[];
  payments: Payment[];
  buyerFirm: { logoUrl: string | null; firmName: string };
};

function inr(n: number) {
  return `₹${n.toLocaleString("en-IN", { maximumFractionDigits: 0 })}`;
}

export default function GrowerPrintPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);

  const { data, isLoading } = useQuery({
    queryKey: ["grower", id],
    queryFn: () => api<GrowerDetail>(`/api/growers/${id}`),
  });

  // Calculate ledger items and running balance
  const ledgerWithBalance = useMemo(() => {
    if (!data) return [];
    
    const items = [
      ...data.transactions.map((t) => ({
        date: new Date(t.receivedAt),
        description: `Crop Delivery: ${t.fruitType} (${t.quantity} ${t.unit} @ ₹${t.rate}/${t.unit})`,
        credit: t.totalAmount,
        debit: 0,
      })),
      ...(data.payments ?? []).map((p) => ({
        date: new Date(p.paidAt),
        description: `Advance Taken${p.notes ? ` - ${p.notes}` : ""}`,
        credit: 0,
        debit: p.amount,
      })),
    ];

    // Sort chronologically (oldest first)
    items.sort((a, b) => a.date.getTime() - b.date.getTime());

    // Calculate running balance
    let runningBalance = 0;
    return items.map((item) => {
      runningBalance += item.credit - item.debit;
      return {
        ...item,
        balance: runningBalance,
      };
    });
  }, [data]);

  const totalCredit = useMemo(() => {
    if (!data) return 0;
    return data.transactions.reduce((sum, t) => sum + t.totalAmount, 0);
  }, [data]);

  const totalDebit = useMemo(() => {
    if (!data) return 0;
    return (data.payments ?? []).reduce((sum, p) => sum + p.amount, 0);
  }, [data]);

  const netBalance = totalCredit - totalDebit;

  // Auto trigger print after render
  useEffect(() => {
    if (data) {
      const timer = setTimeout(() => {
        window.print();
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [data]);

  if (isLoading) {
    return (
      <Flex p={8} justify="center" align="center" minH="100vh">
        <Spinner color="green.500" size="xl" />
        <Text ml={4} color="gray.600">Loading statement details...</Text>
      </Flex>
    );
  }

  if (!data) {
    return (
      <Box p={8} maxW="md" mx="auto" mt={10} textAlign="center">
        <Text color="red.500" fontSize="lg" fontWeight="semibold">Grower not found.</Text>
      </Box>
    );
  }

  return (
    <Box minH="100vh" bg="white" color="gray.800" position="relative" p={8} fontSize="sm">
      {/* Print styles */}
      <style dangerouslySetInnerHTML={{ __html: `
        @media print {
          .no-print {
            display: none !important;
          }
          body {
            background-color: white !important;
            color: black !important;
          }
          @page {
            margin: 1.5cm;
          }
        }
      `}} />

      {/* Floating Toolbar (hidden in print) */}
      <Flex 
        className="no-print" 
        justify="space-between" 
        align="center" 
        bg="gray.50" 
        p={4} 
        borderRadius="md" 
        mb={8} 
        borderWidth="1px"
      >
        <Text fontWeight="semibold" color="gray.700">Print Preview Mode</Text>
        <Flex gap={3}>
          <Button colorPalette="green" size="sm" onClick={() => window.print()}>
            Print Statement
          </Button>
          <Button variant="outline" size="sm" onClick={() => window.close()}>
            Close Tab
          </Button>
        </Flex>
      </Flex>

      {/* Watermark Logo Container */}
      <Box 
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        opacity="0.05"
        pointerEvents="none"
        zIndex={0}
        width="450px"
        height="450px"
        backgroundImage={`url('${data.buyerFirm?.logoUrl || '/logo.png'}')`}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="contain"
      />

      {/* Content wrapper to force position above watermark */}
      <Box position="relative" zIndex={1}>
        {/* Document Header */}
        <Flex justify="space-between" align="center" borderBottomWidth="2px" borderColor="green.800" pb={6} mb={8}>
          <Flex align="center" gap={4}>
            {data.buyerFirm?.logoUrl && (
              <Box w="60px" h="60px" borderRadius="lg" overflow="hidden" bg="white" borderWidth="1px" borderColor="gray.100">
                <img src={data.buyerFirm.logoUrl} alt="Logo" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
              </Box>
            )}
            <Box>
              <Heading size="lg" color="green.800" letterSpacing="tight" mb={1}>{data.buyerFirm?.firmName ?? "Valley Fresh Traders"}</Heading>
              <Text color="gray.500" fontSize="xs" fontWeight="semibold" textTransform="uppercase" letterSpacing="wider">Horticulture Statement of Account</Text>
            </Box>
          </Flex>
          <Box textAlign="right">
            <Text fontWeight="bold" fontSize="lg" color="gray.700">Statement Ledger</Text>
            <Text color="gray.500" fontSize="xs">Date: {new Date().toLocaleDateString("en-IN")}</Text>
          </Box>
        </Flex>

        {/* Grower Details Section */}
        <SimpleGrid columns={2} gap={8} mb={8}>
          <Box p={4} borderRadius="lg" bg="gray.50" borderWidth="1px">
            <Text fontSize="xs" fontWeight="bold" textTransform="uppercase" color="gray.400" letterSpacing="wider" mb={2}>Grower Details</Text>
            <Text fontWeight="bold" fontSize="md" color="gray.800">{data.name}</Text>
            <Text color="gray.600" mt={1}>Mobile: {data.mobile}</Text>
            {data.address && <Text color="gray.600" mt={1}>Address: {data.address}</Text>}
          </Box>
          <Box p={4} borderRadius="lg" bg="gray.50" borderWidth="1px">
            <Text fontSize="xs" fontWeight="bold" textTransform="uppercase" color="gray.400" letterSpacing="wider" mb={2}>Summary of Dues</Text>
            <SimpleGrid columns={2} gap={2} fontSize="xs">
              <Text color="gray.600">Total Crop Credits:</Text>
              <Text fontWeight="semibold" textAlign="right" color="green.700">{inr(totalCredit)}</Text>
              <Text color="gray.600">Total Cash Advances:</Text>
              <Text fontWeight="semibold" textAlign="right" color="indigo.700">{inr(totalDebit)}</Text>
            </SimpleGrid>
            <Box borderTopWidth="1px" mt={2} pt={2}>
              <Flex justify="space-between" align="center">
                <Text fontWeight="bold" fontSize="xs" color="gray.700">Outstanding Balance:</Text>
                <Text 
                  fontWeight="black" 
                  fontSize="sm" 
                  color={netBalance > 0 ? "emerald.700" : netBalance < 0 ? "red.700" : "gray.700"}
                >
                  {netBalance > 0 ? `We Owe Grower: ${inr(netBalance)}` : netBalance < 0 ? `Grower Owes Us: ${inr(Math.abs(netBalance))}` : "Balanced"}
                </Text>
              </Flex>
            </Box>
          </Box>
        </SimpleGrid>

        {/* Detailed Ledger Table */}
        <Box borderBottomWidth="2px" borderColor="gray.100" pb={4}>
          <Heading size="xs" textTransform="uppercase" color="gray.400" letterSpacing="wider" mb={4}>Chronological Statement Details</Heading>
          <Box as="table" w="full" fontSize="xs">
            <Box as="thead" bg="gray.100" borderBottomWidth="1.5px" borderColor="gray.300">
              <Box as="tr" textAlign="left" color="gray.600">
                <Box as="th" px={4} py={2} fontWeight="bold" w="100px">Date</Box>
                <Box as="th" px={4} py={2} fontWeight="bold">Transaction Details</Box>
                <Box as="th" px={4} py={2} fontWeight="bold" textAlign="right" w="120px">Crop Credit (Cr)</Box>
                <Box as="th" px={4} py={2} fontWeight="bold" textAlign="right" w="120px">Cash Paid (Dr)</Box>
                <Box as="th" px={4} py={2} fontWeight="bold" textAlign="right" w="140px">Running Balance</Box>
              </Box>
            </Box>
            <Box as="tbody">
              {ledgerWithBalance.map((item, idx) => (
                <Box as="tr" key={idx} borderBottomWidth="1px" borderColor="gray.100" _hover={{ bg: "gray.50/50" }}>
                  <Box as="td" px={4} py={2.5} color="gray.600">
                    {item.date.toLocaleDateString("en-IN")}
                  </Box>
                  <Box as="td" px={4} py={2.5} color="gray.800">
                    {item.description}
                  </Box>
                  <Box as="td" px={4} py={2.5} textAlign="right" color="green.700" fontWeight={item.credit > 0 ? "semibold" : "normal"}>
                    {item.credit > 0 ? inr(item.credit) : "—"}
                  </Box>
                  <Box as="td" px={4} py={2.5} textAlign="right" color="indigo.700" fontWeight={item.debit > 0 ? "semibold" : "normal"}>
                    {item.debit > 0 ? inr(item.debit) : "—"}
                  </Box>
                  <Box as="td" px={4} py={2.5} textAlign="right" fontWeight="bold" color={item.balance > 0 ? "emerald.700" : item.balance < 0 ? "red.700" : "gray.700"}>
                    {item.balance > 0 ? `${inr(item.balance)} Cr` : item.balance < 0 ? `${inr(Math.abs(item.balance))} Dr` : "0.00"}
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>

        {/* Declaration footer */}
        <Flex justify="space-between" mt={16} pt={8} borderTopWidth="1px" borderColor="gray.200" fontSize="xs">
          <Box>
            <Text color="gray.500">Prepared By: ____________________</Text>
          </Box>
          <Box textAlign="right">
            <Text color="gray.500">Receiver's Signature: ____________________</Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
