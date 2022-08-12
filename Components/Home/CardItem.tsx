import React from "react";
import styled from "styled-components";

interface CardItemProps {
  beerName: string;
  img_src: string;
  sort: string;
  country: string;
}

const CardItem: React.FC<CardItemProps> = ({
  beerName,
  img_src,
  sort,
  country,
}) => {
  return (
    <CardContainer>
      <CardImage src={img_src} alt={beerName} />
      <CardTextContainer>
        <p>{beerName}</p>
      </CardTextContainer>
      <CardTextContainer>
        <p>{sort}</p>
        <p>{country}</p>
      </CardTextContainer>
    </CardContainer>
  );
};

export default CardItem;

//TODO: 색상 지정
export const CardContainer = styled.div`
  padding: 8px;
  border: 1px solid #ff6b00;
  border-radius: 11px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const CardImage = styled.img`
  border-radius: 7px;
  width: 125px;
  height: 125px;
`;

// 상세 내용 스타일링 추가 하기
export const CardTextContainer = styled.div`
  display: flex;
`;
