"use client";

import { useRouter } from "next/navigation";
import { Box, Heading, Stack } from "@chakra-ui/react";
import { SellerForm } from "@/components/seller/SellerForm";
import { api } from "@/lib/client";

export default function NewSellerPage() {
  const router = useRouter();

  async function handleSubmit(values: { name: string; mobile: string; address: string }) {
    await api("/api/sellers", {
      method: "POST",
      body: JSON.stringify(values),
    });
    router.push("/sellers");
    router.refresh();
  }

  return (
    <Stack gap={6}>
      <Heading size="lg" color="gray.800">Add Seller (Buyer)</Heading>
      <Box bg="white" p={6} borderRadius="xl" shadow="sm" borderWidth="1px">
        <SellerForm submitLabel="Create Seller" onSubmit={handleSubmit} />
      </Box>
    </Stack>
  );
}
