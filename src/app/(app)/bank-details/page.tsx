"use client";

import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Box, Button, Flex, Heading, Input, Spinner, Stack, Text, Textarea, SimpleGrid } from "@chakra-ui/react";
import { api } from "@/lib/client";
import { ConfirmationModal } from "@/components/common/ConfirmationModal";

type BankAccount = {
  id: string;
  bankName: string;
  accNumber: string;
  bankAddress: string | null;
  isPrimary: boolean;
  createdAt: string;
};

export default function BankDetailsPage() {
  const queryClient = useQueryClient();

  const { data: accounts, isLoading } = useQuery({
    queryKey: ["bankAccounts"],
    queryFn: () => api<BankAccount[]>("/api/firm/bank-accounts"),
  });

  const [bankName, setBankName] = useState("");
  const [accNumber, setAccNumber] = useState("");
  const [bankAddress, setBankAddress] = useState("");
  const [isPrimary, setIsPrimary] = useState(false);

  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [deleteTarget, setDeleteTarget] = useState<BankAccount | null>(null);

  const createMutation = useMutation({
    mutationFn: (values: { bankName: string; accNumber: string; bankAddress: string; isPrimary: boolean }) =>
      api("/api/firm/bank-accounts", {
        method: "POST",
        body: JSON.stringify(values),
      }),
    onSuccess: () => {
      setSuccessMsg("Bank account added successfully.");
      setErrorMsg("");
      setBankName("");
      setAccNumber("");
      setBankAddress("");
      setIsPrimary(false);
      queryClient.invalidateQueries();
      setTimeout(() => setSuccessMsg(""), 3000);
    },
    onError: (err: any) => {
      setErrorMsg(err.message || "Failed to add bank account.");
      setSuccessMsg("");
    },
  });

  const setPrimaryMutation = useMutation({
    mutationFn: (id: string) =>
      api(`/api/firm/bank-accounts/${id}`, {
        method: "PATCH",
        body: JSON.stringify({ isPrimary: true }),
      }),
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
    onError: (err: any) => {
      alert(err.message || "Failed to update primary account.");
    },
  });

  const deleteMutation = useMutation({
    mutationFn: (id: string) =>
      api(`/api/firm/bank-accounts/${id}`, {
        method: "DELETE",
      }),
    onSuccess: () => {
      queryClient.invalidateQueries();
      setDeleteTarget(null);
    },
    onError: (err: any) => {
      alert(err.message || "Failed to delete account.");
      setDeleteTarget(null);
    },
  });

  if (isLoading) {
    return (
      <Flex p={8} justify="center">
        <Spinner color="green.500" size="lg" />
      </Flex>
    );
  }

  return (
    <Stack gap={8}>
      <Box>
        <Heading size="lg" color="gray.800" mb={1}>
          Firm Bank Accounts
        </Heading>
        <Text fontSize="sm" color="gray.500">
          Manage your business bank accounts. One primary account will be selected by default when recording grower cash transactions.
        </Text>
      </Box>

      <SimpleGrid columns={{ base: 1, lg: 12 }} gap={8} alignItems="start">
        {/* Left column: List of bank accounts (8 cols on desktop) */}
        <Stack gap={4} style={{ gridColumn: "span 8" }}>
          <Heading size="sm" color="gray.700" textTransform="uppercase" letterSpacing="wider">
            Your Saved Accounts ({accounts?.length ?? 0})
          </Heading>

          {!accounts || accounts.length === 0 ? (
            <Box bg="white" p={8} borderRadius="xl" shadow="sm" borderWidth="1px" textAlign="center">
              <Text color="gray.500" fontSize="sm">
                No bank accounts added yet. Please use the form on the right to configure one.
              </Text>
            </Box>
          ) : (
            <SimpleGrid columns={{ base: 1, md: 2 }} gap={4}>
              {accounts.map((acc) => (
                <Box
                  key={acc.id}
                  bg="white"
                  p={5}
                  borderRadius="xl"
                  borderWidth="1px"
                  borderColor={acc.isPrimary ? "green.200" : "gray.200"}
                  shadow="sm"
                  position="relative"
                  _hover={{ shadow: "md" }}
                  transition="all 0.2s"
                >
                  {acc.isPrimary && (
                    <Box
                      position="absolute"
                      top="12px"
                      right="12px"
                      bg="green.50"
                      color="green.700"
                      fontSize="9px"
                      fontWeight="bold"
                      px={2}
                      py={0.5}
                      borderRadius="md"
                      borderWidth="1px"
                      borderColor="green.200"
                      textTransform="uppercase"
                    >
                      Primary
                    </Box>
                  )}

                  <Stack gap={3}>
                    <Box>
                      <Text fontSize="xs" fontWeight="semibold" color="gray.400" textTransform="uppercase">
                        Bank Name
                      </Text>
                      <Text fontWeight="bold" color="gray.800" fontSize="md">
                        {acc.bankName}
                      </Text>
                    </Box>

                    <Box>
                      <Text fontSize="xs" fontWeight="semibold" color="gray.400" textTransform="uppercase">
                        Account Number
                      </Text>
                      <Text fontWeight="semibold" color="gray.700" fontSize="sm">
                        {acc.accNumber}
                      </Text>
                    </Box>

                    {acc.bankAddress && (
                      <Box>
                        <Text fontSize="xs" fontWeight="semibold" color="gray.400" textTransform="uppercase">
                          Branch Address
                        </Text>
                        <Text color="gray.600" fontSize="xs">
                          {acc.bankAddress}
                        </Text>
                      </Box>
                    )}

                    <Flex gap={2} mt={2} pt={3} borderTopWidth="1px" borderColor="gray.100">
                      {!acc.isPrimary && (
                        <Button
                          size="xs"
                          variant="outline"
                          colorPalette="green"
                          onClick={() => setPrimaryMutation.mutate(acc.id)}
                          loading={setPrimaryMutation.isPending && setPrimaryMutation.variables === acc.id}
                        >
                          Make Primary
                        </Button>
                      )}
                      <Button
                        size="xs"
                        variant="ghost"
                        colorPalette="red"
                        onClick={() => setDeleteTarget(acc)}
                      >
                        Remove
                      </Button>
                    </Flex>
                  </Stack>
                </Box>
              ))}
            </SimpleGrid>
          )}
        </Stack>

        {/* Right column: Form to add account (4 cols on desktop) */}
        <Box bg="white" p={6} borderRadius="xl" shadow="sm" borderWidth="1px" style={{ gridColumn: "span 4" }}>
          <Heading size="sm" mb={6} color="gray.700" textTransform="uppercase" letterSpacing="wider">
            Add New Account
          </Heading>

          {errorMsg && (
            <Box bg="red.50" color="red.700" px={4} py={2} borderRadius="md" fontSize="sm" mb={4}>
              {errorMsg}
            </Box>
          )}

          {successMsg && (
            <Box bg="green.50" color="green.750" px={4} py={2} borderRadius="md" fontSize="sm" mb={4}>
              {successMsg}
            </Box>
          )}

          <Stack gap={4}>
            <Box>
              <Text fontSize="xs" fontWeight="semibold" mb={1} color="gray.600">
                Bank Name
              </Text>
              <Input
                placeholder="e.g. State Bank of India"
                value={bankName}
                onChange={(e) => setBankName(e.target.value)}
              />
            </Box>

            <Box>
              <Text fontSize="xs" fontWeight="semibold" mb={1} color="gray.600">
                Account Number
              </Text>
              <Input
                placeholder="e.g. 12345678901"
                value={accNumber}
                onChange={(e) => setAccNumber(e.target.value)}
              />
            </Box>

            <Box>
              <Text fontSize="xs" fontWeight="semibold" mb={1} color="gray.600">
                Branch Address / Details
              </Text>
              <Textarea
                placeholder="e.g. Mandi Complex Branch, Srinagar"
                value={bankAddress}
                onChange={(e) => setBankAddress(e.target.value)}
                rows={3}
              />
            </Box>

            <Flex align="center" gap={2} py={2}>
              <input
                type="checkbox"
                id="is-primary"
                checked={isPrimary}
                onChange={(e) => setIsPrimary(e.target.checked)}
                style={{ width: "16px", height: "16px" }}
              />
              <label htmlFor="is-primary" style={{ fontSize: "13px", fontWeight: "500", color: "#4A5568", cursor: "pointer" }}>
                Make this the primary account
              </label>
            </Flex>

            <Button
              colorPalette="green"
              loading={createMutation.isPending}
              onClick={() =>
                createMutation.mutate({
                  bankName,
                  accNumber,
                  bankAddress,
                  isPrimary,
                })
              }
              w="full"
              mt={2}
            >
              Add Bank Account
            </Button>
          </Stack>
        </Box>
      </SimpleGrid>

      <ConfirmationModal
        isOpen={!!deleteTarget}
        title="Remove Bank Account"
        message={`Are you sure you want to remove ${deleteTarget?.bankName} (A/c: ${deleteTarget?.accNumber})?`}
        onConfirm={async () => {
          if (deleteTarget) {
            await deleteMutation.mutateAsync(deleteTarget.id);
          }
        }}
        onCancel={() => setDeleteTarget(null)}
        isLoading={deleteMutation.isPending}
        confirmText="Remove"
      />
    </Stack>
  );
}
