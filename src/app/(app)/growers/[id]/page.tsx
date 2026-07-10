"use client";

import { use, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Box, Button, Flex, Heading, Input, Spinner, Stack, Text, Textarea, SimpleGrid, chakra } from "@chakra-ui/react";
import { GrowerForm } from "@/components/grower/GrowerForm";
import { api } from "@/lib/client";
import { ConfirmationModal } from "@/components/common/ConfirmationModal";

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
  buyerFirm?: {
    logoUrl: string | null;
    firmName: string;
    bankName?: string | null;
    bankAccNumber?: string | null;
    bankAddress?: string | null;
    bankAccounts?: Array<{
      id: string;
      bankName: string;
      accNumber: string;
      bankAddress: string | null;
      isPrimary: boolean;
    }>;
  } | null;
};

type Agreement = {
  id: string;
  growerId: string;
  pledgedProduce: string;
  paymentTerms: string;
  installments: string; // JSON string
  buyerSign: string;
  validUntil: string | null;
  signedAt: string;
  createdAt: string;
};

function inr(n: number) {
  return `₹${n.toLocaleString("en-IN", { maximumFractionDigits: 2 })}`;
}

export default function GrowerDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const router = useRouter();
  const queryClient = useQueryClient();

  // Form states for recording payment
  const [payAmount, setPayAmount] = useState("");
  const [payDate, setPayDate] = useState(new Date().toISOString().split("T")[0]);
  const [payNotes, setPayNotes] = useState("");
  const [payError, setPayError] = useState("");
  const [payLoading, setPayLoading] = useState(false);
  const [selectedTxn, setSelectedTxn] = useState<Txn | null>(null);

  const [payMethod, setPayMethod] = useState("CASH");
  const [payBankTransferType, setPayBankTransferType] = useState("TRANSFER");
  const [payBankName, setPayBankName] = useState("");
  const [payBankAccNumber, setPayBankAccNumber] = useState("");
  const [payBankAddress, setPayBankAddress] = useState("");

  // Form states for item charges
  const [itemCategory, setItemCategory] = useState("Pesticides");
  const [itemCustomName, setItemCustomName] = useState("");
  const [itemQty, setItemQty] = useState("");
  const [itemRate, setItemRate] = useState("");
  const [itemDate, setItemDate] = useState(new Date().toISOString().split("T")[0]);
  const [itemNotes, setItemNotes] = useState("");
  const [itemError, setItemError] = useState("");
  const [itemLoading, setItemLoading] = useState(false);
  const [deleteItemChargeId, setDeleteItemChargeId] = useState<string | null>(null);
  const [isDeletingItemCharge, setIsDeletingItemCharge] = useState(false);

  const { data, isLoading } = useQuery({
    queryKey: ["grower", id],
    queryFn: () => api<GrowerDetail>(`/api/growers/${id}`),
  });

  useEffect(() => {
    if (data?.buyerFirm?.bankAccounts && data.buyerFirm.bankAccounts.length > 0) {
      const primary = data.buyerFirm.bankAccounts.find((a) => a.isPrimary) || data.buyerFirm.bankAccounts[0];
      setPayBankName(primary.bankName);
      setPayBankAccNumber(primary.accNumber);
      setPayBankAddress(primary.bankAddress ?? "");
    } else if (data?.buyerFirm) {
      setPayBankName(data.buyerFirm.bankName ?? "");
      setPayBankAccNumber(data.buyerFirm.bankAccNumber ?? "");
      setPayBankAddress(data.buyerFirm.bankAddress ?? "");
    }
  }, [data]);

  async function handleRecordItemCharge(e: React.FormEvent) {
    e.preventDefault();
    setItemError("");
    setItemLoading(true);

    const name = itemCategory === "Others" ? itemCustomName.trim() : itemCategory;
    const qty = parseFloat(itemQty);
    const rate = parseFloat(itemRate);

    if (!name) {
      setItemError("Item name is required");
      setItemLoading(false);
      return;
    }
    if (isNaN(qty) || qty <= 0) {
      setItemError("Quantity must be greater than 0");
      setItemLoading(false);
      return;
    }
    if (isNaN(rate) || rate < 0) {
      setItemError("Rate must be 0 or greater");
      setItemLoading(false);
      return;
    }

    try {
      await api("/api/growers/item-charges", {
        method: "POST",
        body: JSON.stringify({
          growerId: id,
          itemName: name,
          quantity: qty,
          rate,
          notes: itemNotes,
          issuedAt: itemDate ? new Date(itemDate) : undefined,
        }),
      });
      setItemQty("");
      setItemRate("");
      setItemNotes("");
      setItemCustomName("");
      setItemCategory("Pesticides");
      setItemDate(new Date().toISOString().split("T")[0]);
      await queryClient.invalidateQueries({ queryKey: ["grower", id] });
    } catch (err) {
      setItemError((err as Error).message);
    } finally {
      setItemLoading(false);
    }
  }

  async function handleDeleteItemCharge() {
    if (!deleteItemChargeId) return;
    setIsDeletingItemCharge(true);
    try {
      await api(`/api/growers/item-charges/${deleteItemChargeId}`, {
        method: "DELETE",
      });
      setDeleteItemChargeId(null);
      await queryClient.invalidateQueries({ queryKey: ["grower", id] });
    } catch (err) {
      alert((err as Error).message);
    } finally {
      setIsDeletingItemCharge(false);
    }
  }

  // Agreement Form & List states
  const { data: agreements, refetch: refetchAgreements } = useQuery({
    queryKey: ["grower-agreements", id],
    queryFn: () => api<Agreement[]>(`/api/growers/${id}/agreements`),
  });

  const [showAgreementModal, setShowAgreementModal] = useState(false);
  const [deleteAgreementId, setDeleteAgreementId] = useState<string | null>(null);
  const [isDeletingAgreement, setIsDeletingAgreement] = useState(false);
  const [pledgedProduce, setPledgedProduce] = useState("");
  const [paymentTerms, setPaymentTerms] = useState("");
  const [validUntil, setValidUntil] = useState("");
  const [buyerSign, setBuyerSign] = useState("");
  const [installments, setInstallments] = useState<Array<{ amount: string; dueDate: string }>>([
    { amount: "", dueDate: "" },
  ]);
  const [agreementError, setAgreementError] = useState("");
  const [agreementLoading, setAgreementLoading] = useState(false);

  const handleAddInstallment = () => {
    setInstallments([...installments, { amount: "", dueDate: "" }]);
  };

  const handleRemoveInstallment = (index: number) => {
    setInstallments(installments.filter((_, i) => i !== index));
  };

  const handleInstallmentChange = (index: number, field: "amount" | "dueDate", value: string) => {
    const newInst = [...installments];
    newInst[index][field] = value;
    setInstallments(newInst);
  };

  async function handleCreateAgreement(e: React.FormEvent) {
    e.preventDefault();
    setAgreementError("");
    setAgreementLoading(true);

    try {
      const formattedInstallments = installments.map((inst) => ({
        amount: parseFloat(inst.amount),
        dueDate: inst.dueDate,
      }));

      await api(`/api/growers/${id}/agreements`, {
        method: "POST",
        body: JSON.stringify({
          pledgedProduce,
          paymentTerms,
          installments: formattedInstallments,
          buyerSign,
          validUntil: validUntil || undefined,
        }),
      });

      setPledgedProduce("");
      setPaymentTerms("");
      setBuyerSign("");
      setValidUntil("");
      setInstallments([{ amount: "", dueDate: "" }]);
      setShowAgreementModal(false);
      refetchAgreements();
    } catch (err) {
      setAgreementError((err as Error).message);
    } finally {
      setAgreementLoading(false);
    }
  }

  async function handleDeleteAgreement(agreementId: string) {
    setIsDeletingAgreement(true);
    try {
      await api(`/api/growers/${id}/agreements/${agreementId}`, { method: "DELETE" });
      refetchAgreements();
    } catch (e) {
      alert((e as Error).message);
    } finally {
      setIsDeletingAgreement(false);
      setDeleteAgreementId(null);
    }
  }

  async function handleRecordPayment(e: React.FormEvent) {
    e.preventDefault();
    setPayError("");
    setPayLoading(true);
    try {
      await api("/api/payments", {
        method: "POST",
        body: JSON.stringify({
          growerId: id,
          amount: parseFloat(payAmount),
          notes: payNotes,
          paidAt: payDate ? new Date(payDate) : undefined,
          method: payMethod,
          bankTransferType: payMethod === "BANK_TRANSFER" ? payBankTransferType : null,
          bankName: (payMethod === "BANK_TRANSFER" || payMethod === "ONLINE_TRANSFER") ? payBankName : null,
          bankAccNumber: (payMethod === "BANK_TRANSFER" || payMethod === "ONLINE_TRANSFER") ? payBankAccNumber : null,
          bankAddress: (payMethod === "BANK_TRANSFER" || payMethod === "ONLINE_TRANSFER") ? payBankAddress : null,
        }),
      });
      setPayAmount("");
      setPayNotes("");
      setPayDate(new Date().toISOString().split("T")[0]);
      setPayMethod("CASH");
      setPayBankTransferType("TRANSFER");
      if (data?.buyerFirm?.bankAccounts && data.buyerFirm.bankAccounts.length > 0) {
        const primary = data.buyerFirm.bankAccounts.find((a) => a.isPrimary) || data.buyerFirm.bankAccounts[0];
        setPayBankName(primary.bankName);
        setPayBankAccNumber(primary.accNumber);
        setPayBankAddress(primary.bankAddress ?? "");
      } else if (data?.buyerFirm) {
        setPayBankName(data.buyerFirm.bankName ?? "");
        setPayBankAccNumber(data.buyerFirm.bankAccNumber ?? "");
        setPayBankAddress(data.buyerFirm.bankAddress ?? "");
      } else {
        setPayBankName("");
        setPayBankAccNumber("");
        setPayBankAddress("");
      }
      await queryClient.invalidateQueries({ queryKey: ["grower", id] });
    } catch (err) {
      setPayError((err as Error).message);
    } finally {
      setPayLoading(false);
    }
  }

  if (isLoading) return <Flex p={8} justify="center"><Spinner color="green.500" /></Flex>;
  if (!data) return <Text color="gray.500">Grower not found.</Text>;

  const totalFruitValue = data.transactions.reduce((sum, t) => sum + t.totalAmount, 0);
  const totalMoneyTaken = (data.payments ?? []).reduce((sum, p) => sum + p.amount, 0);
  const totalItemCharges = (data.itemCharges ?? []).reduce((sum, c) => sum + c.amount, 0);
  const netBalance = totalFruitValue - totalMoneyTaken - totalItemCharges;

  return (
    <Stack gap={8}>
      {/* Header section */}
      <Flex justify="space-between" align="center" wrap="wrap" gap={4}>
        <Box>
          <Heading size="lg" color="gray.800">
            {data.name} {data.codeName && <Box as="span" color="green.600" fontSize="lg" fontWeight="semibold">({data.codeName})</Box>}
          </Heading>
          <Text fontSize="sm" color="gray.500">{data.mobile} {data.address ? `· ${data.address}` : ""}</Text>
        </Box>
        <Flex gap={3}>
          <Button asChild colorPalette="amber" variant="outline">
            <a href={`/growers/${data.id}/print?type=watak`} target="_blank" rel="noopener noreferrer">
              Watak
            </a>
          </Button>
          <Button asChild colorPalette="green" variant="outline">
            <a href={`/growers/${data.id}/print`} target="_blank" rel="noopener noreferrer">
              Print Statement
            </a>
          </Button>
        </Flex>
      </Flex>

      {/* Account Ledger Cards */}
      <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} gap={6}>
        <Box 
          bg="white" 
          p={6} 
          borderRadius="xl" 
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
            bg: "green.500"
          }}
        >
          <Text fontSize="xs" fontWeight="bold" textTransform="uppercase" letterSpacing="wider" color="gray.400">Total Fruit Value (Credit)</Text>
          <Text fontSize="3xl" fontWeight="black" color="green.700" mt={2}>{inr(totalFruitValue)}</Text>
          <Text fontSize="xs" color="gray.500" mt={1}>From {data.transactions.length} fruit deliveries</Text>
        </Box>

        <Box 
          bg="white" 
          p={6} 
          borderRadius="xl" 
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
            bg: "indigo.500"
          }}
        >
          <Text fontSize="xs" fontWeight="bold" textTransform="uppercase" letterSpacing="wider" color="gray.400">Total Money Taken (Debit)</Text>
          <Text fontSize="3xl" fontWeight="black" color="indigo.700" mt={2}>{inr(totalMoneyTaken)}</Text>
          <Text fontSize="xs" color="gray.500" mt={1}>From {(data.payments ?? []).length} cash advances/payments</Text>
        </Box>

        <Box 
          bg="white" 
          p={6} 
          borderRadius="xl" 
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
            bg: "amber.500"
          }}
        >
          <Text fontSize="xs" fontWeight="bold" textTransform="uppercase" letterSpacing="wider" color="gray.400">Total Item Charges (Debit)</Text>
          <Text fontSize="3xl" fontWeight="black" color="amber.750" mt={2}>{inr(totalItemCharges)}</Text>
          <Text fontSize="xs" color="gray.500" mt={1}>From {(data.itemCharges ?? []).length} materials/items taken</Text>
        </Box>

        {netBalance > 0 ? (
          <Box 
            bg="emerald.50" 
            p={6} 
            borderRadius="xl" 
            borderWidth="1px" 
            borderColor="emerald.200"
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
              bg: "emerald.500"
            }}
          >
            <Text fontSize="xs" fontWeight="bold" textTransform="uppercase" letterSpacing="wider" color="emerald.700">We Owe Grower (Outstanding)</Text>
            <Text fontSize="3xl" fontWeight="black" color="emerald.800" mt={2}>{inr(netBalance)}</Text>
            <Text fontSize="xs" color="emerald.600" mt={1}>To be paid for pending crop credit</Text>
          </Box>
        ) : netBalance < 0 ? (
          <Box 
            bg="red.50" 
            p={6} 
            borderRadius="xl" 
            borderWidth="1px" 
            borderColor="red.200"
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
              bg: "red.500"
            }}
          >
            <Text fontSize="xs" fontWeight="bold" textTransform="uppercase" letterSpacing="wider" color="red.700">Extra Money Taken (Debt)</Text>
            <Text fontSize="3xl" fontWeight="black" color="red.800" mt={2}>{inr(Math.abs(netBalance))}</Text>
            <Text fontSize="xs" color="red.600" mt={1}>Grower has taken more than crop value</Text>
          </Box>
        ) : (
          <Box 
            bg="gray.50" 
            p={6} 
            borderRadius="xl" 
            borderWidth="1px" 
            borderColor="gray.200"
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
              bg: "gray.400"
            }}
          >
            <Text fontSize="xs" fontWeight="bold" textTransform="uppercase" letterSpacing="wider" color="gray.500">Account Balanced</Text>
            <Text fontSize="3xl" fontWeight="black" color="gray.700" mt={2}>{inr(0)}</Text>
            <Text fontSize="xs" color="gray.500" mt={1}>No outstanding dues either way</Text>
          </Box>
        )}
      </SimpleGrid>

      {/* Main content sections split */}
      <SimpleGrid columns={{ base: 1, lg: 12 }} gap={8} alignItems="start">
        {/* Left Column: Transaction Feed (8 cols on desktop) */}
        <Stack gap={8} style={{ gridColumn: "span 8" }}>
          {/* Fruit Delivery Transactions */}
          <Box bg="white" borderRadius="xl" shadow="sm" borderWidth="1px" overflow="hidden">
            <Box px={6} py={4} borderBottomWidth="1px" bg="gray.50">
              <Heading size="md" color="gray.700">Fruit Delivery History</Heading>
            </Box>
            {data.transactions.length === 0 ? (
              <Box p={6} color="gray.500">No transactions recorded yet.</Box>
            ) : (
              <Box overflowX="auto">
                <Box as="table" w="full" fontSize="sm">
                  <Box as="thead" bg="gray.50">
                    <Box as="tr" textAlign="left" color="gray.500">
                      <Box as="th" px={6} py={3} fontWeight="semibold">Fruit Type</Box>
                      <Box as="th" px={6} py={3} fontWeight="semibold">Quantity</Box>
                      <Box as="th" px={6} py={3} fontWeight="semibold">Rate</Box>
                      <Box as="th" px={6} py={3} fontWeight="semibold">Deductions</Box>
                      <Box as="th" px={6} py={3} fontWeight="semibold">Net Credit</Box>
                      <Box as="th" px={6} py={3} fontWeight="semibold">Date</Box>
                    </Box>
                  </Box>
                  <Box as="tbody">
                    {data.transactions.map((t) => {
                      const gross = t.grossAmount || t.quantity * t.rate;
                      const deductions = Math.round((gross - t.totalAmount) * 100) / 100;
                      return (
                        <Box as="tr" key={t.id} borderTopWidth="1px" _hover={{ bg: "gray.50/50" }}>
                          <Box as="td" px={6} py={3} fontWeight="medium" color="gray.800">{t.fruitType}</Box>
                          <Box as="td" px={6} py={3}>{t.quantity} {t.unit}</Box>
                          <Box as="td" px={6} py={3}>{inr(t.rate)}/{t.unit}</Box>
                          <Box as="td" px={6} py={3}>
                            {deductions > 0 ? (
                              <Flex align="center" gap={1.5}>
                                <Text color="red.600" fontWeight="medium">{inr(deductions)}</Text>
                                <Button 
                                  size="xs" 
                                  variant="ghost" 
                                  colorPalette="green" 
                                  onClick={() => setSelectedTxn(t)}
                                  px={1.5}
                                  h="18px"
                                  fontSize="10px"
                                >
                                  Details
                                </Button>
                              </Flex>
                            ) : (
                              <Text color="gray.400">—</Text>
                            )}
                          </Box>
                          <Box as="td" px={6} py={3} fontWeight="semibold" color="green.700">{inr(t.totalAmount)}</Box>
                          <Box as="td" px={6} py={3} color="gray.500">
                            {new Date(t.receivedAt).toLocaleDateString("en-IN")}
                          </Box>
                        </Box>
                      );
                    })}
                  </Box>
                </Box>
              </Box>
            )}
          </Box>

          {/* Payments & Advances taken */}
          <Box bg="white" borderRadius="xl" shadow="sm" borderWidth="1px" overflow="hidden">
            <Box px={6} py={4} borderBottomWidth="1px" bg="gray.50">
              <Heading size="md" color="gray.700">Cash Advances &amp; Payments History</Heading>
            </Box>
            {!data.payments || data.payments.length === 0 ? (
              <Box p={6} color="gray.500">No cash advances/payments recorded yet.</Box>
            ) : (
              <Box overflowX="auto">
                <Box as="table" w="full" fontSize="sm">
                  <Box as="thead" bg="gray.50">
                    <Box as="tr" textAlign="left" color="gray.500">
                      <Box as="th" px={6} py={3} fontWeight="semibold">Amount Paid</Box>
                      <Box as="th" px={6} py={3} fontWeight="semibold">Payment Method</Box>
                      <Box as="th" px={6} py={3} fontWeight="semibold">Date Taken</Box>
                      <Box as="th" px={6} py={3} fontWeight="semibold">Notes</Box>
                    </Box>
                  </Box>
                  <Box as="tbody">
                    {data.payments.map((p) => (
                      <Box as="tr" key={p.id} borderTopWidth="1px" _hover={{ bg: "gray.50/50" }}>
                        <Box as="td" px={6} py={3} fontWeight="semibold" color="indigo.700">{inr(p.amount)}</Box>
                        <Box as="td" px={6} py={3} color="gray.700">
                          {(() => {
                            if (p.method === "BANK_TRANSFER") {
                              const typeStr = p.bankTransferType === "CHECK" ? "Check" : "Transfer";
                              return (
                                <Box>
                                  <Text fontWeight="medium" fontSize="xs">Bank Transfer ({typeStr})</Text>
                                  {p.bankName && (
                                    <Text fontSize="10px" color="gray.500">
                                      {p.bankName} {p.bankAccNumber ? `· A/c: ${p.bankAccNumber}` : ""}
                                    </Text>
                                  )}
                                </Box>
                              );
                            }
                            if (p.method === "ONLINE_TRANSFER") {
                              return (
                                <Box>
                                  <Text fontWeight="medium" fontSize="xs">Online Transfer</Text>
                                  {p.bankName && (
                                    <Text fontSize="10px" color="gray.500">
                                      {p.bankName} {p.bankAccNumber ? `· A/c: ${p.bankAccNumber}` : ""}
                                    </Text>
                                  )}
                                </Box>
                              );
                            }
                            return <Text fontWeight="medium" fontSize="xs">Cash</Text>;
                          })()}
                        </Box>
                        <Box as="td" px={6} py={3} color="gray.600">
                          {new Date(p.paidAt).toLocaleDateString("en-IN")}
                        </Box>
                        <Box as="td" px={6} py={3} color="gray.500">{p.notes ?? "—"}</Box>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Box>
            )}
          </Box>

          {/* Grower Material Issues & Item Charges */}
          <Box bg="white" borderRadius="xl" shadow="sm" borderWidth="1px" overflow="hidden">
            <Box px={6} py={4} borderBottomWidth="1px" bg="gray.50">
              <Heading size="md" color="gray.700">Material Issues &amp; Item Charges History</Heading>
            </Box>
            {!data.itemCharges || data.itemCharges.length === 0 ? (
              <Box p={6} color="gray.500">No material issues or item charges recorded yet.</Box>
            ) : (
              <Box overflowX="auto">
                <Box as="table" w="full" fontSize="sm">
                  <Box as="thead" bg="gray.50">
                    <Box as="tr" textAlign="left" color="gray.500">
                      <Box as="th" px={6} py={3} fontWeight="semibold">Item Name</Box>
                      <Box as="th" px={6} py={3} fontWeight="semibold">Quantity</Box>
                      <Box as="th" px={6} py={3} fontWeight="semibold">Rate</Box>
                      <Box as="th" px={6} py={3} fontWeight="semibold">Total Amount</Box>
                      <Box as="th" px={6} py={3} fontWeight="semibold">Date Taken</Box>
                      <Box as="th" px={6} py={3} fontWeight="semibold">Notes</Box>
                      <Box as="th" px={6} py={3} fontWeight="semibold" textAlign="right">Actions</Box>
                    </Box>
                  </Box>
                  <Box as="tbody">
                    {data.itemCharges.map((c) => (
                      <Box as="tr" key={c.id} borderTopWidth="1px" _hover={{ bg: "gray.50/50" }}>
                        <Box as="td" px={6} py={3} fontWeight="semibold" color="gray.800">{c.itemName}</Box>
                        <Box as="td" px={6} py={3}>{c.quantity}</Box>
                        <Box as="td" px={6} py={3}>{inr(c.rate)}</Box>
                        <Box as="td" px={6} py={3} fontWeight="bold" color="amber.750">{inr(c.amount)}</Box>
                        <Box as="td" px={6} py={3} color="gray.600">
                          {new Date(c.issuedAt).toLocaleDateString("en-IN")}
                        </Box>
                        <Box as="td" px={6} py={3} color="gray.500">{c.notes ?? "—"}</Box>
                        <Box as="td" px={6} py={3} textAlign="right">
                          <Button 
                            size="xs" 
                            variant="outline" 
                            colorPalette="red"
                            onClick={() => setDeleteItemChargeId(c.id)}
                          >
                            Delete
                          </Button>
                        </Box>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Box>
            )}
          </Box>

          {/* Grower Agreements History */}
          <Box bg="white" borderRadius="xl" shadow="sm" borderWidth="1px" overflow="hidden">
            <Flex px={6} py={4} borderBottomWidth="1px" bg="gray.50" justify="space-between" align="center" wrap="wrap" gap={2}>
              <Heading size="md" color="gray.700">Agreements &amp; Contracts</Heading>
              <Button size="xs" colorPalette="green" onClick={() => setShowAgreementModal(true)}>
                + Generate Agreement
              </Button>
            </Flex>
            {!agreements || agreements.length === 0 ? (
              <Box p={6} color="gray.500">No agreements generated yet.</Box>
            ) : (
              <Box overflowX="auto">
                <Box as="table" w="full" fontSize="sm">
                  <Box as="thead" bg="gray.50">
                    <Box as="tr" textAlign="left" color="gray.500">
                      <Box as="th" px={6} py={3} fontWeight="semibold">Pledged Produce</Box>
                      <Box as="th" px={6} py={3} fontWeight="semibold">Payment Terms</Box>
                      <Box as="th" px={6} py={3} fontWeight="semibold">E-Signed By</Box>
                      <Box as="th" px={6} py={3} fontWeight="semibold">Date Signed</Box>
                      <Box as="th" px={6} py={3} fontWeight="semibold">Valid Until</Box>
                      <Box as="th" px={6} py={3} fontWeight="semibold" textAlign="right">Actions</Box>
                    </Box>
                  </Box>
                  <Box as="tbody">
                    {agreements.map((ag) => (
                      <Box as="tr" key={ag.id} borderTopWidth="1px" _hover={{ bg: "gray.50/50" }}>
                        <Box as="td" px={6} py={3} color="gray.800" maxW="200px" truncate>{ag.pledgedProduce}</Box>
                        <Box as="td" px={6} py={3} color="gray.600">{ag.paymentTerms}</Box>
                        <Box as="td" px={6} py={3} fontWeight="semibold" color="green.750">{ag.buyerSign}</Box>
                        <Box as="td" px={6} py={3} color="gray.500">
                          {new Date(ag.createdAt).toLocaleDateString("en-IN")}
                        </Box>
                        <Box as="td" px={6} py={3} color="gray.500">
                          {ag.validUntil ? new Date(ag.validUntil).toLocaleDateString("en-IN") : "—"}
                        </Box>
                        <Box as="td" px={6} py={3} textAlign="right">
                          <Flex justify="flex-end" gap={2}>
                            <Button asChild size="xs" variant="outline" colorPalette="green">
                              <a href={`/growers/${id}/agreements/${ag.id}/print`} target="_blank" rel="noopener noreferrer">
                                Print
                              </a>
                            </Button>
                            <Button 
                              size="xs" 
                              variant="ghost" 
                              colorPalette="red"
                              onClick={() => setDeleteAgreementId(ag.id)}
                            >
                              Delete
                            </Button>
                          </Flex>
                        </Box>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Box>
            )}
          </Box>
        </Stack>

        {/* Right Column: Recording Advances & Edit Details (4 cols on desktop) */}
        <Stack gap={8} style={{ gridColumn: "span 4" }}>
          {/* Record Cash Advance / Payment Form */}
          <Box bg="white" p={6} borderRadius="xl" shadow="sm" borderWidth="1px">
            <Heading size="md" mb={4} color="gray.700">Record Money Taken</Heading>
            <form onSubmit={handleRecordPayment}>
              <Stack gap={4}>
                {payError && (
                  <Box bg="red.50" color="red.700" px={4} py={2} borderRadius="md" fontSize="sm">
                    {payError}
                  </Box>
                )}
                <Box>
                  <Text fontSize="sm" fontWeight="medium" mb={1} color="gray.600">Amount (₹)</Text>
                  <Input 
                    type="number" 
                    placeholder="Enter amount taken" 
                    value={payAmount}
                    onChange={(e) => setPayAmount(e.target.value)}
                    required
                  />
                </Box>
                <Box>
                  <Text fontSize="sm" fontWeight="medium" mb={1} color="gray.600">Date Taken</Text>
                  <Input 
                    type="date" 
                    value={payDate}
                    onChange={(e) => setPayDate(e.target.value)}
                    required
                  />
                </Box>
                <Box>
                  <Text fontSize="sm" fontWeight="medium" mb={1} color="gray.600">Payment Method</Text>
                  <Select
                    value={payMethod}
                    onChange={(e) => setPayMethod(e.target.value)}
                    w="full"
                    px={3}
                    py={2}
                    borderWidth="1px"
                    borderRadius="md"
                    bg="white"
                  >
                    <option value="CASH">Cash</option>
                    <option value="BANK_TRANSFER">Bank Transfer</option>
                    <option value="ONLINE_TRANSFER">Online Transfer</option>
                  </Select>
                </Box>

                {payMethod === "BANK_TRANSFER" && (
                  <Box>
                    <Text fontSize="sm" fontWeight="medium" mb={1} color="gray.600">Transfer Option</Text>
                    <Select
                      value={payBankTransferType}
                      onChange={(e) => setPayBankTransferType(e.target.value)}
                      w="full"
                      px={3}
                      py={2}
                      borderWidth="1px"
                      borderRadius="md"
                      bg="white"
                    >
                      <option value="TRANSFER">Direct Bank Transfer</option>
                      <option value="CHECK">Check</option>
                    </Select>
                  </Box>
                )}

                {(payMethod === "BANK_TRANSFER" || payMethod === "ONLINE_TRANSFER") && (
                  <Stack gap={3} p={3} bg="gray.50" borderRadius="lg" borderLeftWidth="4px" borderLeftColor="green.500">
                    <Text fontSize="xs" fontWeight="bold" color="gray.500" textTransform="uppercase">
                      Transaction Bank Details
                    </Text>

                    {data?.buyerFirm?.bankAccounts && data.buyerFirm.bankAccounts.length > 0 && (
                      <Box>
                        <Text fontSize="xs" fontWeight="medium" mb={1} color="gray.600">Select Saved Account</Text>
                        <Select
                          w="full"
                          px={2.5}
                          py={1.5}
                          borderWidth="1px"
                          borderRadius="md"
                          bg="white"
                          fontSize="xs"
                          h="32px"
                          onChange={(e) => {
                            const val = e.target.value;
                            const acc = data?.buyerFirm?.bankAccounts?.find((a) => a.id === val);
                            if (acc) {
                              setPayBankName(acc.bankName);
                              setPayBankAccNumber(acc.accNumber);
                              setPayBankAddress(acc.bankAddress ?? "");
                            }
                          }}
                        >
                          <option value="">Choose an account...</option>
                          {data.buyerFirm.bankAccounts.map((acc) => (
                            <option key={acc.id} value={acc.id}>
                              {acc.bankName} (A/c: {acc.accNumber}){acc.isPrimary ? " [Primary]" : ""}
                            </option>
                          ))}
                        </Select>
                      </Box>
                    )}

                    <Box>
                      <Text fontSize="xs" fontWeight="medium" mb={1} color="gray.600">Bank Name</Text>
                      <Input 
                        size="sm"
                        placeholder="Enter bank name" 
                        value={payBankName}
                        onChange={(e) => setPayBankName(e.target.value)}
                        bg="white"
                      />
                    </Box>
                    <Box>
                      <Text fontSize="xs" fontWeight="medium" mb={1} color="gray.600">Account Number</Text>
                      <Input 
                        size="sm"
                        placeholder="Enter account number" 
                        value={payBankAccNumber}
                        onChange={(e) => setPayBankAccNumber(e.target.value)}
                        bg="white"
                      />
                    </Box>
                    <Box>
                      <Text fontSize="xs" fontWeight="medium" mb={1} color="gray.600">Bank Branch / Address</Text>
                      <Textarea 
                        size="sm"
                        placeholder="Enter branch/address" 
                        value={payBankAddress}
                        onChange={(e) => setPayBankAddress(e.target.value)}
                        rows={2}
                        bg="white"
                      />
                    </Box>
                  </Stack>
                )}

                <Box>
                  <Text fontSize="sm" fontWeight="medium" mb={1} color="gray.600">Notes / Remarks</Text>
                  <Textarea 
                    placeholder="Optional details (e.g. Cash advance for harvest)" 
                    value={payNotes}
                    onChange={(e) => setPayNotes(e.target.value)}
                    rows={2}
                  />
                </Box>
                <Button 
                  type="submit" 
                  colorPalette="green" 
                  loading={payLoading} 
                  w="full"
                >
                  Record Payment / Advance
                </Button>
              </Stack>
            </form>
          </Box>

          {/* Record Material Issue / Charge Form */}
          <Box bg="white" p={6} borderRadius="xl" shadow="sm" borderWidth="1px">
            <Heading size="md" mb={4} color="gray.700">Record Material / Item Taken</Heading>
            <form onSubmit={handleRecordItemCharge}>
              <Stack gap={4}>
                {itemError && (
                  <Box bg="red.50" color="red.700" px={4} py={2} borderRadius="md" fontSize="sm">
                    {itemError}
                  </Box>
                )}
                <Box>
                  <Text fontSize="sm" fontWeight="medium" mb={1} color="gray.600">Material / Item</Text>
                  <Select
                    value={itemCategory}
                    onChange={(e) => {
                      const val = e.target.value;
                      setItemCategory(val);
                      if (val !== "Others") {
                        setItemCustomName("");
                      }
                    }}
                    w="full"
                    px={3}
                    py={2}
                    borderWidth="1px"
                    borderRadius="md"
                    bg="white"
                  >
                    <option value="Pesticides">Pesticides</option>
                    <option value="Cardboard Boxes">Cardboard Boxes</option>
                    <option value="Tapes">Tapes</option>
                    <option value="Rough Papers">Rough Papers</option>
                    <option value="Others">Others (Custom Name)</option>
                  </Select>
                </Box>
                {itemCategory === "Others" && (
                  <Box>
                    <Text fontSize="sm" fontWeight="medium" mb={1} color="gray.600">Custom Item Name</Text>
                    <Input 
                      type="text" 
                      placeholder="e.g. Fertilizer, Spray Pump" 
                      value={itemCustomName}
                      onChange={(e) => setItemCustomName(e.target.value)}
                      required
                    />
                  </Box>
                )}
                <SimpleGrid columns={2} gap={3}>
                  <Box>
                    <Text fontSize="sm" fontWeight="medium" mb={1} color="gray.600">Quantity</Text>
                    <Input 
                      type="number" 
                      placeholder="e.g. 10" 
                      value={itemQty}
                      onChange={(e) => setItemQty(e.target.value)}
                      required
                    />
                  </Box>
                  <Box>
                    <Text fontSize="sm" fontWeight="medium" mb={1} color="gray.600">Rate (₹/unit)</Text>
                    <Input 
                      type="number" 
                      placeholder="e.g. 250" 
                      value={itemRate}
                      onChange={(e) => setItemRate(e.target.value)}
                      required
                    />
                  </Box>
                </SimpleGrid>
                <Box>
                  <Text fontSize="sm" fontWeight="medium" mb={1} color="gray.600">Date Taken</Text>
                  <Input 
                    type="date" 
                    value={itemDate}
                    onChange={(e) => setItemDate(e.target.value)}
                    required
                  />
                </Box>
                <Box>
                  <Text fontSize="sm" fontWeight="medium" mb={1} color="gray.600">Notes / Remarks</Text>
                  <Textarea 
                    placeholder="Optional details (e.g. 500ml bottles, brand name)" 
                    value={itemNotes}
                    onChange={(e) => setItemNotes(e.target.value)}
                    rows={2}
                  />
                </Box>
                <Button 
                  type="submit" 
                  colorPalette="amber" 
                  loading={itemLoading} 
                  w="full"
                >
                  Record Material Issue
                </Button>
              </Stack>
            </form>
          </Box>

          {/* Edit Grower Details Form */}
          <Box bg="white" p={6} borderRadius="xl" shadow="sm" borderWidth="1px">
            <Heading size="md" mb={4} color="gray.700">Edit Grower Details</Heading>
            <GrowerForm
              initial={{ name: data.name, mobile: data.mobile, address: data.address ?? "", codeName: data.codeName ?? "" }}
              submitLabel="Save changes"
              onSubmit={async (values) => {
                await api(`/api/growers/${id}`, { method: "PATCH", body: JSON.stringify(values) });
                await queryClient.invalidateQueries({ queryKey: ["grower", id] });
                router.refresh();
              }}
            />
          </Box>
        </Stack>
      </SimpleGrid>

      {/* Deductions Details Modal */}
      {selectedTxn && (
        <Box
          position="fixed"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bg="rgba(0, 0, 0, 0.4)"
          zIndex={1000}
          display="flex"
          alignItems="center"
          justifyContent="center"
          p={4}
          onClick={() => setSelectedTxn(null)}
        >
          <Box
            bg="white"
            borderRadius="xl"
            p={6}
            maxW="md"
            w="full"
            shadow="2xl"
            borderWidth="1px"
            onClick={(e) => e.stopPropagation()}
          >
            <Flex justify="space-between" align="center" mb={4} borderBottomWidth="1px" pb={3}>
              <Heading size="md" color="gray.800">Deductions Breakdown</Heading>
              <Button size="xs" variant="ghost" onClick={() => setSelectedTxn(null)}>
                ✕
              </Button>
            </Flex>

            <Stack gap={3} fontSize="sm">
              <Box bg="gray.50" p={3} borderRadius="lg" mb={2}>
                <Text fontWeight="semibold" color="gray.700">{selectedTxn.fruitType}</Text>
                <Text fontSize="xs" color="gray.500">
                  {selectedTxn.quantity} {selectedTxn.unit} @ {inr(selectedTxn.rate)}/{selectedTxn.unit}
                </Text>
              </Box>

              <Flex justify="space-between">
                <Text color="gray.600">Gross Amount:</Text>
                <Text fontWeight="semibold" color="gray.800">
                  {inr(selectedTxn.grossAmount || selectedTxn.quantity * selectedTxn.rate)}
                </Text>
              </Flex>

              <Box borderTopWidth="1px" my={1} />

              <Flex justify="space-between" fontSize="xs" pl={2}>
                <Text color="gray.500">Commission (12%):</Text>
                <Text color="red.600">-{inr(selectedTxn.commission)}</Text>
              </Flex>

              <Flex justify="space-between" fontSize="xs" pl={2}>
                <Text color="gray.500">Labour (₹3/unit):</Text>
                <Text color="red.600">-{inr(selectedTxn.labour)}</Text>
              </Flex>

              <Flex justify="space-between" fontSize="xs" pl={2}>
                <Text color="gray.500">Freight:</Text>
                <Text color="red.600">-{inr(selectedTxn.freight)}</Text>
              </Flex>

              <Flex justify="space-between" fontSize="xs" pl={2}>
                <Text color="gray.500">Association (0.10%):</Text>
                <Text color="red.600">-{inr(selectedTxn.association)}</Text>
              </Flex>

              <Flex justify="space-between" fontSize="xs" pl={2}>
                <Text color="gray.500">Printing:</Text>
                <Text color="red.600">-{inr(selectedTxn.printing)}</Text>
              </Flex>

              <Flex justify="space-between" fontSize="xs" pl={2}>
                <Text color="gray.500">Miscellaneous (0.90%):</Text>
                <Text color="red.600">-{inr(selectedTxn.miscellaneous)}</Text>
              </Flex>

              <Box borderTopWidth="1px" my={1} />

              <Flex justify="space-between" fontWeight="bold">
                <Text color="gray.700">Total Deductions:</Text>
                <Text color="red.700">
                  {inr(
                    Math.round(
                      ((selectedTxn.grossAmount || selectedTxn.quantity * selectedTxn.rate) - selectedTxn.totalAmount) * 100
                    ) / 100
                  )}
                </Text>
              </Flex>

              <Flex justify="space-between" fontWeight="black" fontSize="md" bg="green.50" p={3} borderRadius="lg" mt={2}>
                <Text color="green.800">Net Credit:</Text>
                <Text color="green.800">{inr(selectedTxn.totalAmount)}</Text>
              </Flex>

              <Button
                colorPalette="green"
                variant="outline"
                size="sm"
                w="full"
                mt={3}
                onClick={() => {
                  window.open(`/growers/${id}/print?txnId=${selectedTxn.id}`, "_blank");
                }}
              >
                Print Invoice / Receipt
              </Button>
            </Stack>
          </Box>
        </Box>
      )}

      {/* Agreement Creation Modal */}
      {showAgreementModal && (
        <Box
          position="fixed"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bg="rgba(0, 0, 0, 0.4)"
          zIndex={1000}
          display="flex"
          alignItems="center"
          justifyContent="center"
          p={4}
          onClick={() => setShowAgreementModal(false)}
        >
          <Box
            bg="white"
            borderRadius="xl"
            p={6}
            maxW="xl"
            w="full"
            shadow="2xl"
            borderWidth="1px"
            maxH="90vh"
            overflowY="auto"
            onClick={(e) => e.stopPropagation()}
          >
            <Flex justify="space-between" align="center" mb={4} borderBottomWidth="1px" pb={3}>
              <Heading size="md" color="gray.800">Generate Grower Agreement</Heading>
              <Button size="xs" variant="ghost" onClick={() => setShowAgreementModal(false)}>
                ✕
              </Button>
            </Flex>

            <form onSubmit={handleCreateAgreement}>
              <Stack gap={4}>
                {agreementError && (
                  <Box bg="red.50" color="red.700" px={4} py={2} borderRadius="md" fontSize="sm">
                    {agreementError}
                  </Box>
                )}

                <Box>
                  <Text fontSize="sm" fontWeight="medium" mb={1} color="gray.600">Pledged Fruits &amp; Produce</Text>
                  <Textarea
                    placeholder="Describe produce grower promises to deliver (e.g. Apples: 500 boxes, Pears: 300 boxes)"
                    value={pledgedProduce}
                    onChange={(e) => setPledgedProduce(e.target.value)}
                    rows={3}
                    required
                  />
                </Box>

                <Box>
                  <Text fontSize="sm" fontWeight="medium" mb={1} color="gray.600">Payment Terms Overview (Optional)</Text>
                  <Input
                    placeholder="e.g. 3 installments, paid post-harvest quality check"
                    value={paymentTerms}
                    onChange={(e) => setPaymentTerms(e.target.value)}
                  />
                </Box>

                <Box>
                  <Text fontSize="sm" fontWeight="medium" mb={1} color="gray.600">Agreement Validity Date (Valid Until)</Text>
                  <Input
                    type="date"
                    value={validUntil}
                    onChange={(e) => setValidUntil(e.target.value)}
                    required
                  />
                </Box>

                <Box>
                  <Flex justify="space-between" align="center" mb={2}>
                    <Text fontSize="sm" fontWeight="medium" color="gray.600">Payment Installments Schedule</Text>
                    <Button size="xs" colorPalette="indigo" onClick={handleAddInstallment}>
                      + Add Installment
                    </Button>
                  </Flex>

                  <Stack gap={2}>
                    {installments.map((inst, index) => (
                      <Flex key={index} gap={2} align="center">
                        <Text fontSize="xs" fontWeight="semibold" w="80px">Installment #{index + 1}</Text>
                        <Input
                          type="number"
                          placeholder="Amount (₹)"
                          value={inst.amount}
                          onChange={(e) => handleInstallmentChange(index, "amount", e.target.value)}
                          required
                          size="sm"
                          flex={1}
                        />
                        <Input
                          type="date"
                          value={inst.dueDate}
                          onChange={(e) => handleInstallmentChange(index, "dueDate", e.target.value)}
                          required
                          size="sm"
                          flex={1.2}
                        />
                        {installments.length > 1 && (
                          <Button size="xs" colorPalette="red" variant="ghost" onClick={() => handleRemoveInstallment(index)}>
                            ✕
                          </Button>
                        )}
                      </Flex>
                    ))}
                  </Stack>
                </Box>

                <Box bg="green.50/35" p={3} borderRadius="lg" borderLeftWidth="4px" borderColor="green.500">
                  <Text fontSize="xs" color="gray.650">
                    Total agreement amount: <b>{inr(installments.reduce((sum, item) => sum + (parseFloat(item.amount) || 0), 0))}</b>
                  </Text>
                </Box>

                <Box>
                  <Text fontSize="sm" fontWeight="medium" mb={1} color="gray.600">Buyer E-Signature</Text>
                  <Input
                    placeholder="Type buyer's full name to authorize and sign"
                    value={buyerSign}
                    onChange={(e) => setBuyerSign(e.target.value)}
                    required
                  />
                  <Text fontSize="10px" color="gray.400" mt={1}>
                    By typing your name, you certify this as an authorized electronic signature for this horticultural contract.
                  </Text>
                </Box>

                <Flex gap={3} pt={2}>
                  <Button
                    type="submit"
                    colorPalette="green"
                    loading={agreementLoading}
                    flex={1}
                  >
                    Save &amp; Add to Profile
                  </Button>
                  <Button variant="outline" onClick={() => setShowAgreementModal(false)} flex={0.5}>
                    Cancel
                  </Button>
                </Flex>
              </Stack>
            </form>
          </Box>
        </Box>
      )}

      <ConfirmationModal
        isOpen={!!deleteAgreementId}
        title="Delete Agreement"
        message="Are you sure you want to delete this grower agreement? This action is permanent and cannot be undone."
        onConfirm={async () => {
          if (deleteAgreementId) {
            await handleDeleteAgreement(deleteAgreementId);
          }
        }}
        onCancel={() => setDeleteAgreementId(null)}
        isLoading={isDeletingAgreement}
        confirmText="Delete"
      />

      <ConfirmationModal
        isOpen={!!deleteItemChargeId}
        title="Delete Material Issue / Charge"
        message="Are you sure you want to delete this material issue record? This action is permanent and cannot be undone."
        onConfirm={handleDeleteItemCharge}
        onCancel={() => setDeleteItemChargeId(null)}
        isLoading={isDeletingItemCharge}
        confirmText="Delete"
        colorScheme="red"
      />
    </Stack>
  );
}

