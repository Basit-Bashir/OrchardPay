"use client";

import { useEffect, useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Box, Button, Flex, Heading, Input, Spinner, Stack, Text, Table, IconButton, chakra } from "@chakra-ui/react";
import { api } from "@/lib/client";
import { PlusSignIcon, Cancel01Icon, Tick01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

const Select = chakra("select");

type DeductionSetting = {
  id: string;
  name: string;
  type: "percentage" | "fixed_per_unit" | "fixed_flat";
  value: number;
};

type Firm = {
  uniqueId: string;
  firmName: string;
  ownerName: string;
  logoUrl?: string | null;
  deductionsConfig?: string | null;
};

export default function DeductionsPage() {
  const queryClient = useQueryClient();
  const { data: firm, isLoading } = useQuery({
    queryKey: ["firm"],
    queryFn: () => api<Firm>("/api/firm"),
  });

  const [deductions, setDeductions] = useState<DeductionSetting[]>([]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    if (firm) {
      if (firm.deductionsConfig) {
        try {
          const parsed = JSON.parse(firm.deductionsConfig);
          if (Array.isArray(parsed)) {
            setDeductions(parsed);
            return;
          }
        } catch (e) {
          console.error("Failed to parse deductions config:", e);
        }
      }
      // Fallback defaults
      setDeductions([
        { id: "commission", name: "Commission", type: "percentage", value: 12 },
        { id: "labour", name: "Labour", type: "fixed_per_unit", value: 3 },
        { id: "association", name: "Association", type: "percentage", value: 0.10 },
        { id: "printing", name: "Printing", type: "fixed_flat", value: 1 },
        { id: "miscellaneous", name: "Miscellaneous", type: "percentage", value: 0.90 }
      ]);
    }
  }, [firm]);

  const updateFirmMutation = useMutation({
    mutationFn: (configStr: string) =>
      api("/api/firm", {
        method: "PATCH",
        body: JSON.stringify({
          firmName: firm?.firmName || "",
          ownerName: firm?.ownerName || "",
          logoUrl: firm?.logoUrl || null,
          deductionsConfig: configStr,
        }),
      }),
    onSuccess: () => {
      setSuccess("Deductions configured successfully.");
      queryClient.invalidateQueries({ queryKey: ["firm"] });
      setTimeout(() => setSuccess(""), 4000);
    },
    onError: (e) => {
      setError(e.message);
      setTimeout(() => setError(""), 5000);
    },
  });

  const addDeduction = () => {
    const newId = `custom_${Date.now()}`;
    setDeductions([
      ...deductions,
      { id: newId, name: "New Deduction", type: "percentage", value: 0 },
    ]);
  };

  const removeDeduction = (id: string) => {
    setDeductions(deductions.filter((d) => d.id !== id));
  };

  const updateDeduction = (id: string, key: keyof DeductionSetting, val: any) => {
    setDeductions(
      deductions.map((d) => {
        if (d.id === id) {
          return { ...d, [key]: val };
        }
        return d;
      })
    );
  };

  const handleSave = () => {
    setError("");
    setSuccess("");
    
    // Validations
    if (deductions.some((d) => !d.name.trim())) {
      setError("All deductions must have a name.");
      return;
    }
    if (deductions.some((d) => isNaN(d.value) || d.value < 0)) {
      setError("All default values must be non-negative numbers.");
      return;
    }

    const configStr = JSON.stringify(deductions);
    updateFirmMutation.mutate(configStr);
  };

  if (isLoading) {
    return (
      <Flex justify="center" align="center" minH="200px">
        <Spinner color="green.500" />
      </Flex>
    );
  }

  return (
    <Stack gap={6}>
      <Box>
        <Heading size="lg" color="gray.800" mb={1}>Deductions &amp; Charges</Heading>
        <Text fontSize="sm" color="gray.500">Configure default Mandi deductions and create custom percentage or fixed charges.</Text>
      </Box>

      <Box bg="white" p={6} borderRadius="xl" shadow="sm" borderWidth="1px">
        <Stack gap={6}>
          {error && (
            <Box p={3} bg="red.50" borderLeftWidth="4px" borderColor="red.500" borderRadius="md">
              <Text fontSize="sm" color="red.700" fontWeight="medium">{error}</Text>
            </Box>
          )}

          {success && (
            <Box p={3} bg="green.50" borderLeftWidth="4px" borderColor="green.500" borderRadius="md">
              <Text fontSize="sm" color="green.700" fontWeight="medium">{success}</Text>
            </Box>
          )}

          <Table.Root size="sm" variant="line">
            <Table.Header>
              <Table.Row bg="gray.50">
                <Table.ColumnHeader color="gray.600" fontWeight="bold">Deduction Name</Table.ColumnHeader>
                <Table.ColumnHeader color="gray.600" fontWeight="bold" w="220px">Calculation Type</Table.ColumnHeader>
                <Table.ColumnHeader color="gray.600" fontWeight="bold" w="180px">Default Rate / Value</Table.ColumnHeader>
                <Table.ColumnHeader color="gray.600" fontWeight="bold" w="80px" textAlign="center">Action</Table.ColumnHeader>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {deductions.map((d) => {
                const isStandard = ["commission", "labour", "association", "printing", "miscellaneous"].includes(d.id);
                return (
                  <Table.Row key={d.id} _hover={{ bg: "gray.50/50" }}>
                    <Table.Cell>
                      <Input
                        value={d.name}
                        onChange={(e) => updateDeduction(d.id, "name", e.target.value)}
                        disabled={isStandard}
                        size="sm"
                        fontWeight="semibold"
                        bg={isStandard ? "gray.50" : "white"}
                      />
                    </Table.Cell>
                    <Table.Cell>
                      <Select
                        value={d.type}
                        onChange={(e) => updateDeduction(d.id, "type", e.target.value)}
                        w="full"
                        px={2} py={1}
                        borderWidth="1px"
                        borderRadius="md"
                        fontSize="xs"
                        bg="white"
                      >
                        <option value="percentage">Percentage (%) of Gross</option>
                        <option value="fixed_per_unit">Fixed (₹) per Unit</option>
                        <option value="fixed_flat">Fixed Flat Charge (₹)</option>
                      </Select>
                    </Table.Cell>
                    <Table.Cell>
                      <Input
                        type="number"
                        step="any"
                        value={d.value}
                        onChange={(e) => updateDeduction(d.id, "value", parseFloat(e.target.value) || 0)}
                        size="sm"
                        bg="white"
                      />
                    </Table.Cell>
                    <Table.Cell textAlign="center">
                      {!isStandard ? (
                        <IconButton
                          aria-label="Delete deduction"
                          variant="ghost"
                          colorPalette="red"
                          size="xs"
                          onClick={() => removeDeduction(d.id)}
                        >
                          <HugeiconsIcon icon={Cancel01Icon} size={16} />
                        </IconButton>
                      ) : (
                        <Text fontSize="xs" color="gray.400" fontStyle="italic">Lock</Text>
                      )}
                    </Table.Cell>
                  </Table.Row>
                );
              })}
            </Table.Body>
          </Table.Root>

          <Flex justify="space-between" align="center" mt={4}>
            <Button
              variant="outline"
              colorPalette="green"
              size="sm"
              onClick={addDeduction}
              style={{ display: "flex", gap: "8px" }}
            >
              <HugeiconsIcon icon={PlusSignIcon} size={14} />
              Add Custom Deduction
            </Button>
            <Button
              colorPalette="green"
              size="md"
              onClick={handleSave}
              loading={updateFirmMutation.isPending}
              style={{ display: "flex", gap: "8px" }}
            >
              <HugeiconsIcon icon={Tick01Icon} size={16} />
              Save Configuration
            </Button>
          </Flex>
        </Stack>
      </Box>
    </Stack>
  );
}
