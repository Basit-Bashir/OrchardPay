"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Box, Button, chakra, Flex, Heading, Input, SimpleGrid, Spinner, Stack, Text } from "@chakra-ui/react";
import { api } from "@/lib/client";

const Select = chakra("select");

type Grower = { id: string; name: string };
type Txn = {
  id: string;
  fruitType: string;
  quantity: number;
  unit: string;
  rate: number;
  totalAmount: number;
  receivedAt: string;
  grower: { name: string; mobile: string };
};

function inr(n: number) {
  return `₹${n.toLocaleString("en-IN", { maximumFractionDigits: 0 })}`;
}

export default function ReportsPage() {
  const [growerId, setGrowerId] = useState("");
  const [fruitType, setFruitType] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const { data: growers } = useQuery({
    queryKey: ["growers", ""],
    queryFn: () => api<Grower[]>("/api/growers"),
  });

  const params = new URLSearchParams();
  if (growerId) params.set("growerId", growerId);
  if (fruitType) params.set("fruitType", fruitType);
  if (from) params.set("from", from);
  if (to) params.set("to", to);

  const { data, isLoading } = useQuery({
    queryKey: ["report", growerId, fruitType, from, to],
    queryFn: () => api<Txn[]>(`/api/transactions?${params.toString()}`),
  });

  const totalAmount = data?.reduce((s, t) => s + t.totalAmount, 0) ?? 0;

  // Group quantities by unit for display
  const qtyByUnit = data?.reduce((acc, t) => {
    acc[t.unit] = (acc[t.unit] || 0) + t.quantity;
    return acc;
  }, {} as Record<string, number>) ?? {};

  const formattedTotalQty = Object.entries(qtyByUnit)
    .map(([unit, qty]) => `${qty.toLocaleString("en-IN")} ${unit}`)
    .join(" · ") || "0 kg";

  async function exportExcel() {
    if (!data || data.length === 0) return;
    const XLSX = await import("xlsx");
    const rows = data.map((t) => ({
      Date: new Date(t.receivedAt).toLocaleDateString("en-IN"),
      Grower: t.grower.name,
      Mobile: t.grower.mobile,
      Fruit: t.fruitType,
      Quantity: t.quantity,
      Unit: t.unit,
      Rate: `${t.rate}/${t.unit}`,
      "Total (INR)": t.totalAmount,
    }));
    const ws = XLSX.utils.json_to_sheet(rows);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Transactions");
    XLSX.writeFile(wb, `hortitrack-report-${new Date().toISOString().slice(0, 10)}.xlsx`);
  }

  return (
    <Stack gap={6}>
      <Flex justify="space-between" align="center" wrap="wrap" gap={4}>
        <Heading size="lg" color="gray.800">Reports</Heading>
        <Button colorPalette="green" onClick={exportExcel} disabled={!data || data.length === 0}>
          Export to Excel
        </Button>
      </Flex>

      <Flex gap={3} wrap="wrap" align="flex-end">
        <Box>
          <Text fontSize="xs" color="gray.500" mb={1}>Grower</Text>
          <Select value={growerId} onChange={(e) => setGrowerId(e.target.value)}
            px={3} py={2} borderWidth="1px" borderRadius="md" bg="white">
            <option value="">All growers</option>
            {growers?.map((g) => <option key={g.id} value={g.id}>{g.name}</option>)}
          </Select>
        </Box>
        <Box>
          <Text fontSize="xs" color="gray.500" mb={1}>Fruit</Text>
          <Input size="sm" bg="white" value={fruitType} onChange={(e) => setFruitType(e.target.value)} placeholder="All" />
        </Box>
        <Box>
          <Text fontSize="xs" color="gray.500" mb={1}>From</Text>
          <Input size="sm" bg="white" type="date" value={from} onChange={(e) => setFrom(e.target.value)} />
        </Box>
        <Box>
          <Text fontSize="xs" color="gray.500" mb={1}>To</Text>
          <Input size="sm" bg="white" type="date" value={to} onChange={(e) => setTo(e.target.value)} />
        </Box>
      </Flex>

      <SimpleGrid columns={{ base: 1, md: 3 }} gap={6}>
        <Box bg="white" p={5} borderRadius="lg" borderWidth="1px">
          <Text fontSize="sm" color="gray.500">Transactions</Text>
          <Text fontSize="2xl" fontWeight="bold" color="green.700">{data?.length ?? 0}</Text>
        </Box>
        <Box bg="white" p={5} borderRadius="lg" borderWidth="1px">
          <Text fontSize="sm" color="gray.500">Total quantity</Text>
          <Text fontSize="2xl" fontWeight="bold" color="green.700">{formattedTotalQty}</Text>
        </Box>
        <Box bg="white" p={5} borderRadius="lg" borderWidth="1px">
          <Text fontSize="sm" color="gray.500">Total value</Text>
          <Text fontSize="2xl" fontWeight="bold" color="green.700">{inr(totalAmount)}</Text>
        </Box>
      </SimpleGrid>

      <Box bg="white" borderRadius="lg" shadow="sm" borderWidth="1px" overflow="hidden">
        {isLoading ? (
          <Flex p={8} justify="center"><Spinner color="green.500" /></Flex>
        ) : !data || data.length === 0 ? (
          <Box p={6} color="gray.500">No transactions match these filters.</Box>
        ) : (
          <Box overflowX="auto">
            <Box as="table" w="full" fontSize="sm">
              <Box as="thead" bg="gray.50">
                <Box as="tr" textAlign="left" color="gray.500">
                  <Box as="th" px={6} py={3} fontWeight="medium">Date</Box>
                  <Box as="th" px={6} py={3} fontWeight="medium">Grower</Box>
                  <Box as="th" px={6} py={3} fontWeight="medium">Fruit</Box>
                  <Box as="th" px={6} py={3} fontWeight="medium">Quantity</Box>
                  <Box as="th" px={6} py={3} fontWeight="medium">Rate</Box>
                  <Box as="th" px={6} py={3} fontWeight="medium">Total</Box>
                </Box>
              </Box>
              <Box as="tbody">
                {data.map((t) => (
                  <Box as="tr" key={t.id} borderTopWidth="1px">
                    <Box as="td" px={6} py={3} color="gray.500">{new Date(t.receivedAt).toLocaleDateString("en-IN")}</Box>
                    <Box as="td" px={6} py={3}>{t.grower.name}</Box>
                    <Box as="td" px={6} py={3}>{t.fruitType}</Box>
                    <Box as="td" px={6} py={3}>{t.quantity} {t.unit}</Box>
                    <Box as="td" px={6} py={3}>{inr(t.rate)}/{t.unit}</Box>
                    <Box as="td" px={6} py={3} fontWeight="medium">{inr(t.totalAmount)}</Box>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        )}
      </Box>
    </Stack>
  );
}
