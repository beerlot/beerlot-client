import { Box, Circle, Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  CardType,
  MOCK_CARD_LIST,
  MOCK_CATEGORY_FILTER_LIST,
} from "../../interface/static";
import { CategoryFilterListType } from "../../interface/types";
import { EmptyFilter, WhiteFilter } from "../../public/svg";
import CardItem from "../../src/card/CardItem";
import { CardContainer } from "../../src/card/CardList/TwoByTwoCardList";
import EmptyFilteredResult from "../../src/result/EmptyFilteredResult";
import SearchFilterList from "../../src/result/filter/search-filter-list/SearchFilterList";
import SearchInput from "../../src/search/SearchInput";

const SearchResultPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [isFilterListOpen, setIsFilterListOpen] = useState<boolean>(true);
  const [value, setValue] = useState<string>("");
  const [selectedFilters, setSelectedFilter] = useState<
    CategoryFilterListType[]
  >([]);

  const clearValue = () => {
    setValue("");
  };

  const filteredItemList = MOCK_CARD_LIST.filter((item) => {
    if (!id) {
      return [];
    }
    return item.beerName.includes(id[0]);
  });

  const handleClickToggle = () => {
    setIsFilterListOpen(!isFilterListOpen);
  };

  const handleClickTag = (targetTitle: string, targetTag: string) => {
    console.log("targetTitle", targetTitle, "targetTag", targetTag);
  };

  return (
    <Box p={"24px"}>
      <Flex gap="10px" alignItems="center" mb="24px">
        <SearchInput clearValue={clearValue} />
        <Circle size="31px" bg="blue.100" onClick={handleClickToggle}>
          {isFilterListOpen ? <WhiteFilter /> : <EmptyFilter />}
        </Circle>
      </Flex>
      <SearchFilterList
        selectedFilters={selectedFilters}
        filterList={MOCK_CATEGORY_FILTER_LIST}
        isFilterListOpen={isFilterListOpen}
        onClickToggle={handleClickToggle}
        onClickTag={handleClickTag}
      />
      {filteredItemList.length > 0 ? (
        <Box mt="15px">
          {filteredItemList.map((item) => {
            return (
              <CardContainer
                key={item.id}
                onClick={() => {
                  router.push(`/result/details?query=${item.beerName}`);
                }}
              >
                <CardItem
                  isTwoByTwo
                  cardType={CardType.POPULAR}
                  beerName={item.beerName}
                  img_src={item.img_src}
                  sort={item.sort}
                  country={item.country}
                />
              </CardContainer>
            );
          })}
        </Box>
      ) : (
        <EmptyFilteredResult />
      )}
    </Box>
  );
};

export default SearchResultPage;
