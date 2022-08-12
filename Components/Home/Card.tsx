import { MOCK_CARD_LIST, POPULAR_BEER_TITLE } from "../../Static";
import CardItem from "./CardItem";
import styled from "styled-components";

interface CardProps {
  title: string;
}

const Card: React.FC<CardProps> = ({ title }) => {
  return (
    <>
      <p>{title}</p>
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
    </>
  );
};

const CardContainer = styled.div`
  display: flex;
`;

export default Card;
