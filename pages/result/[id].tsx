import { useRouter } from "next/router";
import TwoByTwoCard from "../../Components/Home/TwoByTwoCard";
import { MOCK_CARD_LIST, POPULAR_BEER_TITLE } from "../../Static";
import styled from "styled-components";

const SearchResult = () => {
  const router = useRouter();
  const { id } = router.query;
  const index = MOCK_CARD_LIST.findIndex((item) => {
    return item.id === Number(id);
  });
  console.log(index);
  return (
    <Container>
      <p>현재 검색된 맥주는 {MOCK_CARD_LIST[index].beerName}</p>
      <TwoByTwoCard title={POPULAR_BEER_TITLE} />
    </Container>
  );
};

export default SearchResult;

export const Container = styled.div`
  padding: 24px;
`;
