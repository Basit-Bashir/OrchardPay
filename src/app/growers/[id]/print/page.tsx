"use client";

import { use, useEffect, useMemo, useState, Suspense } from "react";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { Box, Flex, Heading, Spinner, Text, Button, SimpleGrid, Input, chakra } from "@chakra-ui/react";
import { api } from "@/lib/client";

const Select = chakra("select");

type Txn = {
  id: string;
  fruitType: string;
  quantity: number;
  unit: string;
  rate: number;
  grossAmount: number;
  commission: number;
  labour: number;
  freight: number;
  association: number;
  printing: number;
  miscellaneous: number;
  totalAmount: number;
  receivedAt: string;
  deductions?: string | null;
};

type Payment = {
  id: string;
  amount: number;
  notes: string | null;
  paidAt: string;
  method?: string | null;
  bankTransferType?: string | null;
  bankName?: string | null;
  bankAccNumber?: string | null;
  bankAddress?: string | null;
};

type ItemCharge = {
  id: string;
  itemName: string;
  quantity: number;
  rate: number;
  amount: number;
  notes: string | null;
  issuedAt: string;
};

type GrowerDetail = {
  id: string;
  name: string;
  mobile: string;
  address: string | null;
  codeName: string | null;
  transactions: Txn[];
  payments: Payment[];
  itemCharges: ItemCharge[];
  buyerFirm: { logoUrl: string | null; firmName: string };
};

function inr(n: number) {
  return `₹${n.toLocaleString("en-IN", { maximumFractionDigits: 2 })}`;
}

function getTransactionDeductions(item: any) {
  if (item.deductions) {
    try {
      const parsed = JSON.parse(item.deductions);
      if (Array.isArray(parsed)) return parsed;
    } catch (e) {
      console.error("Failed to parse transaction deductions:", e);
    }
  }
  const list = [];
  if (item.commission > 0) list.push({ name: "Commission", amount: item.commission });
  if (item.labour > 0) list.push({ name: "Labour", amount: item.labour });
  if (item.freight > 0) list.push({ name: "Freight", amount: item.freight });
  if (item.association > 0) list.push({ name: "Association", amount: item.association });
  if (item.printing > 0) list.push({ name: "Printing", amount: item.printing });
  if (item.miscellaneous > 0) list.push({ name: "Miscellaneous", amount: item.miscellaneous });
  return list;
}

function GrowerPrintInner({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const searchParams = useSearchParams();

  const initialTxnId = searchParams.get("txnId") || "";
  const initialFrom = searchParams.get("from") || "";
  const initialTo = searchParams.get("to") || "";

  const isWatak = searchParams.get("type") === "watak";

  const [statementType, setStatementType] = useState<"all" | "date" | "single">(
    initialTxnId ? "single" : (initialFrom || initialTo) ? "date" : "all"
  );
  const [startDate, setStartDate] = useState(initialFrom);
  const [endDate, setEndDate] = useState(initialTo);
  const [selectedTxnId, setSelectedTxnId] = useState(initialTxnId);

  const { data, isLoading } = useQuery({
    queryKey: ["grower", id],
    queryFn: () => api<GrowerDetail>(`/api/growers/${id}`),
  });

  const statementData = useMemo(() => {
    if (!data) {
      return {
        ledger: [],
        totalGrossValue: 0,
        totalExpensesDeducted: 0,
        totalCredit: 0,
        totalPaymentsTaken: 0,
        totalItemCharges: 0,
        totalCommission: 0,
        totalLabour: 0,
        totalFreight: 0,
        totalOthers: 0,
        openingBalance: 0,
        netBalance: 0,
      };
    }

    if (statementType === "single") {
      const t = data.transactions.find((x) => x.id === selectedTxnId);
      if (!t) {
        return {
          ledger: [],
          totalGrossValue: 0,
          totalExpensesDeducted: 0,
          totalCredit: 0,
          totalPaymentsTaken: 0,
          totalItemCharges: 0,
          totalCommission: 0,
          totalLabour: 0,
          totalFreight: 0,
          totalOthers: 0,
          openingBalance: 0,
          netBalance: 0,
        };
      }
      const gross = t.grossAmount || t.quantity * t.rate;
      const exp = Math.round((gross - t.totalAmount) * 100) / 100;
      const ledgerItem = {
        date: new Date(t.receivedAt),
        description: isWatak
          ? `${t.fruitType} (${t.quantity} ${t.unit} @ ₹${t.rate}/${t.unit})`
          : `Crop Delivery: ${t.fruitType} (${t.quantity} ${t.unit} @ ₹${t.rate}/${t.unit})`,
        credit: t.totalAmount,
        debit: 0,
        balance: t.totalAmount,
        isOpening: false,
        gross,
        expense: exp,
      };
      return {
        ledger: [ledgerItem],
        totalGrossValue: gross,
        totalExpensesDeducted: exp,
        totalCredit: t.totalAmount,
        totalPaymentsTaken: 0,
        totalItemCharges: 0,
        totalCommission: t.commission || 0,
        totalLabour: t.labour || 0,
        totalFreight: t.freight || 0,
        totalOthers: (t.association || 0) + (t.printing || 0) + (t.miscellaneous || 0),
        openingBalance: 0,
        netBalance: t.totalAmount,
      };
    }

    const sortedTxns = [...data.transactions].sort((a, b) => new Date(a.receivedAt).getTime() - new Date(b.receivedAt).getTime());
    const sortedPayments = [...(data.payments ?? [])].sort((a, b) => new Date(a.paidAt).getTime() - new Date(b.paidAt).getTime());
    const sortedCharges = [...(data.itemCharges ?? [])].sort((a, b) => new Date(a.issuedAt).getTime() - new Date(b.issuedAt).getTime());

    const rawItems = [
      ...sortedTxns.map((t) => {
        const gross = t.grossAmount || t.quantity * t.rate;
        const exp = Math.round((gross - t.totalAmount) * 100) / 100;
        return {
          date: new Date(t.receivedAt),
          description: isWatak
            ? `${t.fruitType} (${t.quantity} ${t.unit} @ ₹${t.rate}/${t.unit})`
            : `Crop Delivery: ${t.fruitType} (${t.quantity} ${t.unit} @ ₹${t.rate}/${t.unit})`,
          credit: t.totalAmount,
          debit: 0,
          type: "txn" as const,
          gross,
          expense: exp,
          commission: t.commission,
          labour: t.labour,
          freight: t.freight,
          association: t.association,
          printing: t.printing,
          miscellaneous: t.miscellaneous,
          deductions: t.deductions,
        };
      }),
      ...(!isWatak ? sortedPayments.map((p) => {
        let desc = "Advance Taken";
        if (p.method === "BANK_TRANSFER") {
          const typeStr = p.bankTransferType === "CHECK" ? "Check" : "Transfer";
          desc = `Advance Taken (Bank Transfer - ${typeStr})`;
          if (p.bankName) {
            desc += ` [${p.bankName}${p.bankAccNumber ? ` A/c: ${p.bankAccNumber}` : ""}]`;
          }
        } else if (p.method === "ONLINE_TRANSFER") {
          desc = `Advance Taken (Online Transfer)`;
          if (p.bankName) {
            desc += ` [${p.bankName}${p.bankAccNumber ? ` A/c: ${p.bankAccNumber}` : ""}]`;
          }
        } else if (p.method === "CASH") {
          desc = `Advance Taken (Cash)`;
        }
        if (p.notes) {
          desc += ` - ${p.notes}`;
        }
        return {
          date: new Date(p.paidAt),
          description: desc,
          credit: 0,
          debit: p.amount,
          type: "payment" as const,
          gross: 0,
          expense: 0,
        };
      }) : []),
      ...(!isWatak ? sortedCharges.map((c) => ({
        date: new Date(c.issuedAt),
        description: `Material Issued: ${c.itemName} (${c.quantity} @ ₹${c.rate}/unit) ${c.notes ? `- ${c.notes}` : ""}`,
        credit: 0,
        debit: c.amount,
        type: "charge" as const,
        gross: 0,
        expense: 0,
      })) : []),
    ];

    rawItems.sort((a, b) => a.date.getTime() - b.date.getTime());

    let filteredItems = rawItems;
    let openingBalance = 0;

    const start = (statementType === "date" && startDate) ? new Date(startDate) : null;
    const end = (statementType === "date" && endDate) ? new Date(endDate) : null;
    if (start) start.setHours(0, 0, 0, 0);
    if (end) end.setHours(23, 59, 59, 999);

    if (statementType === "date" && start) {
      const beforeItems = rawItems.filter(item => item.date.getTime() < start.getTime());
      openingBalance = beforeItems.reduce((sum, item) => sum + item.credit - item.debit, 0);
      filteredItems = rawItems.filter(item => {
        const time = item.date.getTime();
        if (time < start.getTime()) return false;
        if (end && time > end.getTime()) return false;
        return true;
      });
    }

    let runningBalance = openingBalance;
    const ledger: any[] = [];

    if (statementType === "date" && start) {
      ledger.push({
        date: start,
        description: "Opening Balance (Balance brought forward)",
        credit: openingBalance > 0 ? openingBalance : 0,
        debit: openingBalance < 0 ? Math.abs(openingBalance) : 0,
        balance: openingBalance,
        isOpening: true,
      });
    }

    let totalGrossValue = 0;
    let totalExpensesDeducted = 0;
    let totalCredit = 0;
    let totalPaymentsTaken = 0;
    let totalItemCharges = 0;
    let totalCommission = 0;
    let totalLabour = 0;
    let totalFreight = 0;
    let totalOthers = 0;

    for (const item of filteredItems) {
      runningBalance += item.credit - item.debit;
      ledger.push({
        ...item,
        balance: runningBalance,
        isOpening: false,
      });

      if ("type" in item) {
        if (item.type === "txn") {
          totalGrossValue += item.gross;
          totalExpensesDeducted += item.expense;
          totalCredit += item.credit;
          totalCommission += (item as any).commission || 0;
          totalLabour += (item as any).labour || 0;
          totalFreight += (item as any).freight || 0;
          totalOthers += ((item as any).association || 0) + ((item as any).printing || 0) + ((item as any).miscellaneous || 0);
        } else if (item.type === "payment") {
          totalPaymentsTaken += item.debit;
        } else if (item.type === "charge") {
          totalItemCharges += item.debit;
        }
      }
    }

    return { ledger, totalGrossValue, totalExpensesDeducted, totalCredit, totalPaymentsTaken, totalItemCharges, totalCommission, totalLabour, totalFreight, totalOthers, openingBalance, netBalance: runningBalance };
  }, [data, statementType, startDate, endDate, selectedTxnId, isWatak]);

  const { ledger, totalGrossValue, totalExpensesDeducted, totalCredit, totalPaymentsTaken, totalItemCharges, totalCommission, totalLabour, totalFreight, totalOthers, openingBalance, netBalance } = statementData;

  useEffect(() => {
    if (data) {
      const timer = setTimeout(() => { window.print(); }, 1000);
      return () => clearTimeout(timer);
    }
  }, [data]);

  if (isLoading) {
    return (
      <Flex p={8} justify="center" align="center" minH="100vh">
        <Spinner color="green.500" size="xl" />
        <Text ml={4} color="gray.600">Loading statement details...</Text>
      </Flex>
    );
  }

  if (!data) return <Box p={8} textAlign="center">Grower not found.</Box>;

  return (
    <Box minH="100vh" bg="white" color="gray.800" position="relative" p={8} fontSize="sm">
      <style dangerouslySetInnerHTML={{ __html: `@media print { .no-print { display: none !important; } body { background-color: white !important; } @page { margin: 1.5cm; } }`}} />

      <Box className="no-print" bg="gray.50" p={4} borderRadius="xl" mb={8} borderWidth="1px" borderColor="gray.200" shadow="sm">
        <Flex justify="space-between" align="center" wrap="wrap" gap={4}>
          <Flex align="center" gap={4} wrap="wrap">
            <Box style={{ width: "180px" }}>
              <Text fontSize="xs" color="gray.600" mb={1} fontWeight="semibold">Statement Type</Text>
              <Select value={statementType} onChange={(e) => setStatementType(e.target.value as any)} bg="white" px={3} py={1.5} borderWidth="1px" borderRadius="md" fontSize="xs" w="full" h="32px">
                <option value="all">Whole Statement</option>
                <option value="date">Date Range</option>
                <option value="single">Single Transaction</option>
              </Select>
            </Box>
            {statementType === "date" && (
              <Flex gap={2}>
                <Box style={{ width: "130px" }}>
                  <Text fontSize="xs" color="gray.600" mb={1} fontWeight="semibold">From Date</Text>
                  <Input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} bg="white" size="sm" h="32px" fontSize="xs" />
                </Box>
                <Box style={{ width: "130px" }}>
                  <Text fontSize="xs" color="gray.600" mb={1} fontWeight="semibold">To Date</Text>
                  <Input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} bg="white" size="sm" h="32px" fontSize="xs" />
                </Box>
              </Flex>
            )}
            {statementType === "single" && (
              <Box style={{ width: "260px" }}>
                <Text fontSize="xs" color="gray.600" mb={1} fontWeight="semibold">Select Delivery</Text>
                <Select value={selectedTxnId} onChange={(e) => setSelectedTxnId(e.target.value)} bg="white" px={3} py={1.5} borderWidth="1px" borderRadius="md" fontSize="xs" w="full" h="32px">
                  <option value="">Choose a delivery...</option>
                  {data.transactions.map((t) => (
                    <option key={t.id} value={t.id}>{new Date(t.receivedAt).toLocaleDateString("en-IN")} - {t.fruitType} ({t.quantity} {t.unit})</option>
                  ))}
                </Select>
              </Box>
            )}
          </Flex>
          <Flex gap={3} align="flex-end">
            <Button colorPalette={isWatak ? "amber" : "green"} size="sm" h="32px" onClick={() => window.print()}>
              {isWatak ? "Print Watak" : "Print Statement"}
            </Button>
            <Button variant="outline" size="sm" h="32px" onClick={() => window.close()}>Close Tab</Button>
          </Flex>
        </Flex>
      </Box>

      <Box position="relative" zIndex={1}>
        <Flex justify="space-between" align="center" borderBottomWidth="2px" borderColor="green.800" pb={6} mb={8}>
          <Flex align="center" gap={4}>
            {data.buyerFirm?.logoUrl && <Box w="60px" h="60px" borderRadius="lg" overflow="hidden" bg="white" borderWidth="1px" borderColor="gray.100"><img src={data.buyerFirm.logoUrl} alt="Logo" style={{ width: "100%", height: "100%", objectFit: "contain" }} /></Box>}
            <Box>
              <Heading size="lg" color="green.800" letterSpacing="tight" mb={1}>{data.buyerFirm?.firmName ?? "Valley Fresh Traders"}</Heading>
              <Text color="gray.500" fontSize="xs" fontWeight="semibold" textTransform="uppercase" letterSpacing="wider">
                {isWatak ? "Mandi Crop Delivery Invoice (Watak)" : "Horticulture Statement of Account"}
              </Text>
            </Box>
          </Flex>
          <Box textAlign="right">
            <Text fontWeight="bold" fontSize="lg" color="gray.700">
              {isWatak ? "Crop Watak Bill" : statementType === "single" ? "Delivery Invoice" : "Statement Ledger"}
            </Text>
            <Text color="gray.500" fontSize="xs">
              {statementType === "date" && startDate && endDate ? `Period: ${new Date(startDate).toLocaleDateString("en-IN")} - ${new Date(endDate).toLocaleDateString("en-IN")}` : `Date: ${new Date().toLocaleDateString("en-IN")}`}
            </Text>
          </Box>
        </Flex>

        <SimpleGrid columns={2} gap={8} mb={8}>
          <Box p={4} borderRadius="lg" bg="gray.50" borderWidth="1px">
            <Text fontSize="xs" fontWeight="bold" textTransform="uppercase" color="gray.400" letterSpacing="wider" mb={2}>Grower Details</Text>
            <Text fontWeight="bold" fontSize="md" color="gray.800">{data.name}</Text>
            <Text color="gray.600" mt={1}>Mobile: {data.mobile}</Text>
            {data.address && <Text color="gray.600" mt={1}>Address: {data.address}</Text>}
          </Box>
          <Box p={4} borderRadius="lg" bg="gray.50" borderWidth="1px">
            <Text fontSize="xs" fontWeight="bold" textTransform="uppercase" color="gray.400" letterSpacing="wider" mb={2}>Summary of Dues</Text>
            {isWatak ? (
              <SimpleGrid columns={2} gap={2} fontSize="xs">
                <Text color="gray.600">Total Gross Produce:</Text>
                <Text fontWeight="semibold" textAlign="right" color="gray.700">{inr(totalGrossValue)}</Text>
                
                <Text color="gray.600" fontWeight="bold">Total Deductions:</Text>
                <Text fontWeight="bold" textAlign="right" color="red.650">{inr(totalExpensesDeducted)}</Text>
                
                <Text pl={4} color="gray.500" fontSize="10px">· Commission:</Text>
                <Text color="gray.600" fontSize="10px" textAlign="right">{inr(totalCommission)}</Text>
                <Text pl={4} color="gray.500" fontSize="10px">· Labour:</Text>
                <Text color="gray.600" fontSize="10px" textAlign="right">{inr(totalLabour)}</Text>
                <Text pl={4} color="gray.500" fontSize="10px">· Freight:</Text>
                <Text color="gray.600" fontSize="10px" textAlign="right">{inr(totalFreight)}</Text>
                <Text pl={4} color="gray.500" fontSize="10px">· Others:</Text>
                <Text color="gray.600" fontSize="10px" textAlign="right">{inr(totalOthers)}</Text>

                <Box borderTopWidth="1px" mt={2} pt={2} style={{ gridColumn: "span 2" }}>
                  <Flex justify="space-between" align="center">
                    <Text fontWeight="bold" fontSize="xs" color="gray.700">Net Crop Credits:</Text>
                    <Text fontWeight="bold" fontSize="sm" color="green.700">{inr(totalCredit)}</Text>
                  </Flex>
                </Box>
              </SimpleGrid>
            ) : (
              <>
                <SimpleGrid columns={2} gap={2} fontSize="xs">
                  {statementType === "date" && (
                    <>
                      <Text color="gray.600">Opening Balance (B/F):</Text>
                      <Text fontWeight="semibold" textAlign="right" color={openingBalance >= 0 ? "green.700" : "red.600"}>{inr(openingBalance)} {openingBalance >= 0 ? "Cr" : "Dr"}</Text>
                    </>
                  )}
                  <Text color="gray.600" fontWeight="bold">Net Crop Credits (Cr):</Text>
                  <Text fontWeight="bold" textAlign="right" color="green.700">{inr(totalCredit)}</Text>
                  <Text color="gray.600">Total Cash Advances (Dr):</Text>
                  <Text fontWeight="semibold" textAlign="right" color="indigo.700">{inr(totalPaymentsTaken)}</Text>
                  <Text color="gray.600">Total Material Charges (Dr):</Text>
                  <Text fontWeight="semibold" textAlign="right" color="amber.750">{inr(totalItemCharges)}</Text>
                </SimpleGrid>
                <Box borderTopWidth="1px" mt={2} pt={2}>
                  <Flex justify="space-between" align="center">
                    <Text fontWeight="bold" fontSize="xs" color="gray.700">Outstanding Balance:</Text>
                    <Text fontWeight="black" fontSize="sm" color={netBalance > 0 ? "emerald.700" : netBalance < 0 ? "red.700" : "gray.700"}>
                      {netBalance > 0 ? `We Owe: ${inr(netBalance)}` : netBalance < 0 ? `Grower Owes: ${inr(Math.abs(netBalance))}` : "Balanced"}
                    </Text>
                  </Flex>
                </Box>
              </>
            )}
          </Box>
        </SimpleGrid>

        <Box borderBottomWidth="2px" borderColor="gray.100" pb={4}>
          <Heading size="xs" textTransform="uppercase" color="gray.400" letterSpacing="wider" mb={4}>
            {isWatak ? "Crop Delivery Details" : "Chronological Statement Details"}
          </Heading>
          <Box as="table" w="full" fontSize="xs">
            {isWatak ? (
              <>
                <Box as="thead" bg="gray.100" borderBottomWidth="1.5px" borderColor="gray.300">
                  <Box as="tr" textAlign="left" color="gray.600">
                    <Box as="th" px={4} py={2} fontWeight="bold" w="100px">Date</Box>
                    <Box as="th" px={4} py={2} fontWeight="bold">Crop Details</Box>
                    <Box as="th" px={4} py={2} fontWeight="bold" textAlign="right" w="120px">Gross Amount</Box>
                    <Box as="th" px={4} py={2} fontWeight="bold" textAlign="right" w="120px">Deductions</Box>
                    <Box as="th" px={4} py={2} fontWeight="bold" textAlign="right" w="140px">Net Credit</Box>
                  </Box>
                </Box>
                <Box as="tbody">
                  {ledger.map((item, idx) => (
                    <Box as="tr" key={idx} borderBottomWidth="1px" borderColor="gray.100" _hover={{ bg: "gray.50/50" }}>
                      <Box as="td" px={4} py={2.5} color="gray.600">{item.date.toLocaleDateString("en-IN")}</Box>
                      <Box as="td" px={4} py={2.5} color="gray.800">{item.description}</Box>
                      <Box as="td" px={4} py={2.5} textAlign="right" color="gray.700">{"gross" in item ? inr(item.gross) : "—"}</Box>
                      <Box as="td" px={4} py={2.5} textAlign="right">
                        {"expense" in item ? (
                          <>
                            <Text fontWeight="semibold" color="red.650">{inr(item.expense)}</Text>
                            <Text fontSize="9px" color="gray.500" mt={0.5}>
                              {(() => {
                                const list = getTransactionDeductions(item);
                                return list.map((d: any) => `${d.name}: ${inr(d.amount)}`).join(" · ");
                              })()}
                            </Text>
                          </>
                        ) : "—"}
                      </Box>
                      <Box as="td" px={4} py={2.5} textAlign="right" fontWeight="bold" color="green.700">{item.credit > 0 ? inr(item.credit) : "—"}</Box>
                    </Box>
                  ))}
                </Box>
              </>
            ) : (
              <>
                <Box as="thead" bg="gray.100" borderBottomWidth="1.5px" borderColor="gray.300">
                  <Box as="tr" textAlign="left" color="gray.600">
                    <Box as="th" px={4} py={2} fontWeight="bold" w="100px">Date</Box>
                    <Box as="th" px={4} py={2} fontWeight="bold">Transaction Details</Box>
                    <Box as="th" px={4} py={2} fontWeight="bold" textAlign="right" w="120px">Credit (Cr)</Box>
                    <Box as="th" px={4} py={2} fontWeight="bold" textAlign="right" w="120px">Debit (Dr)</Box>
                    <Box as="th" px={4} py={2} fontWeight="bold" textAlign="right" w="140px">Running Balance</Box>
                  </Box>
                </Box>
                <Box as="tbody">
                  {ledger.map((item, idx) => (
                    <Box as="tr" key={idx} borderBottomWidth="1px" borderColor="gray.100" _hover={{ bg: "gray.50/50" }}>
                      <Box as="td" px={4} py={2.5} color="gray.600">{item.date.toLocaleDateString("en-IN")}</Box>
                      <Box as="td" px={4} py={2.5} color="gray.800" fontWeight={item.isOpening ? "bold" : "normal"}>{item.description}</Box>
                      <Box as="td" px={4} py={2.5} textAlign="right" color="green.700">{item.credit > 0 ? inr(item.credit) : "—"}</Box>
                      <Box as="td" px={4} py={2.5} textAlign="right" color="indigo.700">{item.debit > 0 ? inr(item.debit) : "—"}</Box>
                      <Box as="td" px={4} py={2.5} textAlign="right" fontWeight="bold" color={item.balance > 0 ? "emerald.700" : item.balance < 0 ? "red.700" : "gray.700"}>
                        {item.balance > 0 ? `${inr(item.balance)} Cr` : item.balance < 0 ? `${inr(Math.abs(item.balance))} Dr` : "0.00"}
                      </Box>
                    </Box>
                  ))}
                </Box>
              </>
            )}
          </Box>
        </Box>
        <Flex justify="space-between" mt={16} pt={8} borderTopWidth="1px" borderColor="gray.200" fontSize="xs">
          <Box><Text color="gray.500">Prepared By: ____________________</Text></Box>
          <Box textAlign="right"><Text color="gray.500">Receiver's Signature: ____________________</Text></Box>
        </Flex>
      </Box>
    </Box>
  );
}

export default function GrowerPrintPage({ params }: { params: Promise<{ id: string }> }) {
  return (
    <Suspense fallback={
      <Flex p={8} justify="center" align="center" minH="100vh">
        <Spinner color="green.500" size="xl" />
        <Text ml={4} color="gray.600">Loading printable statement...</Text>
      </Flex>
    }>
      <GrowerPrintInner params={params} />
    </Suspense>
  );
}
