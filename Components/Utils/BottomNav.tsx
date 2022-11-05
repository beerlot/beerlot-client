import { HStack, VStack, Text } from "@chakra-ui/react";
import React from "react";

export const BottomNav = () => {
  const navMenu = ["home", "feed", "search", "info"];
  return (
    <HStack
      py="10px"
      px="42px"
      pos="fixed"
      bg="white.100"
      borderTop="0.3px solid"
      borderTopColor="gray.300"
      height="65px"
      bottom="0px"
      left="0px"
      right="0px"
    >
      {navMenu.map((item, idx) => {
        return (
          <VStack key={idx}>
            <Text>{item}</Text>
            <Text>{idx}</Text>
          </VStack>
        );
      })}
    </HStack>
  );
};
