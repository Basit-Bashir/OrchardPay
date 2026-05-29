"use client";

import { use, useState } from "react";
import { useRouter } from "next/navigation";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Box, Button, Flex, Heading, Input, Spinner, Stack, Text, Textarea, SimpleGrid } from "@chakra-ui/react";
import { GrowerForm } from "@/components/grower/GrowerForm";
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
};

function inr(n: number) {
  return `₹${n.toLocaleString("en-IN", { maximumFractionDigits: 0 })}`;
}

export default function GrowerDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const router = useRouter();
  const queryClient = useQueryClient();

  // Form states for recording payment
  const [payAmount, setPayAmount] = useState("");
  const [payDate, setPayDate] = useState(new Date().toISOString().split("T")[0]);
  const [payNotes, setPayNotes] = useState("");
  const [payError, setPayError] = useState("");
  const [payLoading, setPayLoading] = useState(false);

  const { data, isLoading } = useQuery({
    queryKey: ["grower", id],
    queryFn: () => api<GrowerDetail>(`/api/growers/${id}`),
  });

  async function handleRecordPayment(e: React.FormEvent) {
    e.preventDefault();
    setPayError("");
    setPayLoading(true);
    try {
      await api("/api/payments", {
        method: "POST",
        body: JSON.stringify({
          growerId: id,
          amount: parseFloat(payAmount),
          notes: payNotes,
          paidAt: payDate ? new Date(payDate) : undefined,
        }),
      });
      setPayAmount("");
      setPayNotes("");
      setPayDate(new Date().toISOString().split("T")[0]);
      await queryClient.invalidateQueries({ queryKey: ["grower", id] });
    } catch (err) {
      setPayError((err as Error).message);
    } finally {
      setPayLoading(false);
    }
  }

  if (isLoading) return <Flex p={8} justify="center"><Spinner color="green.500" /></Flex>;
  if (!data) return <Text color="gray.500">Grower not found.</Text>;

  const totalFruitValue = data.transactions.reduce((sum, t) => sum + t.totalAmount, 0);
  const totalMoneyTaken = (data.payments ?? []).reduce((sum, p) => sum + p.amount, 0);
  const netBalance = totalFruitValue - totalMoneyTaken;

  return (
    <Stack gap={8}>
      {/* Header section */}
      <Flex justify="space-between" align="center" wrap="wrap" gap={4}>
        <Box>
          <Heading size="lg" color="gray.800">{data.name}</Heading>
          <Text fontSize="sm" color="gray.500">{data.mobile} {data.address ? `· ${data.address}` : ""}</Text>
        </Box>
        <Button asChild colorPalette="green" variant="outline">
          <a href={`/growers/${data.id}/print`} target="_blank" rel="noopener noreferrer">
            Print Statement
          </a>
        </Button>
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
            bg: "green.500"
          }}
        >
          <Text fontSize="xs" fontWeight="bold" textTransform="uppercase" letterSpacing="wider" color="gray.400">Total Fruit Value (Credit)</Text>
          <Text fontSize="3xl" fontWeight="black" color="green.700" mt={2}>{inr(totalFruitValue)}</Text>
          <Text fontSize="xs" color="gray.500" mt={1}>From {data.transactions.length} fruit deliveries</Text>
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
            bg: "indigo.500"
          }}
        >
          <Text fontSize="xs" fontWeight="bold" textTransform="uppercase" letterSpacing="wider" color="gray.400">Total Money Taken (Debit)</Text>
          <Text fontSize="3xl" fontWeight="black" color="indigo.700" mt={2}>{inr(totalMoneyTaken)}</Text>
          <Text fontSize="xs" color="gray.500" mt={1}>From {(data.payments ?? []).length} cash advances/payments</Text>
        </Box>

        {netBalance > 0 ? (
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
            <Text fontSize="xs" fontWeight="bold" textTransform="uppercase" letterSpacing="wider" color="emerald.700">We Owe Grower (Outstanding)</Text>
            <Text fontSize="3xl" fontWeight="black" color="emerald.800" mt={2}>{inr(netBalance)}</Text>
            <Text fontSize="xs" color="emerald.600" mt={1}>To be paid for pending crop credit</Text>
          </Box>
        ) : netBalance < 0 ? (
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
            <Text fontSize="xs" fontWeight="bold" textTransform="uppercase" letterSpacing="wider" color="red.700">Extra Money Taken (Debt)</Text>
            <Text fontSize="3xl" fontWeight="black" color="red.800" mt={2}>{inr(Math.abs(netBalance))}</Text>
            <Text fontSize="xs" color="red.600" mt={1}>Grower has taken more than crop value</Text>
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

      {/* Main content sections split */}
      <SimpleGrid columns={{ base: 1, lg: 12 }} gap={8} alignItems="start">
        {/* Left Column: Transaction Feed (8 cols on desktop) */}
        <Stack gap={8} style={{ gridColumn: "span 8" }}>
          {/* Fruit Delivery Transactions */}
          <Box bg="white" borderRadius="xl" shadow="sm" borderWidth="1px" overflow="hidden">
            <Box px={6} py={4} borderBottomWidth="1px" bg="gray.50">
              <Heading size="md" color="gray.700">Fruit Delivery History</Heading>
            </Box>
            {data.transactions.length === 0 ? (
              <Box p={6} color="gray.500">No transactions recorded yet.</Box>
            ) : (
              <Box overflowX="auto">
                <Box as="table" w="full" fontSize="sm">
                  <Box as="thead" bg="gray.50">
                    <Box as="tr" textAlign="left" color="gray.500">
                      <Box as="th" px={6} py={3} fontWeight="semibold">Fruit Type</Box>
                      <Box as="th" px={6} py={3} fontWeight="semibold">Quantity</Box>
                      <Box as="th" px={6} py={3} fontWeight="semibold">Rate</Box>
                      <Box as="th" px={6} py={3} fontWeight="semibold">Total Credit</Box>
                      <Box as="th" px={6} py={3} fontWeight="semibold">Date</Box>
                    </Box>
                  </Box>
                  <Box as="tbody">
                    {data.transactions.map((t) => (
                      <Box as="tr" key={t.id} borderTopWidth="1px" _hover={{ bg: "gray.50/50" }}>
                        <Box as="td" px={6} py={3} fontWeight="medium" color="gray.800">{t.fruitType}</Box>
                        <Box as="td" px={6} py={3}>{t.quantity} {t.unit}</Box>
                        <Box as="td" px={6} py={3}>{inr(t.rate)}/{t.unit}</Box>
                        <Box as="td" px={6} py={3} fontWeight="semibold" color="green.700">{inr(t.totalAmount)}</Box>
                        <Box as="td" px={6} py={3} color="gray.500">
                          {new Date(t.receivedAt).toLocaleDateString("en-IN")}
                        </Box>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Box>
            )}
          </Box>

          {/* Payments & Advances taken */}
          <Box bg="white" borderRadius="xl" shadow="sm" borderWidth="1px" overflow="hidden">
            <Box px={6} py={4} borderBottomWidth="1px" bg="gray.50">
              <Heading size="md" color="gray.700">Cash Advances & Payments History</Heading>
            </Box>
            {!data.payments || data.payments.length === 0 ? (
              <Box p={6} color="gray.500">No cash advances/payments recorded yet.</Box>
            ) : (
              <Box overflowX="auto">
                <Box as="table" w="full" fontSize="sm">
                  <Box as="thead" bg="gray.50">
                    <Box as="tr" textAlign="left" color="gray.500">
                      <Box as="th" px={6} py={3} fontWeight="semibold">Amount Paid</Box>
                      <Box as="th" px={6} py={3} fontWeight="semibold">Date Taken</Box>
                      <Box as="th" px={6} py={3} fontWeight="semibold">Notes</Box>
                    </Box>
                  </Box>
                  <Box as="tbody">
                    {data.payments.map((p) => (
                      <Box as="tr" key={p.id} borderTopWidth="1px" _hover={{ bg: "gray.50/50" }}>
                        <Box as="td" px={6} py={3} fontWeight="semibold" color="indigo.700">{inr(p.amount)}</Box>
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

        {/* Right Column: Recording Advances & Edit Details (4 cols on desktop) */}
        <Stack gap={8} style={{ gridColumn: "span 4" }}>
          {/* Record Cash Advance / Payment Form */}
          <Box bg="white" p={6} borderRadius="xl" shadow="sm" borderWidth="1px">
            <Heading size="md" mb={4} color="gray.700">Record Money Taken</Heading>
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
                    placeholder="Enter amount taken" 
                    value={payAmount}
                    onChange={(e) => setPayAmount(e.target.value)}
                    required
                  />
                </Box>
                <Box>
                  <Text fontSize="sm" fontWeight="medium" mb={1} color="gray.600">Date Taken</Text>
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
                    placeholder="Optional details (e.g. Cash advance for harvest, Bank transfer)" 
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
                  Record Payment / Advance
                </Button>
              </Stack>
            </form>
          </Box>

          {/* Edit Grower Details Form */}
          <Box bg="white" p={6} borderRadius="xl" shadow="sm" borderWidth="1px">
            <Heading size="md" mb={4} color="gray.700">Edit Grower Details</Heading>
            <GrowerForm
              initial={{ name: data.name, mobile: data.mobile, address: data.address ?? "" }}
              submitLabel="Save changes"
              onSubmit={async (values) => {
                await api(`/api/growers/${id}`, { method: "PATCH", body: JSON.stringify(values) });
                await queryClient.invalidateQueries({ queryKey: ["grower", id] });
                router.refresh();
              }}
            />
          </Box>
        </Stack>
      </SimpleGrid>
    </Stack>
  );
}
