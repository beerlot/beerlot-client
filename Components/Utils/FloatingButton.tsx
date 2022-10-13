import { Button, Text } from "@chakra-ui/react";
import React from "react";

interface FloatingButtonProps {
  text?: string;
  styles?: any; //typing 모르겠음
}

const FloatingButton: React.FC<FloatingButtonProps> = ({ text, styles }) => {
  const { ...rest } = styles;
  return (
    <Button
      pos="absolute"
      bottom="35px"
      left="38px"
      right="35px"
      bg="Gray.200"
      borderRadius="10px"
      {...rest}
    >
      <Text textStyle="h3">{text}</Text>
    </Button>
  );
};

export default FloatingButton;
