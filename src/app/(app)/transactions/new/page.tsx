"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import NextLink from "next/link";
import { useQuery } from "@tanstack/react-query";
import { Box, Button, chakra, Heading, Input, Stack, Text, Textarea, SimpleGrid, Flex } from "@chakra-ui/react";
import { api } from "@/lib/client";

const Select = chakra("select");

type Grower = { id: string; name: string };

type FormItem = {
  fruitType: string;
  quantity: string;
  unit: "kg" | "peti" | "daba";
  rate: string;
};

export default function NewTransactionPage() {
  const router = useRouter();
  const { data: growers } = useQuery({
    queryKey: ["growers", ""],
    queryFn: () => api<Grower[]>("/api/growers"),
  });

  const [growerId, setGrowerId] = useState("");
  const [items, setItems] = useState<FormItem[]>([
    { fruitType: "", quantity: "", unit: "kg", rate: "" }
  ]);
  const [freight, setFreight] = useState("");
  const [commissionRate, setCommissionRate] = useState("12");
  const [labourRate, setLabourRate] = useState("3");
  const [associationRate, setAssociationRate] = useState("0.10");
  const [printingCharge, setPrintingCharge] = useState("1");
  const [miscellaneousRate, setMiscellaneousRate] = useState("0.90");
  const [notes, setNotes] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const addItem = () => {
    setItems([...items, { fruitType: "", quantity: "", unit: "kg", rate: "" }]);
  };

  const removeItem = (index: number) => {
    const updated = items.filter((_, i) => i !== index);
    setItems(updated);
  };

  const updateItem = (index: number, key: keyof FormItem, value: string) => {
    const updated = items.map((item, i) => {
      if (i === index) {
        return { ...item, [key]: value };
      }
      return item;
    });
    setItems(updated);
  };

  const totals = useMemo(() => {
    return items.map((item) => {
      const q = parseFloat(item.quantity);
      const r = parseFloat(item.rate);
      if (!isFinite(q) || !isFinite(r)) return 0;
      return Math.round(q * r * 100) / 100;
    });
  }, [items]);

  const grandTotal = useMemo(() => {
    return totals.reduce((sum, val) => sum + val, 0);
  }, [totals]);

  const totalQuantity = useMemo(() => {
    return items.reduce((sum, item) => {
      const q = parseFloat(item.quantity);
      return sum + (isFinite(q) ? q : 0);
    }, 0);
  }, [items]);

  const expenseCalculations = useMemo(() => {
    const fVal = parseFloat(freight) || 0;
    const cRate = parseFloat(commissionRate) || 0;
    const lRate = parseFloat(labourRate) || 0;
    const aRate = parseFloat(associationRate) || 0;
    const pCharge = parseFloat(printingCharge) || 0;
    const mRate = parseFloat(miscellaneousRate) || 0;

    const commission = Math.round(grandTotal * (cRate / 100) * 100) / 100;
    const labour = Math.round(totalQuantity * lRate * 100) / 100;
    const association = Math.round(grandTotal * (aRate / 100) * 100) / 100;
    const miscellaneous = Math.round(grandTotal * (mRate / 100) * 100) / 100;
    const totalDeductions = Math.round((commission + labour + fVal + association + pCharge + miscellaneous) * 100) / 100;
    const netAmount = Math.round((grandTotal - totalDeductions) * 100) / 100;

    return {
      commission,
      labour,
      freight: fVal,
      association,
      printing: pCharge,
      miscellaneous,
      totalDeductions,
      netAmount,
    };
  }, [grandTotal, totalQuantity, freight, commissionRate, labourRate, associationRate, printingCharge, miscellaneousRate]);

  async function submit() {
    setError("");
    setLoading(true);
    try {
      if (!growerId) {
        throw new Error("Select a grower");
      }
      if (items.some(item => !item.fruitType || !item.quantity || !item.rate)) {
        throw new Error("Please fill in Fruit Type, Quantity, and Rate for all items.");
      }
      await api("/api/transactions", {
        method: "POST",
        body: JSON.stringify({
          growerId,
          items: items.map(item => ({
            fruitType: item.fruitType,
            quantity: parseFloat(item.quantity),
            unit: item.unit,
            rate: parseFloat(item.rate),
          })),
          freight: parseFloat(freight) || 0,
          commissionRate: parseFloat(commissionRate) || 0,
          labourRate: parseFloat(labourRate) || 0,
          associationRate: parseFloat(associationRate) || 0,
          printingCharge: parseFloat(printingCharge) || 0,
          miscellaneousRate: parseFloat(miscellaneousRate) || 0,
          notes,
        }),
      });
      router.push("/transactions");
    } catch (e) {
      setError((e as Error).message);
      setLoading(false);
    }
  }

  const noGrowers = growers && growers.length === 0;

  return (
    <Stack gap={6} maxW="3xl">
      <Heading size="lg" color="gray.800">Add transaction</Heading>

      {noGrowers ? (
        <Box bg="white" p={6} borderRadius="lg" borderWidth="1px">
          <Text mb={3}>You need at least one grower before recording a transaction.</Text>
          <Button asChild colorPalette="green"><NextLink href="/growers/new">Add a grower</NextLink></Button>
        </Box>
      ) : (
        <Stack gap={6}>
          {error && (
            <Box bg="red.50" color="red.700" px={4} py={2} borderRadius="md" fontSize="sm">{error}</Box>
          )}

          {/* Grower Selector */}
          <Box bg="white" p={6} borderRadius="xl" shadow="sm" borderWidth="1px">
            <Text fontSize="sm" fontWeight="semibold" mb={2} color="gray.700">Grower</Text>
            <Select
              value={growerId}
              onChange={(e) => setGrowerId(e.target.value)}
              w="full"
              px={3}
              py={2}
              borderWidth="1px"
              borderRadius="md"
              bg="white"
            >
              <option value="">Select a grower…</option>
              {growers?.map((g) => (
                <option key={g.id} value={g.id}>{g.name}</option>
              ))}
            </Select>
          </Box>

          {/* Items Section */}
          <Box bg="white" p={6} borderRadius="xl" shadow="sm" borderWidth="1px">
            <Flex justify="space-between" align="center" mb={4}>
              <Heading size="md" color="gray.700">Delivered Items</Heading>
              <Button variant="outline" colorPalette="green" size="sm" onClick={addItem}>
                + Add item
              </Button>
            </Flex>

            <Stack gap={5}>
              {items.map((item, idx) => {
                const itemTotal = totals[idx] || 0;
                return (
                  <Box 
                    key={idx} 
                    p={4} 
                    borderRadius="lg" 
                    borderWidth="1px" 
                    bg="gray.50/50" 
                    position="relative"
                  >
                    <Flex justify="space-between" align="center" mb={3}>
                      <Text fontWeight="semibold" fontSize="xs" color="gray.400" textTransform="uppercase" letterSpacing="wider">
                        Item #{idx + 1}
                      </Text>
                      {items.length > 1 && (
                        <Button size="xs" variant="outline" colorPalette="red" onClick={() => removeItem(idx)}>
                          Remove
                        </Button>
                      )}
                    </Flex>
                    
                    <SimpleGrid columns={{ base: 1, md: 12 }} gap={4} alignItems="end">
                      <Box style={{ gridColumn: "span 4" }}>
                        <Text fontSize="xs" mb={1} color="gray.600" fontWeight="medium">Fruit Type</Text>
                        <Input 
                          value={item.fruitType} 
                          onChange={(e) => updateItem(idx, "fruitType", e.target.value)} 
                          placeholder="Alphonso Mango" 
                          list="fruit-suggestions" 
                          bg="white"
                          size="sm"
                        />
                      </Box>
                      <Box style={{ gridColumn: "span 3" }}>
                        <Text fontSize="xs" mb={1} color="gray.600" fontWeight="medium">Unit</Text>
                        <Select
                          value={item.unit}
                          onChange={(e) => updateItem(idx, "unit", e.target.value)}
                          bg="white"
                          px={3} py={1.5} borderWidth="1px" borderRadius="md"
                          w="full"
                          fontSize="sm"
                        >
                          <option value="kg">kg (Kilograms)</option>
                          <option value="peti">peti (Boxes/Crates)</option>
                          <option value="daba">daba (Boxes/Tins)</option>
                        </Select>
                      </Box>
                      <Box style={{ gridColumn: "span 2" }}>
                        <Text fontSize="xs" mb={1} color="gray.600" fontWeight="medium">Qty ({item.unit})</Text>
                        <Input 
                          type="number" 
                          value={item.quantity} 
                          onChange={(e) => updateItem(idx, "quantity", e.target.value)} 
                          placeholder="100" 
                          bg="white"
                          size="sm"
                        />
                      </Box>
                      <Box style={{ gridColumn: "span 3" }}>
                        <Text fontSize="xs" mb={1} color="gray.600" fontWeight="medium">Rate (₹/{item.unit})</Text>
                        <Input 
                          type="number" 
                          value={item.rate} 
                          onChange={(e) => updateItem(idx, "rate", e.target.value)} 
                          placeholder="55" 
                          bg="white"
                          size="sm"
                        />
                      </Box>
                    </SimpleGrid>
                    
                    <Flex justify="flex-end" mt={3} align="center" gap={2}>
                      <Text fontSize="xs" color="gray.500">Item Total:</Text>
                      <Text fontSize="sm" fontWeight="bold" color="green.700">₹{itemTotal.toLocaleString("en-IN")}</Text>
                    </Flex>
                  </Box>
                );
              })}
            </Stack>
            
            <datalist id="fruit-suggestions">
              <option value="Apple" /><option value="Alphonso Mango" /><option value="Pomegranate" /><option value="Orange" /><option value="Grapes" /><option value="Banana" />
            </datalist>
          </Box>

          {/* Expenses & Deductions Inputs */}
          <Box bg="white" p={6} borderRadius="xl" shadow="sm" borderWidth="1px">
            <Heading size="md" mb={4} color="gray.700">Expenses &amp; Deductions</Heading>
            <SimpleGrid columns={{ base: 1, md: 3 }} gap={4}>
              <Box>
                <Text fontSize="xs" mb={1} color="gray.600" fontWeight="medium">Freight (₹, grower-specified)</Text>
                <Input 
                  type="number"
                  placeholder="Enter grower freight"
                  value={freight}
                  onChange={(e) => setFreight(e.target.value)}
                  size="sm"
                  bg="white"
                />
              </Box>
              <Box>
                <Text fontSize="xs" mb={1} color="gray.600" fontWeight="medium">Commission Rate (%)</Text>
                <Input 
                  type="number"
                  placeholder="12"
                  value={commissionRate}
                  onChange={(e) => setCommissionRate(e.target.value)}
                  size="sm"
                  bg="white"
                />
              </Box>
              <Box>
                <Text fontSize="xs" mb={1} color="gray.600" fontWeight="medium">Labour Rate (₹/unit)</Text>
                <Input 
                  type="number"
                  placeholder="3"
                  value={labourRate}
                  onChange={(e) => setLabourRate(e.target.value)}
                  size="sm"
                  bg="white"
                />
              </Box>
              <Box>
                <Text fontSize="xs" mb={1} color="gray.600" fontWeight="medium">Association Fee (%)</Text>
                <Input 
                  type="number"
                  placeholder="0.10"
                  value={associationRate}
                  onChange={(e) => setAssociationRate(e.target.value)}
                  size="sm"
                  bg="white"
                />
              </Box>
              <Box>
                <Text fontSize="xs" mb={1} color="gray.600" fontWeight="medium">Printing Charge (₹)</Text>
                <Input 
                  type="number"
                  placeholder="1"
                  value={printingCharge}
                  onChange={(e) => setPrintingCharge(e.target.value)}
                  size="sm"
                  bg="white"
                />
              </Box>
              <Box>
                <Text fontSize="xs" mb={1} color="gray.600" fontWeight="medium">Miscellaneous Rate (%)</Text>
                <Input 
                  type="number"
                  placeholder="0.90"
                  value={miscellaneousRate}
                  onChange={(e) => setMiscellaneousRate(e.target.value)}
                  size="sm"
                  bg="white"
                />
              </Box>
            </SimpleGrid>
          </Box>

          {/* Calculations Summary Card */}
          <Box bg="green.50" p={6} borderRadius="xl" borderWidth="1px" borderColor="green.200" shadow="sm">
            <Text fontSize="xs" color="green.700" textTransform="uppercase" fontWeight="bold" letterSpacing="wider" mb={3}>Calculation Summary</Text>
            
            <Stack gap={2} fontSize="sm">
              <Flex justify="space-between">
                <Text color="green.800">Gross Total (Qty × Rate):</Text>
                <Text fontWeight="semibold" color="green.900">₹{grandTotal.toLocaleString("en-IN")}</Text>
              </Flex>
              
              <Box borderTopWidth="1px" borderColor="green.100" pt={2} pb={1}>
                <Text fontSize="xs" fontWeight="bold" color="green.700" mb={1}>DEDUCTIONS</Text>
              </Box>

              <Flex justify="space-between" pl={2}>
                <Text fontSize="xs" color="green.800">Commission ({commissionRate}%):</Text>
                <Text fontSize="xs" color="green.900">-₹{expenseCalculations.commission.toLocaleString("en-IN")}</Text>
              </Flex>
              <Flex justify="space-between" pl={2}>
                <Text fontSize="xs" color="green.800">Labour (₹{labourRate}/unit):</Text>
                <Text fontSize="xs" color="green.900">-₹{expenseCalculations.labour.toLocaleString("en-IN")}</Text>
              </Flex>
              <Flex justify="space-between" pl={2}>
                <Text fontSize="xs" color="green.800">Freight:</Text>
                <Text fontSize="xs" color="green.900">-₹{expenseCalculations.freight.toLocaleString("en-IN")}</Text>
              </Flex>
              <Flex justify="space-between" pl={2}>
                <Text fontSize="xs" color="green.800">Association ({associationRate}%):</Text>
                <Text fontSize="xs" color="green.900">-₹{expenseCalculations.association.toLocaleString("en-IN")}</Text>
              </Flex>
              <Flex justify="space-between" pl={2}>
                <Text fontSize="xs" color="green.800">Printing:</Text>
                <Text fontSize="xs" color="green.900">-₹{expenseCalculations.printing.toLocaleString("en-IN")}</Text>
              </Flex>
              <Flex justify="space-between" pl={2}>
                <Text fontSize="xs" color="green.800">Miscellaneous ({miscellaneousRate}%):</Text>
                <Text fontSize="xs" color="green.900">-₹{expenseCalculations.miscellaneous.toLocaleString("en-IN")}</Text>
              </Flex>

              <Flex justify="space-between" borderTopWidth="1px" borderColor="green.200" pt={2} mt={1}>
                <Text fontWeight="bold" color="green.800">Total Deductions:</Text>
                <Text fontWeight="bold" color="green.900">₹{expenseCalculations.totalDeductions.toLocaleString("en-IN")}</Text>
              </Flex>

              <Flex justify="space-between" borderTopWidth="2px" borderColor="green.300" pt={3} mt={1} align="center">
                <Text fontWeight="extrabold" fontSize="md" color="green.900">Net Credit to Grower:</Text>
                <Text fontWeight="black" fontSize="2xl" color="green.900">₹{expenseCalculations.netAmount.toLocaleString("en-IN")}</Text>
              </Flex>
            </Stack>
          </Box>

          {/* Notes Card */}
          <Box bg="white" p={6} borderRadius="xl" shadow="sm" borderWidth="1px">
            <Text fontSize="sm" fontWeight="semibold" mb={2} color="gray.700">Notes (optional)</Text>
            <Textarea value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Enter details about this delivery batch..." />
          </Box>

          {/* Submit Action */}
          <Button colorPalette="green" onClick={submit} loading={loading} alignSelf="flex-start" size="lg" px={8}>
            Save &amp; notify grower
          </Button>
        </Stack>
      )}
    </Stack>
  );
}
