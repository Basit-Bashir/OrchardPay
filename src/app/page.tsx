import NextLink from "next/link";
import { Box, Button, Container, Flex, Heading, Stack, Text, SimpleGrid } from "@chakra-ui/react";

const features = [
  { title: "OTP login", body: "Buyers sign in with their mobile number and a one-time code — no passwords." },
  { title: "Track every lot", body: "Record who sent what, the quantity, the rate, and the total in seconds." },
  { title: "Instant grower SMS", body: "Growers get a text the moment their produce is sold and at what rate." },
  { title: "Easy migration", body: "Import your existing records from CSV or Excel in a few clicks." },
];

export default function LandingPage() {
  return (
    <Box minH="100vh" bg="green.50">
      <Container maxW="6xl" py={{ base: 10, md: 16 }}>
        <Flex justify="space-between" align="center" mb={16}>
          <Heading size="lg" color="green.700">
            HortiTrack
          </Heading>
          <Stack direction="row" gap={3}>
            <Button asChild variant="ghost" colorPalette="green">
              <NextLink href="/login">Log in</NextLink>
            </Button>
            <Button asChild colorPalette="green">
              <NextLink href="/signup">Get started</NextLink>
            </Button>
          </Stack>
        </Flex>

        <Stack gap={6} maxW="3xl" mb={20}>
          <Heading size="3xl" lineHeight="1.1" color="green.900">
            Fruit purchase tracking for buyers and growers.
          </Heading>
          <Text fontSize="xl" color="gray.600">
            Log produce as it arrives, keep growers informed automatically, and move off your old
            software without losing a single record.
          </Text>
          <Stack direction="row" gap={4}>
            <Button asChild size="lg" colorPalette="green">
              <NextLink href="/signup">Create your firm account</NextLink>
            </Button>
            <Button asChild size="lg" variant="outline" colorPalette="green">
              <NextLink href="/login">I already have an account</NextLink>
            </Button>
          </Stack>
        </Stack>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap={6}>
          {features.map((f) => (
            <Box key={f.title} bg="white" p={6} borderRadius="lg" shadow="sm">
              <Heading size="md" mb={2} color="green.700">
                {f.title}
              </Heading>
              <Text color="gray.600">{f.body}</Text>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
