"use client";

import { useState } from "react";
import { Box, Button, Input, Stack, Text, Textarea } from "@chakra-ui/react";

export type GrowerValues = { name: string; mobile: string; address: string };

export function GrowerForm({
  initial,
  submitLabel,
  onSubmit,
}: {
  initial?: Partial<GrowerValues>;
  submitLabel: string;
  onSubmit: (values: GrowerValues) => Promise<void>;
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
        <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Ramesh Orchard" />
      </Box>
      <Box>
        <Text fontSize="sm" mb={1}>Mobile</Text>
        <Input value={mobile} onChange={(e) => setMobile(e.target.value)} placeholder="+919812300001" />
      </Box>
      <Box>
        <Text fontSize="sm" mb={1}>Address (optional)</Text>
        <Textarea value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Village, district" />
      </Box>
      <Button colorPalette="green" onClick={handle} loading={loading} alignSelf="flex-start">
        {submitLabel}
      </Button>
    </Stack>
  );
}
