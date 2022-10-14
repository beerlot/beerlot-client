import { Button, Text } from "@chakra-ui/react";
import React from "react";

interface FloatingButtonProps {
  text?: string;
  bg?: string;
  textColor?: string;
  boxShadow?: string | undefined;
}

const FloatingButton: React.FC<FloatingButtonProps> = ({
  text,
  bg,
  textColor,
  boxShadow,
}) => {
  return (
    <Button
      boxShadow={boxShadow}
      pos="absolute"
      bottom="35px"
      left="38px"
      right="35px"
      bg={bg}
      borderRadius="10px"
    >
      <Text textStyle="h3" textColor={textColor}>
        {text}
      </Text>
    </Button>
  );
};

export default FloatingButton;
