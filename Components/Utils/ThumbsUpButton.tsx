import { Button, Text } from "@chakra-ui/react";
import React from "react";
import { ThumbsUpIcon } from "../../public/svg";

interface ThumbsUpButtonProps {
  thumbsUpNumber: number;
}

const ThumbsUpButton: React.FC<ThumbsUpButtonProps> = ({ thumbsUpNumber }) => {
  return (
    <Button
      h={"auto"}
      w={"auto"}
      bg={"white"}
      py={"4px"}
      px={"8px"}
      border={"1px solid rgba(97, 100, 107, 0.5)"}
      borderRadius="30px"
    >
      <ThumbsUpIcon />
      <Text textStyle="h3" ml={"4px"}>
        {thumbsUpNumber}
      </Text>
    </Button>
  );
};

export default ThumbsUpButton;
