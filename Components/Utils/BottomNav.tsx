import { HStack, VStack, Text, Icon } from "@chakra-ui/react";
import {
  NavAccount,
  NavFeed,
  NavSearch,
  NavHome,
} from "./custom-icons/customIcons";
import React from "react";
import { useRouter } from "next/router";

export const BottomNav = () => {
  const router = useRouter();

  const navMenu = [
    { title: "home", displayName: "홈", icon: NavHome, url: "/" },
    { title: "feed", displayName: "피드", icon: NavFeed, url: "/feed" },
    { title: "search", displayName: "검색", icon: NavSearch, url: "/search" },
    {
      title: "account",
      displayName: "마이",
      icon: NavAccount,
      url: "/accounts",
    },
  ];

  const handleClick = (url: string) => {
    router.push(url);
  };

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
        const { title, displayName, icon, url } = item;
        return (
          <VStack
            key={title}
            flexGrow={1}
            gap="1.5px"
            onClick={() => handleClick(url)}
          >
            <Icon as={icon} />
            <Text
              textStyle="h4"
              color={router.pathname === url ? "orange.300" : "gray.300"}
            >
              {displayName}
            </Text>
          </VStack>
        );
      })}
    </HStack>
  );
};