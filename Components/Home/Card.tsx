import { MOCK_CARD_LIST, POPULAR_BEER_TITLE, CardType } from "../../Static";
import CardItem from "./CardItem";
import styled from "styled-components";

interface CardProps {
  title: string;
}

const Card: React.FC<CardProps> = ({ title }) => {
  const cardType =
    title === POPULAR_BEER_TITLE ? CardType.POPULAR : CardType.RECOMMEND;

  return (
    <Container>
      {cardType === CardType.POPULAR ? (
        <PopularTitle>{title}</PopularTitle>
      ) : (
        <RecommendTitle>{title}</RecommendTitle>
      )}
      <CardContainer>
        {MOCK_CARD_LIST.map((item) => {
          return (
            <CardItem
              cardType={cardType}
              key={item.id}
              beerName={item.beerName}
              img_src={item.img_src}
              sort={item.sort}
              country={item.country}
            />
          );
        })}
      </CardContainer>
    </Container>
  );
};

const CardContainer = styled.div`
  display: flex;
  gap: 10px;
  overflow-x: auto;
`;

export const Container = styled.div`
  margin-top: 35px;
`;

export const PopularTitle = styled.p`
  margin-bottom: 10px;

  font-family: "Roboto";
  font-weight: 700;

  color: rgba(0, 0, 0, 0.8);
`;
export const RecommendTitle = styled.p`
  margin-bottom: 10px;

  font-family: "Roboto";
  font-weight: 700;
  color: pink;
`;

export default Card;
