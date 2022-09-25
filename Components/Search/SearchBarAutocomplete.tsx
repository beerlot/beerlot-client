import { Box, Flex, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";
import { beerItemType } from "../../Static";
import SearchInput from "./SearchInput";

const SearchBarAutocomplete = () => {
  const [value, setValue] = useState("");
  const MOCK_BEER_ITEMS = [
    {
      id: 0,
      beerName: "블랑",
      img_src: "https://picsum.photos/id/237/200/300",
      sort: "IPA",
      country: "🌎",
    },
    {
      id: 1,
      beerName: "블랑 1988",
      img_src: "https://picsum.photos/id/237/200/300",
      sort: "IPA",
      country: "🌎",
    },
    {
      id: 2,
      beerName: "호가든",
      img_src: "https://picsum.photos/id/237/200/300",
      sort: "IPA",
      country: "🌎",
    },
    {
      id: 3,
      beerName: "칭따오",
      img_src: "https://picsum.photos/id/237/200/300",
      sort: "IPA",
      country: "🌎",
    },
    {
      id: 4,
      beerName: "오비라거",
      img_src: "https://picsum.photos/id/237/200/300",
      sort: "IPA",
      country: "🌎",
    },
    {
      id: 5,
      beerName: "OB라거",
      img_src: "https://picsum.photos/id/237/200/300",
      sort: "IPA",
      country: "🌎",
    },
  ];

  const [selectedItems, setSelectedItems] = useState<beerItemType[]>([]);
  const router = useRouter();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);
  const handleClick = (e: React.MouseEvent) => {
    const selectedName = e.currentTarget.textContent;
    router.push(`/result/${selectedName}`);
  };

  // MOCK_BEER_ITEM useMemo처리 안하면, VALUE한번 바꿀 때마다 mock_beer_info가 다시 RENDER됨.
  useEffect(() => {
    const newSelectedItems: beerItemType[] = MOCK_BEER_ITEMS.filter(
      (beerItems) => beerItems.beerName.includes(value)
    );
    setSelectedItems(newSelectedItems);
  }, [value]);

  const clearInput = () => {
    setValue("");
  };

  return (
    <Flex w="full" direction="column" borderRadius="20px" gap="10px" mt="14px">
      <SearchInput
        value={value}
        handleChange={handleChange}
        clearInput={clearInput}
      />

      <Flex flexDirection="column">
        <>
          {selectedItems.length !== 0 ? (
            selectedItems.map((beerItems) => {
              return (
                <Box
                  borderBottom="1px solid #DDDDDD"
                  py="20px"
                  px="15px"
                  key={beerItems.id}
                >
                  <Text textStyle="h2" key={beerItems.id} onClick={handleClick}>
                    {beerItems.beerName}
                  </Text>
                </Box>
              );
            })
          ) : (
            <Text>Nothing exists</Text>
          )}
        </>
      </Flex>
    </Flex>
  );
};

export default SearchBarAutocomplete;
