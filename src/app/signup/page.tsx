"use client";

import { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import NextLink from "next/link";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { api } from "@/lib/client";
import { Navbar } from "@/components/layout/Navbar";

function SignupInner() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const planParam = searchParams.get("plan");

  const [selectedPlan, setSelectedPlan] = useState<string>(planParam || "");
  const [step, setStep] = useState<"plan" | "details" | "otp">(
    planParam ? "details" : "plan"
  );
  const [firmName, setFirmName] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [mobile, setMobile] = useState("+91");
  const [otp, setOtp] = useState("");
  const [uniqueId, setUniqueId] = useState("");
  const [devOtp, setDevOtp] = useState<string | undefined>();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function submitDetails() {
    setError("");
    setLoading(true);
    try {
      const data = await api<{ uniqueId: string; devOtp?: string }>("/api/auth/signup", {
        method: "POST",
        body: JSON.stringify({ firmName, ownerName, mobile, plan: selectedPlan || "pro" }),
      });
      setUniqueId(data.uniqueId);
      setDevOtp(data.devOtp);
      setStep("otp");
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setLoading(false);
    }
  }

  async function submitOtp() {
    setError("");
    setLoading(true);
    try {
      await api("/api/auth/otp/verify", {
        method: "POST",
        body: JSON.stringify({ mobile, otp }),
      });
      router.push("/dashboard");
    } catch (e) {
      setError((e as Error).message);
      setLoading(false);
    }
  }

  return (
    <Flex minH="100vh" bg="green.50" direction="column">
      <Navbar />
      <Flex flex="1" align="center" justify="center" py={8}>
        <Container maxW="md">
          <Box bg="white" p={8} borderRadius="xl" shadow="md">
            <Heading size="lg" color="green.700" mb={1}>
              {step === "plan" ? "Select your plan" : "Create your firm account"}
            </Heading>
            <Text color="gray.500" mb={6}>
              {step === "plan"
                ? "Choose the plan that fits your business needs."
                : step === "details"
                ? "Tell us about your firm to get a unique buyer ID."
                : `Enter the 6-digit code sent to ${mobile}.`}
            </Text>

            {error && (
              <Box bg="red.50" color="red.700" px={4} py={2} borderRadius="md" mb={4} fontSize="sm">
                {error}
              </Box>
            )}

            {step === "plan" ? (
              <Stack gap={5}>
                <Stack gap={4}>
                  {/* Single Firm Plan Card */}
                  <Box
                    borderWidth="2px"
                    borderColor={selectedPlan === "pro" ? "green.500" : "gray.200"}
                    bg={selectedPlan === "pro" ? "green.50" : "white"}
                    p={4}
                    borderRadius="xl"
                    cursor="pointer"
                    onClick={() => setSelectedPlan("pro")}
                    transition="all 0.2s"
                    _hover={{ borderColor: "green.400", shadow: "sm" }}
                  >
                    <Flex justify="space-between" align="center" mb={1}>
                      <Text fontWeight="bold" color="gray.800" fontSize="sm">
                        Single Firm Plan
                      </Text>
                      {selectedPlan === "pro" && (
                        <Box bg="green.500" color="white" borderRadius="full" p={0.5}>
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </Box>
                      )}
                    </Flex>
                    <Heading size="md" color="gray.900" mb={2}>
                      ₹3,999 <Text as="span" fontSize="xs" fontWeight="normal" color="gray.500">/ year</Text>
                    </Heading>
                    <Text fontSize="xs" color="gray.600">
                      Perfect for a single mandi business profile. Includes 2 staff members and all ledger features.
                    </Text>
                  </Box>

                  {/* Multi Firm Plan Card */}
                  <Box
                    borderWidth="2px"
                    borderColor={selectedPlan === "premium" ? "green.500" : "gray.200"}
                    bg={selectedPlan === "premium" ? "green.50" : "white"}
                    p={4}
                    borderRadius="xl"
                    cursor="pointer"
                    onClick={() => setSelectedPlan("premium")}
                    transition="all 0.2s"
                    _hover={{ borderColor: "green.400", shadow: "sm" }}
                  >
                    <Flex justify="space-between" align="center" mb={1}>
                      <Flex align="center" gap={2}>
                        <Text fontWeight="bold" color="gray.800" fontSize="sm">
                          Multi Firm Plan
                        </Text>
                        <Text fontSize="8px" fontWeight="bold" bg="green.600" color="white" px={1.5} py={0.5} borderRadius="full" textTransform="uppercase">
                          Recommended
                        </Text>
                      </Flex>
                      {selectedPlan === "premium" && (
                        <Box bg="green.500" color="white" borderRadius="full" p={0.5}>
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </Box>
                      )}
                    </Flex>
                    <Heading size="md" color="gray.900" mb={2}>
                      ₹6,999 <Text as="span" fontSize="xs" fontWeight="normal" color="gray.500">/ year</Text>
                    </Heading>
                    <Text fontSize="xs" color="gray.600">
                      Create and switch between multiple business profiles. Includes unlimited staff and priority SMS.
                    </Text>
                  </Box>
                </Stack>

                <Button
                  colorPalette="green"
                  disabled={!selectedPlan}
                  onClick={() => setStep("details")}
                  mt={2}
                  w="full"
                >
                  Continue to Details
                </Button>
              </Stack>
            ) : step === "details" ? (
              <Stack gap={4}>
                {/* Selected Plan Summary Banner */}
                <Flex
                  align="center"
                  justify="space-between"
                  bg="green.50"
                  borderWidth="1px"
                  borderColor="green.200"
                  px={4}
                  py={3}
                  borderRadius="xl"
                  mb={2}
                >
                  <Box>
                    <Text fontSize="10px" fontWeight="bold" color="green.800" textTransform="uppercase" letterSpacing="wider">
                      Selected Plan
                    </Text>
                    <Text fontSize="sm" fontWeight="bold" color="gray.800" mt={0.5}>
                      {selectedPlan === "premium" ? "Multi Firm Plan" : "Single Firm Plan"}
                    </Text>
                  </Box>
                  <Text fontSize="sm" fontWeight="extrabold" color="green.700">
                    {selectedPlan === "premium" ? "₹6,999/yr" : "₹3,999/yr"}
                  </Text>
                </Flex>

                <Box>
                  <Text fontSize="sm" mb={1}>Firm name</Text>
                  <Input value={firmName} onChange={(e) => setFirmName(e.target.value)} placeholder="Valley Fresh Traders" />
                </Box>
                <Box>
                  <Text fontSize="sm" mb={1}>Owner name</Text>
                  <Input value={ownerName} onChange={(e) => setOwnerName(e.target.value)} placeholder="Asha Patil" />
                </Box>
                <Box>
                  <Text fontSize="sm" mb={1}>Mobile number</Text>
                  <Input value={mobile} onChange={(e) => setMobile(e.target.value)} placeholder="+919999900001" />
                </Box>
                <Flex gap={3}>
                  {!planParam && (
                    <Button variant="outline" onClick={() => setStep("plan")}>
                      Back
                    </Button>
                  )}
                  <Button flex="1" colorPalette="green" onClick={submitDetails} loading={loading}>
                    Continue
                  </Button>
                </Flex>
              </Stack>
            ) : (
              <Stack gap={4}>
                <Box bg="green.50" px={4} py={3} borderRadius="md" fontSize="sm">
                  Your buyer ID is <b>{uniqueId}</b>
                </Box>
                {devOtp && (
                  <Box bg="yellow.50" color="yellow.800" px={4} py={2} borderRadius="md" fontSize="sm">
                    Dev mode — your code is <b>{devOtp}</b> (also logged to the server console).
                  </Box>
                )}
                <Box>
                  <Text fontSize="sm" mb={1}>Verification code</Text>
                  <Input value={otp} onChange={(e) => setOtp(e.target.value)} placeholder="000000" maxLength={6} letterSpacing="0.3em" />
                </Box>
                <Button colorPalette="green" onClick={submitOtp} loading={loading}>
                  Verify &amp; enter
                </Button>
              </Stack>
            )}

            <Text fontSize="sm" color="gray.500" mt={6} textAlign="center">
              Already registered?{" "}
              <NextLink href="/login" style={{ color: "var(--chakra-colors-green-600)", fontWeight: 600 }}>
                Log in
              </NextLink>
            </Text>
          </Box>
        </Container>
      </Flex>
    </Flex>
  );
}

export default function SignupPage() {
  return (
    <Suspense>
      <SignupInner />
    </Suspense>
  );
}
