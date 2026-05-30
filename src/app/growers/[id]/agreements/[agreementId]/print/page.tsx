"use client";

import { use, useEffect, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { Box, Flex, Heading, Spinner, Stack, Text, Button, SimpleGrid } from "@chakra-ui/react";
import { api } from "@/lib/client";

type Installment = {
  amount: number;
  dueDate: string;
};

type AgreementDetail = {
  id: string;
  growerId: string;
  pledgedProduce: string;
  paymentTerms: string;
  installments: string; // Serialized JSON array of Installment
  buyerSign: string;
  validUntil: string | null;
  signedAt: string;
  createdAt: string;
  grower: {
    name: string;
    mobile: string;
    address: string | null;
    buyerFirm: {
      firmName: string;
      logoUrl: string | null;
      ownerName: string;
    };
  };
};

function inr(n: number) {
  return `₹${n.toLocaleString("en-IN", { maximumFractionDigits: 2 })}`;
}

export default function AgreementPrintPage({
  params,
}: {
  params: Promise<{ id: string; agreementId: string }>;
}) {
  const { id: growerId, agreementId } = use(params);

  const { data, isLoading } = useQuery({
    queryKey: ["agreement", growerId, agreementId],
    queryFn: () => api<AgreementDetail>(`/api/growers/${growerId}/agreements/${agreementId}`),
  });

  const parsedInstallments = useMemo<Installment[]>(() => {
    if (!data?.installments) return [];
    try {
      return JSON.parse(data.installments) as Installment[];
    } catch {
      return [];
    }
  }, [data]);

  const totalInstallmentAmount = useMemo(() => {
    return parsedInstallments.reduce((sum, item) => sum + item.amount, 0);
  }, [parsedInstallments]);

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
        <Text ml={4} color="gray.600">Loading agreement details...</Text>
      </Flex>
    );
  }

  if (!data) {
    return (
      <Box p={8} maxW="md" mx="auto" mt={10} textAlign="center">
        <Text color="red.500" fontSize="lg" fontWeight="semibold">Agreement not found.</Text>
      </Box>
    );
  }

  return (
    <Box minH="100vh" bg="white" color="gray.850" position="relative" p={8} fontSize="sm">
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
        <Text fontWeight="semibold" color="gray.700">Agreement Print Preview</Text>
        <Flex gap={3}>
          <Button colorPalette="green" size="sm" onClick={() => window.print()}>
            Print Agreement
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
        backgroundImage={`url('${data.grower.buyerFirm?.logoUrl || '/logo.png'}')`}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="contain"
      />

      {/* Content wrapper */}
      <Box position="relative" zIndex={1}>
        {/* Document Header */}
        <Flex justify="space-between" align="center" borderBottomWidth="2px" borderColor="green.800" pb={6} mb={8}>
          <Flex align="center" gap={4}>
            {data.grower.buyerFirm?.logoUrl && (
              <Box w="60px" h="60px" borderRadius="lg" overflow="hidden" bg="white" borderWidth="1px" borderColor="gray.100">
                <img src={data.grower.buyerFirm.logoUrl} alt="Logo" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
              </Box>
            )}
            <Box>
              <Heading size="lg" color="green.850" letterSpacing="tight" mb={1}>
                {data.grower.buyerFirm?.firmName}
              </Heading>
              <Text color="gray.500" fontSize="xs" fontWeight="semibold" textTransform="uppercase" letterSpacing="wider">
                Horticultural Commodity & Payment Agreement
              </Text>
            </Box>
          </Flex>
          <Box textAlign="right">
            <Text fontWeight="bold" fontSize="md" color="gray.700">Agreement ID</Text>
            <Text color="gray.500" fontSize="xs" fontFamily="mono">{data.id}</Text>
            <Text color="gray.550" fontSize="xs" mt={1}>Date Signed: {new Date(data.createdAt).toLocaleDateString("en-IN")}</Text>
            {data.validUntil && (
              <Text color="red.600" fontSize="xs" fontWeight="semibold" mt={1}>
                Valid Until: {new Date(data.validUntil).toLocaleDateString("en-IN")}
              </Text>
            )}
          </Box>
        </Flex>

        {/* Parties Details Section */}
        <SimpleGrid columns={2} gap={8} mb={8}>
          <Box p={4} borderRadius="lg" bg="gray.50" borderWidth="1px">
            <Text fontSize="xs" fontWeight="bold" textTransform="uppercase" color="gray.450" letterSpacing="wider" mb={2}>Grower details (Party A)</Text>
            <Text fontWeight="bold" fontSize="md" color="gray.850">{data.grower.name}</Text>
            <Text color="gray.600" mt={1}>Mobile: {data.grower.mobile}</Text>
            {data.grower.address && <Text color="gray.600" mt={1}>Address: {data.grower.address}</Text>}
          </Box>
          <Box p={4} borderRadius="lg" bg="gray.50" borderWidth="1px">
            <Text fontSize="xs" fontWeight="bold" textTransform="uppercase" color="gray.450" letterSpacing="wider" mb={2}>Buyer firm details (Party B)</Text>
            <Text fontWeight="bold" fontSize="md" color="gray.850">{data.grower.buyerFirm?.firmName}</Text>
            <Text color="gray.600" mt={1}>Owner / Manager: {data.grower.buyerFirm?.ownerName}</Text>
          </Box>
        </SimpleGrid>

        {/* Section 1: Pledged Produce */}
        <Box mb={8}>
          <Heading size="xs" textTransform="uppercase" color="gray.500" letterSpacing="wider" mb={3} borderBottomWidth="1px" pb={1}>
            Section 1: Pledged Horticulture Produce
          </Heading>
          <Box p={4} borderRadius="lg" bg="white" borderWidth="1px" borderColor="gray.200" whiteSpace="pre-wrap" minH="80px">
            {data.pledgedProduce}
          </Box>
          <Text fontSize="xs" color="gray.500" mt={2}>
            * The grower (Party A) agrees and pledges to deliver the above mentioned quantities of produce to the buyer (Party B) in accordance with quality, harvesting schedules, and standard mandi rules.
          </Text>
        </Box>

        {/* Section 2: Installments and Payment Terms */}
        <Box mb={8}>
          <Heading size="xs" textTransform="uppercase" color="gray.500" letterSpacing="wider" mb={3} borderBottomWidth="1px" pb={1}>
            Section 2: Payment Schedule &amp; Terms
          </Heading>
          
          <Text mb={4} fontSize="sm">
            The buyer (Party B) agrees to pay the grower (Party A) for the produce in <b>{parsedInstallments.length} installments</b> as per the schedule below:
          </Text>

          <Box overflow="hidden" borderWidth="1px" borderRadius="lg" mb={3}>
            <table style={{ width: "100%", fontSize: "12px", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ textAlign: "left", color: "var(--chakra-colors-gray-600)", backgroundColor: "var(--chakra-colors-gray-50)", borderBottom: "1.5px solid var(--chakra-colors-gray-300)" }}>
                  <th style={{ padding: "10px 16px", fontWeight: "bold" }}>Installment No.</th>
                  <th style={{ padding: "10px 16px", fontWeight: "bold" }}>Scheduled Due Date</th>
                  <th style={{ padding: "10px 16px", fontWeight: "bold", textAlign: "right" }}>Disbursal Amount</th>
                </tr>
              </thead>
              <tbody>
                {parsedInstallments.map((inst, idx) => (
                  <tr key={idx} style={{ borderBottom: "1px solid var(--chakra-colors-gray-150)" }}>
                    <td style={{ padding: "10px 16px", fontWeight: "600", color: "var(--chakra-colors-gray-700)" }}>Installment #{idx + 1}</td>
                    <td style={{ padding: "10px 16px", color: "var(--chakra-colors-gray-600)" }}>
                      {new Date(inst.dueDate).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </td>
                    <td style={{ padding: "10px 16px", textAlign: "right", fontWeight: "bold", color: "var(--chakra-colors-green-800)" }}>
                      {inr(inst.amount)}
                    </td>
                  </tr>
                ))}
                <tr style={{ backgroundColor: "rgba(240, 253, 244, 0.5)", borderTop: "2px solid var(--chakra-colors-green-200)" }}>
                  <td colSpan={2} style={{ padding: "12px 16px", fontWeight: "bold", color: "var(--chakra-colors-green-900)" }}>Total Contract Value:</td>
                  <td style={{ padding: "12px 16px", textAlign: "right", fontWeight: "800", color: "var(--chakra-colors-green-900)", fontSize: "14px" }}>
                    {inr(totalInstallmentAmount)}
                  </td>
                </tr>
              </tbody>
            </table>
          </Box>
          <Text fontSize="xs" color="gray.500">
            Payment Terms Overview: {data.paymentTerms}
          </Text>
        </Box>

        {/* Section 3: Declarations and Authorization */}
        <Box mb={10} p={4} borderRadius="lg" bg="green.50/30" borderWidth="1px" borderColor="green.200">
          <Text fontSize="xs" color="green.800" lineHeight="relaxed">
            <b>DECLARATION &amp; MUTUAL CONSENT:</b> Both parties verify and agree that this document establishes a legal horticultural supply commitment. The grower commits to harvest, package, and send the produce under standard commercial grade quality. The buyer guarantees to verify the shipments and release installment payments as scheduled.
          </Text>
        </Box>

        {/* Signatures Section */}
        <Flex justify="space-between" mt={12} pt={8} borderTopWidth="1px" borderColor="gray.200">
          {/* Buyer E-signature badge */}
          <Box w="45%">
            <Text fontSize="xs" fontWeight="bold" color="gray.500" mb={3}>Buyer Electronic Signature (Party B)</Text>
            <Box 
              p={4} 
              borderRadius="xl" 
              borderWidth="2px" 
              borderColor="green.500" 
              bg="green.50/10" 
              position="relative"
              style={{
                fontFamily: "var(--font-plus-jakarta-sans), sans-serif"
              }}
            >
              {/* E-sign stamp look */}
              <Box 
                position="absolute"
                right="2"
                top="2"
                borderWidth="1px"
                borderColor="green.500"
                color="green.500"
                fontSize="8px"
                fontWeight="bold"
                px={1}
                borderRadius="sm"
                transform="rotate(6deg)"
              >
                E-SIGN VERIFIED
              </Box>
              <Text fontSize="xs" color="gray.400">Signed Digitally By:</Text>
              <Text fontSize="lg" fontWeight="black" color="green.800" my={1.5} style={{ fontStyle: "italic" }}>
                {data.buyerSign}
              </Text>
              <Text fontSize="10px" color="gray.450">
                Timestamp: {new Date(data.signedAt).toLocaleString("en-IN")}
              </Text>
            </Box>
          </Box>

          {/* Grower physical signature slot */}
          <Box w="45%" display="flex" flexDirection="column" justifyContent="flex-end" pb={2}>
            <Text fontSize="xs" fontWeight="bold" color="gray.500" mb={4}>Grower Signature (Party A)</Text>
            <Box borderBottomWidth="1.5px" borderColor="gray.400" w="full" mb={2} />
            <Text fontSize="xs" color="gray.450">Name: {data.grower.name}</Text>
            <Text fontSize="10px" color="gray.400">Date: ____ / ____ / ________</Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
