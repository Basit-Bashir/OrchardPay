"use client";

import { useState, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { Box, Button, chakra, Flex, Heading, Input, SimpleGrid, Spinner, Stack, Text } from "@chakra-ui/react";
import { api } from "@/lib/client";

const Select = chakra("select");

type Grower = { id: string; name: string; mobile: string; codeName?: string | null };
type Seller = { id: string; name: string; mobile: string };

type Txn = {
  id: string;
  fruitType: string;
  quantity: number;
  unit: string;
  rate: number;
  totalAmount: number;
  grossAmount: number;
  receivedAt: string;
  grower?: { name: string; mobile: string } | null;
  growerId?: string | null;
  seller?: { name: string; mobile: string } | null;
  sellerId?: string | null;
};

type Payment = {
  id: string;
  amount: number;
  notes: string | null;
  paidAt: string;
  growerId: string;
  grower?: { name: string; mobile: string };
  method?: string | null;
  bankTransferType?: string | null;
  bankName?: string | null;
  bankAccNumber?: string | null;
  bankAddress?: string | null;
};

type SellerPayment = {
  id: string;
  amount: number;
  notes: string | null;
  paidAt: string;
  sellerId: string;
  seller?: { name: string; mobile: string };
};

type ItemCharge = {
  id: string;
  growerId: string;
  grower?: { name: string; mobile: string };
  itemName: string;
  quantity: number;
  rate: number;
  amount: number;
  notes: string | null;
  issuedAt: string;
};

type Expense = {
  id: string;
  title: string;
  amount: number;
  category: string;
  date: string;
  notes: string | null;
};

function inr(n: number) {
  return `₹${n.toLocaleString("en-IN", { maximumFractionDigits: 0 })}`;
}

export default function ReportsPage() {
  const [reportType, setReportType] = useState<"grower" | "seller" | "expense">("grower");
  
  // Filtering States
  const [growerId, setGrowerId] = useState("");
  const [sellerId, setSellerId] = useState("");
  const [expenseCategory, setExpenseCategory] = useState("");
  const [fruitType, setFruitType] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  // Base metadata queries
  const { data: growers } = useQuery({
    queryKey: ["growers", ""],
    queryFn: () => api<Grower[]>("/api/growers"),
  });

  const { data: sellers } = useQuery({
    queryKey: ["sellers", ""],
    queryFn: () => api<Seller[]>("/api/sellers"),
  });

  // Query Params builders
  const params = new URLSearchParams();
  if (from) params.set("from", from);
  if (to) params.set("to", to);
  if (fruitType) params.set("fruitType", fruitType);

  // --- 1. Grower Queries ---
  const growerTxnParams = new URLSearchParams(params);
  if (growerId) growerTxnParams.set("growerId", growerId);
  const { data: growerTxns, isLoading: growerTxnsLoading } = useQuery({
    queryKey: ["growerTxns", growerId, fruitType, from, to],
    queryFn: () => api<Txn[]>(`/api/transactions?${growerTxnParams.toString()}`),
    enabled: reportType === "grower",
  });

  const growerPayParams = new URLSearchParams();
  if (growerId) growerPayParams.set("growerId", growerId);
  const { data: growerPayments, isLoading: growerPaymentsLoading } = useQuery({
    queryKey: ["growerPayments", growerId],
    queryFn: () => api<Payment[]>(`/api/payments?${growerPayParams.toString()}`),
    enabled: reportType === "grower",
  });

  const growerChargeParams = new URLSearchParams();
  if (growerId) growerChargeParams.set("growerId", growerId);
  const { data: growerCharges, isLoading: growerChargesLoading } = useQuery({
    queryKey: ["growerCharges", growerId],
    queryFn: () => api<ItemCharge[]>(`/api/growers/item-charges?${growerChargeParams.toString()}`),
    enabled: reportType === "grower",
  });

  // --- 2. Seller Queries ---
  const sellerTxnParams = new URLSearchParams(params);
  if (sellerId) sellerTxnParams.set("sellerId", sellerId);
  const { data: sellerTxns, isLoading: sellerTxnsLoading } = useQuery({
    queryKey: ["sellerTxns", sellerId, fruitType, from, to],
    queryFn: () => api<Txn[]>(`/api/transactions?${sellerTxnParams.toString()}`),
    enabled: reportType === "seller",
  });

  const sellerPayParams = new URLSearchParams();
  if (sellerId) sellerPayParams.set("sellerId", sellerId);
  const { data: sellerPayments, isLoading: sellerPaymentsLoading } = useQuery({
    queryKey: ["sellerPayments", sellerId],
    queryFn: () => api<SellerPayment[]>(`/api/seller-payments?${sellerPayParams.toString()}`),
    enabled: reportType === "seller",
  });

  // --- 3. Expenses Queries ---
  const expenseParams = new URLSearchParams();
  if (expenseCategory) expenseParams.set("category", expenseCategory);
  if (from) expenseParams.set("from", from);
  if (to) expenseParams.set("to", to);
  const { data: expenses, isLoading: expensesLoading } = useQuery({
    queryKey: ["expensesReport", expenseCategory, from, to],
    queryFn: () => api<Expense[]>(`/api/expenses?${expenseParams.toString()}`),
    enabled: reportType === "expense",
  });

  const isLoading = growerTxnsLoading || growerPaymentsLoading || growerChargesLoading || sellerTxnsLoading || sellerPaymentsLoading || expensesLoading;

  // --- GROWER REPORT PROCESSING ---
  const growerLedger = useMemo(() => {
    if (reportType !== "grower" || !growerTxns) return [];

    // Filter payments & charges client-side by date if from/to are set
    const fromDate = from ? new Date(from) : null;
    const toDate = to ? new Date(to) : null;

    const filteredPayments = (growerPayments ?? []).filter((p) => {
      const d = new Date(p.paidAt);
      if (fromDate && d < fromDate) return false;
      if (toDate && d > toDate) return false;
      return true;
    });

    const filteredCharges = (growerCharges ?? []).filter((c) => {
      const d = new Date(c.issuedAt);
      if (fromDate && d < fromDate) return false;
      if (toDate && d > toDate) return false;
      return true;
    });

    if (growerId) {
      // Single Grower: Chronological Ledger
      const items = [
        ...growerTxns.map((t) => ({
          id: t.id,
          date: new Date(t.receivedAt),
          type: "Crop Delivery",
          description: `${t.fruitType} - ${t.quantity} ${t.unit} @ ${inr(t.rate)}/${t.unit}`,
          credit: t.totalAmount,
          debit: 0,
        })),
        ...filteredPayments.map((p) => {
          let desc = "Cash Advance Paid";
          if (p.method === "BANK_TRANSFER") {
            const typeStr = p.bankTransferType === "CHECK" ? "Check" : "Transfer";
            desc = `Bank Transfer (${typeStr})`;
            if (p.bankName) {
              desc += ` [${p.bankName}${p.bankAccNumber ? ` A/c: ${p.bankAccNumber}` : ""}]`;
            }
          } else if (p.method === "ONLINE_TRANSFER") {
            desc = `Online Transfer`;
            if (p.bankName) {
              desc += ` [${p.bankName}${p.bankAccNumber ? ` A/c: ${p.bankAccNumber}` : ""}]`;
            }
          } else if (p.method === "CASH") {
            desc = `Cash Advance Paid (Cash)`;
          }
          if (p.notes) {
            desc = `${desc} - ${p.notes}`;
          }
          return {
            id: p.id,
            date: new Date(p.paidAt),
            type: "Advance Cash",
            description: desc,
            credit: 0,
            debit: p.amount,
          };
        }),
        ...filteredCharges.map((c) => ({
          id: c.id,
          date: new Date(c.issuedAt),
          type: "Material Issued",
          description: `${c.itemName} (${c.quantity} @ ${inr(c.rate)})`,
          credit: 0,
          debit: c.amount,
        })),
      ];

      items.sort((a, b) => a.date.getTime() - b.date.getTime());

      let running = 0;
      return items.map((item) => {
        running += item.credit - item.debit;
        return { ...item, balance: running };
      });
    } else {
      // All Growers: Comparative Table
      const mapping: Record<string, { name: string; mobile: string; credit: number; debit: number; charges: number }> = {};
      
      (growers ?? []).forEach((g) => {
        mapping[g.id] = { name: g.name, mobile: g.mobile, credit: 0, debit: 0, charges: 0 };
      });

      growerTxns.forEach((t) => {
        if (t.growerId && mapping[t.growerId]) {
          mapping[t.growerId].credit += t.totalAmount;
        }
      });

      filteredPayments.forEach((p) => {
        if (p.growerId && mapping[p.growerId]) {
          mapping[p.growerId].debit += p.amount;
        }
      });

      filteredCharges.forEach((c) => {
        if (c.growerId && mapping[c.growerId]) {
          mapping[c.growerId].charges += c.amount;
        }
      });

      return Object.entries(mapping)
        .map(([id, info]) => ({
          id,
          ...info,
          balance: info.credit - info.debit - info.charges,
        }))
        .filter((g) => g.credit > 0 || g.debit > 0 || g.charges > 0);
    }
  }, [reportType, growerId, growerTxns, growerPayments, growerCharges, growers, from, to]);

  const growerTotals = useMemo(() => {
    if (reportType !== "grower") return { credit: 0, debit: 0, charges: 0, balance: 0 };
    let credit = 0;
    let debit = 0;
    let charges = 0;

    if (growerId) {
      growerLedger.forEach((item: any) => {
        credit += item.credit;
        debit += item.debit; // Includes both payments & material charges in debits
      });
      // Extract exact material charges
      charges = (growerCharges ?? []).reduce((sum, c) => sum + c.amount, 0);
    } else {
      growerLedger.forEach((g: any) => {
        credit += g.credit;
        debit += g.debit;
        charges += g.charges;
      });
    }

    return { credit, debit, charges, balance: credit - debit - charges };
  }, [reportType, growerId, growerLedger, growerCharges]);

  // --- SELLER REPORT PROCESSING ---
  const sellerLedger = useMemo(() => {
    if (reportType !== "seller" || !sellerTxns) return [];

    const fromDate = from ? new Date(from) : null;
    const toDate = to ? new Date(to) : null;

    const filteredPayments = (sellerPayments ?? []).filter((p) => {
      const d = new Date(p.paidAt);
      if (fromDate && d < fromDate) return false;
      if (toDate && d > toDate) return false;
      return true;
    });

    if (sellerId) {
      // Single Seller: Chronological Ledger
      const items = [
        ...sellerTxns.map((t) => ({
          id: t.id,
          date: new Date(t.receivedAt),
          type: "Outward Purchase",
          description: `${t.fruitType} - ${t.quantity} ${t.unit} @ ${inr(t.rate)}/${t.unit}`,
          debit: t.grossAmount || (t.quantity * t.rate),
          credit: 0,
        })),
        ...filteredPayments.map((p) => ({
          id: p.id,
          date: new Date(p.paidAt),
          type: "Payment Collected",
          description: p.notes ? `Collection: ${p.notes}` : "Cash Collected",
          debit: 0,
          credit: p.amount,
        })),
      ];

      items.sort((a, b) => a.date.getTime() - b.date.getTime());

      let running = 0;
      return items.map((item) => {
        running += item.debit - item.credit;
        return { ...item, balance: running };
      });
    } else {
      // All Sellers: Comparative Table
      const mapping: Record<string, { name: string; mobile: string; debit: number; credit: number }> = {};

      (sellers ?? []).forEach((s) => {
        mapping[s.id] = { name: s.name, mobile: s.mobile, debit: 0, credit: 0 };
      });

      sellerTxns.forEach((t) => {
        if (t.sellerId && mapping[t.sellerId]) {
          mapping[t.sellerId].debit += t.grossAmount || (t.quantity * t.rate);
        }
      });

      filteredPayments.forEach((p) => {
        if (p.sellerId && mapping[p.sellerId]) {
          mapping[p.sellerId].credit += p.amount;
        }
      });

      return Object.entries(mapping)
        .map(([id, info]) => ({
          id,
          ...info,
          balance: info.debit - info.credit,
        }))
        .filter((s) => s.debit > 0 || s.credit > 0);
    }
  }, [reportType, sellerId, sellerTxns, sellerPayments, sellers, from, to]);

  const sellerTotals = useMemo(() => {
    if (reportType !== "seller") return { debit: 0, credit: 0, balance: 0 };
    let debit = 0;
    let credit = 0;

    sellerLedger.forEach((item: any) => {
      debit += item.debit;
      credit += item.credit;
    });

    return { debit, credit, balance: debit - credit };
  }, [reportType, sellerLedger]);

  // --- EXPENSE REPORT PROCESSING ---
  const expenseTotals = useMemo(() => {
    if (reportType !== "expense" || !expenses) return { total: 0, office: 0, personal: 0 };
    return expenses.reduce(
      (acc, e) => {
        acc.total += e.amount;
        if (e.category === "Personal") {
          acc.personal += e.amount;
        } else {
          acc.office += e.amount;
        }
        return acc;
      },
      { total: 0, office: 0, personal: 0 }
    );
  }, [reportType, expenses]);


  // --- EXCEL EXPORT HANDLER ---
  async function exportExcel() {
    const XLSX = await import("xlsx");
    const wb = XLSX.utils.book_new();
    const sheetName = reportType.toUpperCase() + "_REPORT";
    let rows: any[] = [];

    if (reportType === "grower") {
      if (growerId) {
        rows = growerLedger.map((item: any) => ({
          Date: item.date.toLocaleDateString("en-IN"),
          Type: item.type,
          Description: item.description,
          "Credit (Produce Value)": item.credit || "",
          "Debit (Advances/Charges)": item.debit || "",
          "Balance (Outstanding)": item.balance,
        }));
      } else {
        rows = growerLedger.map((g: any) => ({
          "Grower Name": g.name,
          Mobile: g.mobile,
          "Crop Deliveries (Cr)": g.credit,
          "Cash Advances (Dr)": g.debit,
          "Material Charges (Dr)": g.charges,
          "Net Balance (Outstanding)": g.balance,
        }));
      }
    } else if (reportType === "seller") {
      if (sellerId) {
        rows = sellerLedger.map((item: any) => ({
          Date: item.date.toLocaleDateString("en-IN"),
          Type: item.type,
          Description: item.description,
          "Debit (Purchases)": item.debit || "",
          "Credit (Collections)": item.credit || "",
          "Balance (Receivables)": item.balance,
        }));
      } else {
        rows = sellerLedger.map((s: any) => ({
          "Seller Name": s.name,
          Mobile: s.mobile,
          "Purchases (Dr)": s.debit,
          "Payments Collected (Cr)": s.credit,
          "Outstanding Balance": s.balance,
        }));
      }
    } else if (reportType === "expense") {
      rows = (expenses ?? []).map((e) => ({
        Date: new Date(e.date).toLocaleDateString("en-IN"),
        Description: e.title,
        Category: e.category,
        Amount: e.amount,
        Notes: e.notes || "",
      }));
    }

    const ws = XLSX.utils.json_to_sheet(rows);
    XLSX.utils.book_append_sheet(wb, ws, sheetName);
    XLSX.writeFile(wb, `orchardpay-${reportType}-report-${new Date().toISOString().slice(0, 10)}.xlsx`);
  }

  const activeDataLength = 
    reportType === "grower" ? growerLedger.length : 
    reportType === "seller" ? sellerLedger.length : 
    (expenses?.length ?? 0);

  return (
    <Stack gap={6}>
      {/* Header & Export */}
      <Flex justify="space-between" align="center" wrap="wrap" gap={4}>
        <Heading size="lg" color="gray.800">Reports Dashboard</Heading>
        <Button colorPalette="green" onClick={exportExcel} disabled={activeDataLength === 0}>
          Export to Excel
        </Button>
      </Flex>

      {/* Mode Switcher */}
      <Flex gap={2} borderBottomWidth="1px" pb={3}>
        <Button
          size="sm"
          variant={reportType === "grower" ? "solid" : "ghost"}
          colorPalette="green"
          onClick={() => {
            setReportType("grower");
            setFruitType("");
            setFrom("");
            setTo("");
          }}
        >
          Grower Ledger
        </Button>
        <Button
          size="sm"
          variant={reportType === "seller" ? "solid" : "ghost"}
          colorPalette="green"
          onClick={() => {
            setReportType("seller");
            setFruitType("");
            setFrom("");
            setTo("");
          }}
        >
          Seller Ledger
        </Button>
        <Button
          size="sm"
          variant={reportType === "expense" ? "solid" : "ghost"}
          colorPalette="green"
          onClick={() => {
            setReportType("expense");
            setFruitType("");
            setFrom("");
            setTo("");
          }}
        >
          Firm Expenses
        </Button>
      </Flex>

      {/* Dynamic Filters */}
      <Flex gap={3} wrap="wrap" align="flex-end" bg="white" p={5} borderRadius="xl" shadow="sm" borderWidth="1px">
        {reportType === "grower" && (
          <Box>
            <Text fontSize="xs" color="gray.500" mb={1} fontWeight="medium">Grower</Text>
            <Select value={growerId} onChange={(e) => setGrowerId(e.target.value)}
              px={3} py={1.5} borderWidth="1px" borderRadius="md" bg="white" h="32px" fontSize="sm" style={{ width: "180px" }}>
              <option value="">All Growers</option>
              {growers?.map((g) => (
                <option key={g.id} value={g.id}>
                  {g.name}{g.codeName ? ` (Code: ${g.codeName})` : ""}
                </option>
              ))}
            </Select>
          </Box>
        )}

        {reportType === "seller" && (
          <Box>
            <Text fontSize="xs" color="gray.500" mb={1} fontWeight="medium">Seller</Text>
            <Select value={sellerId} onChange={(e) => setSellerId(e.target.value)}
              px={3} py={1.5} borderWidth="1px" borderRadius="md" bg="white" h="32px" fontSize="sm" style={{ width: "180px" }}>
              <option value="">All Sellers</option>
              {sellers?.map((s) => <option key={s.id} value={s.id}>{s.name}</option>)}
            </Select>
          </Box>
        )}

        {reportType === "expense" && (
          <Box>
            <Text fontSize="xs" color="gray.500" mb={1} fontWeight="medium">Expense Category</Text>
            <Select value={expenseCategory} onChange={(e) => setExpenseCategory(e.target.value)}
              px={3} py={1.5} borderWidth="1px" borderRadius="md" bg="white" h="32px" fontSize="sm" style={{ width: "180px" }}>
              <option value="">All Categories</option>
              <option value="Office">Office</option>
              <option value="Personal">Personal</option>
              <option value="Utilities">Utilities</option>
              <option value="Rent">Rent</option>
              <option value="Salaries">Salaries</option>
              <option value="Travel">Travel</option>
              <option value="Tea & Snacks">Tea &amp; Snacks</option>
              <option value="Others">Others</option>
            </Select>
          </Box>
        )}

        {reportType !== "expense" && (
          <Box>
            <Text fontSize="xs" color="gray.500" mb={1} fontWeight="medium">Fruit type</Text>
            <Input size="sm" bg="white" value={fruitType} onChange={(e) => setFruitType(e.target.value)} placeholder="All" w="100px" />
          </Box>
        )}

        <Box>
          <Text fontSize="xs" color="gray.500" mb={1} fontWeight="medium">From Date</Text>
          <Input size="sm" bg="white" type="date" value={from} onChange={(e) => setFrom(e.target.value)} />
        </Box>
        <Box>
          <Text fontSize="xs" color="gray.500" mb={1} fontWeight="medium">To Date</Text>
          <Input size="sm" bg="white" type="date" value={to} onChange={(e) => setTo(e.target.value)} />
        </Box>
        {(growerId || sellerId || expenseCategory || fruitType || from || to) && (
          <Button size="sm" variant="ghost" onClick={() => {
            setGrowerId("");
            setSellerId("");
            setExpenseCategory("");
            setFruitType("");
            setFrom("");
            setTo("");
          }}>
            Clear
          </Button>
        )}
      </Flex>

      {/* KPI Cards */}
      <SimpleGrid columns={{ base: 1, md: 3 }} gap={6}>
        {reportType === "grower" && (
          <>
            <Box bg="white" p={5} borderRadius="xl" borderWidth="1px" borderLeftWidth="4px" borderLeftColor="green.500" shadow="sm">
              <Text fontSize="xs" fontWeight="bold" textTransform="uppercase" color="gray.450">Total Grower Credits (Produce)</Text>
              <Text fontSize="2xl" fontWeight="black" color="green.700" mt={1}>{inr(growerTotals.credit)}</Text>
            </Box>
            <Box bg="white" p={5} borderRadius="xl" borderWidth="1px" borderLeftWidth="4px" borderLeftColor="indigo.500" shadow="sm">
              <Text fontSize="xs" fontWeight="bold" textTransform="uppercase" color="gray.450">Total Debits (Advances + Charges)</Text>
              <Text fontSize="2xl" fontWeight="black" color="indigo.700" mt={1}>{inr(growerTotals.debit + growerTotals.charges)}</Text>
            </Box>
            <Box bg="white" p={5} borderRadius="xl" borderWidth="1px" borderLeftWidth="4px" borderLeftColor="emerald.500" shadow="sm">
              <Text fontSize="xs" fontWeight="bold" textTransform="uppercase" color="gray.450">Net Outstanding (We Owe)</Text>
              <Text fontSize="2xl" fontWeight="black" color={growerTotals.balance >= 0 ? "emerald.800" : "red.700"} mt={1}>
                {growerTotals.balance >= 0 ? inr(growerTotals.balance) : `-${inr(Math.abs(growerTotals.balance))}`}
              </Text>
            </Box>
          </>
        )}

        {reportType === "seller" && (
          <>
            <Box bg="white" p={5} borderRadius="xl" borderWidth="1px" borderLeftWidth="4px" borderLeftColor="blue.500" shadow="sm">
              <Text fontSize="xs" fontWeight="bold" textTransform="uppercase" color="gray.450">Total Seller Purchases (Debit)</Text>
              <Text fontSize="2xl" fontWeight="black" color="blue.700" mt={1}>{inr(sellerTotals.debit)}</Text>
            </Box>
            <Box bg="white" p={5} borderRadius="xl" borderWidth="1px" borderLeftWidth="4px" borderLeftColor="purple.500" shadow="sm">
              <Text fontSize="xs" fontWeight="bold" textTransform="uppercase" color="gray.450">Total Collections (Credit)</Text>
              <Text fontSize="2xl" fontWeight="black" color="purple.700" mt={1}>{inr(sellerTotals.credit)}</Text>
            </Box>
            <Box bg="white" p={5} borderRadius="xl" borderWidth="1px" borderLeftWidth="4px" borderLeftColor="amber.500" shadow="sm">
              <Text fontSize="xs" fontWeight="bold" textTransform="uppercase" color="gray.450">Outstanding Receivables</Text>
              <Text fontSize="2xl" fontWeight="black" color={sellerTotals.balance >= 0 ? "amber.800" : "red.750"} mt={1}>
                {sellerTotals.balance >= 0 ? inr(sellerTotals.balance) : `-${inr(Math.abs(sellerTotals.balance))}`}
              </Text>
            </Box>
          </>
        )}

        {reportType === "expense" && (
          <>
            <Box bg="white" p={5} borderRadius="xl" borderWidth="1px" borderLeftWidth="4px" borderLeftColor="gray.600" shadow="sm">
              <Text fontSize="xs" fontWeight="bold" textTransform="uppercase" color="gray.450">Total Firm Expenses</Text>
              <Text fontSize="2xl" fontWeight="black" color="gray.800" mt={1}>{inr(expenseTotals.total)}</Text>
            </Box>
            <Box bg="white" p={5} borderRadius="xl" borderWidth="1px" borderLeftWidth="4px" borderLeftColor="emerald.500" shadow="sm">
              <Text fontSize="xs" fontWeight="bold" textTransform="uppercase" color="gray.450">Office Expenses</Text>
              <Text fontSize="2xl" fontWeight="black" color="emerald.800" mt={1}>{inr(expenseTotals.office)}</Text>
            </Box>
            <Box bg="white" p={5} borderRadius="xl" borderWidth="1px" borderLeftWidth="4px" borderLeftColor="indigo.500" shadow="sm">
              <Text fontSize="xs" fontWeight="bold" textTransform="uppercase" color="gray.450">Personal Expenses</Text>
              <Text fontSize="2xl" fontWeight="black" color="indigo.800" mt={1}>{inr(expenseTotals.personal)}</Text>
            </Box>
          </>
        )}
      </SimpleGrid>

      {/* Detailed Data Tables */}
      <Box bg="white" borderRadius="lg" shadow="sm" borderWidth="1px" overflow="hidden">
        {isLoading ? (
          <Flex p={8} justify="center"><Spinner color="green.500" /></Flex>
        ) : activeDataLength === 0 ? (
          <Box p={6} color="gray.500" textAlign="center">No data found matching these report filters.</Box>
        ) : (
          <Box overflowX="auto">
            {reportType === "grower" && (
              growerId ? (
                // Specific Grower Ledger Table
                <Box as="table" w="full" fontSize="sm">
                  <Box as="thead" bg="gray.50">
                    <Box as="tr" textAlign="left" color="gray.500">
                      <Box as="th" px={6} py={3.5} fontWeight="medium">Date</Box>
                      <Box as="th" px={6} py={3.5} fontWeight="medium">Type</Box>
                      <Box as="th" px={6} py={3.5} fontWeight="medium">Description</Box>
                      <Box as="th" px={6} py={3.5} fontWeight="medium" textAlign="right">Credit (Cr)</Box>
                      <Box as="th" px={6} py={3.5} fontWeight="medium" textAlign="right">Debit (Dr)</Box>
                      <Box as="th" px={6} py={3.5} fontWeight="medium" textAlign="right">Running Balance</Box>
                    </Box>
                  </Box>
                  <Box as="tbody">
                    {growerLedger.map((item: any, idx: number) => (
                      <Box as="tr" key={idx} borderTopWidth="1px">
                        <Box as="td" px={6} py={3}>{item.date.toLocaleDateString("en-IN")}</Box>
                        <Box as="td" px={6} py={3} fontWeight="semibold" color={item.credit > 0 ? "green.650" : "indigo.750"}>{item.type}</Box>
                        <Box as="td" px={6} py={3}>{item.description}</Box>
                        <Box as="td" px={6} py={3} textAlign="right" color="green.700" fontWeight="medium">{item.credit > 0 ? inr(item.credit) : "—"}</Box>
                        <Box as="td" px={6} py={3} textAlign="right" color="indigo.700" fontWeight="medium">{item.debit > 0 ? inr(item.debit) : "—"}</Box>
                        <Box as="td" px={6} py={3} textAlign="right" fontWeight="bold" color={item.balance >= 0 ? "emerald.700" : "red.700"}>
                          {item.balance >= 0 ? `${inr(item.balance)} Cr` : `${inr(Math.abs(item.balance))} Dr`}
                        </Box>
                      </Box>
                    ))}
                  </Box>
                </Box>
              ) : (
                // All Growers Summary Table
                <Box as="table" w="full" fontSize="sm">
                  <Box as="thead" bg="gray.50">
                    <Box as="tr" textAlign="left" color="gray.500">
                      <Box as="th" px={6} py={3.5} fontWeight="medium">Grower Name</Box>
                      <Box as="th" px={6} py={3.5} fontWeight="medium">Mobile</Box>
                      <Box as="th" px={6} py={3.5} fontWeight="medium" textAlign="right">Deliveries (Cr)</Box>
                      <Box as="th" px={6} py={3.5} fontWeight="medium" textAlign="right">Advances (Dr)</Box>
                      <Box as="th" px={6} py={3.5} fontWeight="medium" textAlign="right">Material Charges (Dr)</Box>
                      <Box as="th" px={6} py={3.5} fontWeight="medium" textAlign="right">Net Outstanding Balance</Box>
                    </Box>
                  </Box>
                  <Box as="tbody">
                    {growerLedger.map((g: any) => (
                      <Box as="tr" key={g.id} borderTopWidth="1px" _hover={{ bg: "gray.50/20" }}>
                        <Box as="td" px={6} py={3} fontWeight="semibold" color="green.750">{g.name}</Box>
                        <Box as="td" px={6} py={3}>{g.mobile}</Box>
                        <Box as="td" px={6} py={3} textAlign="right" color="green.700">{inr(g.credit)}</Box>
                        <Box as="td" px={6} py={3} textAlign="right" color="indigo.700">{inr(g.debit)}</Box>
                        <Box as="td" px={6} py={3} textAlign="right" color="amber.750">{inr(g.charges)}</Box>
                        <Box as="td" px={6} py={3} textAlign="right" fontWeight="extrabold" color={g.balance >= 0 ? "emerald.700" : "red.700"}>
                          {g.balance >= 0 ? `${inr(g.balance)} Cr` : `${inr(Math.abs(g.balance))} Dr`}
                        </Box>
                      </Box>
                    ))}
                  </Box>
                </Box>
              )
            )}

            {reportType === "seller" && (
              sellerId ? (
                // Specific Seller Ledger Table
                <Box as="table" w="full" fontSize="sm">
                  <Box as="thead" bg="gray.50">
                    <Box as="tr" textAlign="left" color="gray.500">
                      <Box as="th" px={6} py={3.5} fontWeight="medium">Date</Box>
                      <Box as="th" px={6} py={3.5} fontWeight="medium">Type</Box>
                      <Box as="th" px={6} py={3.5} fontWeight="medium">Description</Box>
                      <Box as="th" px={6} py={3.5} fontWeight="medium" textAlign="right">Debit (Lot Purchases)</Box>
                      <Box as="th" px={6} py={3.5} fontWeight="medium" textAlign="right">Credit (Receipt Payments)</Box>
                      <Box as="th" px={6} py={3.5} fontWeight="medium" textAlign="right">Receivables Balance</Box>
                    </Box>
                  </Box>
                  <Box as="tbody">
                    {sellerLedger.map((item: any, idx: number) => (
                      <Box as="tr" key={idx} borderTopWidth="1px">
                        <Box as="td" px={6} py={3}>{item.date.toLocaleDateString("en-IN")}</Box>
                        <Box as="td" px={6} py={3} fontWeight="semibold" color={item.debit > 0 ? "blue.650" : "purple.750"}>{item.type}</Box>
                        <Box as="td" px={6} py={3}>{item.description}</Box>
                        <Box as="td" px={6} py={3} textAlign="right" color="blue.700" fontWeight="medium">{item.debit > 0 ? inr(item.debit) : "—"}</Box>
                        <Box as="td" px={6} py={3} textAlign="right" color="purple.700" fontWeight="medium">{item.credit > 0 ? inr(item.credit) : "—"}</Box>
                        <Box as="td" px={6} py={3} textAlign="right" fontWeight="bold" color={item.balance >= 0 ? "amber.750" : "red.700"}>
                          {item.balance >= 0 ? `${inr(item.balance)} Dr` : `${inr(Math.abs(item.balance))} Cr`}
                        </Box>
                      </Box>
                    ))}
                  </Box>
                </Box>
              ) : (
                // All Sellers Summary Table
                <Box as="table" w="full" fontSize="sm">
                  <Box as="thead" bg="gray.50">
                    <Box as="tr" textAlign="left" color="gray.500">
                      <Box as="th" px={6} py={3.5} fontWeight="medium">Seller Name</Box>
                      <Box as="th" px={6} py={3.5} fontWeight="medium">Mobile</Box>
                      <Box as="th" px={6} py={3.5} fontWeight="medium" textAlign="right">Purchases (Dr)</Box>
                      <Box as="th" px={6} py={3.5} fontWeight="medium" textAlign="right">Collections (Cr)</Box>
                      <Box as="th" px={6} py={3.5} fontWeight="medium" textAlign="right">Net Outstanding Receivables</Box>
                    </Box>
                  </Box>
                  <Box as="tbody">
                    {sellerLedger.map((s: any) => (
                      <Box as="tr" key={s.id} borderTopWidth="1px" _hover={{ bg: "gray.50/20" }}>
                        <Box as="td" px={6} py={3} fontWeight="semibold" color="blue.750">{s.name}</Box>
                        <Box as="td" px={6} py={3}>{s.mobile}</Box>
                        <Box as="td" px={6} py={3} textAlign="right" color="blue.700">{inr(s.debit)}</Box>
                        <Box as="td" px={6} py={3} textAlign="right" color="purple.700">{inr(s.credit)}</Box>
                        <Box as="td" px={6} py={3} textAlign="right" fontWeight="extrabold" color={s.balance >= 0 ? "amber.750" : "red.700"}>
                          {s.balance >= 0 ? `${inr(s.balance)} Dr` : `${inr(Math.abs(s.balance))} Cr`}
                        </Box>
                      </Box>
                    ))}
                  </Box>
                </Box>
              )
            )}

            {reportType === "expense" && (
              // General Expenses Table
              <Box as="table" w="full" fontSize="sm">
                <Box as="thead" bg="gray.50">
                  <Box as="tr" textAlign="left" color="gray.500">
                    <Box as="th" px={6} py={3.5} fontWeight="medium">Date</Box>
                    <Box as="th" px={6} py={3.5} fontWeight="medium">Description / Title</Box>
                    <Box as="th" px={6} py={3.5} fontWeight="medium">Category</Box>
                    <Box as="th" px={6} py={3.5} fontWeight="medium">Notes</Box>
                    <Box as="th" px={6} py={3.5} fontWeight="medium" textAlign="right">Amount</Box>
                  </Box>
                </Box>
                <Box as="tbody">
                  {expenses?.map((e) => (
                    <Box as="tr" key={e.id} borderTopWidth="1px" _hover={{ bg: "gray.50/20" }}>
                      <Box as="td" px={6} py={3} color="gray.600">{new Date(e.date).toLocaleDateString("en-IN")}</Box>
                      <Box as="td" px={6} py={3} fontWeight="semibold" color="gray.800">{e.title}</Box>
                      <Box as="td" px={6} py={3}>
                        <Box as="span" px={2} py={0.5} borderRadius="md" bg="gray.50" color="gray.600" borderWidth="1px" fontSize="xs" fontWeight="bold">
                          {e.category}
                        </Box>
                      </Box>
                      <Box as="td" px={6} py={3} color="gray.500" maxW="220px" truncate>{e.notes || "—"}</Box>
                      <Box as="td" px={6} py={3} textAlign="right" fontWeight="bold" color="red.700">{inr(e.amount)}</Box>
                    </Box>
                  ))}
                </Box>
              </Box>
            )}
          </Box>
        )}
      </Box>
    </Stack>
  );
}
