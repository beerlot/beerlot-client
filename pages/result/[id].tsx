import { Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";
import CardItem from "../../Components/Card/CardItem";
import { CardContainer } from "../../Components/Card/CardList/TwoByTwoCardList";
import EmptyFilteredResult from "../../Components/Result/Filter/SearchFilterItem/EmptyFilteredResult";
import SearchFilterList from "../../Components/Result/Filter/SearchFilterList/SearchFilterList";
import { CardType, MOCK_CARD_LIST } from "../../Static";

const SearchResultList = () => {
  const router = useRouter();
  const { id } = router.query;
  const filteredItemList = MOCK_CARD_LIST.filter((item) => {
    if (!id) {
      return [];
    }
    return item.beerName.includes(id[0]);
  });
  const [isFilterListOpen, setIsFilterListOpen] = useState<boolean>(true);
  const handeIsFilterListOpen = (isExpanded: boolean) => {
    setIsFilterListOpen(isExpanded);
  };

  return (
    <Container>
      <p>현재 검색된 맥주는 {id} </p>
      <Text>is : {isFilterListOpen}</Text>
      <SearchFilterList
        handeIsFilterListOpen={handeIsFilterListOpen}
        isFilterListOpen={isFilterListOpen}
      />

      {filteredItemList.length > 0 ? (
        filteredItemList.map((item) => {
          return (
            <CardContainer key={item.id}>
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
        })
      ) : (
        <EmptyFilteredResult />
      )}
    </Container>
  );
};

export default SearchResultList;

export const Container = styled.div`
  padding: 24px;
`;
