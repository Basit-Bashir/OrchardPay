"use client";

import { useState } from "react";
import { Box, Button, Input, Stack, Text, Textarea } from "@chakra-ui/react";
import { PhoneInput } from "@/components/common/PhoneInput";

export type SellerValues = { name: string; mobile: string; address: string };

export function SellerForm({
  initial,
  submitLabel,
  onSubmit,
}: {
  initial?: Partial<SellerValues>;
  submitLabel: string;
  onSubmit: (values: SellerValues) => Promise<void>;
}) {
  const [name, setName] = useState(initial?.name ?? "");
  const [mobile, setMobile] = useState(initial?.mobile ?? "+91");
  const [address, setAddress] = useState(initial?.address ?? "");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handle() {
    setError("");
    setLoading(true);
    try {
      await onSubmit({ name, mobile, address });
    } catch (e) {
      setError((e as Error).message);
      setLoading(false);
    }
  }

  return (
    <Stack gap={4} maxW="md">
      {error && (
        <Box bg="red.50" color="red.700" px={4} py={2} borderRadius="md" fontSize="sm">
          {error}
        </Box>
      )}
      <Box>
        <Text fontSize="sm" mb={1}>Name</Text>
        <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Ramesh Merchant" />
      </Box>
      <Box>
        <Text fontSize="sm" mb={1}>Mobile</Text>
        <PhoneInput value={mobile} onChange={setMobile} placeholder="9812300001" />
      </Box>
      <Box>
        <Text fontSize="sm" mb={1}>Address (optional)</Text>
        <Textarea value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Mandi shop, market yard" />
      </Box>
      <Button colorPalette="green" onClick={handle} loading={loading} alignSelf="flex-start">
        {submitLabel}
      </Button>
    </Stack>
  );
}
