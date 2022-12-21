import { Box, VStack } from "@chakra-ui/react";
import styled from "styled-components";
import { LeftBackTItle } from "../../common/headers/LeftBackTitle";
import SearchBarAutocomplete from "./SearchBarAutocomplete";

const SearchTemplate = () => {
  return (
    <VStack pt="70px" h="full" w="full">
      <LeftBackTItle />
      <SearchBarAutocomplete />
    </VStack>
  );
};

export default SearchTemplate;
