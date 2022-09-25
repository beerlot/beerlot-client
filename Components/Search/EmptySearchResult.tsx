import { Box, Center, Flex, Text } from "@chakra-ui/react";
import React from "react";

interface EmptySearchResultProps {
  inputValue: string;
}

const EmptySearchResult: React.FC<EmptySearchResultProps> = ({
  inputValue,
}) => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      mt="118px"
      textStyle="h2_bold"
      gap="10px"
      flexDirection="column"
    >
      <Box flexDirection="row">
        <Text as="span" textStyle="h2_bold">{`'${inputValue}'`}</Text>
        <Text as="span" textStyle="h2">{`에 대한 검색 결과가 없어요🤔`}</Text>
      </Box>
      <Box>
        <Text textStyle="h3" textColor="Gray.300">
          다른 키워드로 검색해보세요!
        </Text>
      </Box>
    </Flex>
  );
};

export default EmptySearchResult;
