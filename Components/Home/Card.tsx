import { MOCK_CARD_LIST, POPULAR_BEER_TITLE } from "../../Static";
import CardItem from "./CardItem";
import styled from "styled-components";

interface CardProps {
  title: string;
}

const Card: React.FC<CardProps> = ({ title }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <CardContainer>
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
    </Container>
  );
};

const CardContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const Container = styled.div`
  margin-top: 35px;
`;

export const Title = styled.p`
  margin-bottom: 10px;
`;

export default Card;
