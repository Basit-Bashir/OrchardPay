"use client";

import { useState } from "react";
import NextLink from "next/link";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Box, Button, Flex, Heading, Input, Spinner, Stack, Text } from "@chakra-ui/react";
import { api } from "@/lib/client";

type Grower = {
  id: string;
  name: string;
  mobile: string;
  address: string | null;
  _count: { transactions: number };
};

export default function GrowersPage() {
  const [q, setQ] = useState("");
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery({
    queryKey: ["growers", q],
    queryFn: () => api<Grower[]>(`/api/growers?q=${encodeURIComponent(q)}`),
  });

  const del = useMutation({
    mutationFn: (id: string) => api(`/api/growers/${id}`, { method: "DELETE" }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["growers"] }),
  });

  return (
    <Stack gap={6}>
      <Flex justify="space-between" align="center" wrap="wrap" gap={4}>
        <Heading size="lg" color="gray.800">Growers</Heading>
        <Button asChild colorPalette="green">
          <NextLink href="/growers/new">Add grower</NextLink>
        </Button>
      </Flex>

      <Input
        maxW="sm"
        placeholder="Search by name or mobile"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        bg="white"
      />

      <Box bg="white" borderRadius="lg" shadow="sm" borderWidth="1px" overflow="hidden">
        {isLoading ? (
          <Flex p={8} justify="center"><Spinner color="green.500" /></Flex>
        ) : !data || data.length === 0 ? (
          <Box p={6} color="gray.500">No growers found.</Box>
        ) : (
          <Box overflowX="auto">
            <Box as="table" w="full" fontSize="sm">
              <Box as="thead" bg="gray.50">
                <Box as="tr" textAlign="left" color="gray.500">
                  <Box as="th" px={6} py={3} fontWeight="medium">Name</Box>
                  <Box as="th" px={6} py={3} fontWeight="medium">Mobile</Box>
                  <Box as="th" px={6} py={3} fontWeight="medium">Address</Box>
                  <Box as="th" px={6} py={3} fontWeight="medium">Transactions</Box>
                  <Box as="th" px={6} py={3} fontWeight="medium" textAlign="right">Actions</Box>
                </Box>
              </Box>
              <Box as="tbody">
                {data.map((g) => (
                  <Box as="tr" key={g.id} borderTopWidth="1px">
                    <Box as="td" px={6} py={3}>
                      <NextLink href={`/growers/${g.id}`} style={{ color: "var(--chakra-colors-green-600)", fontWeight: 600 }}>
                        {g.name}
                      </NextLink>
                    </Box>
                    <Box as="td" px={6} py={3}>{g.mobile}</Box>
                    <Box as="td" px={6} py={3} color="gray.500">{g.address ?? "—"}</Box>
                    <Box as="td" px={6} py={3}>{g._count.transactions}</Box>
                    <Box as="td" px={6} py={3} textAlign="right">
                      <Button
                        size="xs"
                        variant="outline"
                        colorPalette="red"
                        loading={del.isPending && del.variables === g.id}
                        onClick={() => {
                          if (confirm(`Delete ${g.name}? This removes their transactions too.`)) del.mutate(g.id);
                        }}
                      >
                        Delete
                      </Button>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        )}
      </Box>
      {del.isError && <Text color="red.600" fontSize="sm">{(del.error as Error).message}</Text>}
    </Stack>
  );
}
