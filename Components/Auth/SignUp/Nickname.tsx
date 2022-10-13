import { Box, Checkbox, Stack, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";

const Nickname = () => {
  const [checkedItems, setCheckedItems] = useState([false, false]);
  const allChecked = checkedItems.every(Boolean);
  return (
    <VStack alignItems="start" gap="60px" w="100%">
      <Box pl="2.5px" mt="62px">
        <Text textStyle="h1">닉네임을 정해볼까요?</Text>
      </Box>
      <Box w="100%">
        <Text textStyle="h3" textColor="Gray.300">
          닉네임
        </Text>
        <Box w="100%" p="2px" borderBottom="1px" borderBottomColor="Gray.200">
          <Text textColor="Gray.200">닉네임은 9자 이내로 만들 수 있어요!</Text>
        </Box>
      </Box>
      <Box px="8px" w="100%">
        <Checkbox
          w="100%"
          bg="Gray.100"
          borderRadius="5px"
          py="8px"
          px="6px"
          isChecked={allChecked}
          onChange={(e) =>
            setCheckedItems([e.target.checked, e.target.checked])
          }
        >
          <Text textStyle="h3_bold" textColor="Black">
            전체 동의
          </Text>
        </Checkbox>
        <Checkbox
          w="100%"
          borderRadius="5px"
          py="8px"
          px="6px"
          isChecked={allChecked}
          onChange={(e) => setCheckedItems([e.target.checked, checkedItems[1]])}
        >
          <Text textStyle="h3" textColor="Black">
            (필수) 비어랏 이용약관 동의
          </Text>
        </Checkbox>
        <Checkbox
          w="100%"
          borderRadius="5px"
          py="8px"
          px="6px"
          isChecked={allChecked}
          onChange={(e) => setCheckedItems([checkedItems[0], e.target.checked])}
        >
          <Text textStyle="h3" textColor="Black">
            (필수) 개인정보 수집 및 이용 동의
          </Text>
        </Checkbox>
      </Box>
    </VStack>
  );
};

export default Nickname;
