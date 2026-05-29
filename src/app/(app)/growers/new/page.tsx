"use client";

import { useRouter } from "next/navigation";
import { Heading, Stack } from "@chakra-ui/react";
import { GrowerForm } from "@/components/grower/GrowerForm";
import { api } from "@/lib/client";

export default function NewGrowerPage() {
  const router = useRouter();
  return (
    <Stack gap={6}>
      <Heading size="lg" color="gray.800">Add grower</Heading>
      <GrowerForm
        submitLabel="Save grower"
        onSubmit={async (values) => {
          await api("/api/growers", { method: "POST", body: JSON.stringify(values) });
          router.push("/growers");
        }}
      />
    </Stack>
  );
}
