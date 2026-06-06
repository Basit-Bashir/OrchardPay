"use client";

import { useState } from "react";
import NextLink from "next/link";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Box, Button, Flex, Heading, Input, Spinner, Stack, Text } from "@chakra-ui/react";
import { api } from "@/lib/client";
import { ConfirmationModal } from "@/components/common/ConfirmationModal";

type Seller = {
  id: string;
  name: string;
  mobile: string;
  address: string | null;
  _count: { transactions: number };
};

export default function SellersPage() {
  const [q, setQ] = useState("");
  const [deleteTarget, setDeleteTarget] = useState<Seller | null>(null);
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery({
    queryKey: ["sellers", q],
    queryFn: () => api<Seller[]>(`/api/sellers?q=${encodeURIComponent(q)}`),
  });

  const del = useMutation({
    mutationFn: (id: string) => api(`/api/sellers/${id}`, { method: "DELETE" }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["sellers"] }),
  });

  return (
    <Stack gap={6}>
      <Flex justify="space-between" align="center" wrap="wrap" gap={4}>
        <Heading size="lg" color="gray.800">Sellers (Buyers)</Heading>
        <Button asChild colorPalette="green">
          <NextLink href="/sellers/new">Add seller</NextLink>
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
          <Box p={6} color="gray.500">No sellers found.</Box>
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
                {data.map((s) => (
                  <Box as="tr" key={s.id} borderTopWidth="1px">
                    <Box as="td" px={6} py={3}>
                      <NextLink href={`/sellers/${s.id}`} style={{ color: "var(--chakra-colors-green-600)", fontWeight: 600 }}>
                        {s.name}
                      </NextLink>
                    </Box>
                    <Box as="td" px={6} py={3}>{s.mobile}</Box>
                    <Box as="td" px={6} py={3} color="gray.500">{s.address ?? "—"}</Box>
                    <Box as="td" px={6} py={3}>{s._count.transactions}</Box>
                    <Box as="td" px={6} py={3} textAlign="right">
                      <Button
                        size="xs"
                        variant="outline"
                        colorPalette="red"
                        onClick={() => setDeleteTarget(s)}
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

      <ConfirmationModal
        isOpen={!!deleteTarget}
        title="Delete Seller"
        message={`Are you sure you want to delete ${deleteTarget?.name}? This will permanently remove their transaction references.`}
        onConfirm={async () => {
          if (deleteTarget) {
            await del.mutateAsync(deleteTarget.id);
            setDeleteTarget(null);
          }
        }}
        onCancel={() => setDeleteTarget(null)}
        isLoading={del.isPending}
        confirmText="Delete"
      />
    </Stack>
  );
}
