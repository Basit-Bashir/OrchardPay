"use client";

import { useState, useEffect, useMemo } from "react";
import { Flex, Input, chakra } from "@chakra-ui/react";

const Select = chakra("select");

export const defaultCountries = [
  { code: "+91", flag: "🇮🇳", name: "India" },
  { code: "+1", flag: "🇺🇸", name: "US/Canada" },
  { code: "+44", flag: "🇬🇧", name: "United Kingdom" },
  { code: "+971", flag: "🇦🇪", name: "UAE" },
  { code: "+966", flag: "🇸🇦", name: "Saudi Arabia" },
  { code: "+61", flag: "🇦🇺", name: "Australia" },
  { code: "+92", flag: "🇵🇰", name: "Pakistan" },
  { code: "+880", flag: "🇧🇩", name: "Bangladesh" },
  { code: "+977", flag: "🇳🇵", name: "Nepal" },
  { code: "+94", flag: "🇱🇰", name: "Sri Lanka" },
  { code: "+65", flag: "🇸🇬", name: "Singapore" },
  { code: "+965", flag: "🇰🇼", name: "Kuwait" },
  { code: "+968", flag: "🇴🇲", name: "Oman" },
  { code: "+974", flag: "🇶🇦", name: "Qatar" },
  { code: "+973", flag: "🇧🇭", name: "Bahrain" },
];

function parsePhoneNumber(value: string) {
  // Sort descending by code length to match longer codes (e.g. +971) before shorter ones
  const matched = defaultCountries
    .slice()
    .sort((a, b) => b.code.length - a.code.length)
    .find((c) => value.startsWith(c.code));

  if (matched) {
    return {
      code: matched.code,
      number: value.slice(matched.code.length),
      customCode: null,
    };
  }

  // Fallback: Check if it starts with + followed by digits (up to 4 digits)
  const plusMatch = value.match(/^\+(\d{1,4})/);
  if (plusMatch) {
    const extractedCode = plusMatch[0];
    return {
      code: extractedCode,
      number: value.slice(extractedCode.length),
      customCode: extractedCode,
    };
  }

  // Default fallback
  return {
    code: "+91",
    number: value,
    customCode: null,
  };
}

interface PhoneInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
}

export function PhoneInput({
  value,
  onChange,
  placeholder = "9999900001",
  disabled = false,
  size = "md",
}: PhoneInputProps) {
  const parsed = useMemo(() => parsePhoneNumber(value || ""), [value]);

  const [selectedCode, setSelectedCode] = useState(parsed.code);
  const [baseNumber, setBaseNumber] = useState(parsed.number);
  const [customCode, setCustomCode] = useState<string | null>(parsed.customCode);

  useEffect(() => {
    const parsedCurrent = parsePhoneNumber(value || "");
    setSelectedCode(parsedCurrent.code);
    setBaseNumber(parsedCurrent.number);
    setCustomCode(parsedCurrent.customCode);
  }, [value]);

  const countriesList = useMemo(() => {
    if (customCode && !defaultCountries.some((c) => c.code === customCode)) {
      return [
        ...defaultCountries,
        { code: customCode, flag: "🌐", name: `Other (${customCode})` },
      ];
    }
    return defaultCountries;
  }, [customCode]);

  const handleCodeChange = (newCode: string) => {
    setSelectedCode(newCode);
    onChange(newCode + baseNumber);
  };

  const handleNumberChange = (newNumber: string) => {
    const cleanNumber = newNumber.replace(/[^\d]/g, "");
    setBaseNumber(cleanNumber);
    onChange(selectedCode + cleanNumber);
  };

  return (
    <Flex align="stretch" w="full" position="relative">
      <Select
        value={selectedCode}
        onChange={(e) => handleCodeChange(e.target.value)}
        disabled={disabled}
        borderRightWidth="0"
        borderTopRightRadius="0"
        borderBottomRightRadius="0"
        bg="gray.50"
        borderColor="gray.300"
        w="95px"
        px={2}
        h={size === "sm" ? "32px" : size === "lg" ? "48px" : "40px"}
        fontSize={size === "sm" ? "xs" : "sm"}
        outline="none"
        _focus={{
          borderColor: "green.500",
          boxShadow: "none",
          zIndex: 1,
        }}
        cursor="pointer"
      >
        {countriesList.map((c) => (
          <option key={c.code} value={c.code}>
            {c.flag} {c.code}
          </option>
        ))}
      </Select>
      <Input
        value={baseNumber}
        onChange={(e) => handleNumberChange(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        borderTopLeftRadius="0"
        borderBottomLeftRadius="0"
        h={size === "sm" ? "32px" : size === "lg" ? "48px" : "40px"}
        fontSize={size === "sm" ? "xs" : "sm"}
        flex="1"
        _focus={{
          borderColor: "green.500",
          zIndex: 1,
        }}
      />
    </Flex>
  );
}
