"use client";

import { useState } from "react";
import NextLink from "next/link";
import { useQuery } from "@tanstack/react-query";
import { Box, Button, Flex, Heading, Input, Spinner, Stack, Text } from "@chakra-ui/react";
import { api } from "@/lib/client";

type Txn = {
  id: string;
  fruitType: string;
  quantity: number;
  unit: string;
  rate: number;
  totalAmount: number;
  receivedAt: string;
  notified: boolean;
  grower: { name: string };
};

function inr(n: number) {
  return `₹${n.toLocaleString("en-IN", { maximumFractionDigits: 0 })}`;
}

export default function TransactionsPage() {
  const [fruitType, setFruitType] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const params = new URLSearchParams();
  if (fruitType) params.set("fruitType", fruitType);
  if (from) params.set("from", from);
  if (to) params.set("to", to);

  const { data, isLoading } = useQuery({
    queryKey: ["transactions", fruitType, from, to],
    queryFn: () => api<Txn[]>(`/api/transactions?${params.toString()}`),
  });

  const total = data?.reduce((s, t) => s + t.totalAmount, 0) ?? 0;

  return (
    <Stack gap={6}>
      <Flex justify="space-between" align="center" wrap="wrap" gap={4}>
        <Heading size="lg" color="gray.800">Transactions</Heading>
        <Button asChild colorPalette="green">
          <NextLink href="/transactions/new">Add transaction</NextLink>
        </Button>
      </Flex>

      <Flex gap={3} wrap="wrap" align="flex-end">
        <Box>
          <Text fontSize="xs" color="gray.500" mb={1}>Fruit type</Text>
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
        {(fruitType || from || to) && (
          <Button size="sm" variant="ghost" onClick={() => { setFruitType(""); setFrom(""); setTo(""); }}>
            Clear
          </Button>
        )}
      </Flex>

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
                  <Box as="th" px={6} py={3} fontWeight="medium">Grower</Box>
                  <Box as="th" px={6} py={3} fontWeight="medium">Fruit</Box>
                  <Box as="th" px={6} py={3} fontWeight="medium">Quantity</Box>
                  <Box as="th" px={6} py={3} fontWeight="medium">Rate</Box>
                  <Box as="th" px={6} py={3} fontWeight="medium">Total</Box>
                  <Box as="th" px={6} py={3} fontWeight="medium">SMS</Box>
                  <Box as="th" px={6} py={3} fontWeight="medium">Date</Box>
                </Box>
              </Box>
              <Box as="tbody">
                {data.map((t) => (
                  <Box as="tr" key={t.id} borderTopWidth="1px">
                    <Box as="td" px={6} py={3}>
                      <NextLink href={`/transactions/${t.id}`} style={{ color: "var(--chakra-colors-green-600)", fontWeight: 600 }}>
                        {t.grower.name}
                      </NextLink>
                    </Box>
                    <Box as="td" px={6} py={3}>{t.fruitType}</Box>
                    <Box as="td" px={6} py={3}>{t.quantity} {t.unit}</Box>
                    <Box as="td" px={6} py={3}>{inr(t.rate)}/{t.unit}</Box>
                    <Box as="td" px={6} py={3} fontWeight="medium">{inr(t.totalAmount)}</Box>
                    <Box as="td" px={6} py={3}>
                      <Text as="span" fontSize="xs" color={t.notified ? "green.600" : "gray.400"}>
                        {t.notified ? "Sent" : "—"}
                      </Text>
                    </Box>
                    <Box as="td" px={6} py={3} color="gray.500">{new Date(t.receivedAt).toLocaleDateString("en-IN")}</Box>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        )}
      </Box>

      {data && data.length > 0 && (
        <Text color="gray.600">
          {data.length} transactions · total <b>{inr(total)}</b>
        </Text>
      )}
    </Stack>
  );
}
