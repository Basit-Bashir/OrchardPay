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

          {/* Grand Total Card */}
          <Box bg="green.50" px={5} py={4} borderRadius="xl" borderWidth="1px" borderColor="green.200" shadow="sm">
            <Text fontSize="xs" color="green.700" textTransform="uppercase" fontWeight="bold" letterSpacing="wider">Grand Total Amount</Text>
            <Text fontSize="3xl" fontWeight="black" color="green.800" mt={1}>
              ₹{grandTotal.toLocaleString("en-IN", { maximumFractionDigits: 0 })}
            </Text>
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
