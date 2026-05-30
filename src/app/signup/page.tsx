"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
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

export default function SignupPage() {
  const router = useRouter();
  const [step, setStep] = useState<"details" | "otp">("details");
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
        body: JSON.stringify({ firmName, ownerName, mobile }),
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
              Create your firm account
            </Heading>
            <Text color="gray.500" mb={6}>
              {step === "details"
                ? "Tell us about your firm to get a unique buyer ID."
                : `Enter the 6-digit code sent to ${mobile}.`}
            </Text>

            {error && (
              <Box bg="red.50" color="red.700" px={4} py={2} borderRadius="md" mb={4} fontSize="sm">
                {error}
              </Box>
            )}

            {step === "details" ? (
              <Stack gap={4}>
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
                <Button colorPalette="green" onClick={submitDetails} loading={loading}>
                  Continue
                </Button>
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
