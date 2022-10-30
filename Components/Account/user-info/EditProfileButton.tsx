import { Button, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";

const EditProfileButton = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`accounts/edit`);
  };

  return (
    <Button
      w="100%"
      p="4px"
      bg="Orange.200"
      borderRadius="5px"
      textColor="White.100"
      onClick={handleClick}
    >
      <Text textStyle="h3">프로필 편집</Text>
    </Button>
  );
};

export default EditProfileButton;