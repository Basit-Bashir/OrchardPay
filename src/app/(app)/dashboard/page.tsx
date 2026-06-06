import NextLink from "next/link";
import { Box, Button, Flex, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { getSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { DashboardCharts } from "@/components/common/DashboardCharts";
import { HugeiconsIcon } from "@hugeicons/react";
import { 
  BanknoteIcon, 
  Money01Icon, 
  Download01Icon, 
  UserGroupIcon, 
  AnalyticsUpIcon, 
  RupeeCircleIcon, 
  Upload01Icon, 
  StoreIcon, 
  AppleIcon,
  NotebookIcon,
  CoinsIcon,
  RupeeIcon,
  Analytics01Icon
} from "@hugeicons/core-free-icons";



function formatINR(n: number) {
  return `₹${n.toLocaleString("en-IN", { maximumFractionDigits: 0 })}`;
}

function StatCard({ 
  label, 
  value, 
  subtext,
  gradientColor,
  icon: IconComponent
}: { 
  label: string; 
  value: string; 
  subtext: string;
  gradientColor: string; 
  icon: any;
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
        bg: gradientColor
      }}
      _hover={{
        transform: "translateY(-4px)",
        shadow: "md",
      }}
      transition="all 0.2s"
    >
      <Flex justify="space-between" align="flex-start">
        <Stack gap={1}>
          <Text fontSize="xs" fontWeight="bold" textTransform="uppercase" letterSpacing="wider" color="gray.400">{label}</Text>
          <Text fontSize="2xl" fontWeight="black" color="gray.800" mt={1}>{value}</Text>
        </Stack>
        <Box p={2.5} bg="gray.50" borderRadius="xl" color="gray.600" display="inline-flex" alignItems="center" justifyContent="center">
          <HugeiconsIcon icon={IconComponent} size={20} />
        </Box>
      </Flex>
      <Text fontSize="xs" color="gray.500" mt={3}>{subtext}</Text>
    </Box>
  );
}

export default async function DashboardPage() {
  const session = await getSession();
  const firmId = session!.buyerFirmId;

  const startOfMonth = new Date();
  startOfMonth.setDate(1);
  startOfMonth.setHours(0, 0, 0, 0);

  const sixMonthsAgo = new Date();
  sixMonthsAgo.setDate(1);
  sixMonthsAgo.setHours(0, 0, 0, 0);
  sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 5);

  // Fetch grower firm details for welcoming
  const firm = await prisma.buyerFirm.findUnique({
    where: { id: firmId },
    select: { firmName: true, ownerName: true }
  });

  const [
    txnCount,
    growerCount,
    sellerCount,
    monthPurchasesAgg,
    monthSalesAgg,
    recent,
    recentGrowerPayments,
    recentSellerPayments,
    allGrowersLedger,
    allSellersLedger,
    fruitGroup,
    trendTxns,
    trendPayments,
    trendSellerPayments
  ] = await Promise.all([
    prisma.transaction.count({ where: { buyerFirmId: firmId } }),
    prisma.grower.count({ where: { buyerFirmId: firmId } }),
    prisma.seller.count({ where: { buyerFirmId: firmId } }),
    prisma.transaction.aggregate({
      where: { buyerFirmId: firmId, growerId: { not: null }, receivedAt: { gte: startOfMonth } },
      _sum: { totalAmount: true },
    }),
    prisma.transaction.aggregate({
      where: { buyerFirmId: firmId, sellerId: { not: null }, receivedAt: { gte: startOfMonth } },
      _sum: { grossAmount: true },
    }),
    prisma.transaction.findMany({
      where: { buyerFirmId: firmId },
      orderBy: { receivedAt: "desc" },
      take: 6,
      include: { 
        grower: { select: { name: true } },
        seller: { select: { name: true } }
      },
    }),
    prisma.payment.findMany({
      where: { buyerFirmId: firmId },
      orderBy: { paidAt: "desc" },
      take: 5,
      include: { grower: { select: { name: true } } },
    }),
    prisma.sellerPayment.findMany({
      where: { buyerFirmId: firmId },
      orderBy: { paidAt: "desc" },
      take: 5,
      include: { seller: { select: { name: true } } },
    }),
    prisma.grower.findMany({
      where: { buyerFirmId: firmId },
      include: {
        transactions: { select: { totalAmount: true } },
        payments: { select: { amount: true } },
      },
    }),
    prisma.seller.findMany({
      where: { buyerFirmId: firmId },
      include: {
        transactions: { select: { grossAmount: true, rate: true, quantity: true } },
        payments: { select: { amount: true } },
      },
    }),
    prisma.transaction.groupBy({
      by: ["fruitType"],
      where: { buyerFirmId: firmId },
      _sum: { totalAmount: true, quantity: true },
      orderBy: { _sum: { totalAmount: "desc" } },
      take: 5,
    }),
    prisma.transaction.findMany({
      where: {
        buyerFirmId: firmId,
        receivedAt: { gte: sixMonthsAgo },
      },
      select: {
        receivedAt: true,
        totalAmount: true,
        grossAmount: true,
        growerId: true,
        sellerId: true,
      },
    }),
    prisma.payment.findMany({
      where: {
        buyerFirmId: firmId,
        paidAt: { gte: sixMonthsAgo },
      },
      select: {
        paidAt: true,
        amount: true,
      },
    }),
    prisma.sellerPayment.findMany({
      where: {
        buyerFirmId: firmId,
        paidAt: { gte: sixMonthsAgo },
      },
      select: {
        paidAt: true,
        amount: true,
      },
    })
  ]);

  // Calculate liabilities (we owe growers) and receivables (growers owe us)
  let totalWeOweGrowers = 0;
  let totalGrowersOweUs = 0;
  for (const g of allGrowersLedger) {
    const totalCredit = g.transactions.reduce((sum, t) => sum + t.totalAmount, 0);
    const totalDebit = g.payments.reduce((sum, p) => sum + p.amount, 0);
    const balance = totalCredit - totalDebit;
    if (balance > 0) {
      totalWeOweGrowers += balance;
    } else if (balance < 0) {
      totalGrowersOweUs += Math.abs(balance);
    }
  }

  // Calculate seller receivables and total cash collections
  let totalSellersOweUs = 0;
  let totalSellerCollections = 0;
  for (const s of allSellersLedger) {
    const totalDebit = s.transactions.reduce((sum, t) => sum + (t.grossAmount || t.quantity * t.rate), 0);
    const totalCredit = s.payments.reduce((sum, p) => sum + p.amount, 0);
    const balance = totalDebit - totalCredit;
    if (balance > 0) {
      totalSellersOweUs += balance;
    }
    totalSellerCollections += totalCredit;
  }

  // Calculate top growers
  const topGrowers = allGrowersLedger
    .map((g) => {
      const totalAmount = g.transactions.reduce((sum, t) => sum + t.totalAmount, 0);
      return {
        id: g.id,
        name: g.name,
        mobile: g.mobile,
        totalAmount,
      };
    })
    .sort((a, b) => b.totalAmount - a.totalAmount)
    .slice(0, 5);

  // Calculate top sellers (buyers)
  const topSellers = allSellersLedger
    .map((s) => {
      const totalAmount = s.transactions.reduce((sum, t) => sum + (t.grossAmount || s.transactions.reduce((acc, txn) => acc + txn.quantity * txn.rate, 0)), 0);
      return {
        id: s.id,
        name: s.name,
        mobile: s.mobile,
        totalAmount,
      };
    })
    .sort((a, b) => b.totalAmount - a.totalAmount)
    .slice(0, 5);

  // Calculate fruit percentage stats
  const maxFruitVal = fruitGroup.length > 0 ? (fruitGroup[0]._sum.totalAmount ?? 1) : 1;
  const fruitStats = fruitGroup.map((fg) => {
    const totalAmount = fg._sum.totalAmount ?? 0;
    const quantity = fg._sum.quantity ?? 0;
    const pct = maxFruitVal > 0 ? Math.round((totalAmount / maxFruitVal) * 100) : 0;
    return {
      fruitType: fg.fruitType,
      totalAmount,
      quantity,
      percentage: pct,
    };
  });

  // Calculate 6-month trends for SVG charts
  const monthsData = [];
  const currentDate = new Date();
  for (let i = 5; i >= 0; i--) {
    const d = new Date(currentDate.getFullYear(), currentDate.getMonth() - i, 1);
    const label = d.toLocaleString("default", { month: "short", year: "2-digit" });
    monthsData.push({
      key: `${d.getFullYear()}-${d.getMonth()}`,
      label,
      purchases: 0,
      sales: 0,
      paid: 0,
      received: 0,
    });
  }

  for (const t of trendTxns) {
    const date = new Date(t.receivedAt);
    const key = `${date.getFullYear()}-${date.getMonth()}`;
    const m = monthsData.find((item) => item.key === key);
    if (m) {
      if (t.growerId) {
        m.purchases += t.totalAmount;
      } else if (t.sellerId) {
        m.sales += t.grossAmount;
      }
    }
  }

  for (const p of trendPayments) {
    const date = new Date(p.paidAt);
    const key = `${date.getFullYear()}-${date.getMonth()}`;
    const m = monthsData.find((item) => item.key === key);
    if (m) {
      m.paid += p.amount;
    }
  }

  for (const sp of trendSellerPayments) {
    const date = new Date(sp.paidAt);
    const key = `${date.getFullYear()}-${date.getMonth()}`;
    const m = monthsData.find((item) => item.key === key);
    if (m) {
      m.received += sp.amount;
    }
  }

  return (
    <Stack gap={8}>
      {/* Greeting Banner */}
      <Box 
        style={{
          background: "linear-gradient(135deg, #064e3b 0%, #022c22 100%)",
        }}
        color="white"
        p={8}
        borderRadius="2xl"
        shadow="md"
        position="relative"
        overflow="hidden"
      >
        <Box 
          position="absolute"
          right="-30px"
          top="-30px"
          opacity="0.08"
          pointerEvents="none"
          userSelect="none"
          color="green.200"
        >
          <HugeiconsIcon icon={AppleIcon} size={180} />
        </Box>
        <Text fontSize="xs" fontWeight="bold" textTransform="uppercase" letterSpacing="wider" color="green.200">Enterprise Workspace</Text>
        <Heading size="xl" mt={2} letterSpacing="tight">Welcome, {firm?.ownerName ?? "Partner"}</Heading>
        <Text mt={2} color="green.100" maxW="xl" fontSize="sm">
          Overview statement for <b>{firm?.firmName ?? "OrchardPay Partner"}</b>. Keep track of outstanding balances, crop deliveries, and cash payments advanced to growers.
        </Text>
      </Box>

      {/* Grower Analytics Grid */}
      <Stack gap={2}>
        <Heading size="xs" textTransform="uppercase" letterSpacing="wider" color="gray.400" fontWeight="bold">Grower Operations (Inward Purchases)</Heading>
        <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} gap={6}>
          <StatCard 
            label="Pending Liabilities (We Owe)" 
            value={formatINR(totalWeOweGrowers)} 
            subtext="Net outstanding grower credits"
            gradientColor="red.450" 
            icon={BanknoteIcon}
          />
          <StatCard 
            label="Recoverable Advances" 
            value={formatINR(totalGrowersOweUs)} 
            subtext="Unsettled grower cash advances"
            gradientColor="indigo.500" 
            icon={Money01Icon}
          />
          <StatCard 
            label="Monthly Purchases" 
            value={formatINR(monthPurchasesAgg._sum.totalAmount ?? 0)} 
            subtext="Total grower deliveries this month"
            gradientColor="emerald.500" 
            icon={Download01Icon}
          />
          <StatCard 
            label="Growers Network" 
            value={`${growerCount} growers`} 
            subtext="Registered trade growers"
            gradientColor="teal.500" 
            icon={UserGroupIcon}
          />
        </SimpleGrid>
      </Stack>

      {/* Seller Analytics Grid */}
      <Stack gap={2}>
        <Heading size="xs" textTransform="uppercase" letterSpacing="wider" color="gray.400" fontWeight="bold">Seller Operations (Outward Sales)</Heading>
        <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} gap={6}>
          <StatCard 
            label="Seller Receivables (Owed to Us)" 
            value={formatINR(totalSellersOweUs)} 
            subtext="Outstanding collection balances"
            gradientColor="amber.500" 
            icon={AnalyticsUpIcon}
          />
          <StatCard 
            label="Total Cash Collected" 
            value={formatINR(totalSellerCollections)} 
            subtext="Cumulative payments received"
            gradientColor="purple.500" 
            icon={RupeeCircleIcon}
          />
          <StatCard 
            label="Monthly Outward Sales" 
            value={formatINR(monthSalesAgg._sum.grossAmount ?? 0)} 
            subtext="Total seller purchases this month"
            gradientColor="sky.500" 
            icon={Upload01Icon}
          />
          <StatCard 
            label="Sellers Network" 
            value={`${sellerCount} sellers`} 
            subtext="Registered merchant buyers"
            gradientColor="pink.500" 
            icon={StoreIcon}
          />
        </SimpleGrid>
      </Stack>

      {/* Charts Section */}
      <DashboardCharts trendData={monthsData} />

      {/* Split Columns Grid */}
      <SimpleGrid columns={{ base: 1, lg: 12 }} gap={8} alignItems="start">
        
        {/* Column 1: Recent Deliveries & Rankings (8 cols) */}
        <Stack style={{ gridColumn: "span 8" }} gap={8}>
          
          {/* Deliveries Table */}
          <Box bg="white" borderRadius="2xl" shadow="sm" borderWidth="1px" overflow="hidden">
            <Box px={6} py={5} borderBottomWidth="1px" bg="gray.50/50">
              <Heading size="md" color="gray.700">Recent Crop Transactions</Heading>
            </Box>
            {recent.length === 0 ? (
              <Box p={6} color="gray.500">No transactions recorded yet.</Box>
            ) : (
              <Box overflowX="auto">
                <Box as="table" w="full" fontSize="sm">
                  <Box as="thead" bg="gray.50">
                    <Box as="tr" textAlign="left" color="gray.500">
                      <Box as="th" px={6} py={3} fontWeight="semibold">Party Involved</Box>
                      <Box as="th" px={6} py={3} fontWeight="semibold">Fruit</Box>
                      <Box as="th" px={6} py={3} fontWeight="semibold">Quantity</Box>
                      <Box as="th" px={6} py={3} fontWeight="semibold">Rate</Box>
                      <Box as="th" px={6} py={3} fontWeight="semibold">Total Due</Box>
                      <Box as="th" px={6} py={3} fontWeight="semibold">Date</Box>
                    </Box>
                  </Box>
                  <Box as="tbody">
                    {recent.map((t) => (
                      <Box as="tr" key={t.id} borderTopWidth="1px" _hover={{ bg: "gray.50/30" }} transition="background 0.15s">
                        <Box as="td" px={6} py={3}>
                          {t.grower ? (
                            <Box>
                              <Text fontWeight="semibold" color="green.750">
                                {t.grower.name}
                              </Text>
                              <Text fontSize="10px" color="gray.400">Inward Purchase</Text>
                            </Box>
                          ) : t.seller ? (
                            <Box>
                              <Text fontWeight="semibold" color="blue.700">
                                {t.seller.name}
                              </Text>
                              <Text fontSize="10px" color="gray.400">Outward Sale</Text>
                            </Box>
                          ) : (
                            <Text color="gray.400">—</Text>
                          )}
                        </Box>
                        <Box as="td" px={6} py={3}>{t.fruitType}</Box>
                        <Box as="td" px={6} py={3}>{t.quantity} {t.unit}</Box>
                        <Box as="td" px={6} py={3}>{formatINR(t.rate)}/{t.unit}</Box>
                        <Box as="td" px={6} py={3} fontWeight="bold" color="gray.800">{formatINR(t.totalAmount)}</Box>
                        <Box as="td" px={6} py={3} color="gray.500">{t.receivedAt.toLocaleDateString("en-IN")}</Box>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Box>
            )}
          </Box>
 
          {/* Commodities and Rankings Block (3 Columns) */}
          <SimpleGrid columns={{ base: 1, md: 3 }} gap={6}>
            
            {/* Top Commodities Card */}
            <Box bg="white" p={5} borderRadius="2xl" shadow="sm" borderWidth="1px">
              <Heading size="md" color="gray.700" mb={4}>Top Fruit Types</Heading>
              {fruitStats.length === 0 ? (
                <Text color="gray.500" fontSize="xs">No purchase data available.</Text>
              ) : (
                <Stack gap={4}>
                  {fruitStats.map((item, idx) => (
                    <Box key={idx}>
                      <Flex justify="space-between" align="center" fontSize="xs" fontWeight="semibold" color="gray.700">
                        <Text>{item.fruitType}</Text>
                        <Text>{formatINR(item.totalAmount)}</Text>
                      </Flex>
                      <Box w="full" bg="gray.100" h="4px" borderRadius="full" overflow="hidden" mt={1.5}>
                        <Box w={`${item.percentage}%`} bg="emerald.500" h="full" borderRadius="full" />
                      </Box>
                      <Text fontSize="10px" color="gray.400" mt={1}>{item.quantity.toLocaleString("en-IN")} units sold</Text>
                    </Box>
                  ))}
                </Stack>
              )}
            </Box>
 
            {/* Top Suppliers Card */}
            <Box bg="white" p={5} borderRadius="2xl" shadow="sm" borderWidth="1px">
              <Heading size="md" color="gray.700" mb={4}>Top Suppliers</Heading>
              {topGrowers.length === 0 ? (
                <Text color="gray.500" fontSize="xs">No grower trade data available.</Text>
              ) : (
                <Stack gap={3}>
                  {topGrowers.map((grower, idx) => (
                    <Flex key={grower.id} justify="space-between" align="center" borderBottomWidth={idx < topGrowers.length - 1 ? "1px" : "0px"} borderColor="gray.100" pb={2}>
                      <Box>
                        <Text fontSize="xs" fontWeight="semibold" color="gray.800">{grower.name}</Text>
                        <Text fontSize="10px" color="gray.400">{grower.mobile}</Text>
                      </Box>
                      <Text fontSize="xs" fontWeight="bold" color="indigo.700">{formatINR(grower.totalAmount)}</Text>
                    </Flex>
                  ))}
                </Stack>
              )}
            </Box>

            {/* Top Buyers Card */}
            <Box bg="white" p={5} borderRadius="2xl" shadow="sm" borderWidth="1px">
              <Heading size="md" color="gray.700" mb={4}>Top Buyers (Sellers)</Heading>
              {topSellers.length === 0 ? (
                <Text color="gray.500" fontSize="xs">No seller trade data available.</Text>
              ) : (
                <Stack gap={3}>
                  {topSellers.map((seller, idx) => (
                    <Flex key={seller.id} justify="space-between" align="center" borderBottomWidth={idx < topSellers.length - 1 ? "1px" : "0px"} borderColor="gray.100" pb={2}>
                      <Box>
                        <Text fontSize="xs" fontWeight="semibold" color="gray.800">{seller.name}</Text>
                        <Text fontSize="10px" color="gray.400">{seller.mobile}</Text>
                      </Box>
                      <Text fontSize="xs" fontWeight="bold" color="blue.700">{formatINR(seller.totalAmount)}</Text>
                    </Flex>
                  ))}
                </Stack>
              )}
            </Box>
 
          </SimpleGrid>
        </Stack>
 
        {/* Right Column: Advances, Quick Actions (4 cols) */}
        <Stack style={{ gridColumn: "span 4" }} gap={8}>
          
          {/* Quick Actions Card */}
          <Box bg="white" p={6} borderRadius="2xl" shadow="sm" borderWidth="1px">
            <Heading size="md" color="gray.700" mb={4}>Quick Operations</Heading>
            <Stack gap={3}>
              <Button asChild colorPalette="green" size="lg" w="full" justifyContent="flex-start" variant="solid">
                <NextLink href="/transactions/new" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <HugeiconsIcon icon={NotebookIcon} size={20} />
                  Record New Transaction
                </NextLink>
              </Button>
              <Button asChild colorPalette="indigo" size="lg" w="full" justifyContent="flex-start" variant="solid">
                <NextLink href="/growers" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <HugeiconsIcon icon={CoinsIcon} size={20} />
                  Pay Grower Advance
                </NextLink>
              </Button>
              <Button asChild colorPalette="blue" size="lg" w="full" justifyContent="flex-start" variant="solid">
                <NextLink href="/sellers" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <HugeiconsIcon icon={RupeeIcon} size={20} />
                  Collect Seller Receipt
                </NextLink>
              </Button>
              <Button asChild variant="outline" size="lg" w="full" justifyContent="flex-start" borderColor="gray.200" color="gray.600">
                <NextLink href="/reports" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <HugeiconsIcon icon={Analytics01Icon} size={20} />
                  View Reports & Excel
                </NextLink>
              </Button>
            </Stack>
          </Box>
 
          {/* Recent Cash Outflows (Advances/Payments) */}
          <Box bg="white" p={6} borderRadius="2xl" shadow="sm" borderWidth="1px">
            <Heading size="md" color="gray.700" mb={4}>Recent Grower Advances</Heading>
            {recentGrowerPayments.length === 0 ? (
              <Text color="gray.500" fontSize="xs">No recent advances paid out.</Text>
            ) : (
              <Stack gap={3}>
                {recentGrowerPayments.map((p) => (
                  <Flex key={p.id} justify="space-between" align="center" fontSize="xs">
                    <Box>
                      <Text fontWeight="semibold" color="gray.700">{p.grower.name}</Text>
                      <Text fontSize="10px" color="gray.400">{new Date(p.paidAt).toLocaleDateString("en-IN")}</Text>
                    </Box>
                    <Text fontWeight="bold" color="red.700">{formatINR(p.amount)}</Text>
                  </Flex>
                ))}
              </Stack>
            )}
          </Box>

          {/* Recent Cash Inflows (Seller Payments/Receipts) */}
          <Box bg="white" p={6} borderRadius="2xl" shadow="sm" borderWidth="1px">
            <Heading size="md" color="gray.700" mb={4}>Recent Seller Collections</Heading>
            {recentSellerPayments.length === 0 ? (
              <Text color="gray.500" fontSize="xs">No recent cash collected.</Text>
            ) : (
              <Stack gap={3}>
                {recentSellerPayments.map((p) => (
                  <Flex key={p.id} justify="space-between" align="center" fontSize="xs">
                    <Box>
                      <Text fontWeight="semibold" color="gray.700">{p.seller.name}</Text>
                      <Text fontSize="10px" color="gray.400">{new Date(p.paidAt).toLocaleDateString("en-IN")}</Text>
                    </Box>
                    <Text fontWeight="bold" color="green.700">{formatINR(p.amount)}</Text>
                  </Flex>
                ))}
              </Stack>
            )}
          </Box>
 
        </Stack>
 
      </SimpleGrid>
    </Stack>
  );
}
