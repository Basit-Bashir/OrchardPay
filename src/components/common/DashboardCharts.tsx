"use client";

import { useState } from "react";
import { Box, Flex, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";

type MonthTrend = {
  label: string;
  purchases: number; // inward grower purchases
  sales: number;     // outward seller sales
  paid: number;      // cash advanced to growers
  received: number;  // cash collections from sellers
};

function inr(n: number) {
  return `₹${n.toLocaleString("en-IN", { maximumFractionDigits: 0 })}`;
}

export function DashboardCharts({ trendData }: { trendData: MonthTrend[] }) {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const [activeBarIdx, setActiveBarIdx] = useState<number | null>(null);

  // Math configurations
  const svgWidth = 500;
  const svgHeight = 220;
  const padLeft = 45;
  const padRight = 15;
  const padTop = 20;
  const padBottom = 30;

  const chartW = svgWidth - padLeft - padRight;
  const chartH = svgHeight - padTop - padBottom;
  const chartYZero = svgHeight - padBottom;

  // Find max value for Chart 1 scaling
  const maxVal1 = Math.max(
    ...trendData.map((d) => Math.max(d.purchases, d.sales, 50000))
  ) * 1.1;

  // Find max value for Chart 2 scaling
  const maxVal2 = Math.max(
    ...trendData.map((d) => Math.max(d.paid, d.received, 50000))
  ) * 1.1;

  // Chart 1 (Line Chart) Coordinates
  const purchasesPoints = trendData.map((d, idx) => {
    const x = padLeft + (idx / (trendData.length - 1 || 1)) * chartW;
    const y = padTop + (1 - d.purchases / maxVal1) * chartH;
    return { x, y };
  });

  const salesPoints = trendData.map((d, idx) => {
    const x = padLeft + (idx / (trendData.length - 1 || 1)) * chartW;
    const y = padTop + (1 - d.sales / maxVal1) * chartH;
    return { x, y };
  });

  const purchasesPath = `M ${purchasesPoints.map((p) => `${p.x} ${p.y}`).join(" L ")}`;
  const salesPath = `M ${salesPoints.map((p) => `${p.x} ${p.y}`).join(" L ")}`;

  const purchasesArea = `${purchasesPath} L ${purchasesPoints[purchasesPoints.length - 1].x} ${chartYZero} L ${purchasesPoints[0].x} ${chartYZero} Z`;
  const salesArea = `${salesPath} L ${salesPoints[salesPoints.length - 1].x} ${chartYZero} L ${salesPoints[0].x} ${chartYZero} Z`;

  return (
    <SimpleGrid columns={{ base: 1, lg: 2 }} gap={6} w="full">
      {/* Chart 1: Fruit Trade Flow */}
      <Box bg="white" p={6} borderRadius="2xl" shadow="sm" borderWidth="1px" position="relative">
        <Stack gap={1} mb={4}>
          <Heading size="md" color="gray.700">Fruit Trade Value Flow</Heading>
          <Text fontSize="xs" color="gray.400">Monthly purchases (inward) vs sales (outward)</Text>
        </Stack>

        <Flex gap={4} fontSize="xs" fontWeight="semibold" mb={3} px={2}>
          <Flex align="center" gap={1.5}>
            <Box w="3" h="3" bg="emerald.500" borderRadius="full" />
            <Text color="gray.600">Inward Purchases</Text>
          </Flex>
          <Flex align="center" gap={1.5}>
            <Box w="3" h="3" bg="sky.500" borderRadius="full" />
            <Text color="gray.600">Outward Sales</Text>
          </Flex>
        </Flex>

        <Box position="relative">
          <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`} width="100%" height="220px">
            <defs>
              <linearGradient id="purchasesGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#10b981" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#10b981" stopOpacity="0.0" />
              </linearGradient>
              <linearGradient id="salesGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.0" />
              </linearGradient>
            </defs>

            {/* Grid Lines */}
            {[0, 0.25, 0.5, 0.75, 1].map((p, idx) => {
              const y = padTop + p * chartH;
              return (
                <line
                  key={idx}
                  x1={padLeft}
                  y1={y}
                  x2={svgWidth - padRight}
                  y2={y}
                  stroke="#f1f5f9"
                  strokeWidth="1"
                />
              );
            })}

            {/* Y Axis Labels */}
            {[0, 0.5, 1].map((p, idx) => {
              const y = padTop + (1 - p) * chartH;
              const val = Math.round(p * maxVal1);
              return (
                <text
                  key={idx}
                  x={padLeft - 8}
                  y={y + 4}
                  fill="#94a3b8"
                  fontSize="9px"
                  textAnchor="end"
                  fontFamily="sans-serif"
                >
                  {val >= 100000 ? `${(val / 100000).toFixed(1)}L` : val >= 1000 ? `${(val / 1000).toFixed(0)}k` : val}
                </text>
              );
            })}

            {/* X Axis labels */}
            {trendData.map((d, idx) => {
              const x = padLeft + (idx / (trendData.length - 1 || 1)) * chartW;
              return (
                <text
                  key={idx}
                  x={x}
                  y={svgHeight - 12}
                  fill="#94a3b8"
                  fontSize="10px"
                  textAnchor="middle"
                  fontFamily="sans-serif"
                  fontWeight="medium"
                >
                  {d.label}
                </text>
              );
            })}

            {/* Fills under lines */}
            <path d={purchasesArea} fill="url(#purchasesGrad)" />
            <path d={salesArea} fill="url(#salesGrad)" />

            {/* Main paths */}
            <path d={purchasesPath} fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" />
            <path d={salesPath} fill="none" stroke="#0ea5e9" strokeWidth="2.5" strokeLinecap="round" />

            {/* Guide line on hover */}
            {activeIdx !== null && (
              <line
                x1={purchasesPoints[activeIdx].x}
                y1={padTop}
                x2={purchasesPoints[activeIdx].x}
                y2={chartYZero}
                stroke="#cbd5e1"
                strokeWidth="1.5"
                strokeDasharray="3"
              />
            )}

            {/* Circles for points */}
            {trendData.map((_, idx) => {
              const pPt = purchasesPoints[idx];
              const sPt = salesPoints[idx];
              const isActive = activeIdx === idx;
              return (
                <g key={idx}>
                  <circle
                    cx={pPt.x}
                    cy={pPt.y}
                    r={isActive ? 5 : 3.5}
                    fill="white"
                    stroke="#10b981"
                    strokeWidth={isActive ? 3 : 2}
                  />
                  <circle
                    cx={sPt.x}
                    cy={sPt.y}
                    r={isActive ? 5 : 3.5}
                    fill="white"
                    stroke="#0ea5e9"
                    strokeWidth={isActive ? 3 : 2}
                  />
                </g>
              );
            })}

            {/* Hover columns */}
            {trendData.map((_, idx) => {
              const x = padLeft + (idx / (trendData.length - 1 || 1)) * chartW;
              const colW = chartW / (trendData.length - 1 || 1);
              return (
                <rect
                  key={idx}
                  x={x - colW / 2}
                  y={padTop}
                  width={colW}
                  height={chartH}
                  fill="transparent"
                  cursor="pointer"
                  onMouseEnter={() => setActiveIdx(idx)}
                  onMouseLeave={() => setActiveIdx(null)}
                />
              );
            })}
          </svg>

          {/* HTML Overlay Tooltip */}
          {activeIdx !== null && (
            <Box
              position="absolute"
              top={`${purchasesPoints[activeIdx].y - 85 < 10 ? 10 : purchasesPoints[activeIdx].y - 85}px`}
              left={`${(purchasesPoints[activeIdx].x / svgWidth) * 100}%`}
              transform="translateX(-50%)"
              bg="rgba(15, 23, 42, 0.95)"
              color="white"
              p={3}
              borderRadius="xl"
              shadow="xl"
              fontSize="xs"
              zIndex={50}
              pointerEvents="none"
              w="150px"
              borderWidth="1px"
              borderColor="gray.850"
            >
              <Text fontWeight="bold" borderBottomWidth="1px" borderColor="gray.700" pb={1} mb={1} textAlign="center">
                {trendData[activeIdx].label}
              </Text>
              <Stack gap={0.5}>
                <Flex justify="space-between" align="center">
                  <Text color="emerald.300">Purchases:</Text>
                  <Text fontWeight="bold">{inr(trendData[activeIdx].purchases)}</Text>
                </Flex>
                <Flex justify="space-between" align="center">
                  <Text color="sky.300">Sales:</Text>
                  <Text fontWeight="bold">{inr(trendData[activeIdx].sales)}</Text>
                </Flex>
              </Stack>
            </Box>
          )}
        </Box>
      </Box>

      {/* Chart 2: Cash Flow Inflow vs Outflow */}
      <Box bg="white" p={6} borderRadius="2xl" shadow="sm" borderWidth="1px" position="relative">
        <Stack gap={1} mb={4}>
          <Heading size="md" color="gray.700">Cash Flow (Inflow vs Outflow)</Heading>
          <Text fontSize="xs" color="gray.400">Cash advanced to growers vs collections received from sellers</Text>
        </Stack>

        <Flex gap={4} fontSize="xs" fontWeight="semibold" mb={3} px={2}>
          <Flex align="center" gap={1.5}>
            <Box w="3" h="3" bg="#6366f1" borderRadius="full" />
            <Text color="gray.600">Grower Advances (Outflow)</Text>
          </Flex>
          <Flex align="center" gap={1.5}>
            <Box w="3" h="3" bg="purple.500" borderRadius="full" />
            <Text color="gray.600">Seller Receipts (Inflow)</Text>
          </Flex>
        </Flex>

        <Box position="relative">
          <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`} width="100%" height="220px">
            {/* Grid Lines */}
            {[0, 0.25, 0.5, 0.75, 1].map((p, idx) => {
              const y = padTop + p * chartH;
              return (
                <line
                  key={idx}
                  x1={padLeft}
                  y1={y}
                  x2={svgWidth - padRight}
                  y2={y}
                  stroke="#f1f5f9"
                  strokeWidth="1"
                />
              );
            })}

            {/* Y Axis Labels */}
            {[0, 0.5, 1].map((p, idx) => {
              const y = padTop + (1 - p) * chartH;
              const val = Math.round(p * maxVal2);
              return (
                <text
                  key={idx}
                  x={padLeft - 8}
                  y={y + 4}
                  fill="#94a3b8"
                  fontSize="9px"
                  textAnchor="end"
                  fontFamily="sans-serif"
                >
                  {val >= 100000 ? `${(val / 100000).toFixed(1)}L` : val >= 1000 ? `${(val / 1000).toFixed(0)}k` : val}
                </text>
              );
            })}

            {/* X Axis labels */}
            {trendData.map((d, idx) => {
              const x = padLeft + (idx / (trendData.length - 1 || 1)) * chartW;
              return (
                <text
                  key={idx}
                  x={x}
                  y={svgHeight - 12}
                  fill="#94a3b8"
                  fontSize="10px"
                  textAnchor="middle"
                  fontFamily="sans-serif"
                  fontWeight="medium"
                >
                  {d.label}
                </text>
              );
            })}

            {/* Bars */}
            {trendData.map((d, idx) => {
              const monthX = padLeft + (idx / (trendData.length - 1 || 1)) * chartW;
              const barW = 10;
              const padBetween = 2;

              // Advanced Paid to Growers
              const hPaid = (d.paid / maxVal2) * chartH;
              const yPaid = chartYZero - hPaid;
              const xPaid = monthX - barW - padBetween;

              // Cash Collected from Sellers
              const hRecv = (d.received / maxVal2) * chartH;
              const yRecv = chartYZero - hRecv;
              const xRecv = monthX + padBetween;

              const isHovered = activeBarIdx === idx;

              return (
                <g key={idx}>
                  {/* Paid Bar */}
                  <rect
                    x={xPaid}
                    y={yPaid}
                    width={barW}
                    height={hPaid}
                    fill="#6366f1"
                    rx="2"
                    opacity={activeBarIdx === null || isHovered ? 1.0 : 0.4}
                    style={{ transition: "all 0.15s" }}
                  />
                  {/* Received Bar */}
                  <rect
                    x={xRecv}
                    y={yRecv}
                    width={barW}
                    height={hRecv}
                    fill="#a855f7"
                    rx="2"
                    opacity={activeBarIdx === null || isHovered ? 1.0 : 0.4}
                    style={{ transition: "all 0.15s" }}
                  />
                </g>
              );
            })}

            {/* Hover columns */}
            {trendData.map((_, idx) => {
              const x = padLeft + (idx / (trendData.length - 1 || 1)) * chartW;
              const colW = chartW / (trendData.length - 1 || 1);
              return (
                <rect
                  key={idx}
                  x={x - colW / 2}
                  y={padTop}
                  width={colW}
                  height={chartH}
                  fill="transparent"
                  cursor="pointer"
                  onMouseEnter={() => setActiveBarIdx(idx)}
                  onMouseLeave={() => setActiveBarIdx(null)}
                />
              );
            })}
          </svg>

          {/* HTML Overlay Tooltip */}
          {activeBarIdx !== null && (
            <Box
              position="absolute"
              top="30px"
              left={`${( (padLeft + (activeBarIdx / (trendData.length - 1 || 1)) * chartW) / svgWidth) * 100}%`}
              transform="translateX(-50%)"
              bg="rgba(15, 23, 42, 0.95)"
              color="white"
              p={3}
              borderRadius="xl"
              shadow="xl"
              fontSize="xs"
              zIndex={50}
              pointerEvents="none"
              w="155px"
              borderWidth="1px"
              borderColor="gray.850"
            >
              <Text fontWeight="bold" borderBottomWidth="1px" borderColor="gray.700" pb={1} mb={1} textAlign="center">
                {trendData[activeBarIdx].label} Cash
              </Text>
              <Stack gap={0.5}>
                <Flex justify="space-between" align="center">
                  <Text color="#818cf8">Paid Out:</Text>
                  <Text fontWeight="bold">{inr(trendData[activeBarIdx].paid)}</Text>
                </Flex>
                <Flex justify="space-between" align="center">
                  <Text color="purple.300">Collected:</Text>
                  <Text fontWeight="bold">{inr(trendData[activeBarIdx].received)}</Text>
                </Flex>
              </Stack>
            </Box>
          )}
        </Box>
      </Box>
    </SimpleGrid>
  );
}
