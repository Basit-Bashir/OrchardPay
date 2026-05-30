"use client";

import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";

type ConfirmationModalProps = {
  isOpen: boolean;
  title: string;
  message: string;
  onConfirm: () => void | Promise<void>;
  onCancel: () => void;
  confirmText?: string;
  cancelText?: string;
  colorScheme?: string;
  isLoading?: boolean;
};

export function ConfirmationModal({
  isOpen,
  title,
  message,
  onConfirm,
  onCancel,
  confirmText = "Confirm",
  cancelText = "Cancel",
  colorScheme = "red",
  isLoading = false,
}: ConfirmationModalProps) {
  if (!isOpen) return null;

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
      onClick={onCancel}
      backdropFilter="blur(4px)"
    >
      <Box
        bg="white"
        borderRadius="xl"
        p={6}
        maxW="md"
        w="full"
        shadow="2xl"
        borderWidth="1px"
        onClick={(e) => e.stopPropagation()}
      >
        <Heading size="md" color="gray.800" mb={3}>
          {title}
        </Heading>
        
        <Text fontSize="sm" color="gray.600" mb={6}>
          {message}
        </Text>

        <Flex justify="flex-end" gap={3}>
          <Button
            size="sm"
            variant="outline"
            onClick={onCancel}
            disabled={isLoading}
          >
            {cancelText}
          </Button>
          <Button
            size="sm"
            colorPalette={colorScheme}
            onClick={onConfirm}
            loading={isLoading}
          >
            {confirmText}
          </Button>
        </Flex>
      </Box>
    </Box>
  );
}
