"use client";

import { useState } from "react";
import { Box, Button, chakra, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { api } from "@/lib/client";

const Select = chakra("select");
const FileInput = chakra("input");

type Parsed = { headers: string[]; rows: Record<string, string>[] };

const TARGETS = [
  { key: "growerName", label: "Grower name" },
  { key: "growerMobile", label: "Grower mobile" },
  { key: "fruitType", label: "Fruit type" },
  { key: "quantity", label: "Quantity (kg)" },
  { key: "rate", label: "Rate (₹/kg)" },
] as const;

type TargetKey = (typeof TARGETS)[number]["key"];

function autoGuess(headers: string[], key: TargetKey): string {
  const h = headers.map((x) => x.toLowerCase());
  const patterns: Record<TargetKey, string[]> = {
    growerName: ["grower", "farmer", "name", "supplier"],
    growerMobile: ["mobile", "phone", "contact", "number"],
    fruitType: ["fruit", "produce", "item", "commodity", "type"],
    quantity: ["qty", "quantity", "weight", "kg"],
    rate: ["rate", "price", "amount per", "per kg"],
  };
  for (const p of patterns[key]) {
    const idx = h.findIndex((x) => x.includes(p));
    if (idx >= 0) return headers[idx];
  }
  return "";
}

export default function MigrationPage() {
  const [parsed, setParsed] = useState<Parsed | null>(null);
  const [mapping, setMapping] = useState<Record<TargetKey, string>>({
    growerName: "", growerMobile: "", fruitType: "", quantity: "", rate: "",
  });
  const [error, setError] = useState("");
  const [importing, setImporting] = useState(false);
  const [summary, setSummary] = useState<{ imported: number; growersCreated: number; skipped: number } | null>(null);

  function ingest(headers: string[], rows: Record<string, string>[]) {
    setError("");
    setSummary(null);
    setParsed({ headers, rows });
    setMapping({
      growerName: autoGuess(headers, "growerName"),
      growerMobile: autoGuess(headers, "growerMobile"),
      fruitType: autoGuess(headers, "fruitType"),
      quantity: autoGuess(headers, "quantity"),
      rate: autoGuess(headers, "rate"),
    });
  }

  async function onFile(file: File) {
    const ext = file.name.split(".").pop()?.toLowerCase();
    if (ext === "csv") {
      const Papa = (await import("papaparse")).default;
      Papa.parse<Record<string, string>>(file, {
        header: true,
        skipEmptyLines: true,
        complete: (res) => ingest(res.meta.fields ?? [], res.data),
        error: (e: Error) => setError(e.message),
      });
    } else if (ext === "xlsx" || ext === "xls") {
      const XLSX = await import("xlsx");
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const wb = XLSX.read(e.target?.result, { type: "binary" });
          const sheet = wb.Sheets[wb.SheetNames[0]];
          const json = XLSX.utils.sheet_to_json<Record<string, string>>(sheet, { defval: "" });
          const headers = json.length ? Object.keys(json[0]) : [];
          ingest(headers, json);
        } catch (err) {
          setError((err as Error).message);
        }
      };
      reader.readAsBinaryString(file);
    } else {
      setError("Please upload a .csv or .xlsx file.");
    }
  }

  const mapped = parsed
    ? parsed.rows.map((r) => ({
        growerName: String(r[mapping.growerName] ?? "").trim(),
        growerMobile: String(r[mapping.growerMobile] ?? "").trim(),
        fruitType: String(r[mapping.fruitType] ?? "").trim(),
        quantity: String(r[mapping.quantity] ?? "").trim(),
        rate: String(r[mapping.rate] ?? "").trim(),
      }))
    : [];

  const allMapped = TARGETS.every((t) => mapping[t.key]);

  async function runImport() {
    setError("");
    setImporting(true);
    try {
      const res = await api<{ imported: number; growersCreated: number; skipped: number }>(
        "/api/migration/import",
        { method: "POST", body: JSON.stringify({ rows: mapped }) },
      );
      setSummary(res);
      setParsed(null);
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setImporting(false);
    }
  }

  return (
    <Stack gap={6}>
      <Heading size="lg" color="gray.800">Data migration</Heading>
      <Text color="gray.600" maxW="2xl">
        Upload a CSV or Excel export from your old software. Map its columns to OrchardPay fields,
        preview, then import. Growers are created automatically and matched by mobile number.
      </Text>

      {error && <Box bg="red.50" color="red.700" px={4} py={2} borderRadius="md" fontSize="sm">{error}</Box>}

      {summary && (
        <Box bg="green.50" color="green.800" p={4} borderRadius="md">
          Imported <b>{summary.imported}</b> transactions, created <b>{summary.growersCreated}</b> new growers,
          skipped <b>{summary.skipped}</b> rows.
        </Box>
      )}

      <Box bg="white" p={6} borderRadius="lg" shadow="sm" borderWidth="1px">
        <FileInput
          type="file"
          accept=".csv,.xlsx,.xls"
          onChange={(e) => {
            const f = e.target.files?.[0];
            if (f) onFile(f);
          }}
        />
      </Box>

      {parsed && (
        <>
          <Box bg="white" p={6} borderRadius="lg" shadow="sm" borderWidth="1px">
            <Heading size="md" mb={4} color="gray.700">Map columns</Heading>
            <Stack gap={3}>
              {TARGETS.map((t) => (
                <Flex key={t.key} align="center" gap={4}>
                  <Text w="160px" fontSize="sm">{t.label}</Text>
                  <Select
                    value={mapping[t.key]}
                    onChange={(e) =>
                      setMapping((m) => ({ ...m, [t.key]: e.target.value }))
                    }
                    px={3} py={2} borderWidth="1px" borderRadius="md" bg="white" minW="220px"
                  >
                    <option value="">— not mapped —</option>
                    {parsed.headers.map((h) => (
                      <option key={h} value={h}>{h}</option>
                    ))}
                  </Select>
                </Flex>
              ))}
            </Stack>
          </Box>

          <Box bg="white" borderRadius="lg" shadow="sm" borderWidth="1px" overflow="hidden">
            <Box px={6} py={4} borderBottomWidth="1px">
              <Heading size="md" color="gray.700">Preview ({parsed.rows.length} rows)</Heading>
            </Box>
            <Box overflowX="auto">
              <Box as="table" w="full" fontSize="sm">
                <Box as="thead" bg="gray.50">
                  <Box as="tr" textAlign="left" color="gray.500">
                    {TARGETS.map((t) => (
                      <Box as="th" key={t.key} px={4} py={2} fontWeight="medium">{t.label}</Box>
                    ))}
                  </Box>
                </Box>
                <Box as="tbody">
                  {mapped.slice(0, 5).map((r, i) => (
                    <Box as="tr" key={i} borderTopWidth="1px">
                      <Box as="td" px={4} py={2}>{r.growerName || "—"}</Box>
                      <Box as="td" px={4} py={2}>{r.growerMobile || "—"}</Box>
                      <Box as="td" px={4} py={2}>{r.fruitType || "—"}</Box>
                      <Box as="td" px={4} py={2}>{r.quantity || "—"}</Box>
                      <Box as="td" px={4} py={2}>{r.rate || "—"}</Box>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          </Box>

          <Button
            colorPalette="green"
            alignSelf="flex-start"
            onClick={runImport}
            loading={importing}
            disabled={!allMapped}
          >
            {allMapped ? `Import ${parsed.rows.length} rows` : "Map all fields to continue"}
          </Button>
        </>
      )}
    </Stack>
  );
}
