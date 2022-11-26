import { Box, Center, Image } from "@chakra-ui/react";
import React, { useState } from "react";
import { LeftBackBeerNameRightHeart } from "../../common/headers/LeftBackBeerNameRightHeart";
import { LeftBackTItle } from "../../common/headers/LeftBackTitle";

export const DetailTemplate = () => {
  const [didPassStar, setDidPassStar] = useState(false);
  const beerName = "버드와이저"; // mock data
  const MOCK_IMAGE_SRC = "https://picsum.photos/seed/picsum/200/300"; // mock data
  return (
    <>
      {/* title */}
      {didPassStar ? (
        <LeftBackBeerNameRightHeart beerName={beerName} />
      ) : (
        <LeftBackTItle />
      )}
      {/* image  */}
      <Center pt="72px" w="full">
        <Image
          boxSize="320px"
          src={MOCK_IMAGE_SRC}
          fallbackSrc="https://via.placeholder.com/150"
          alt="beer image"
        />
      </Center>
    </>
  );
};
