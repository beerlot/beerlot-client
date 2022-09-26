import { Button, Text } from "@chakra-ui/react";
import React from "react";
import { BottomArrow } from "../../../../public/svg";

interface filterTagProps {
  title: string;
  tagList: string[];
}

const FilterTag: React.FC<filterTagProps> = ({ title, tagList }) => {
  return (
    <Button h="auto" borderRadius="15px" bg="Yellow.200" py={1} px="5px">
      <Text textStyle="h3">{title}</Text>
      <BottomArrow />
    </Button>
  );
};

export default FilterTag;
