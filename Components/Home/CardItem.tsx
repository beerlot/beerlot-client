import React from "react";

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
    <div>
      <img src={img_src} alt={beerName} />
      <p>{beerName}</p>
      <p>{sort}</p>
      <p>{country}</p>
    </div>
  );
};

export default CardItem;
