"use client";

import { use } from "react";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { Box, Button, Flex, Heading, SimpleGrid, Spinner, Stack, Text } from "@chakra-ui/react";
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
  notes: string | null;
  notified: boolean;
  grower: { name: string; mobile: string };
};

function inr(n: number) {
  return `₹${n.toLocaleString("en-IN", { maximumFractionDigits: 2 })}`;
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <Box>
      <Text fontSize="xs" color="gray.500">{label}</Text>
      <Text fontWeight="medium">{value}</Text>
    </Box>
  );
}

export default function TransactionDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const router = useRouter();
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["transaction", id],
    queryFn: () => api<Txn>(`/api/transactions/${id}`),
  });

  async function resend() {
    await api("/api/notifications/send", { method: "POST", body: JSON.stringify({ transactionId: id }) });
    await refetch();
  }

  async function remove() {
    if (!confirm("Delete this transaction?")) return;
    await api(`/api/transactions/${id}`, { method: "DELETE" });
    router.push("/transactions");
  }

  if (isLoading) return <Flex p={8} justify="center"><Spinner color="green.500" /></Flex>;
  if (!data) return <Text color="gray.500">Transaction not found.</Text>;

  return (
    <Stack gap={6}>
      <Flex justify="space-between" align="center" wrap="wrap" gap={3}>
        <Heading size="lg" color="gray.800">{data.fruitType}</Heading>
        <Stack direction="row" gap={3}>
          <Button variant="outline" colorPalette="green" onClick={resend}>Resend SMS</Button>
          <Button variant="outline" colorPalette="red" onClick={remove}>Delete</Button>
        </Stack>
      </Flex>

      <Box bg="white" p={6} borderRadius="lg" shadow="sm" borderWidth="1px">
        <Heading size="md" mb={4} color="gray.700">Delivery Details</Heading>
        <SimpleGrid columns={{ base: 2, md: 3 }} gap={6} mb={8}>
          <Detail label="Grower" value={data.grower.name} />
          <Detail label="Grower mobile" value={data.grower.mobile} />
          <Detail label="Date" value={new Date(data.receivedAt).toLocaleString("en-IN")} />
          <Detail label="Quantity" value={`${data.quantity} ${data.unit}`} />
          <Detail label="Rate" value={`${inr(data.rate)}/${data.unit}`} />
          <Detail label="SMS notification" value={data.notified ? "Sent" : "Not sent"} />
        </SimpleGrid>

        <Heading size="md" mb={4} color="gray.700" borderTopWidth="1px" pt={6}>Financial Statement &amp; Deductions</Heading>
        <SimpleGrid columns={{ base: 2, md: 4 }} gap={6}>
          <Detail label="Gross Total Amount" value={inr(data.grossAmount || data.quantity * data.rate)} />
          <Detail label="Commission" value={`- ${inr(data.commission)}`} />
          <Detail label="Labour" value={`- ${inr(data.labour)}`} />
          <Detail label="Freight" value={`- ${inr(data.freight)}`} />
          <Detail label="Association Expenses" value={`- ${inr(data.association)}`} />
          <Detail label="Printing" value={`- ${inr(data.printing)}`} />
          <Detail label="Miscellaneous" value={`- ${inr(data.miscellaneous)}`} />
          
          <Box bg="green.50" p={3} borderRadius="md" borderWidth="1px" borderColor="green.200">
            <Text fontSize="xs" color="green.700" fontWeight="semibold">Net Credit to Grower</Text>
            <Text fontWeight="bold" fontSize="lg" color="green.900">{inr(data.totalAmount)}</Text>
          </Box>
        </SimpleGrid>

        {data.notes && (
          <Box mt={6} borderTopWidth="1px" pt={6}>
            <Text fontSize="xs" color="gray.500">Notes</Text>
            <Text>{data.notes}</Text>
          </Box>
        )}
      </Box>
    </Stack>
  );
}
