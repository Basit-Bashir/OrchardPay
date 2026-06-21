"use client";

import { use, useState } from "react";
import { useRouter } from "next/navigation";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Box, Button, Flex, Heading, Input, Spinner, Stack, Text, Textarea, SimpleGrid } from "@chakra-ui/react";
import { SellerForm } from "@/components/seller/SellerForm";
import { api } from "@/lib/client";

type Txn = {
  id: string;
  fruitType: string;
  quantity: number;
  unit: string;
  rate: number;
  grossAmount: number;
  commission: number;
  labour: number;
  freight: number;
  association: number;
  printing: number;
  miscellaneous: number;
  totalAmount: number;
  receivedAt: string;
};

type SellerPayment = {
  id: string;
  amount: number;
  notes: string | null;
  paidAt: string;
};

type SellerDetail = {
  id: string;
  name: string;
  mobile: string;
  address: string | null;
  transactions: Txn[];
  payments: SellerPayment[];
};

function inr(n: number) {
  return `₹${n.toLocaleString("en-IN", { maximumFractionDigits: 2 })}`;
}

export default function SellerDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const router = useRouter();
  const queryClient = useQueryClient();

  // Form states for recording payment
  const [payAmount, setPayAmount] = useState("");
  const [payDate, setPayDate] = useState(new Date().toISOString().split("T")[0]);
  const [payNotes, setPayNotes] = useState("");
  const [payError, setPayError] = useState("");
  const [payLoading, setPayLoading] = useState(false);
  const [selectedTxn, setSelectedTxn] = useState<Txn | null>(null);

  const { data, isLoading } = useQuery({
    queryKey: ["seller", id],
    queryFn: () => api<SellerDetail>(`/api/sellers/${id}`),
  });

  async function handleRecordPayment(e: React.FormEvent) {
    e.preventDefault();
    setPayError("");
    setPayLoading(true);
    try {
      await api("/api/seller-payments", {
        method: "POST",
        body: JSON.stringify({
          sellerId: id,
          amount: parseFloat(payAmount),
          notes: payNotes,
          paidAt: payDate ? new Date(payDate) : undefined,
        }),
      });
      setPayAmount("");
      setPayNotes("");
      setPayDate(new Date().toISOString().split("T")[0]);
      await queryClient.invalidateQueries({ queryKey: ["seller", id] });
    } catch (err) {
      setPayError((err as Error).message);
    } finally {
      setPayLoading(false);
    }
  }

  if (isLoading) return <Flex p={8} justify="center"><Spinner color="green.500" /></Flex>;
  if (!data) return <Text color="gray.500">Seller not found.</Text>;

  const totalPurchases = data.transactions.reduce((sum, t) => sum + t.totalAmount, 0);
  const totalReceived = (data.payments ?? []).reduce((sum, p) => sum + p.amount, 0);
  const netBalance = totalPurchases - totalReceived;

  return (
    <Stack gap={8}>
      {/* Header section */}
      <Flex justify="space-between" align="center" wrap="wrap" gap={4}>
        <Box>
          <Heading size="lg" color="gray.800">{data.name}</Heading>
          <Text fontSize="sm" color="gray.500">{data.mobile} {data.address ? `· ${data.address}` : ""}</Text>
        </Box>
      </Flex>

      {/* Account Ledger Cards */}
      <SimpleGrid columns={{ base: 1, md: 3 }} gap={6}>
        <Box 
          bg="white" 
          p={6} 
          borderRadius="xl" 
          borderWidth="1px" 
          shadow="sm"
          position="relative"
          overflow="hidden"
          _before={{
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "4px",
            height: "100%",
            bg: "red.500"
          }}
        >
          <Text fontSize="xs" fontWeight="bold" textTransform="uppercase" letterSpacing="wider" color="gray.400">Total Purchases Value (Debit)</Text>
          <Text fontSize="3xl" fontWeight="black" color="red.700" mt={2}>{inr(totalPurchases)}</Text>
          <Text fontSize="xs" color="gray.500" mt={1}>From {data.transactions.length} purchases</Text>
        </Box>

        <Box 
          bg="white" 
          p={6} 
          borderRadius="xl" 
          borderWidth="1px" 
          shadow="sm"
          position="relative"
          overflow="hidden"
          _before={{
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "4px",
            height: "100%",
            bg: "green.500"
          }}
        >
          <Text fontSize="xs" fontWeight="bold" textTransform="uppercase" letterSpacing="wider" color="gray.400">Total Money Paid (Credit)</Text>
          <Text fontSize="3xl" fontWeight="black" color="green.700" mt={2}>{inr(totalReceived)}</Text>
          <Text fontSize="xs" color="gray.500" mt={1}>From {(data.payments ?? []).length} receipts</Text>
        </Box>

        {netBalance > 0 ? (
          <Box 
            bg="red.50" 
            p={6} 
            borderRadius="xl" 
            borderWidth="1px" 
            borderColor="red.200"
            shadow="sm"
            position="relative"
            overflow="hidden"
            _before={{
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              width: "4px",
              height: "100%",
              bg: "red.500"
            }}
          >
            <Text fontSize="xs" fontWeight="bold" textTransform="uppercase" letterSpacing="wider" color="red.700">Seller Owes Us (Receivable)</Text>
            <Text fontSize="3xl" fontWeight="black" color="red.800" mt={2}>{inr(netBalance)}</Text>
            <Text fontSize="xs" color="red.600" mt={1}>Outstanding balance to be collected</Text>
          </Box>
        ) : netBalance < 0 ? (
          <Box 
            bg="emerald.50" 
            p={6} 
            borderRadius="xl" 
            borderWidth="1px" 
            borderColor="emerald.200"
            shadow="sm"
            position="relative"
            overflow="hidden"
            _before={{
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              width: "4px",
              height: "100%",
              bg: "emerald.500"
            }}
          >
            <Text fontSize="xs" fontWeight="bold" textTransform="uppercase" letterSpacing="wider" color="emerald.700">We Owe Seller (Credit Balance)</Text>
            <Text fontSize="3xl" fontWeight="black" color="emerald.800" mt={2}>{inr(Math.abs(netBalance))}</Text>
            <Text fontSize="xs" color="emerald.600" mt={1}>Seller has paid in advance</Text>
          </Box>
        ) : (
          <Box 
            bg="gray.50" 
            p={6} 
            borderRadius="xl" 
            borderWidth="1px" 
            borderColor="gray.200"
            shadow="sm"
            position="relative"
            overflow="hidden"
            _before={{
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              width: "4px",
              height: "100%",
              bg: "gray.400"
            }}
          >
            <Text fontSize="xs" fontWeight="bold" textTransform="uppercase" letterSpacing="wider" color="gray.500">Account Balanced</Text>
            <Text fontSize="3xl" fontWeight="black" color="gray.700" mt={2}>{inr(0)}</Text>
            <Text fontSize="xs" color="gray.500" mt={1}>No outstanding dues either way</Text>
          </Box>
        )}
      </SimpleGrid>

      {/* Main content sections */}
      <SimpleGrid columns={{ base: 1, lg: 12 }} gap={8} alignItems="start">
        {/* Left Column: Purchase Feed (8 cols on desktop) */}
        <Stack gap={8} style={{ gridColumn: "span 8" }}>
          {/* Purchase History */}
          <Box bg="white" borderRadius="xl" shadow="sm" borderWidth="1px" overflow="hidden">
            <Box px={6} py={4} borderBottomWidth="1px" bg="gray.50">
              <Heading size="md" color="gray.700">Purchase History</Heading>
            </Box>
            {data.transactions.length === 0 ? (
              <Box p={6} color="gray.500">No purchases recorded yet.</Box>
            ) : (
              <Box overflowX="auto">
                <Box as="table" w="full" fontSize="sm">
                  <Box as="thead" bg="gray.50">
                    <Box as="tr" textAlign="left" color="gray.500">
                      <Box as="th" px={6} py={3} fontWeight="semibold">Fruit Type</Box>
                      <Box as="th" px={6} py={3} fontWeight="semibold">Quantity</Box>
                      <Box as="th" px={6} py={3} fontWeight="semibold">Rate</Box>
                      <Box as="th" px={6} py={3} fontWeight="semibold">Total Due</Box>
                      <Box as="th" px={6} py={3} fontWeight="semibold">Date</Box>
                    </Box>
                  </Box>
                  <Box as="tbody">
                    {data.transactions.map((t) => {
                      const amount = t.totalAmount;
                      return (
                        <Box as="tr" key={t.id} borderTopWidth="1px" _hover={{ bg: "gray.50/50" }} cursor="pointer" onClick={() => setSelectedTxn(t)}>
                          <Box as="td" px={6} py={3} fontWeight="medium" color="gray.800">{t.fruitType}</Box>
                          <Box as="td" px={6} py={3}>{t.quantity} {t.unit}</Box>
                          <Box as="td" px={6} py={3}>{inr(t.rate)}/{t.unit}</Box>
                          <Box as="td" px={6} py={3} fontWeight="semibold" color="red.700">{inr(amount)}</Box>
                          <Box as="td" px={6} py={3} color="gray.500">
                            {new Date(t.receivedAt).toLocaleDateString("en-IN")}
                          </Box>
                        </Box>
                      );
                    })}
                  </Box>
                </Box>
              </Box>
            )}
          </Box>

          {/* Cash Receipts History */}
          <Box bg="white" borderRadius="xl" shadow="sm" borderWidth="1px" overflow="hidden">
            <Box px={6} py={4} borderBottomWidth="1px" bg="gray.50">
              <Heading size="md" color="gray.700">Receipts &amp; Payments History</Heading>
            </Box>
            {!data.payments || data.payments.length === 0 ? (
              <Box p={6} color="gray.500">No receipts recorded yet.</Box>
            ) : (
              <Box overflowX="auto">
                <Box as="table" w="full" fontSize="sm">
                  <Box as="thead" bg="gray.50">
                    <Box as="tr" textAlign="left" color="gray.500">
                      <Box as="th" px={6} py={3} fontWeight="semibold">Amount Received</Box>
                      <Box as="th" px={6} py={3} fontWeight="semibold">Date Received</Box>
                      <Box as="th" px={6} py={3} fontWeight="semibold">Notes</Box>
                    </Box>
                  </Box>
                  <Box as="tbody">
                    {data.payments.map((p) => (
                      <Box as="tr" key={p.id} borderTopWidth="1px" _hover={{ bg: "gray.50/50" }}>
                        <Box as="td" px={6} py={3} fontWeight="semibold" color="green.700">{inr(p.amount)}</Box>
                        <Box as="td" px={6} py={3} color="gray.600">
                          {new Date(p.paidAt).toLocaleDateString("en-IN")}
                        </Box>
                        <Box as="td" px={6} py={3} color="gray.500">{p.notes ?? "—"}</Box>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Box>
            )}
          </Box>
        </Stack>

        {/* Right Column: Record Cash Received & Edit Details (4 cols on desktop) */}
        <Stack gap={8} style={{ gridColumn: "span 4" }}>
          {/* Record Cash Receipt Form */}
          <Box bg="white" p={6} borderRadius="xl" shadow="sm" borderWidth="1px">
            <Heading size="md" mb={4} color="gray.700">Record Cash Received</Heading>
            <form onSubmit={handleRecordPayment}>
              <Stack gap={4}>
                {payError && (
                  <Box bg="red.50" color="red.700" px={4} py={2} borderRadius="md" fontSize="sm">
                    {payError}
                  </Box>
                )}
                <Box>
                  <Text fontSize="sm" fontWeight="medium" mb={1} color="gray.600">Amount (₹)</Text>
                  <Input 
                    type="number" 
                    placeholder="Enter amount received" 
                    value={payAmount}
                    onChange={(e) => setPayAmount(e.target.value)}
                    required
                  />
                </Box>
                <Box>
                  <Text fontSize="sm" fontWeight="medium" mb={1} color="gray.600">Date Received</Text>
                  <Input 
                    type="date" 
                    value={payDate}
                    onChange={(e) => setPayDate(e.target.value)}
                    required
                  />
                </Box>
                <Box>
                  <Text fontSize="sm" fontWeight="medium" mb={1} color="gray.600">Notes / Remarks</Text>
                  <Textarea 
                    placeholder="Optional details (e.g. Cash payment at shop, Bank transfer)" 
                    value={payNotes}
                    onChange={(e) => setPayNotes(e.target.value)}
                    rows={2}
                  />
                </Box>
                <Button 
                  type="submit" 
                  colorPalette="green" 
                  loading={payLoading} 
                  w="full"
                >
                  Record Cash Received
                </Button>
              </Stack>
            </form>
          </Box>

          {/* Edit Seller Details Form */}
          <Box bg="white" p={6} borderRadius="xl" shadow="sm" borderWidth="1px">
            <Heading size="md" mb={4} color="gray.700">Edit Seller Details</Heading>
            <SellerForm
              initial={{ name: data.name, mobile: data.mobile, address: data.address ?? "" }}
              submitLabel="Save changes"
              onSubmit={async (values) => {
                await api(`/api/sellers/${id}`, { method: "PATCH", body: JSON.stringify(values) });
                await queryClient.invalidateQueries({ queryKey: ["seller", id] });
                router.refresh();
              }}
            />
          </Box>
        </Stack>
      </SimpleGrid>

      {/* Deductions Details Modal */}
      {selectedTxn && (
        <Box
          position="fixed"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bg="rgba(0, 0, 0, 0.4)"
          zIndex={1000}
          display="flex"
          alignItems="center"
          justifyContent="center"
          p={4}
          onClick={() => setSelectedTxn(null)}
        >
          <Box
            bg="white"
            borderRadius="xl"
            p={6}
            maxW="md"
            w="full"
            shadow="2xl"
            borderWidth="1px"
            onClick={(e) => e.stopPropagation()}
          >
            <Flex justify="space-between" align="center" mb={4} borderBottomWidth="1px" pb={3}>
              <Heading size="md" color="gray.800">Transaction Details</Heading>
              <Button size="xs" variant="ghost" onClick={() => setSelectedTxn(null)}>
                ✕
              </Button>
            </Flex>

            <Stack gap={3} fontSize="sm">
              <Box bg="gray.50" p={3} borderRadius="lg" mb={2}>
                <Text fontWeight="semibold" color="gray.700">{selectedTxn.fruitType}</Text>
                <Text fontSize="xs" color="gray.500">
                  {selectedTxn.quantity} {selectedTxn.unit} @ {inr(selectedTxn.rate)}/{selectedTxn.unit}
                </Text>
              </Box>

              <Flex justify="space-between">
                <Text color="gray.600">Gross Amount:</Text>
                <Text fontWeight="semibold" color="gray.800">
                  {inr(selectedTxn.grossAmount || selectedTxn.quantity * selectedTxn.rate)}
                </Text>
              </Flex>

              <Box borderTopWidth="1px" my={1} />

              <Box bg="green.50" p={3} borderRadius="md" my={1}>
                <Text fontSize="xs" color="green.800" fontStyle="italic">
                  No deductions are applicable for Seller transactions. The seller is charged the full gross amount.
                </Text>
              </Box>

              <Flex justify="space-between" fontWeight="bold" fontSize="md" mt={1} pt={2} borderTopWidth="1px" borderColor="gray.100">
                <Text color="gray.800">Total Purchase Amount:</Text>
                <Text color="red.700">{inr(selectedTxn.totalAmount)}</Text>
              </Flex>
            </Stack>
          </Box>
        </Box>
      )}
    </Stack>
  );
}
