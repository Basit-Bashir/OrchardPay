"use client";

import { useState, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import {
  Box,
  Flex,
  Heading,
  Input,
  Spinner,
  Stack,
  Text,
  SimpleGrid,
  Badge,
  chakra
} from "@chakra-ui/react";
import { api } from "@/lib/client";

type Notification = {
  id: string;
  growerId: string;
  grower: {
    name: string;
    mobile: string;
  };
  message: string;
  sentAt: string;
  status: string;
  type: string;
};

type ApiResponse = {
  notifications: Notification[];
  provider: string;
};

const Select = chakra("select");

export default function SmsLogsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const { data, isLoading } = useQuery({
    queryKey: ["sms-logs"],
    queryFn: () => api<ApiResponse>("/api/notifications"),
  });

  // Calculate statistics
  const stats = useMemo(() => {
    if (!data?.notifications) return { total: 0, sent: 0, failed: 0, successRate: 100 };
    const notifications = data.notifications;
    const total = notifications.length;
    const sent = notifications.filter((n) => n.status === "sent").length;
    const failed = notifications.filter((n) => n.status === "failed").length;
    const successRate = total > 0 ? Math.round((sent / total) * 100) : 100;
    return { total, sent, failed, successRate };
  }, [data]);

  // Filter notifications
  const filteredNotifications = useMemo(() => {
    if (!data?.notifications) return [];
    return data.notifications.filter((n) => {
      const matchesSearch =
        n.grower.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        n.grower.mobile.includes(searchTerm) ||
        n.message.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesStatus =
        statusFilter === "all" || n.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [data, searchTerm, statusFilter]);

  if (isLoading) {
    return (
      <Flex p={8} justify="center" align="center" minH="200px">
        <Spinner color="green.500" size="xl" />
      </Flex>
    );
  }

  const provider = data?.provider ?? "console";

  return (
    <Stack gap={6}>
      {/* Title & Info */}
      <Flex justify="space-between" align="center" wrap="wrap" gap={4}>
        <Box>
          <Heading size="lg" color="gray.850" fontWeight="black">SMS Notification Logs</Heading>
          <Text fontSize="sm" color="gray.500">Track automatic rate alerts and OTP dispatches sent to growers.</Text>
        </Box>
      </Flex>

      {/* Gateway Provider Status Banner */}
      {provider === "console" && (
        <Box
          bg="yellow.50"
          borderWidth="1px"
          borderColor="yellow.200"
          p={4}
          borderRadius="2xl"
          shadow="sm"
        >
          <Flex gap={3} align="flex-start">
            <Box color="yellow.600" mt={0.5}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
            </Box>
            <Box>
              <Text fontSize="sm" fontWeight="bold" color="yellow.800">
                Developer Sandbox Mode Active (Console Provider)
              </Text>
              <Text fontSize="xs" color="yellow.700" mt={0.5} lineHeight="relaxed">
                OrchardPay is currently configured to run SMS dispatches inside local terminal outputs. No real SMS charges are deducted. All notification logs created here represent what growers would have received.
              </Text>
            </Box>
          </Flex>
        </Box>
      )}

      {provider === "twilio" && (
        <Box
          bg="green.50"
          borderWidth="1px"
          borderColor="green.200"
          p={4}
          borderRadius="2xl"
          shadow="sm"
        >
          <Flex gap={3} align="flex-start">
            <Box color="green.600" mt={0.5}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </Box>
            <Box>
              <Text fontSize="sm" fontWeight="bold" color="green.800">
                Twilio SMS Gateway Connected &amp; Operational
              </Text>
              <Text fontSize="xs" color="green.750" mt={0.5} lineHeight="relaxed">
                OrchardPay is wired to the live Twilio API. Grower transaction logs and OTP verification codes are dispatched immediately to active carrier networks.
              </Text>
            </Box>
          </Flex>
        </Box>
      )}

      {provider === "fast2sms" && (
        <Box
          bg="green.50"
          borderWidth="1px"
          borderColor="green.200"
          p={4}
          borderRadius="2xl"
          shadow="sm"
        >
          <Flex gap={3} align="flex-start">
            <Box color="green.600" mt={0.5}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </Box>
            <Box>
              <Text fontSize="sm" fontWeight="bold" color="green.800">
                Fast2SMS Gateway Connected &amp; Operational
              </Text>
              <Text fontSize="xs" color="green.750" mt={0.5} lineHeight="relaxed">
                OrchardPay is connected to the live Fast2SMS API. Grower notifications and billing SMS dispatches are instantly fired using the Quick SMS API route.
              </Text>
            </Box>
          </Flex>
        </Box>
      )}

      {/* Stats Cards */}
      <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} gap={4}>
        <Box bg="white" p={5} borderRadius="2xl" shadow="sm" borderWidth="1px" borderColor="gray.100">
          <Text fontSize="xs" color="gray.400" fontWeight="bold" textTransform="uppercase">Total Dispatched</Text>
          <Heading size="xl" mt={1} color="gray.800" fontWeight="black">{stats.total}</Heading>
        </Box>
        <Box bg="white" p={5} borderRadius="2xl" shadow="sm" borderWidth="1px" borderColor="gray.100">
          <Text fontSize="xs" color="gray.400" fontWeight="bold" textTransform="uppercase">Delivered</Text>
          <Heading size="xl" mt={1} color="green.600" fontWeight="black">{stats.sent}</Heading>
        </Box>
        <Box bg="white" p={5} borderRadius="2xl" shadow="sm" borderWidth="1px" borderColor="gray.100">
          <Text fontSize="xs" color="gray.400" fontWeight="bold" textTransform="uppercase">Failed Delivery</Text>
          <Heading size="xl" mt={1} color="red.500" fontWeight="black">{stats.failed}</Heading>
        </Box>
        <Box bg="white" p={5} borderRadius="2xl" shadow="sm" borderWidth="1px" borderColor="gray.100">
          <Text fontSize="xs" color="gray.400" fontWeight="bold" textTransform="uppercase">Delivery Success Rate</Text>
          <Heading size="xl" mt={1} color="teal.600" fontWeight="black">{stats.successRate}%</Heading>
        </Box>
      </SimpleGrid>

      {/* Filters & Actions */}
      <Flex gap={4} direction={{ base: "column", sm: "row" }} align={{ base: "stretch", sm: "center" }}>
        <Input
          maxW={{ sm: "xs", md: "md" }}
          placeholder="Search by grower name, mobile, or message..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          bg="white"
          borderRadius="xl"
        />
        <Select
          maxW={{ sm: "200px" }}
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          bg="white"
          borderWidth="1px"
          borderColor="gray.200"
          borderRadius="xl"
          py={2}
          px={3}
          fontSize="sm"
        >
          <option value="all">All Statuses</option>
          <option value="sent">Delivered Successfully</option>
          <option value="failed">Failed Delivery</option>
        </Select>
      </Flex>

      {/* Logs Table */}
      <Box bg="white" borderRadius="2xl" shadow="sm" borderWidth="1px" overflow="hidden">
        {filteredNotifications.length === 0 ? (
          <Box p={8} textAlign="center" color="gray.500">
            No SMS log entries found matching criteria.
          </Box>
        ) : (
          <Box overflowX="auto">
            <Box as="table" w="full" fontSize="sm">
              <Box as="thead" bg="gray.50">
                <Box as="tr" textAlign="left" color="gray.500">
                  <Box as="th" px={6} py={4} fontWeight="bold" fontSize="xs" textTransform="uppercase">Grower</Box>
                  <Box as="th" px={6} py={4} fontWeight="bold" fontSize="xs" textTransform="uppercase">Mobile Number</Box>
                  <Box as="th" px={6} py={4} fontWeight="bold" fontSize="xs" textTransform="uppercase">SMS Body Message</Box>
                  <Box as="th" px={6} py={4} fontWeight="bold" fontSize="xs" textTransform="uppercase">Dispatched At</Box>
                  <Box as="th" px={6} py={4} fontWeight="bold" fontSize="xs" textTransform="uppercase" textAlign="right">Status</Box>
                </Box>
              </Box>
              <Box as="tbody">
                {filteredNotifications.map((n) => (
                  <Box as="tr" key={n.id} borderTopWidth="1px" _hover={{ bg: "gray.50/50" }} transition="background 0.2s">
                    <Box as="td" px={6} py={4} fontWeight="bold" color="gray.800">
                      {n.grower.name}
                    </Box>
                    <Box as="td" px={6} py={4} color="gray.600">
                      {n.grower.mobile}
                    </Box>
                    <Box as="td" px={6} py={4} maxW="320px">
                      <Box bg="gray.50" px={3} py={2} borderRadius="lg" borderWidth="1px" borderColor="gray.100" fontSize="xs" color="gray.700" lineHeight="relaxed">
                        {n.message}
                      </Box>
                    </Box>
                    <Box as="td" px={6} py={4} color="gray.500" fontSize="xs">
                      {new Date(n.sentAt).toLocaleString("en-IN")}
                    </Box>
                    <Box as="td" px={6} py={4} textAlign="right">
                      <Badge
                        colorPalette={n.status === "sent" ? "green" : "red"}
                        variant="subtle"
                        borderRadius="md"
                        px={2.5}
                        py={0.8}
                        fontSize="10px"
                        fontWeight="bold"
                      >
                        {n.status === "sent" ? "DELIVERED" : "FAILED"}
                      </Badge>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        )}
      </Box>
    </Stack>
  );
}
