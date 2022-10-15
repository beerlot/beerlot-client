import { Box, Text, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import FloatingButton from "../../Utils/FloatingButton";

interface BeerCardsProps {
  nickName: string;
}

const BeerCards: React.FC<BeerCardsProps> = ({ nickName }) => {
  const [isFullfilled, setIsFullfilled] = useState<boolean>(false);
  const [selectedBeers, setSelectedBeers] = useState([]);

  useEffect(() => {
    setIsFullfilled(selectedBeers.length > 0);
  }, [selectedBeers.length]);

  return (
    <>
      <FloatingButton
        disabled={!isFullfilled}
        text="완료!"
        href="/"
        bgColor={isFullfilled ? "Orange.200" : "Gray.200"}
        textColor={isFullfilled ? "White.100" : "Black"}
        boxShadow={isFullfilled ? "0px 8px 16px rgba(0, 0, 0, 0.3)" : "none"}
      />
      <VStack gap={"25px"}>
        <Box pt={"64px"}>
          <Text as="span">{nickName}</Text>
          <Text as="span">님의 최애맥주</Text>
          <Text> N개를 골라주세요!</Text>
          <Text>
            고른 맥주를 바탕으로 취향 분석 후, 맥주를 추천해드릴게요 :)
          </Text>
        </Box>
        <Box>beer cards</Box>
      </VStack>
    </>
  );
};

export default BeerCards;
