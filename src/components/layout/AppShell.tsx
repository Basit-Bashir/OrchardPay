"use client";

import NextLink from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Box, Button, Flex, Heading, IconButton, Stack, Text, Input, chakra } from "@chakra-ui/react";
import { useState, useEffect, useRef, type ReactNode } from "react";
import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/client";

const Select = chakra("select");

const NAV = [
  { href: "/dashboard", label: "Dashboard", icon: "📊" },
  { href: "/transactions", label: "Transactions", icon: "💰" },
  { href: "/growers", label: "Growers", icon: "🌿" },
  { href: "/migration", label: "Data migration", icon: "📦" },
  { href: "/reports", label: "Reports", icon: "📄" },
  { href: "/settings", label: "Settings", icon: "⚙️" },
];

function HamburgerIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

export function AppShell({
  children,
  firmName,
  uniqueId,
}: {
  children: ReactNode;
  firmName: string;
  uniqueId: string;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const { data: meData } = useQuery({
    queryKey: ["me"],
    queryFn: () => api<{ session: any; firm: any; firms: any[] }>("/api/auth/me"),
  });

  const isPremium = meData?.firm?.subscriptionPlan === "premium";
  const hasMultipleFirms = (meData?.firms && meData.firms.length > 1) || false;
  const isInteractive = isPremium || hasMultipleFirms;

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as HTMLElement;
      if (target && !target.closest(".business-switcher-container")) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close drawer on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Prevent body scrolling when drawer is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  async function logout() {
    await api("/api/auth/logout", { method: "POST" });
    router.push("/login");
  }

  const sidebarContent = (
    <>
      <Flex align="center" justify="space-between" mb={1}>
        <Heading size="md">OrchardPay</Heading>
        {/* Close button – only visible on mobile */}
        <IconButton
          aria-label="Close menu"
          variant="ghost"
          color="green.200"
          _hover={{ bg: "green.700" }}
          size="sm"
          display={{ base: "flex", md: "none" }}
          onClick={() => setMobileOpen(false)}
        >
          <CloseIcon />
        </IconButton>
      </Flex>
      
      {/* Custom Styled Business Switcher Dropdown */}
      <Box className="business-switcher-container" position="relative" mb={6} mt={2}>
        <Flex
          align="center"
          justify="space-between"
          bg="green.800"
          _hover={isInteractive ? { bg: "green.700" } : undefined}
          color="white"
          fontSize="sm"
          fontWeight="semibold"
          py={2.5}
          px={3.5}
          borderRadius="xl"
          borderWidth="1px"
          borderColor="green.800"
          cursor={isInteractive ? "pointer" : "default"}
          onMouseDown={(e) => e.stopPropagation()}
          onClick={() => {
            if (isInteractive) {
              setDropdownOpen(!dropdownOpen);
            }
          }}
          transition="all 0.2s ease"
          shadow="sm"
        >
          <Box truncate maxW={isInteractive ? "180px" : "210px"}>
            <Text fontSize="sm" fontWeight="bold" truncate>
              {meData?.firm?.firmName || "Loading..."}
            </Text>
            <Text fontSize="10px" color="green.200" fontWeight="medium" mt={0.5}>
              {meData?.firm?.uniqueId}
            </Text>
          </Box>
          {isInteractive && (
            <Box ml={2} transform={dropdownOpen ? "rotate(180deg)" : "rotate(0)"} transition="transform 0.2s ease" color="green.200">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </Box>
          )}
        </Flex>

        {isInteractive && dropdownOpen && (
          <Box
            position="absolute"
            top="105%"
            left={0}
            right={0}
            bg="white"
            borderRadius="xl"
            shadow="2xl"
            borderWidth="1px"
            borderColor="gray.200"
            py={2}
            zIndex={1000}
            maxH="300px"
            overflowY="auto"
            onMouseDown={(e) => e.stopPropagation()}
            style={{
              animation: "slideDown 0.15s ease-out",
            }}
          >
            <Text fontSize="10px" fontWeight="bold" color="gray.400" px={3.5} py={1.5} textTransform="uppercase" letterSpacing="wider">
              Your Businesses
            </Text>
            
            {meData?.firms?.map((f) => {
              const isActive = f.id === meData?.firm?.id;
              return (
                <Flex
                  key={f.id}
                  align="center"
                  justify="space-between"
                  px={3.5}
                  py={2.5}
                  cursor="pointer"
                  bg={isActive ? "green.50" : "transparent"}
                  _hover={{ bg: isActive ? "green.50" : "gray.50" }}
                  transition="background 0.15s"
                  onClick={async () => {
                    setDropdownOpen(false);
                    if (isActive) return;
                    try {
                      await api("/api/auth/switch", {
                        method: "POST",
                        body: JSON.stringify({ buyerFirmId: f.id }),
                      });
                      window.location.reload();
                    } catch (err: any) {
                      alert("Switch failed: " + err.message);
                    }
                  }}
                >
                  <Box truncate maxW="170px">
                    <Text fontSize="xs" fontWeight="semibold" color={isActive ? "green.800" : "gray.800"}>
                      {f.firmName}
                    </Text>
                    <Text fontSize="9px" color="gray.500">
                      {f.uniqueId}
                    </Text>
                  </Box>
                  {isActive && (
                    <Box color="green.600" ml={1}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </Box>
                  )}
                </Flex>
              );
            })}

            {isPremium && (
              <>
                <Box borderTopWidth="1px" borderColor="gray.100" my={1.5} />

                <Flex
                  align="center"
                  gap={2}
                  px={3.5}
                  py={2.5}
                  cursor="pointer"
                  color="green.600"
                  _hover={{ bg: "green.50", color: "green.800" }}
                  transition="all 0.15s"
                  fontWeight="semibold"
                  fontSize="xs"
                  onClick={() => {
                    setDropdownOpen(false);
                    setModalOpen(true);
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                  Add Business
                </Flex>
              </>
            )}
          </Box>
        )}
      </Box>
      <Stack gap={1} flex="1">
        {NAV.map((item) => {
          const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
          return (
            <Button
              key={item.href}
              asChild
              justifyContent="flex-start"
              variant={active ? "solid" : "ghost"}
              colorPalette="green"
              color={active ? undefined : "green.50"}
              _hover={{ bg: "green.700" }}
            >
              <NextLink href={item.href}>
                <Text as="span" mr={2} fontSize="md">{item.icon}</Text>
                {item.label}
              </NextLink>
            </Button>
          );
        })}
      </Stack>
      <Box mt="auto" pt={4} borderTopWidth="1px" borderColor="green.700">
        <Text fontSize="xs" color="green.300" mb={2} fontWeight="medium">{firmName}</Text>
        <Button
          size="sm"
          variant="outline"
          color="green.100"
          borderColor="green.600"
          _hover={{ bg: "green.700" }}
          w="full"
          onClick={logout}
        >
          Log out
        </Button>
      </Box>
    </>
  );

  return (
    <Flex minH="100vh" bg="gray.50">
      {/* Desktop sidebar – permanently visible */}
      <Box
        as="aside"
        w="260px"
        bg="green.800"
        color="white"
        p={6}
        display={{ base: "none", md: "flex" }}
        flexDirection="column"
        position="sticky"
        top={0}
        h="100vh"
      >
        {sidebarContent}
      </Box>

      {/* Mobile overlay backdrop */}
      {mobileOpen && (
        <Box
          position="fixed"
          inset={0}
          bg="blackAlpha.600"
          zIndex={40}
          display={{ base: "block", md: "none" }}
          onClick={() => setMobileOpen(false)}
          style={{
            animation: "fadeIn 0.2s ease-out",
          }}
        />
      )}

      {/* Mobile slide-out drawer */}
      <Box
        as="aside"
        position="fixed"
        top={0}
        left={0}
        h="100vh"
        w="280px"
        bg="green.800"
        color="white"
        p={6}
        zIndex={50}
        display={{ base: "flex", md: "none" }}
        flexDirection="column"
        transform={mobileOpen ? "translateX(0)" : "translateX(-100%)"}
        transition="transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
        boxShadow={mobileOpen ? "2xl" : "none"}
      >
        {sidebarContent}
      </Box>

      {/* Main content area */}
      <Flex direction="column" flex="1" minW={0}>
        <Flex as="header" bg="white" px={{ base: 4, md: 8 }} py={4} align="center" justify="space-between" borderBottomWidth="1px" gap={3}>
          {/* Hamburger – only visible on mobile */}
          <IconButton
            aria-label="Open navigation menu"
            variant="ghost"
            size="sm"
            display={{ base: "flex", md: "none" }}
            onClick={() => setMobileOpen(true)}
          >
            <HamburgerIcon />
          </IconButton>
          <Text fontWeight="semibold" color="gray.700" truncate>{firmName}</Text>
          <Button size="sm" variant="outline" onClick={logout} display={{ base: "none", md: "inline-flex" }}>Log out</Button>
        </Flex>
        <Box as="main" p={{ base: 4, md: 8 }} flex="1">
          {children}
        </Box>
      </Flex>

      <AddBusinessModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultOwnerName={meData?.firm?.ownerName}
      />

      {/* Inline keyframes for the backdrop fade & dropdown scale-in */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-8px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </Flex>
  );
}

function AddBusinessModal({
  isOpen,
  onClose,
  defaultOwnerName,
}: {
  isOpen: boolean;
  onClose: () => void;
  defaultOwnerName?: string;
}) {
  const [firmName, setFirmName] = useState("");
  const [ownerName, setOwnerName] = useState(defaultOwnerName || "");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (defaultOwnerName) {
      setOwnerName(defaultOwnerName);
    }
  }, [defaultOwnerName]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!firmName.trim() || !ownerName.trim()) {
      setError("Please fill out all fields.");
      return;
    }
    setLoading(true);
    setError("");
    try {
      await api("/api/firm", {
        method: "POST",
        body: JSON.stringify({ firmName, ownerName }),
      });
      window.location.href = "/dashboard";
    } catch (err: any) {
      setError(err.message || "Failed to create firm.");
      setLoading(false);
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      bottom={0}
      bg="rgba(0, 0, 0, 0.4)"
      zIndex={2000}
      display="flex"
      alignItems="center"
      justifyContent="center"
      p={4}
      onClick={onClose}
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
        color="gray.800"
      >
        <Heading size="md" mb={4} color="gray.900">
          Create New Business
        </Heading>

        {error && (
          <Text color="red.600" fontSize="xs" mb={3} fontWeight="medium">
            {error}
          </Text>
        )}

        <Stack gap={4} mb={6}>
          <Box>
            <Text fontSize="xs" fontWeight="semibold" mb={1} color="gray.600">
              Firm/Business Name
            </Text>
            <Input
              bg="white"
              size="sm"
              value={firmName}
              onChange={(e) => setFirmName(e.target.value)}
              placeholder="e.g. Valley Fresh Traders Unit 2"
              autoFocus
            />
          </Box>
          <Box>
            <Text fontSize="xs" fontWeight="semibold" mb={1} color="gray.600">
              Owner Name
            </Text>
            <Input
              bg="white"
              size="sm"
              value={ownerName}
              onChange={(e) => setOwnerName(e.target.value)}
              placeholder="e.g. Ramesh Singh"
            />
          </Box>
        </Stack>

        <Flex justify="flex-end" gap={3}>
          <Button
            size="sm"
            variant="outline"
            onClick={onClose}
            disabled={loading}
          >
            Cancel
          </Button>
          <Button
            size="sm"
            colorPalette="green"
            type="submit"
            loading={loading}
          >
            Create &amp; Switch
          </Button>
        </Flex>
      </Box>
    </Box>
  );
}
