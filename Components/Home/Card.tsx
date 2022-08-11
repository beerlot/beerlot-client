import { MOCK_CARD_LIST, POPULAR_BEER_TITLE } from "../../Static";
import CardItem from "./CardItem";
import styled from "styled-components";

const Card = () => {
  return (
    <CardContainer>
      <p>{POPULAR_BEER_TITLE}</p>
      {MOCK_CARD_LIST.map((item) => {
        return (
          <CardItem
            key={item.id}
            beerName={item.beerName}
            img_src={item.img_src}
            sort={item.sort}
            country={item.country}
          />
        );
      })}
    </CardContainer>
  );
};

const CardContainer = styled.div`
  display: flex;
`;

export default Card;
