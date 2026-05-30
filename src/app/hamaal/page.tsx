"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Box, Button, Container, Flex, Heading, Input, SimpleGrid, Spinner, Stack, Text, Textarea, chakra } from "@chakra-ui/react";
import { api } from "@/lib/client";

const Select = chakra("select");

type Grower = { id: string; name: string; mobile: string };

type Draft = {
  id: string;
  grower: { name: string };
  fruitType: string;
  quantity: number;
  unit: string;
  rate: number | null;
  notes: string | null;
  status: string;
  createdAt: string;
};

export default function HamaalPage() {
  const router = useRouter();
  const queryClient = useQueryClient();

  // Query: Growers List
  const { data: growers } = useQuery({
    queryKey: ["growers", ""],
    queryFn: () => api<Grower[]>("/api/growers"),
  });

  // Query: Hamaal's Drafts History
  const { data: drafts, isLoading: loadingDrafts } = useQuery({
    queryKey: ["hamaal-drafts"],
    queryFn: () => api<Draft[]>("/api/hamaal"),
  });

  // Query: Current user details for welcoming
  const { data: me } = useQuery({
    queryKey: ["me"],
    queryFn: () => api<{ session: { mobile: string; role: string } }>("/api/auth/me"),
  });

  // Form States
  const [growerId, setGrowerId] = useState("");
  const [growerSearch, setGrowerSearch] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [fruitType, setFruitType] = useState("");
  const [quantity, setQuantity] = useState("");
  const [unit, setUnit] = useState("peti");
  const [rate, setRate] = useState("");
  const [notes, setNotes] = useState("");
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const filteredGrowers = useMemo(() => {
    if (!growers) return [];
    const query = growerSearch.toLowerCase().trim();
    if (!query) return growers;
    return growers.filter(g => 
      g.name.toLowerCase().includes(query) || 
      g.mobile.includes(query)
    );
  }, [growers, growerSearch]);

  async function handleLogout() {
    await api("/api/auth/logout", { method: "POST" });
    router.push("/login");
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setSuccessMsg("");
    setLoading(true);

    try {
      let finalGrowerId = growerId;
      if (!finalGrowerId && growerSearch.trim()) {
        const match = growers?.find(
          (g) => g.name.toLowerCase() === growerSearch.trim().toLowerCase()
        );
        if (match) {
          finalGrowerId = match.id;
        }
      }

      if (!finalGrowerId) throw new Error("Please select a valid grower from the suggestions");
      if (!fruitType.trim()) throw new Error("Fruit type is required");
      const qtyNum = parseFloat(quantity);
      if (isNaN(qtyNum) || qtyNum <= 0) throw new Error("Enter a valid positive quantity");

      const rateNum = parseFloat(rate);
      if (isNaN(rateNum) || rateNum <= 0) throw new Error("Enter a valid positive rate");

      await api("/api/hamaal", {
        method: "POST",
        body: JSON.stringify({
          growerId: finalGrowerId,
          fruitType: fruitType.trim(),
          quantity: qtyNum,
          unit,
          rate: rateNum,
          notes,
        }),
      });

      const ratePart = ` @ ₹${rateNum}/${unit}`;
      setSuccessMsg(`Submitted successfully! Recorded ${qtyNum} ${unit} of ${fruitType}${ratePart}.`);
      setGrowerId("");
      setGrowerSearch("");
      setFruitType("");
      setQuantity("");
      setRate("");
      setNotes("");

      // Invalidate query to refresh history feed
      queryClient.invalidateQueries({ queryKey: ["hamaal-drafts"] });
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  }

  const noGrowers = growers && growers.length === 0;

  return (
    <Flex minH="100vh" bg="gray.50" direction="column">
      {/* 1. Header/Navbar */}
      <Box
        as="nav"
        position="sticky"
        top="0"
        zIndex="100"
        bg="rgba(255, 255, 255, 0.85)"
        backdropFilter="blur(12px)"
        borderBottomWidth="1px"
        borderColor="gray.200"
        w="full"
      >
        <Container maxW="6xl" py={4}>
          <Flex justify="space-between" align="center">
            {/* Logo */}
            <Flex align="center" gap={2}>
              <Box
                bg="linear-gradient(135deg, var(--chakra-colors-green-500), var(--chakra-colors-teal-600))"
                w="32px"
                h="32px"
                borderRadius="lg"
                display="flex"
                alignItems="center"
                justifyContent="center"
                color="white"
                fontWeight="bold"
                fontSize="lg"
                shadow="sm"
              >
                O
              </Box>
              <Heading
                size="md"
                fontWeight="bold"
                style={{
                  background: "linear-gradient(to right, var(--chakra-colors-green-600), var(--chakra-colors-teal-600))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                OrchardPay Hamaal
              </Heading>
            </Flex>

            {/* Logout CTA */}
            <Flex align="center" gap={4}>
              <Text fontSize="xs" fontWeight="semibold" color="gray.600" display={{ base: "none", md: "inline" }}>
                Logged in: {me?.session?.mobile}
              </Text>
              <Button size="sm" variant="outline" colorPalette="red" onClick={handleLogout}>
                Log out
              </Button>
            </Flex>
          </Flex>
        </Container>
      </Box>

      {/* 2. Main Content Area */}
      <Container maxW="6xl" py={8} flex="1">
        <SimpleGrid columns={{ base: 1, lg: 12 }} gap={8} alignItems="start">

          {/* Left Column: Form (7 cols) */}
          <Box style={{ gridColumn: "span 7" }}>
            <Stack gap={6}>
              <Box>
                <Heading size="lg" color="gray.800" mb={1}>Record Crop Lot Delivery</Heading>
                <Text fontSize="sm" color="gray.500">Record fruit crate and peti deliveries immediately as lots arrive at the mandi stall.</Text>
              </Box>

              {noGrowers ? (
                <Box bg="white" p={6} borderRadius="lg" borderWidth="1px">
                  <Text color="gray.500">Please ask the buyer/admin to register growers first before you can record lots.</Text>
                </Box>
              ) : (
                <form onSubmit={handleSubmit}>
                  <Box bg="white" p={6} borderRadius="xl" shadow="sm" borderWidth="1px">
                    <Stack gap={4}>
                      {error && (
                        <Box bg="red.50" color="red.700" px={4} py={2} borderRadius="md" fontSize="sm">
                          {error}
                        </Box>
                      )}
                      {successMsg && (
                        <Box bg="green.50" color="green.800" px={4} py={2} borderRadius="md" fontSize="sm">
                          {successMsg}
                        </Box>
                      )}

                      <Box position="relative">
                        <Text fontSize="sm" fontWeight="semibold" mb={1} color="gray.700">Grower Name</Text>
                        <Input
                          value={growerSearch}
                          onChange={(e) => {
                            setGrowerSearch(e.target.value);
                            setGrowerId("");
                            setShowSuggestions(true);
                          }}
                          onFocus={() => setShowSuggestions(true)}
                          onBlur={() => setShowSuggestions(false)}
                          placeholder="Type grower name or mobile number..."
                          bg="white"
                          required
                        />

                        {showSuggestions && growerSearch.trim() && (
                          <Box
                            position="absolute"
                            top="100%"
                            left="0"
                            right="0"
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
                                  fontSize="sm"
                                  cursor="pointer"
                                  _hover={{ bg: "gray.50" }}
                                  onMouseDown={(e) => {
                                    e.preventDefault();
                                    setGrowerSearch(g.name);
                                    setGrowerId(g.id);
                                    setShowSuggestions(false);
                                  }}
                                >
                                  <Text fontWeight="semibold" color="gray.800">{g.name}</Text>
                                  <Text fontSize="xs" color="gray.500">{g.mobile}</Text>
                                </Box>
                              ))
                            )}
                          </Box>
                        )}
                      </Box>

                      <Box>
                        <Text fontSize="sm" fontWeight="semibold" mb={1} color="gray.700">Fruit Type</Text>
                        <Input
                          value={fruitType}
                          onChange={(e) => setFruitType(e.target.value)}
                          placeholder="e.g. Apples, Grapes, Mangoes"
                          list="fruit-suggestions"
                          required
                          bg="white"
                        />
                      </Box>

                      <SimpleGrid columns={{ base: 1, md: 3 }} gap={4} w="full">
                        <Box>
                          <Text fontSize="sm" fontWeight="semibold" mb={1} color="gray.700">Quantity</Text>
                          <Input
                            type="number"
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                            placeholder="120"
                            required
                            bg="white"
                          />
                        </Box>

                        <Box>
                          <Text fontSize="sm" fontWeight="semibold" mb={1} color="gray.700">Unit Type</Text>
                          <Select
                            value={unit}
                            onChange={(e) => setUnit(e.target.value)}
                            bg="white"
                            px={3} py={1.5} borderWidth="1px" borderRadius="md"
                            w="full"
                          >
                            <option value="peti">peti (Boxes/Crates)</option>
                            <option value="daba">daba (Tins/Boxes)</option>
                            <option value="kg">kg (Kilograms)</option>
                          </Select>
                        </Box>

                        <Box>
                          <Text fontSize="sm" fontWeight="semibold" mb={1} color="gray.700">Rate (₹/Unit)</Text>
                          <Input
                            type="number"
                            value={rate}
                            onChange={(e) => setRate(e.target.value)}
                            placeholder="e.g. 50"
                            bg="white"
                            required
                          />
                        </Box>
                      </SimpleGrid>

                      <Box>
                        <Text fontSize="sm" fontWeight="semibold" mb={1} color="gray.700">Remarks / Lot Notes (Optional)</Text>
                        <Textarea
                          value={notes}
                          onChange={(e) => setNotes(e.target.value)}
                          placeholder="e.g. Lot from upper orchard, slightly wet boxes, truck no."
                          rows={3}
                        />
                      </Box>

                      <Button
                        type="submit"
                        colorPalette="green"
                        loading={loading}
                        size="lg"
                        w="full"
                        mt={2}
                      >
                        Submit lot to Buyer review
                      </Button>
                    </Stack>
                  </Box>
                </form>
              )}
            </Stack>

            <datalist id="fruit-suggestions">
              <option value="Apple" />
              <option value="Alphonso Mango" />
              <option value="Grapes" />
              <option value="Pomegranate" />
              <option value="Orange" />
              <option value="Banana" />
            </datalist>
          </Box>

          {/* Right Column: Submission History (5 cols) */}
          <Box style={{ gridColumn: "span 5" }}>
            <Stack gap={4}>
              <Box>
                <Heading size="md" color="gray.700">Your Recent Submissions</Heading>
                <Text fontSize="xs" color="gray.500">History of crop lots recorded by you today.</Text>
              </Box>

              {loadingDrafts ? (
                <Flex justify="center" py={10}><Spinner color="green.500" /></Flex>
              ) : !drafts || drafts.length === 0 ? (
                <Box bg="white" p={6} borderRadius="lg" borderWidth="1px" textAlign="center" color="gray.450">
                  No submissions yet.
                </Box>
              ) : (
                <Stack gap={3}>
                  {drafts.map((d) => (
                    <Box key={d.id} bg="white" p={4} borderRadius="xl" shadow="xs" borderWidth="1px">
                      <Flex justify="space-between" align="start">
                        <Stack gap={0.5}>
                          <Text fontWeight="semibold" color="gray.800" fontSize="sm">{d.grower.name}</Text>
                          <Text color="green.750" fontWeight="bold" fontSize="xs">
                            {d.quantity} {d.unit} of {d.fruitType} {d.rate ? `@ ₹${d.rate}/${d.unit}` : ""}
                          </Text>
                          {d.notes && <Text fontSize="xs" color="gray.400" fontStyle="italic">Notes: "{d.notes}"</Text>}
                          <Text fontSize="10px" color="gray.400" mt={1}>
                            Recorded: {new Date(d.createdAt).toLocaleTimeString("en-IN", { hour: "numeric", minute: "2-digit" })}
                          </Text>
                        </Stack>

                        <Text
                          fontSize="10px"
                          fontWeight="bold"
                          px={2}
                          py={0.5}
                          borderRadius="full"
                          bg={
                            d.status === "approved"
                              ? "green.50"
                              : d.status === "pending"
                                ? "yellow.50"
                                : "red.50"
                          }
                          color={
                            d.status === "approved"
                              ? "green.750"
                              : d.status === "pending"
                                ? "yellow.800"
                                : "red.700"
                          }
                          borderWidth="1px"
                          borderColor={
                            d.status === "approved"
                              ? "green.200"
                              : d.status === "pending"
                                ? "yellow.200"
                                : "red.200"
                          }
                        >
                          {d.status === "approved"
                            ? "ADDED TO LEDGER"
                            : d.status === "pending"
                              ? "PENDING REVIEW"
                              : "REJECTED"}
                        </Text>
                      </Flex>
                    </Box>
                  ))}
                </Stack>
              )}
            </Stack>
          </Box>

        </SimpleGrid>
      </Container>
    </Flex>
  );
}
