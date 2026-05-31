"use client";

import { useEffect, useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Box, Button, Flex, Heading, Input, SimpleGrid, Spinner, Stack, Text, chakra } from "@chakra-ui/react";
import { api } from "@/lib/client";
import { ConfirmationModal } from "@/components/common/ConfirmationModal";

const Select = chakra("select");

type Firm = {
  uniqueId: string;
  firmName: string;
  ownerName: string;
  mobile: string;
  subscriptionPlan: string;
  createdAt: string;
  logoUrl?: string | null;
};
type Staff = { id: string; name: string | null; mobile: string; role: string };

function Info({ label, value }: { label: string; value: string }) {
  return (
    <Box>
      <Text fontSize="xs" color="gray.500">{label}</Text>
      <Text fontWeight="medium">{value}</Text>
    </Box>
  );
}

export default function SettingsPage() {
  const queryClient = useQueryClient();
  const { data: firm } = useQuery({ queryKey: ["firm"], queryFn: () => api<Firm>("/api/firm") });
  const { data: staff } = useQuery({ queryKey: ["staff"], queryFn: () => api<Staff[]>("/api/staff") });
  const { data: me } = useQuery({
    queryKey: ["me"],
    queryFn: () => api<{ session: { userId: string } }>("/api/auth/me"),
  });

  const [firmName, setFirmName] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [logoUrl, setLogoUrl] = useState<string | null>(null);
  const [savedMsg, setSavedMsg] = useState("");
  const [error, setError] = useState("");

  const [editingStaffId, setEditingStaffId] = useState<string | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<Staff | null>(null);
  const [editName, setEditName] = useState("");
  const [editMobile, setEditMobile] = useState("");
  const [editRole, setEditRole] = useState("staff");

  const deleteMutation = useMutation({
    mutationFn: (id: string) => api(`/api/staff/${id}`, { method: "DELETE" }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["staff"] });
    },
    onError: (e) => {
      setStaffErr(e.message);
    }
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, name, mobile, role }: { id: string; name: string; mobile: string; role: string }) =>
      api(`/api/staff/${id}`, {
        method: "PATCH",
        body: JSON.stringify({ name, mobile, role })
      }),
    onSuccess: () => {
      setEditingStaffId(null);
      queryClient.invalidateQueries({ queryKey: ["staff"] });
    },
    onError: (e) => {
      setStaffErr(e.message);
    }
  });

  useEffect(() => {
    if (firm) {
      setFirmName(firm.firmName);
      setOwnerName(firm.ownerName);
      setLogoUrl(firm.logoUrl ?? null);
    }
  }, [firm]);

  const [sName, setSName] = useState("");
  const [sMobile, setSMobile] = useState("+91");
  const [sRole, setSRole] = useState("staff");
  const [staffErr, setStaffErr] = useState("");

  async function saveFirm() {
    setError(""); setSavedMsg("");
    try {
      await api("/api/firm", { method: "PATCH", body: JSON.stringify({ firmName, ownerName, logoUrl }) });
      setSavedMsg("Saved.");
      queryClient.invalidateQueries({ queryKey: ["firm"] });
    } catch (e) {
      setError((e as Error).message);
    }
  }

  async function addStaff() {
    setStaffErr("");
    try {
      await api("/api/staff", { method: "POST", body: JSON.stringify({ name: sName, mobile: sMobile, role: sRole }) });
      setSName(""); setSMobile(""); setSRole("staff");
      queryClient.invalidateQueries({ queryKey: ["staff"] });
    } catch (e) {
      setStaffErr((e as Error).message);
    }
  }

  if (!firm) return <Flex p={8} justify="center"><Spinner color="green.500" /></Flex>;

  return (
    <Stack gap={8} maxW="3xl">
      <Heading size="lg" color="gray.800">Settings</Heading>

      <Box bg="white" p={6} borderRadius="lg" shadow="sm" borderWidth="1px">
        <Heading size="md" mb={4} color="gray.700">Firm</Heading>
        <SimpleGrid columns={{ base: 2, md: 3 }} gap={5} mb={6}>
          <Info label="Buyer ID" value={firm.uniqueId} />
          <Info label="Mobile" value={firm.mobile} />
          <Info 
            label="Plan" 
            value={firm.subscriptionPlan === "premium" ? "Multi Firm" : "Single Firm"} 
          />
          <Info label="Member since" value={new Date(firm.createdAt).toLocaleDateString("en-IN")} />
        </SimpleGrid>
        {error && <Text color="red.600" fontSize="sm" mb={2}>{error}</Text>}
        {savedMsg && <Text color="green.600" fontSize="sm" mb={2}>{savedMsg}</Text>}
        <Stack gap={5} maxW="md">
          <Box>
            <Text fontSize="sm" mb={1}>Firm name</Text>
            <Input value={firmName} onChange={(e) => setFirmName(e.target.value)} />
          </Box>
          <Box>
            <Text fontSize="sm" mb={1}>Owner name</Text>
            <Input value={ownerName} onChange={(e) => setOwnerName(e.target.value)} />
          </Box>
          <Box>
            <Text fontSize="sm" fontWeight="medium" mb={1} color="gray.600">Company Logo (Bill Watermark)</Text>
            <Stack direction="row" align="center" gap={4} mt={2}>
              {logoUrl ? (
                <Box position="relative" w="80px" h="80px" borderRadius="xl" borderWidth="1px" overflow="hidden" bg="gray.50">
                  <img src={logoUrl} alt="Logo preview" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                  <Button 
                    size="2xs" 
                    colorPalette="red" 
                    position="absolute" 
                    top="2px" 
                    right="2px" 
                    onClick={() => setLogoUrl(null)}
                    px={1.5}
                    py={0.5}
                    fontSize="8px"
                    borderRadius="md"
                  >
                    Remove
                  </Button>
                </Box>
              ) : (
                <Flex 
                  w="80px" 
                  h="80px" 
                  borderRadius="xl" 
                  borderWidth="2px" 
                  borderStyle="dashed" 
                  borderColor="gray.200"
                  justify="center"
                  align="center"
                  bg="gray.50"
                  color="gray.450"
                  fontSize="xs"
                >
                  No Logo
                </Flex>
              )}
              <Box>
                <Input 
                  type="file" 
                  accept="image/png, image/jpeg, image/jpg" 
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      const reader = new FileReader();
                      reader.onloadend = () => {
                        setLogoUrl(reader.result as string);
                      };
                      reader.readAsDataURL(file);
                    }
                  }}
                  display="none"
                  id="logo-upload"
                />
                <Button asChild variant="outline" size="sm" cursor="pointer">
                  <label htmlFor="logo-upload" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100%" }}>
                    Upload Image
                  </label>
                </Button>
                <Text fontSize="10px" color="gray.400" mt={1}>Supports PNG, JPG, JPEG (Max 1MB recommended)</Text>
              </Box>
            </Stack>
          </Box>
          <Button colorPalette="green" onClick={saveFirm} alignSelf="flex-start" mt={2}>Save changes</Button>
        </Stack>
      </Box>

      <Box bg="white" p={6} borderRadius="lg" shadow="sm" borderWidth="1px">
        <Heading size="md" mb={4} color="gray.700">Team members</Heading>
        <Stack gap={3} mb={6}>
          {staff?.filter((u) => u.role !== "buyer").map((u) => {
            const isEditing = editingStaffId === u.id;
            const isSelf = u.id === me?.session?.userId;
            const isBuyer = u.role === "buyer";

            if (isEditing) {
              return (
                <Box key={u.id} p={4} borderWidth="1px" borderRadius="lg" bg="gray.50" shadow="sm">
                  <Stack gap={3}>
                    <Text fontWeight="semibold" fontSize="xs" color="gray.600">Editing team member</Text>
                    <Flex gap={3} wrap="wrap">
                      <Box flex={1} minW="150px">
                        <Text fontSize="xs" mb={1} color="gray.500">Name</Text>
                        <Input size="sm" value={editName} onChange={(e) => setEditName(e.target.value)} bg="white" />
                      </Box>
                      <Box flex={1} minW="150px">
                        <Text fontSize="xs" mb={1} color="gray.500">Mobile {isBuyer && <span style={{ color: "var(--chakra-colors-gray-400)" }}>(Registered Number)</span>}</Text>
                        <Input 
                          size="sm" 
                          value={editMobile} 
                          onChange={(e) => setEditMobile(e.target.value)} 
                          bg={isBuyer ? "gray.100" : "white"} 
                          disabled={isBuyer} 
                        />
                      </Box>
                      <Box flex={1} minW="120px">
                        <Text fontSize="xs" mb={1} color="gray.500">Role</Text>
                        <Select
                          value={editRole}
                          onChange={(e) => setEditRole(e.target.value)}
                          disabled={isSelf || isBuyer}
                          w="full"
                          px={2}
                          py={1}
                          borderWidth="1px"
                          borderRadius="md"
                          bg="white"
                          fontSize="sm"
                        >
                          {editRole === "buyer" && <option value="buyer">buyer</option>}
                          <option value="staff">staff</option>
                          <option value="admin">admin</option>
                          <option value="hamaal">hamaal</option>
                        </Select>
                      </Box>
                    </Flex>
                    <Flex gap={2} justify="flex-end" mt={1}>
                      <Button size="xs" variant="outline" onClick={() => setEditingStaffId(null)}>Cancel</Button>
                      <Button
                        size="xs"
                        colorPalette="green"
                        loading={updateMutation.isPending}
                        onClick={() => {
                          setStaffErr("");
                          updateMutation.mutate({ id: u.id, name: editName, mobile: editMobile, role: editRole });
                        }}
                      >
                        Save
                      </Button>
                    </Flex>
                  </Stack>
                </Box>
              );
            }

            return (
              <Flex key={u.id} justify="space-between" align="center" borderWidth="1px" borderRadius="md" px={4} py={3} bg="white">
                <Box>
                  <Flex align="center" gap={2} wrap="wrap">
                    <Text fontWeight="medium" color="gray.800">{u.name ?? "—"}</Text>
                    {isSelf && (
                      <Text fontSize="10px" bg="blue.50" color="blue.700" px={1.5} py={0.2} borderRadius="md" fontWeight="bold">
                        You
                      </Text>
                    )}
                    <Text fontSize="10px" bg={u.role === "admin" ? "purple.50" : u.role === "buyer" ? "blue.50" : "gray.100"} color={u.role === "admin" ? "purple.700" : u.role === "buyer" ? "blue.700" : "gray.600"} px={2} py={0.5} borderRadius="md" fontWeight="bold" textTransform="uppercase">
                      {u.role}
                    </Text>
                  </Flex>
                  <Text fontSize="xs" color="gray.500" mt={0.5}>{u.mobile}</Text>
                </Box>
                <Flex gap={2}>
                  <Button
                    size="xs"
                    variant="outline"
                    onClick={() => {
                      setStaffErr("");
                      setEditingStaffId(u.id);
                      setEditName(u.name ?? "");
                      setEditMobile(u.mobile);
                      setEditRole(u.role);
                    }}
                  >
                    Edit
                  </Button>
                  {!isSelf && (
                    <Button
                      size="xs"
                      variant="ghost"
                      colorPalette="red"
                      onClick={() => {
                        setDeleteTarget(u);
                      }}
                    >
                      Remove
                    </Button>
                  )}
                </Flex>
              </Flex>
            );
          })}
        </Stack>
        {staffErr && <Text color="red.600" fontSize="sm" mb={2}>{staffErr}</Text>}
        <Flex gap={3} wrap="wrap" align="flex-end">
          <Box>
            <Text fontSize="sm" mb={1}>Name</Text>
            <Input value={sName} onChange={(e) => setSName(e.target.value)} placeholder="Staff name" />
          </Box>
          <Box>
            <Text fontSize="sm" mb={1}>Mobile</Text>
            <Input value={sMobile} onChange={(e) => setSMobile(e.target.value)} placeholder="+9198…" />
          </Box>
          <Box minW="120px">
            <Text fontSize="sm" mb={1}>Role</Text>
            <Select
              value={sRole}
              onChange={(e) => setSRole(e.target.value)}
              px={3} py={2} borderWidth="1px" borderRadius="md" bg="white" w="full" fontSize="sm" h="40px"
            >
              <option value="staff">staff</option>
              <option value="admin">admin</option>
              <option value="hamaal">hamaal</option>
            </Select>
          </Box>
          <Button colorPalette="green" onClick={addStaff} h="40px">Add staff</Button>
        </Flex>
      </Box>

      <ConfirmationModal
        isOpen={!!deleteTarget}
        title="Remove Team Member"
        message={`Are you sure you want to remove ${deleteTarget?.name || deleteTarget?.mobile} from the team?`}
        onConfirm={async () => {
          if (deleteTarget) {
            setStaffErr("");
            await deleteMutation.mutateAsync(deleteTarget.id);
            setDeleteTarget(null);
          }
        }}
        onCancel={() => setDeleteTarget(null)}
        isLoading={deleteMutation.isPending}
        confirmText="Remove"
      />
    </Stack>
  );
}
