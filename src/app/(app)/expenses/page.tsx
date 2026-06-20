"use client";

import { useState, useMemo } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Box, Button, Flex, Heading, Input, Spinner, Stack, Text, chakra, SimpleGrid } from "@chakra-ui/react";
import { api } from "@/lib/client";
import { ConfirmationModal } from "@/components/common/ConfirmationModal";
import { HugeiconsIcon } from "@hugeicons/react";
import { PlusSignIcon, BanknoteIcon } from "@hugeicons/core-free-icons";

const Select = chakra("select");
const Textarea = chakra("textarea");

type Expense = {
  id: string;
  title: string;
  amount: number;
  category: string;
  date: string;
  notes?: string | null;
  createdAt: string;
};

const CATEGORIES = [
  "Office",
  "Personal",
  "Utilities",
  "Rent",
  "Salaries",
  "Travel",
  "Tea & Snacks",
  "Others"
];

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
        <Text fontSize="xs" fontWeight="bold" textTransform="uppercase" letterSpacing="wider" color="gray.450">
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

export default function ExpensesPage() {
  const queryClient = useQueryClient();

  // Filter states
  const [category, setCategory] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [search, setSearch] = useState("");

  // Modal / Form states
  const [modalOpen, setModalOpen] = useState(false);
  const [editingExpense, setEditingExpense] = useState<Expense | null>(null);
  const [formTitle, setFormTitle] = useState("");
  const [formAmount, setFormAmount] = useState("");
  const [formCategory, setFormCategory] = useState("Office");
  const [formDate, setFormDate] = useState(new Date().toISOString().split("T")[0]);
  const [formNotes, setFormNotes] = useState("");
  const [formError, setFormError] = useState("");
  const [formSubmitting, setFormSubmitting] = useState(false);

  // Delete states
  const [deleteTargetId, setDeleteTargetId] = useState<string | null>(null);
  const [deleting, setDeleting] = useState(false);

  // Query expenses
  const params = new URLSearchParams();
  if (category) params.set("category", category);
  if (from) params.set("from", from);
  if (to) params.set("to", to);

  const { data: expenses, isLoading, refetch } = useQuery({
    queryKey: ["expenses", category, from, to],
    queryFn: () => api<Expense[]>(`/api/expenses?${params.toString()}`),
  });

  // Client-side search and computations
  const filteredExpenses = useMemo(() => {
    if (!expenses) return [];
    const q = search.trim().toLowerCase();
    if (!q) return expenses;
    return expenses.filter(
      (e) =>
        e.title.toLowerCase().includes(q) ||
        (e.notes && e.notes.toLowerCase().includes(q))
    );
  }, [expenses, search]);

  const summary = useMemo(() => {
    if (!expenses) return { total: 0, office: 0, personal: 0 };
    return expenses.reduce(
      (acc, e) => {
        acc.total += e.amount;
        if (e.category === "Personal") {
          acc.personal += e.amount;
        } else {
          // Categorize everything else (Office, Utilities, Rent, Salaries, Travel, Tea & Snacks, Others) as Office expenses
          acc.office += e.amount;
        }
        return acc;
      },
      { total: 0, office: 0, personal: 0 }
    );
  }, [expenses]);

  const handleOpenAddModal = () => {
    setEditingExpense(null);
    setFormTitle("");
    setFormAmount("");
    setFormCategory("Office");
    setFormDate(new Date().toISOString().split("T")[0]);
    setFormNotes("");
    setFormError("");
    setModalOpen(true);
  };

  const handleOpenEditModal = (expense: Expense) => {
    setEditingExpense(expense);
    setFormTitle(expense.title);
    setFormAmount(String(expense.amount));
    setFormCategory(expense.category);
    setFormDate(expense.date.split("T")[0]);
    setFormNotes(expense.notes || "");
    setFormError("");
    setModalOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError("");

    const title = formTitle.trim();
    const amount = parseFloat(formAmount);
    const category = formCategory.trim();
    const date = formDate.trim();
    const notes = formNotes.trim();

    if (!title) {
      setFormError("Title/Description is required");
      return;
    }
    if (isNaN(amount) || amount <= 0) {
      setFormError("Amount must be greater than 0");
      return;
    }
    if (!category) {
      setFormError("Category is required");
      return;
    }

    setFormSubmitting(true);
    try {
      if (editingExpense) {
        // Edit flow
        await api(`/api/expenses/${editingExpense.id}`, {
          method: "PUT",
          body: JSON.stringify({
            title,
            amount,
            category,
            date: date ? new Date(date) : undefined,
            notes,
          }),
        });
      } else {
        // Add flow
        await api("/api/expenses", {
          method: "POST",
          body: JSON.stringify({
            title,
            amount,
            category,
            date: date ? new Date(date) : undefined,
            notes,
          }),
        });
      }

      queryClient.invalidateQueries({ queryKey: ["expenses"] });
      setModalOpen(false);
      refetch();
    } catch (err: any) {
      setFormError(err.message || "Failed to save expense");
    } finally {
      setFormSubmitting(false);
    }
  };

  const handleDelete = async () => {
    if (!deleteTargetId) return;
    setDeleting(true);
    try {
      await api(`/api/expenses/${deleteTargetId}`, {
        method: "DELETE",
      });
      queryClient.invalidateQueries({ queryKey: ["expenses"] });
      setDeleteTargetId(null);
      refetch();
    } catch (err: any) {
      alert(err.message || "Failed to delete expense");
    } finally {
      setDeleting(false);
    }
  };

  const categoryColorMap = (cat: string) => {
    switch (cat) {
      case "Office":
        return { bg: "emerald.50", text: "emerald.750", border: "emerald.300" };
      case "Personal":
        return { bg: "indigo.50", text: "indigo.700", border: "indigo.200" };
      case "Utilities":
        return { bg: "blue.50", text: "blue.700", border: "blue.200" };
      case "Rent":
        return { bg: "purple.50", text: "purple.750", border: "purple.200" };
      case "Salaries":
        return { bg: "teal.50", text: "teal.750", border: "teal.200" };
      case "Travel":
        return { bg: "cyan.50", text: "cyan.750", border: "cyan.200" };
      case "Tea & Snacks":
        return { bg: "amber.50", text: "amber.750", border: "amber.300" };
      default:
        return { bg: "gray.50", text: "gray.600", border: "gray.200" };
    }
  };

  return (
    <Stack gap={6}>
      {/* Header */}
      <Flex justify="space-between" align="center" wrap="wrap" gap={4}>
        <Heading size="lg" color="gray.800">
          Expenses
        </Heading>
        <Button onClick={handleOpenAddModal} colorPalette="green" style={{ display: "flex", gap: "8px" }}>
          <HugeiconsIcon icon={PlusSignIcon} size={16} />
          Add Expense
        </Button>
      </Flex>

      {/* Analytics Cards */}
      <SimpleGrid columns={{ base: 1, md: 3 }} gap={6}>
        <StatCard
          label="Total Expenses"
          value={inr(summary.total)}
          subtext="Overall outflows for this firm"
          gradientColor="gray.600"
        />
        <StatCard
          label="Office Expenses"
          value={inr(summary.office)}
          subtext="Rent, salaries, utilities, tea, travel & other business run costs"
          gradientColor="emerald.500"
        />
        <StatCard
          label="Personal Expenses"
          value={inr(summary.personal)}
          subtext="Self/personal drawings or private expenses"
          gradientColor="indigo.500"
        />
      </SimpleGrid>

      {/* Filters Section */}
      <Flex gap={3} wrap="wrap" align="flex-end" bg="white" p={5} borderRadius="xl" shadow="sm" borderWidth="1px">
        <Box>
          <Text fontSize="xs" color="gray.500" mb={1} fontWeight="medium">Search description</Text>
          <Input
            size="sm"
            bg="white"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search descriptions/notes..."
            w={{ base: "full", md: "240px" }}
          />
        </Box>
        <Box>
          <Text fontSize="xs" color="gray.500" mb={1} fontWeight="medium">Category</Text>
          <Select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            bg="white"
            px={3}
            py={1.5}
            borderWidth="1px"
            borderRadius="md"
            fontSize="sm"
            h="32px"
            style={{ width: "160px" }}
          >
            <option value="">All Categories</option>
            {CATEGORIES.map((c) => (
              <option key={c} value={c}>
                {c}
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
        {(category || from || to || search) && (
          <Button
            size="sm"
            variant="ghost"
            onClick={() => {
              setCategory("");
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
            <Spinner color="green.500" />
          </Flex>
        ) : filteredExpenses.length === 0 ? (
          <Box p={8} color="gray.500" textAlign="center">
            No expenses found. Click "Add Expense" to record one!
          </Box>
        ) : (
          <Box overflowX="auto">
            <Box as="table" w="full" fontSize="sm">
              <Box as="thead" bg="gray.50">
                <Box as="tr" textAlign="left" color="gray.500">
                  <Box as="th" px={6} py={3.5} fontWeight="medium">
                    Description/Title
                  </Box>
                  <Box as="th" px={6} py={3.5} fontWeight="medium">
                    Category
                  </Box>
                  <Box as="th" px={6} py={3.5} fontWeight="medium">
                    Amount
                  </Box>
                  <Box as="th" px={6} py={3.5} fontWeight="medium">
                    Expense Date
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
                {filteredExpenses.map((exp) => {
                  const colors = categoryColorMap(exp.category);
                  return (
                    <Box as="tr" key={exp.id} borderTopWidth="1px" _hover={{ bg: "gray.50/20" }} transition="background 0.15s">
                      <Box as="td" px={6} py={3.5} fontWeight="semibold" color="gray.700">
                        {exp.title}
                      </Box>
                      <Box as="td" px={6} py={3.5}>
                        <Box
                          as="span"
                          px={2}
                          py={0.5}
                          borderRadius="md"
                          fontSize="xs"
                          fontWeight="bold"
                          bg={colors.bg}
                          color={colors.text}
                          borderWidth="1px"
                          borderColor={colors.border}
                        >
                          {exp.category}
                        </Box>
                      </Box>
                      <Box as="td" px={6} py={3.5} fontWeight="bold" color="gray.800">
                        {inr(exp.amount)}
                      </Box>
                      <Box as="td" px={6} py={3.5} color="gray.600">
                        {new Date(exp.date).toLocaleDateString("en-IN")}
                      </Box>
                      <Box as="td" px={6} py={3.5} color="gray.500" maxW="200px" truncate>
                        {exp.notes || "—"}
                      </Box>
                      <Box as="td" px={6} py={3.5} textAlign="right">
                        <Flex justify="flex-end" gap={2}>
                          <Button
                            size="xs"
                            variant="outline"
                            colorPalette="green"
                            onClick={() => handleOpenEditModal(exp)}
                          >
                            Edit
                          </Button>
                          <Button
                            size="xs"
                            variant="outline"
                            colorPalette="red"
                            onClick={() => setDeleteTargetId(exp.id)}
                          >
                            Delete
                          </Button>
                        </Flex>
                      </Box>
                    </Box>
                  );
                })}
              </Box>
            </Box>
          </Box>
        )}
      </Box>

      {/* Add / Edit Modal */}
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
              {editingExpense ? "Edit Expense" : "Record New Expense"}
            </Heading>

            {formError && (
              <Box bg="red.50" color="red.700" px={3} py={2} borderRadius="md" fontSize="xs" mb={3} fontWeight="medium">
                {formError}
              </Box>
            )}

            <Stack gap={4} mb={6}>
              <Box>
                <Text fontSize="xs" fontWeight="semibold" mb={1} color="gray.600">
                  Description / Title
                </Text>
                <Input
                  bg="white"
                  size="sm"
                  value={formTitle}
                  onChange={(e) => setFormTitle(e.target.value)}
                  placeholder="e.g. Office Internet Bill or Taxi fares"
                  autoFocus
                />
              </Box>
              <SimpleGrid columns={2} gap={4}>
                <Box>
                  <Text fontSize="xs" fontWeight="semibold" mb={1} color="gray.600">
                    Amount (₹)
                  </Text>
                  <Input
                    bg="white"
                    size="sm"
                    type="number"
                    value={formAmount}
                    onChange={(e) => setFormAmount(e.target.value)}
                    placeholder="e.g. 1500"
                  />
                </Box>
                <Box>
                  <Text fontSize="xs" fontWeight="semibold" mb={1} color="gray.600">
                    Category
                  </Text>
                  <Select
                    value={formCategory}
                    onChange={(e) => setFormCategory(e.target.value)}
                    bg="white"
                    px={3}
                    py={1.5}
                    borderWidth="1px"
                    borderRadius="md"
                    fontSize="sm"
                    h="32px"
                    w="full"
                  >
                    {CATEGORIES.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </Select>
                </Box>
              </SimpleGrid>
              <Box>
                <Text fontSize="xs" fontWeight="semibold" mb={1} color="gray.600">
                  Expense Date
                </Text>
                <Input
                  bg="white"
                  size="sm"
                  type="date"
                  value={formDate}
                  onChange={(e) => setFormDate(e.target.value)}
                />
              </Box>
              <Box>
                <Text fontSize="xs" fontWeight="semibold" mb={1} color="gray.600">
                  Notes (Optional)
                </Text>
                <Textarea
                  value={formNotes}
                  onChange={(e) => setFormNotes(e.target.value)}
                  placeholder="Enter details like payment method or item specifications..."
                  rows={3}
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
              <Button size="sm" colorPalette="green" type="submit" loading={formSubmitting}>
                {editingExpense ? "Save Changes" : "Record Expense"}
              </Button>
            </Flex>
          </Box>
        </Box>
      )}

      {/* Delete Confirmation */}
      <ConfirmationModal
        isOpen={!!deleteTargetId}
        title="Delete Expense"
        message="Are you sure you want to permanently delete this expense record? This action cannot be undone."
        onConfirm={handleDelete}
        onCancel={() => setDeleteTargetId(null)}
        isLoading={deleting}
        confirmText="Delete"
        colorScheme="red"
      />
    </Stack>
  );
}
