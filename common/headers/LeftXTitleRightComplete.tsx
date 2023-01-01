import {Flex} from "@chakra-ui/react";
import React from "react";
import CloseButton from "../CloseButton";
import {AlertBellPath} from "../custom-icons/customPath";
import BeerlotTitle from "./BeerlotTitle";

interface LeftXTitleRightCompleteProps {
  title?: string;
}

const LeftXTitleRightComplete: React.FC<LeftXTitleRightCompleteProps> = ({
  title,
}) => {
  return (
    <Flex
      position="absolute"
      top="0px"
      right="0px"
      left="0px"
      pl="12px"
      pr="24px"
      justifyContent="space-between"
      alignItems="center"
      border="1px solid red"
    >
      <CloseButton />
      {title ?? <BeerlotTitle />}
      {AlertBellPath()}
    </Flex>
  );
};

export default LeftXTitleRightComplete;
