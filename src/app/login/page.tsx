"use client";

import { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import NextLink from "next/link";
import { Box, Button, Container, Heading, Input, Stack, Text } from "@chakra-ui/react";
import { api } from "@/lib/client";

function LoginInner() {
  const router = useRouter();
  const params = useSearchParams();
  const next = params.get("next") ?? "/dashboard";

  const [step, setStep] = useState<"mobile" | "otp">("mobile");
  const [mobile, setMobile] = useState("+919898989898");
  const [otp, setOtp] = useState("");
  const [devOtp, setDevOtp] = useState<string | undefined>();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function sendOtp() {
    setError("");
    setLoading(true);
    try {
      const data = await api<{ devOtp?: string }>("/api/auth/otp/generate", {
        method: "POST",
        body: JSON.stringify({ mobile }),
      });
      setDevOtp(data.devOtp);
      setStep("otp");
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setLoading(false);
    }
  }

  async function verify() {
    setError("");
    setLoading(true);
    try {
      await api("/api/auth/otp/verify", {
        method: "POST",
        body: JSON.stringify({ mobile, otp }),
      });
      router.push(next);
    } catch (e) {
      setError((e as Error).message);
      setLoading(false);
    }
  }

  return (
    <Box minH="100vh" bg="green.50" display="flex" alignItems="center">
      <Container maxW="md">
        <Box bg="white" p={8} borderRadius="xl" shadow="md">
          <Heading size="lg" color="green.700" mb={1}>
            Log in to HortiTrack
          </Heading>
          <Text color="gray.500" mb={6}>
            {step === "mobile"
              ? "Enter your registered mobile number."
              : `Enter the 6-digit code sent to ${mobile}.`}
          </Text>

          {error && (
            <Box bg="red.50" color="red.700" px={4} py={2} borderRadius="md" mb={4} fontSize="sm">
              {error}
            </Box>
          )}

          {step === "mobile" ? (
            <Stack gap={4}>
              <Box>
                <Text fontSize="sm" mb={1}>Mobile number</Text>
                <Input value={mobile} onChange={(e) => setMobile(e.target.value)} placeholder="+919999900001" />
              </Box>
              <Button colorPalette="green" onClick={sendOtp} loading={loading}>
                Send code
              </Button>
            </Stack>
          ) : (
            <Stack gap={4}>
              {devOtp && (
                <Box bg="yellow.50" color="yellow.800" px={4} py={2} borderRadius="md" fontSize="sm">
                  Dev mode — your code is <b>{devOtp}</b>.
                </Box>
              )}
              <Box>
                <Text fontSize="sm" mb={1}>Verification code</Text>
                <Input value={otp} onChange={(e) => setOtp(e.target.value)} placeholder="000000" maxLength={6} letterSpacing="0.3em" />
              </Box>
              <Button colorPalette="green" onClick={verify} loading={loading}>
                Verify &amp; enter
              </Button>
              <Button variant="ghost" size="sm" onClick={() => setStep("mobile")}>
                Use a different number
              </Button>
            </Stack>
          )}

          <Text fontSize="sm" color="gray.500" mt={6} textAlign="center">
            New here?{" "}
            <NextLink href="/signup" style={{ color: "var(--chakra-colors-green-600)", fontWeight: 600 }}>
              Create an account
            </NextLink>
          </Text>
        </Box>
      </Container>
    </Box>
  );
}

export default function LoginPage() {
  return (
    <Suspense>
      <LoginInner />
    </Suspense>
  );
}
