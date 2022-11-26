import React, { useState } from "react";
import { LeftBackBeerNameRightHeart } from "../../common/headers/LeftBackBeerNameRightHeart";
import { LeftBackTItle } from "../../common/headers/LeftBackTitle";

export const DetailTemplate = () => {
  const [didPassStar, setDidPassStar] = useState(false);
  const beerName = "버드와이저"; // mock data

  return (
    <>
      {didPassStar ? (
        <LeftBackTItle />
      ) : (
        <LeftBackBeerNameRightHeart beerName={beerName} />
      )}
    </>
  );
};
