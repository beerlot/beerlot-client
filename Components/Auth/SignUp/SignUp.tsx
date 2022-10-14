import { Circle, Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import FloatingButton from "../../Utils/FloatingButton";
import Beers from "./Beers";
import Nickname from "./Nickname";

const SignUp = () => {
  const [isNicknameDone, setIsNickNameDone] = useState(true); // 초깃값 false
  const [isBeersDone, setIsBeersDone] = useState(false);
  const [isFirstStepDone, setIsFirstStepDone] = useState(false);
  const [isSecondStepDone, setIsSecondStepDone] = useState(false);
  const checkFullfilled = (isFullfilled: boolean) => {
    setIsFirstStepDone(isFullfilled);
  };
  return (
    <Flex h="100vh" px="27.5px" pb="73px" pt="34px" flexDirection="column">
      <Flex justifyContent="center" w="100%" gap="10px">
        <Circle size="8px" bg={isNicknameDone ? "Orange.200" : "Gray.200"} />
        <Circle size="8px" bg={isBeersDone ? "Orange.200" : "Gray.200"} />
      </Flex>
      <Nickname checkFullfilled={checkFullfilled} />
      <FloatingButton
        text="다음으로"
        bg={isFirstStepDone ? "Orange.200" : "Gray.200"}
        textColor={isFirstStepDone ? "White.100" : "Black"}
        boxShadow={isFirstStepDone ? "0px 8px 16px rgba(0, 0, 0, 0.3)" : "none"}
      />
    </Flex>
  );
};

export default SignUp;
