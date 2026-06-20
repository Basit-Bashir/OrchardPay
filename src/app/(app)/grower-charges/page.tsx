"use client";

import { useState, useMemo } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Box, Button, Flex, Heading, Input, Spinner, Stack, Text, chakra, SimpleGrid } from "@chakra-ui/react";
import { api } from "@/lib/client";
import { ConfirmationModal } from "@/components/common/ConfirmationModal";
import { HugeiconsIcon } from "@hugeicons/react";
import { PlusSignIcon, CoinsIcon } from "@hugeicons/core-free-icons";

const Select = chakra("select");
const Textarea = chakra("textarea");

type Grower = {
  id: string;
  name: string;
  mobile: string;
};

type ItemCharge = {
  id: string;
  growerId: string;
  grower: {
    name: string;
    mobile: string;
  };
  itemName: string;
  quantity: number;
  rate: number;
  amount: number;
  notes: string | null;
  issuedAt: string;
};

const PRESETS = ["Pesticides", "Cardboard Boxes", "Tapes", "Rough Papers"];

function inr(n: number) {
  return `₹${n.toLocaleString("en-IN", { maximumFractionDigits: 0 })}`;
}

function StatCard({
  label,
  value,
  subtext,
  gradientColor,
}: {
  label: string;
  value: string;
  subtext: string;
  gradientColor: string;
}) {
  return (
    <Box
      bg="white"
      p={6}
      borderRadius="2xl"
      borderWidth="1px"
      shadow="sm"
      position="relative"
      overflow="hidden"
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        width: "4px",
        height: "100%",
        bg: gradientColor,
      }}
      _hover={{
        transform: "translateY(-4px)",
        shadow: "md",
      }}
      transition="all 0.2s"
    >
      <Stack gap={1}>
        <Text fontSize="xs" fontWeight="bold" textTransform="uppercase" letterSpacing="wider" color="gray.400">
          {label}
        </Text>
        <Text fontSize="2xl" fontWeight="black" color="gray.850" mt={1}>
          {value}
        </Text>
        <Text fontSize="xs" color="gray.500" mt={2}>
          {subtext}
        </Text>
      </Stack>
    </Box>
  );
}

export default function GrowerChargesPage() {
  const queryClient = useQueryClient();

  // Filters state
  const [filterGrowerId, setFilterGrowerId] = useState("");
  const [search, setSearch] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  // Modal / Form states
  const [modalOpen, setModalOpen] = useState(false);
  const [formGrowerId, setFormGrowerId] = useState("");
  const [formCategory, setFormCategory] = useState("Pesticides");
  const [formCustomName, setFormCustomName] = useState("");
  const [formQty, setFormQty] = useState("");
  const [formRate, setFormRate] = useState("");
  const [formDate, setFormDate] = useState(new Date().toISOString().split("T")[0]);
  const [formNotes, setFormNotes] = useState("");
  const [formError, setFormError] = useState("");
  const [formSubmitting, setFormSubmitting] = useState(false);

  // Deletion states
  const [deleteTargetId, setDeleteTargetId] = useState<string | null>(null);
  const [deleting, setDeleting] = useState(false);

  // Fetch growers list for dropdown filter & form
  const { data: growers } = useQuery({
    queryKey: ["growers", ""],
    queryFn: () => api<Grower[]>("/api/growers"),
  });

  // Query item charges
  const params = new URLSearchParams();
  if (filterGrowerId) params.set("growerId", filterGrowerId);
  if (from) params.set("from", from);
  if (to) params.set("to", to);

  const { data: charges, isLoading, refetch } = useQuery({
    queryKey: ["growerItemCharges", filterGrowerId, from, to],
    queryFn: () => api<ItemCharge[]>(`/api/growers/item-charges?${params.toString()}`),
  });

  // Client-side search and computations
  const filteredCharges = useMemo(() => {
    if (!charges) return [];
    const q = search.trim().toLowerCase();
    if (!q) return charges;
    return charges.filter(
      (c) =>
        c.itemName.toLowerCase().includes(q) ||
        c.grower.name.toLowerCase().includes(q) ||
        (c.notes && c.notes.toLowerCase().includes(q))
    );
  }, [charges, search]);

  const summary = useMemo(() => {
    if (!charges) return { total: 0, pesticides: 0, boxes: 0, others: 0 };
    return charges.reduce(
      (acc, c) => {
        acc.total += c.amount;
        if (c.itemName.toLowerCase().includes("pesticide")) {
          acc.pesticides += c.amount;
        } else if (c.itemName.toLowerCase().includes("box") || c.itemName.toLowerCase().includes("cardboard")) {
          acc.boxes += c.amount;
        } else {
          acc.others += c.amount;
        }
        return acc;
      },
      { total: 0, pesticides: 0, boxes: 0, others: 0 }
    );
  }, [charges]);

  const handleOpenModal = () => {
    setFormGrowerId("");
    setFormCategory("Pesticides");
    setFormCustomName("");
    setFormQty("");
    setFormRate("");
    setFormDate(new Date().toISOString().split("T")[0]);
    setFormNotes("");
    setFormError("");
    setModalOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError("");

    const growerId = formGrowerId.trim();
    const itemName = formCategory === "Others" ? formCustomName.trim() : formCategory;
    const qty = parseFloat(formQty);
    const rate = parseFloat(formRate);
    const date = formDate.trim();
    const notes = formNotes.trim();

    if (!growerId) {
      setFormError("Please select a grower");
      return;
    }
    if (!itemName) {
      setFormError("Item name is required");
      return;
    }
    if (isNaN(qty) || qty <= 0) {
      setFormError("Quantity must be greater than 0");
      return;
    }
    if (isNaN(rate) || rate < 0) {
      setFormError("Rate must be 0 or greater");
      return;
    }

    setFormSubmitting(true);
    try {
      await api("/api/growers/item-charges", {
        method: "POST",
        body: JSON.stringify({
          growerId,
          itemName,
          quantity: qty,
          rate,
          notes,
          issuedAt: date ? new Date(date) : undefined,
        }),
      });

      queryClient.invalidateQueries({ queryKey: ["growerItemCharges"] });
      queryClient.invalidateQueries({ queryKey: ["grower", growerId] });
      setModalOpen(false);
      refetch();
    } catch (err: any) {
      setFormError(err.message || "Failed to issue materials");
    } finally {
      setFormSubmitting(false);
    }
  };

  const handleDelete = async () => {
    if (!deleteTargetId) return;
    setDeleting(true);
    try {
      await api(`/api/growers/item-charges/${deleteTargetId}`, {
        method: "DELETE",
      });
      queryClient.invalidateQueries({ queryKey: ["growerItemCharges"] });
      // Invalidate all grower queries because we don't know which grower is affected without lookup
      queryClient.invalidateQueries({ queryKey: ["grower"] });
      setDeleteTargetId(null);
      refetch();
    } catch (err: any) {
      alert(err.message || "Failed to delete charge record");
    } finally {
      setDeleting(false);
    }
  };

  const itemBadgeColor = (name: string) => {
    const norm = name.toLowerCase();
    if (norm.includes("pesticide")) {
      return { bg: "emerald.50", text: "emerald.750", border: "emerald.300" };
    }
    if (norm.includes("box") || norm.includes("cardboard")) {
      return { bg: "amber.50", text: "amber.750", border: "amber.300" };
    }
    if (norm.includes("tape")) {
      return { bg: "blue.50", text: "blue.700", border: "blue.200" };
    }
    if (norm.includes("paper")) {
      return { bg: "purple.50", text: "purple.750", border: "purple.200" };
    }
    return { bg: "gray.50", text: "gray.600", border: "gray.200" };
  };

  return (
    <Stack gap={6}>
      {/* Header */}
      <Flex justify="space-between" align="center" wrap="wrap" gap={4}>
        <Heading size="lg" color="gray.800">
          Grower Material Charges
        </Heading>
        <Button onClick={handleOpenModal} colorPalette="amber" style={{ display: "flex", gap: "8px" }}>
          <HugeiconsIcon icon={PlusSignIcon} size={16} />
          Issue Materials
        </Button>
      </Flex>

      {/* Analytics KPI Cards */}
      <SimpleGrid columns={{ base: 1, md: 3 }} gap={6}>
        <StatCard
          label="Total Material Charges"
          value={inr(summary.total)}
          subtext="Total outstanding grower material debits"
          gradientColor="amber.500"
        />
        <StatCard
          label="Pesticides Cost"
          value={inr(summary.pesticides)}
          subtext="Chemical/Pesticide distributions"
          gradientColor="emerald.500"
        />
        <StatCard
          label="Cardboard Boxes Cost"
          value={inr(summary.boxes)}
          subtext="Packing cardboard deliveries"
          gradientColor="blue.500"
        />
      </SimpleGrid>

      {/* Central Filters */}
      <Flex gap={3} wrap="wrap" align="flex-end" bg="white" p={5} borderRadius="xl" shadow="sm" borderWidth="1px">
        <Box>
          <Text fontSize="xs" color="gray.500" mb={1} fontWeight="medium">Search description</Text>
          <Input
            size="sm"
            bg="white"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search grower name or item..."
            w={{ base: "full", md: "240px" }}
          />
        </Box>
        <Box>
          <Text fontSize="xs" color="gray.500" mb={1} fontWeight="medium">Grower</Text>
          <Select
            value={filterGrowerId}
            onChange={(e) => setFilterGrowerId(e.target.value)}
            bg="white"
            px={3}
            py={1.5}
            borderWidth="1px"
            borderRadius="md"
            fontSize="sm"
            h="32px"
            style={{ width: "180px" }}
          >
            <option value="">All Growers</option>
            {growers?.map((g) => (
              <option key={g.id} value={g.id}>
                {g.name}
              </option>
            ))}
          </Select>
        </Box>
        <Box>
          <Text fontSize="xs" color="gray.500" mb={1} fontWeight="medium">From</Text>
          <Input size="sm" bg="white" type="date" value={from} onChange={(e) => setFrom(e.target.value)} />
        </Box>
        <Box>
          <Text fontSize="xs" color="gray.500" mb={1} fontWeight="medium">To</Text>
          <Input size="sm" bg="white" type="date" value={to} onChange={(e) => setTo(e.target.value)} />
        </Box>
        {(filterGrowerId || from || to || search) && (
          <Button
            size="sm"
            variant="ghost"
            onClick={() => {
              setFilterGrowerId("");
              setFrom("");
              setTo("");
              setSearch("");
            }}
          >
            Clear
          </Button>
        )}
      </Flex>

      {/* List Table */}
      <Box bg="white" borderRadius="lg" shadow="sm" borderWidth="1px" overflow="hidden">
        {isLoading ? (
          <Flex p={8} justify="center">
            <Spinner color="amber.500" />
          </Flex>
        ) : filteredCharges.length === 0 ? (
          <Box p={8} color="gray.500" textAlign="center">
            No material charges recorded yet. Click "Issue Materials" to record one!
          </Box>
        ) : (
          <Box overflowX="auto">
            <Box as="table" w="full" fontSize="sm">
              <Box as="thead" bg="gray.50">
                <Box as="tr" textAlign="left" color="gray.500">
                  <Box as="th" px={6} py={3.5} fontWeight="medium">
                    Grower Name
                  </Box>
                  <Box as="th" px={6} py={3.5} fontWeight="medium">
                    Material / Item
                  </Box>
                  <Box as="th" px={6} py={3.5} fontWeight="medium">
                    Qty × Rate
                  </Box>
                  <Box as="th" px={6} py={3.5} fontWeight="medium">
                    Total Charge
                  </Box>
                  <Box as="th" px={6} py={3.5} fontWeight="medium">
                    Issued Date
                  </Box>
                  <Box as="th" px={6} py={3.5} fontWeight="medium">
                    Notes
                  </Box>
                  <Box as="th" px={6} py={3.5} fontWeight="medium" textAlign="right">
                    Actions
                  </Box>
                </Box>
              </Box>
              <Box as="tbody">
                {filteredCharges.map((c) => {
                  const badge = itemBadgeColor(c.itemName);
                  return (
                    <Box as="tr" key={c.id} borderTopWidth="1px" _hover={{ bg: "gray.50/20" }} transition="background 0.15s">
                      <Box as="td" px={6} py={3.5} fontWeight="bold" color="green.750">
                        <chakra.a
                          href={`/growers/${c.growerId}`}
                          _hover={{ textDecoration: "underline" }}
                        >
                          {c.grower?.name || "Unknown Grower"}
                        </chakra.a>
                      </Box>
                      <Box as="td" px={6} py={3.5}>
                        <Box
                          as="span"
                          px={2.5}
                          py={0.5}
                          borderRadius="md"
                          fontSize="xs"
                          fontWeight="bold"
                          bg={badge.bg}
                          color={badge.text}
                          borderWidth="1px"
                          borderColor={badge.border}
                        >
                          {c.itemName}
                        </Box>
                      </Box>
                      <Box as="td" px={6} py={3.5} color="gray.600">
                        {c.quantity} × {inr(c.rate)}
                      </Box>
                      <Box as="td" px={6} py={3.5} fontWeight="extrabold" color="amber.750">
                        {inr(c.amount)}
                      </Box>
                      <Box as="td" px={6} py={3.5} color="gray.600">
                        {new Date(c.issuedAt).toLocaleDateString("en-IN")}
                      </Box>
                      <Box as="td" px={6} py={3.5} color="gray.500" maxW="200px" truncate>
                        {c.notes || "—"}
                      </Box>
                      <Box as="td" px={6} py={3.5} textAlign="right">
                        <Button
                          size="xs"
                          variant="outline"
                          colorPalette="red"
                          onClick={() => setDeleteTargetId(c.id)}
                        >
                          Delete
                        </Button>
                      </Box>
                    </Box>
                  );
                })}
              </Box>
            </Box>
          </Box>
        )}
      </Box>

      {/* Record Issue Modal */}
      {modalOpen && (
        <Box
          position="fixed"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bg="rgba(0, 0, 0, 0.4)"
          zIndex={1500}
          display="flex"
          alignItems="center"
          justifyContent="center"
          p={4}
          onClick={() => setModalOpen(false)}
          backdropFilter="blur(4px)"
        >
          <Box
            as="form"
            onSubmit={handleSubmit}
            bg="white"
            borderRadius="xl"
            p={6}
            maxW="md"
            w="full"
            shadow="2xl"
            borderWidth="1px"
            onClick={(e) => e.stopPropagation()}
            color="gray.850"
          >
            <Heading size="md" mb={4} color="gray.900">
              Record Material Issue
            </Heading>

            {formError && (
              <Box bg="red.50" color="red.700" px={3} py={2} borderRadius="md" fontSize="xs" mb={3} fontWeight="medium">
                {formError}
              </Box>
            )}

            <Stack gap={4} mb={6}>
              <Box>
                <Text fontSize="xs" fontWeight="semibold" mb={1} color="gray.600">
                  Select Grower
                </Text>
                <Select
                  value={formGrowerId}
                  onChange={(e) => setFormGrowerId(e.target.value)}
                  bg="white"
                  px={3}
                  py={1.5}
                  borderWidth="1px"
                  borderRadius="md"
                  fontSize="sm"
                  h="32px"
                  w="full"
                  required
                >
                  <option value="">Select a grower…</option>
                  {growers?.map((g) => (
                    <option key={g.id} value={g.id}>
                      {g.name} ({g.mobile})
                    </option>
                  ))}
                </Select>
              </Box>

              <Box>
                <Text fontSize="xs" fontWeight="semibold" mb={1} color="gray.600">
                  Material / Item Type
                </Text>
                <Select
                  value={formCategory}
                  onChange={(e) => {
                    const val = e.target.value;
                    setFormCategory(val);
                    if (val !== "Others") {
                      setFormCustomName("");
                    }
                  }}
                  bg="white"
                  px={3}
                  py={1.5}
                  borderWidth="1px"
                  borderRadius="md"
                  fontSize="sm"
                  h="32px"
                  w="full"
                >
                  {PRESETS.map((p) => (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  ))}
                  <option value="Others">Others (Custom Name)</option>
                </Select>
              </Box>

              {formCategory === "Others" && (
                <Box>
                  <Text fontSize="xs" fontWeight="semibold" mb={1} color="gray.600">
                    Custom Material Name
                  </Text>
                  <Input
                    bg="white"
                    size="sm"
                    value={formCustomName}
                    onChange={(e) => setFormCustomName(e.target.value)}
                    placeholder="e.g. Fertilizer, Spray Pumps"
                    required
                  />
                </Box>
              )}

              <SimpleGrid columns={2} gap={4}>
                <Box>
                  <Text fontSize="xs" fontWeight="semibold" mb={1} color="gray.600">
                    Quantity
                  </Text>
                  <Input
                    bg="white"
                    size="sm"
                    type="number"
                    value={formQty}
                    onChange={(e) => setFormQty(e.target.value)}
                    placeholder="e.g. 10"
                    required
                  />
                </Box>
                <Box>
                  <Text fontSize="xs" fontWeight="semibold" mb={1} color="gray.600">
                    Rate (₹/unit)
                  </Text>
                  <Input
                    bg="white"
                    size="sm"
                    type="number"
                    value={formRate}
                    onChange={(e) => setFormRate(e.target.value)}
                    placeholder="e.g. 150"
                    required
                  />
                </Box>
              </SimpleGrid>

              <Box>
                <Text fontSize="xs" fontWeight="semibold" mb={1} color="gray.600">
                  Issued Date
                </Text>
                <Input
                  bg="white"
                  size="sm"
                  type="date"
                  value={formDate}
                  onChange={(e) => setFormDate(e.target.value)}
                  required
                />
              </Box>

              <Box>
                <Text fontSize="xs" fontWeight="semibold" mb={1} color="gray.600">
                  Notes (Optional)
                </Text>
                <Textarea
                  value={formNotes}
                  onChange={(e) => setFormNotes(e.target.value)}
                  placeholder="Enter specifications, brands, or pack sizes..."
                  rows={2}
                  bg="white"
                  borderWidth="1px"
                  borderRadius="md"
                  p={2}
                  fontSize="sm"
                  w="full"
                />
              </Box>
            </Stack>

            <Flex justify="flex-end" gap={3}>
              <Button size="sm" variant="outline" onClick={() => setModalOpen(false)} disabled={formSubmitting}>
                Cancel
              </Button>
              <Button size="sm" colorPalette="amber" type="submit" loading={formSubmitting}>
                Record Issue
              </Button>
            </Flex>
          </Box>
        </Box>
      )}

      {/* Delete Confirmation */}
      <ConfirmationModal
        isOpen={!!deleteTargetId}
        title="Delete Material Issue / Charge"
        message="Are you sure you want to permanently delete this material issue record? This action will remove the deduction from the grower's ledger balance."
        onConfirm={handleDelete}
        onCancel={() => setDeleteTargetId(null)}
        isLoading={deleting}
        confirmText="Delete"
        colorScheme="red"
      />
    </Stack>
  );
}
