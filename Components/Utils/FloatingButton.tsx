import { Button, Text } from "@chakra-ui/react";
import React from "react";

const FloatingButton = () => {
  return (
    <Button w="100%" pos="absolute" bottom="35px" left="38px" right="38px">
      <Text>다음으로</Text>
    </Button>
  );
};

export default FloatingButton;
