import { Box, Flex, Text } from "@chakra-ui/react";
import axios from "axios";
import _, { debounce } from "lodash";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useMutation } from "react-query";
import useKeyboard from "../../hooks/useKeyboard";
import { useSearch } from "../../hooks/useSearch";
import EmptySearchResult from "./EmptySearchResult";
import SearchInput from "./SearchInput";

const SearchBarAutocomplete = () => {
  const router = useRouter();
  const [value, setValue] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);
  const { isInputEmpty } = useSearch(value);
  const searchBeer = useMutation((keyword: string) =>
    axios.get(`/api/v1/beers?keyword=${keyword}&page=1&size=10&sort=MOST_LIKES`)
  );

  const { isEnterKey } = useKeyboard();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    debouncedSearch(e.target.value);
  };

  const debouncedSearch = useMemo(
    () =>
      debounce((value) => {
        setValue(value);
        searchBeer.mutate(value);
      }, 200),
    [searchBeer]
  );

  const handleClickItem = (e: React.MouseEvent) => {
    const selectedName = e.currentTarget.textContent;
    router.push(`/result/${selectedName}`);
  };

  const clearInput = () => {
    setValue("");
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (isEnterKey(e)) {
      router.push(`/result/${e.target.value}}`);
    }
  };

  useEffect(() => {
    const newSelectedItem = searchBeer.data?.data.contents;
    setSelectedItems(newSelectedItem);
  }, [searchBeer.data?.data.contents]);

  return (
    <Flex w="full" direction="column" borderRadius="20px" gap="10px" mt="14px">
      <SearchInput
        onKeyPress={handleKeyPress}
        value={value}
        onChange={handleChange}
        clearInput={clearInput}
      />
      {isInputEmpty ? (
        <MarketingScreen />
      ) : (
        <Flex flexDirection="column">
          <>
            {selectedItems?.length > 0 ? (
              selectedItems.map((beerItems: any) => {
                return (
                  <Box
                    borderBottom="1px solid"
                    borderColor="gray.200"
                    py="10px"
                    px="15px"
                    key={beerItems.id}
                  >
                    <Text
                      textStyle="h2"
                      key={beerItems.id}
                      onClick={handleClickItem}
                    >
                      {beerItems.name_ko}
                    </Text>
                  </Box>
                );
              })
            ) : (
              <EmptySearchResult inputValue={value} />
            )}
          </>
        </Flex>
      )}
    </Flex>
  );
};

export default SearchBarAutocomplete;

const MarketingScreen = () => (
  <Box>
    <Text fontSize="24px" fontWeight="bold" mb="10px">
      Welcome to Beerlot!
    </Text>
    <Text fontSize="16px" fontWeight="normal" mb="10px">
      Please enter the beer name you want to search.
    </Text>
  </Box>
);
