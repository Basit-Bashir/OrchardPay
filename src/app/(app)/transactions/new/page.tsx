"use client";

import { useMemo, useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import NextLink from "next/link";
import { useQuery } from "@tanstack/react-query";
import { Box, Button, chakra, Heading, Input, Stack, Text, Textarea, SimpleGrid, Flex } from "@chakra-ui/react";
import { api } from "@/lib/client";

const Select = chakra("select");

type Grower = { id: string; name: string; mobile: string; codeName: string | null };
type Seller = { id: string; name: string; mobile: string };

type FormItem = {
  fruitType: string;
  quantity: string;
  unit: "kg" | "peti" | "daba";
  rate: string;
};

function NewTransactionForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const draftId = searchParams.get("draftId") || "";

  const { data: draft } = useQuery({
    queryKey: ["draft", draftId],
    queryFn: () => api<any>(`/api/buyer/drafts/${draftId}`),
    enabled: !!draftId,
  });

  const { data: growers } = useQuery({
    queryKey: ["growers", ""],
    queryFn: () => api<Grower[]>("/api/growers"),
  });

  const { data: sellers } = useQuery({
    queryKey: ["sellers", ""],
    queryFn: () => api<Seller[]>("/api/sellers"),
  });

  const { data: firm } = useQuery({
    queryKey: ["firm"],
    queryFn: () => api<{ deductionsConfig?: string | null }>("/api/firm"),
  });

  const [growerId, setGrowerId] = useState("");
  const [sellerId, setSellerId] = useState("");
  const [growerSearch, setGrowerSearch] = useState("");
  const [sellerSearch, setSellerSearch] = useState("");
  const [showGrowerSuggestions, setShowGrowerSuggestions] = useState(false);
  const [showSellerSuggestions, setShowSellerSuggestions] = useState(false);
  const [items, setItems] = useState<FormItem[]>([
    { fruitType: "", quantity: "", unit: "kg", rate: "" }
  ]);
  const [freight, setFreight] = useState("");
  const [deductionsList, setDeductionsList] = useState<Array<{ name: string; type: "percentage" | "fixed_per_unit" | "fixed_flat"; value: string }>>([]);
  const [notes, setNotes] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (firm) {
      let list: Array<{ name: string; type: "percentage" | "fixed_per_unit" | "fixed_flat"; value: string }> = [];
      if (firm.deductionsConfig) {
        try {
          const parsed = JSON.parse(firm.deductionsConfig);
          if (Array.isArray(parsed)) {
            list = parsed.map((d: any) => ({
              name: d.name,
              type: d.type,
              value: String(d.value),
            }));
          }
        } catch (e) {
          console.error("Failed to parse deductions config:", e);
        }
      }
      if (list.length === 0) {
        list = [
          { name: "Commission", type: "percentage" as const, value: "12" },
          { name: "Labour", type: "fixed_per_unit" as const, value: "3" },
          { name: "Association", type: "percentage" as const, value: "0.10" },
          { name: "Printing", type: "fixed_flat" as const, value: "1" },
          { name: "Miscellaneous", type: "percentage" as const, value: "0.90" }
        ];
      }
      setDeductionsList(list);
    }
  }, [firm]);

  useEffect(() => {
    if (draft) {
      if (draft.growerId) {
        setGrowerId(draft.growerId);
        const match = growers?.find((g) => g.id === draft.growerId);
        if (match) setGrowerSearch(match.name);
      }
      if (draft.sellerId) {
        setSellerId(draft.sellerId);
        const match = sellers?.find((s) => s.id === draft.sellerId);
        if (match) setSellerSearch(match.name);
      }
      if (draft.fruitType) {
        setItems([
          {
            fruitType: draft.fruitType,
            quantity: draft.quantity ? String(draft.quantity) : "",
            unit: draft.unit || "kg",
            rate: draft.rate ? String(draft.rate) : "",
          }
        ]);
      }
      if (draft.notes) setNotes(draft.notes);
    }
  }, [draft, growers, sellers]);

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

  const filteredGrowers = useMemo(() => {
    if (!growers) return [];
    const query = growerSearch.toLowerCase().trim();
    if (!query) return growers;
    return growers.filter(
      (g) =>
        g.name.toLowerCase().includes(query) ||
        g.mobile.includes(query) ||
        (g.codeName && g.codeName.toLowerCase().includes(query))
    );
  }, [growers, growerSearch]);

  const filteredSellers = useMemo(() => {
    if (!sellers) return [];
    const query = sellerSearch.toLowerCase().trim();
    if (!query) return sellers;
    return sellers.filter(
      (s) =>
        s.name.toLowerCase().includes(query) ||
        s.mobile.includes(query)
    );
  }, [sellers, sellerSearch]);

  const totalQuantity = useMemo(() => {
    return items.reduce((sum, item) => {
      const q = parseFloat(item.quantity);
      return sum + (isFinite(q) ? q : 0);
    }, 0);
  }, [items]);

  const expenseCalculations = useMemo(() => {
    if (sellerId && !growerId) {
      return {
        itemsList: [],
        totalDeductions: 0,
        netAmount: grandTotal,
      };
    }

    const fVal = parseFloat(freight) || 0;
    let itemsList = [];
    let totalDeductions = 0;

    for (const d of deductionsList) {
      let amount = 0;
      const dValue = parseFloat(d.value) || 0;
      if (d.type === "percentage") {
        amount = Math.round(grandTotal * (dValue / 100) * 100) / 100;
      } else if (d.type === "fixed_per_unit") {
        amount = Math.round(totalQuantity * dValue * 100) / 100;
      } else if (d.type === "fixed_flat") {
        amount = dValue;
      }
      itemsList.push({ name: d.name, type: d.type, value: dValue, amount });
      totalDeductions += amount;
    }

    // Add freight if present
    if (fVal > 0 && !itemsList.some((d) => d.name.toLowerCase() === "freight")) {
      itemsList.push({ name: "Freight", type: "fixed_flat", value: fVal, amount: fVal });
      totalDeductions += fVal;
    }

    totalDeductions = Math.round(totalDeductions * 100) / 100;
    const netAmount = Math.round((grandTotal - totalDeductions) * 100) / 100;

    return {
      itemsList,
      totalDeductions,
      netAmount,
    };
  }, [growerId, sellerId, grandTotal, totalQuantity, freight, deductionsList]);

  async function submit() {
    console.log("[Client] 'Save & notify grower' clicked.");
    console.log("[Client] Submitting transaction details:", {
      growerId,
      sellerId,
      items,
      freight,
      deductionsList,
      notes,
      draftId,
    });
    setError("");
    setLoading(true);
    try {
      if (!growerId && !sellerId) {
        throw new Error("Select a grower or a seller");
      }
      if (items.some(item => !item.fruitType || !item.quantity || !item.rate)) {
        throw new Error("Please fill in Fruit Type, Quantity, and Rate for all items.");
      }
      console.log("[Client] Sending POST request to /api/transactions...");
      const response = await api("/api/transactions", {
        method: "POST",
        body: JSON.stringify({
          growerId: growerId || undefined,
          sellerId: sellerId || undefined,
          items: items.map(item => ({
            fruitType: item.fruitType,
            quantity: parseFloat(item.quantity),
            unit: item.unit,
            rate: parseFloat(item.rate),
          })),
          freight: parseFloat(freight) || 0,
          deductions: deductionsList.map(d => ({
            name: d.name,
            type: d.type,
            value: parseFloat(d.value) || 0,
          })),
          notes: notes || undefined,
          draftId: draftId || undefined,
        }),
      });
      console.log("[Client] POST request successful. Response:", response);
      router.push("/transactions");
    } catch (e) {
      console.error("[Client] Transaction submit failed:", e);
      setError((e as Error).message);
      setLoading(false);
    }
  }

  const noParties = (growers && growers.length === 0) && (sellers && sellers.length === 0);

  return (
    <Stack gap={6} maxW="3xl">
      <Heading size="lg" color="gray.800">Add transaction</Heading>

      {noParties ? (
        <Box bg="white" p={6} borderRadius="lg" borderWidth="1px">
          <Text mb={3}>You need at least one grower or seller before recording a transaction.</Text>
          <Flex gap={3}>
            <Button asChild colorPalette="green"><NextLink href="/growers/new">Add a grower</NextLink></Button>
            <Button asChild colorPalette="green" variant="outline"><NextLink href="/sellers/new">Add a seller</NextLink></Button>
          </Flex>
        </Box>
      ) : (
        <Stack gap={6}>
          {error && (
            <Box bg="red.50" color="red.700" px={4} py={2} borderRadius="md" fontSize="sm">{error}</Box>
          )}

          {/* Parties Selector */}
          <Box mt={-2}>
            <Text fontSize="xs" color="gray.500" fontStyle="italic">
              * Note: You can select a Grower (inward lot purchase), a Seller (outward lot sale), or both simultaneously (if the grower lot was immediately sold to a seller).
            </Text>
          </Box>
          <SimpleGrid columns={{ base: 1, md: 2 }} gap={4}>
            <Box bg="white" p={6} borderRadius="xl" shadow="sm" borderWidth="1px" position="relative">
              <Text fontSize="sm" fontWeight="semibold" mb={2} color="gray.700">Grower (Seller to Mandi)</Text>
              <Input
                value={growerSearch}
                onChange={(e) => {
                  setGrowerSearch(e.target.value);
                  setGrowerId("");
                  setShowGrowerSuggestions(true);
                }}
                onFocus={() => setShowGrowerSuggestions(true)}
                onBlur={() => setShowGrowerSuggestions(false)}
                placeholder="Search grower by name, code or mobile..."
                bg="white"
                w="full"
              />
              {showGrowerSuggestions && growerSearch.trim() && (
                <Box
                  position="absolute"
                  top="100%"
                  left={6}
                  right={6}
                  bg="white"
                  borderWidth="1px"
                  borderColor="gray.200"
                  borderRadius="md"
                  shadow="md"
                  zIndex="10"
                  maxH="200px"
                  overflowY="auto"
                  mt={1}
                >
                  {filteredGrowers.length === 0 ? (
                    <Box px={3} py={2} fontSize="sm" color="gray.500">
                      No growers found.
                    </Box>
                  ) : (
                    filteredGrowers.map((g) => (
                      <Box
                        key={g.id}
                        px={3}
                        py={2}
                        cursor="pointer"
                        _hover={{ bg: "gray.50" }}
                        onMouseDown={(e) => {
                          e.preventDefault();
                          setGrowerSearch(g.name);
                          setGrowerId(g.id);
                          setShowGrowerSuggestions(false);
                        }}
                      >
                        <Text fontSize="sm" fontWeight="semibold" color="gray.800">
                          {g.name} {g.codeName ? `(Code: ${g.codeName})` : ""}
                        </Text>
                        <Text fontSize="xs" color="gray.500">{g.mobile}</Text>
                      </Box>
                    ))
                  )}
                </Box>
              )}
            </Box>

            <Box bg="white" p={6} borderRadius="xl" shadow="sm" borderWidth="1px" position="relative">
              <Text fontSize="sm" fontWeight="semibold" mb={2} color="gray.700">Seller / Buyer (Purchaser from Mandi)</Text>
              <Input
                value={sellerSearch}
                onChange={(e) => {
                  setSellerSearch(e.target.value);
                  setSellerId("");
                  setShowSellerSuggestions(true);
                }}
                onFocus={() => setShowSellerSuggestions(true)}
                onBlur={() => setShowSellerSuggestions(false)}
                placeholder="Search seller by name or mobile..."
                bg="white"
                w="full"
              />
              {showSellerSuggestions && sellerSearch.trim() && (
                <Box
                  position="absolute"
                  top="100%"
                  left={6}
                  right={6}
                  bg="white"
                  borderWidth="1px"
                  borderColor="gray.200"
                  borderRadius="md"
                  shadow="md"
                  zIndex="10"
                  maxH="200px"
                  overflowY="auto"
                  mt={1}
                >
                  {filteredSellers.length === 0 ? (
                    <Box px={3} py={2} fontSize="sm" color="gray.500">
                      No sellers found.
                    </Box>
                  ) : (
                    filteredSellers.map((s) => (
                      <Box
                        key={s.id}
                        px={3}
                        py={2}
                        cursor="pointer"
                        _hover={{ bg: "gray.50" }}
                        onMouseDown={(e) => {
                          e.preventDefault();
                          setSellerSearch(s.name);
                          setSellerId(s.id);
                          setShowSellerSuggestions(false);
                        }}
                      >
                        <Text fontSize="sm" fontWeight="semibold" color="gray.800">{s.name}</Text>
                        <Text fontSize="xs" color="gray.500">{s.mobile}</Text>
                      </Box>
                    ))
                  )}
                </Box>
              )}
            </Box>
          </SimpleGrid>

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
          {growerId && (
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
                {deductionsList.map((d, idx) => (
                  <Box key={idx}>
                    <Text fontSize="xs" mb={1} color="gray.600" fontWeight="medium">
                      {d.name} {d.type === "percentage" ? "(%)" : d.type === "fixed_per_unit" ? "(₹/unit)" : "(₹)"}
                    </Text>
                    <Input 
                      type="number"
                      step="any"
                      placeholder={d.name}
                      value={d.value}
                      onChange={(e) => {
                        const newList = [...deductionsList];
                        newList[idx] = { ...newList[idx], value: e.target.value };
                        setDeductionsList(newList);
                      }}
                      size="sm"
                      bg="white"
                    />
                  </Box>
                ))}
              </SimpleGrid>
            </Box>
          )}

          {/* Calculations Summary Card */}
          <Box bg="green.50" p={6} borderRadius="xl" borderWidth="1px" borderColor="green.200" shadow="sm">
            <Text fontSize="xs" color="green.700" textTransform="uppercase" fontWeight="bold" letterSpacing="wider" mb={3}>Calculation Summary</Text>
            
            <Stack gap={2} fontSize="sm">
              <Flex justify="space-between">
                <Text color="green.800">Gross Total (Qty × Rate):</Text>
                <Text fontWeight="semibold" color="green.900">₹{grandTotal.toLocaleString("en-IN")}</Text>
              </Flex>
              
              {growerId && (
                <>
                  <Box borderTopWidth="1px" borderColor="green.100" pt={2} pb={1}>
                    <Text fontSize="xs" fontWeight="bold" color="green.700" mb={1}>DEDUCTIONS (GROWER)</Text>
                  </Box>

                  {expenseCalculations.itemsList.map((d, idx) => (
                    <Flex justify="space-between" pl={2} key={idx}>
                      <Text fontSize="xs" color="green.800">
                        {d.name} {d.type === "percentage" ? `(${d.value}%)` : d.type === "fixed_per_unit" ? `(₹${d.value}/unit)` : ""}:
                      </Text>
                      <Text fontSize="xs" color="green.900">-₹{d.amount.toLocaleString("en-IN")}</Text>
                    </Flex>
                  ))}

                  <Flex justify="space-between" borderTopWidth="1px" borderColor="green.200" pt={2} mt={1}>
                    <Text fontWeight="bold" color="green.800">Total Deductions:</Text>
                    <Text fontWeight="bold" color="green.900">₹{expenseCalculations.totalDeductions.toLocaleString("en-IN")}</Text>
                  </Flex>

                  <Flex justify="space-between" borderTopWidth="2px" borderColor="green.300" pt={3} mt={1} align="center">
                    <Text fontWeight="extrabold" fontSize="md" color="green.900">Net Credit to Grower:</Text>
                    <Text fontWeight="black" fontSize="2xl" color="green.900">₹{expenseCalculations.netAmount.toLocaleString("en-IN")}</Text>
                  </Flex>
                </>
              )}

              {sellerId && (
                <Box borderTopWidth="1px" borderColor="green.250" pt={3} mt={growerId ? 3 : 1}>
                  {!growerId && (
                    <Text fontSize="xs" color="green.700" fontStyle="italic" mb={2}>
                      No deductions applicable for Seller transactions.
                    </Text>
                  )}
                  <Flex justify="space-between" align="center">
                    <Text fontWeight="extrabold" fontSize="md" color="green.900">Net Due from Seller:</Text>
                    <Text fontWeight="black" fontSize="2xl" color="green.900">₹{grandTotal.toLocaleString("en-IN")}</Text>
                  </Flex>
                </Box>
              )}
            </Stack>
          </Box>

          {/* Notes Card */}
          <Box bg="white" p={6} borderRadius="xl" shadow="sm" borderWidth="1px">
            <Text fontSize="sm" fontWeight="semibold" mb={2} color="gray.700">Notes (optional)</Text>
            <Textarea value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Enter details about this delivery batch..." />
          </Box>

          {/* Submit Action */}
          <Button colorPalette="green" onClick={submit} loading={loading} alignSelf="flex-start" size="lg" px={8}>
            {sellerId && !growerId ? "Add to seller" : "Save & notify grower"}
          </Button>
        </Stack>
      )}
    </Stack>
  );
}

export default function NewTransactionPage() {
  return (
    <Suspense fallback={<div>Loading transaction form...</div>}>
      <NewTransactionForm />
    </Suspense>
  );
}
