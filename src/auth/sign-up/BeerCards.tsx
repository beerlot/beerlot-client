import { Box, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useCallback } from "react";
import { useRecoilState } from "recoil";
import BeerCard from "../../../common/BeerCard";
import FloatingButton from "../../../common/FloatingButton";
import { MOCK_BEERS_SUGGESTION } from "../../../interface/static";
import { isSelected } from "../../../utils/array";
import { chosenBeerIdsState } from "../../store/atom";

interface BeerCardsProps {
  nickName: string;
}

const BeerCards: React.FC<BeerCardsProps> = ({ nickName }) => {
  const [chosenBeerIds, setChosenBeerIds] = useRecoilState(chosenBeerIdsState);
  const isFullfilled = chosenBeerIds && chosenBeerIds.length > 0;
  const router = useRouter();
  const handleClick = () => {
    router.push("/");
  };

  const handleClickBeer = (newBeerId: number) => {
    let newChosenBeers = [...chosenBeerIds];
    if (isSelected(newBeerId, newChosenBeers)) {
      newChosenBeers = newChosenBeers.filter((id) => id !== newBeerId);
    } else {
      newChosenBeers.push(newBeerId);
    }
    setChosenBeerIds(newChosenBeers);
  };

  const styleProps = useCallback(
    (id: number) => {
      return {
        boxStyleProps: {
          p: "6px",
          border: "1px solid",
          borderColor: "orange.200",
          borderRadius: "10px",
          alignItems: "start",
          bg: isSelected(id, chosenBeerIds) ? "orange.200" : "white",
          boxShadow: isSelected(id, chosenBeerIds)
            ? "0px 8px 16px rgba(0, 0, 0, 0.3)"
            : "none",
        },
        nameProps: {
          textColor: "black.100",
          textStyle: "h4",
        },
        countryProps: {
          bg: "white",
          textStyle: "body",
          textColor: "orange.300",
          borderRadius: "20px",
        },
        sortProps: {
          textStyle: "h4",
          textColor: isSelected(id, chosenBeerIds) ? "orange.200" : "white",
          bg: isSelected(id, chosenBeerIds) ? "white" : "orange.200",
          borderRadius: "20px",
          p: "0px 5px",
        },
        imageProps: {
          borderRadius: "6px",
          w: "full",
        },
      };
    },
    [chosenBeerIds]
  );

  return (
    <VStack w="full" h="full">
      <FloatingButton
        disabled={!isFullfilled}
        text="??????!"
        onClick={handleClick}
        bgColor={isFullfilled ? "orange.200" : "gray.200"}
        textColor={isFullfilled ? "white.100" : "black.100"}
        boxShadow={isFullfilled ? "0px 8px 16px rgba(0, 0, 0, 0.3)" : "none"}
      />
      <VStack
        gap={"25px"}
        p={0}
        pb={"25px"}
        alignItems="start"
        w="full"
        h="full"
      >
        <VStack
          pt={"64px"}
          textStyle="h1"
          gap="5px"
          alignItems="start"
          w="full"
          h="full"
        >
          <Box>
            <Text as="span" textColor="orange.200">
              {nickName}
            </Text>
            <Text as="span">?????? ????????????</Text>
          </Box>
          <Box>
            <Text> N?????? ???????????????!</Text>
          </Box>
          <Box>
            <Text fontSize="12px" textColor="gray.300">
              ?????? ????????? ???????????? ?????? ?????? ???, ????????? ????????????????????? :)
            </Text>
          </Box>
        </VStack>
        <SimpleGrid
          w="full"
          h="full"
          columns={3}
          spacingX="10px"
          spacingY="25px"
        >
          {[
            MOCK_BEERS_SUGGESTION,
            MOCK_BEERS_SUGGESTION,
            MOCK_BEERS_SUGGESTION,
            MOCK_BEERS_SUGGESTION,
            MOCK_BEERS_SUGGESTION,
            MOCK_BEERS_SUGGESTION,
            MOCK_BEERS_SUGGESTION,
            MOCK_BEERS_SUGGESTION,
            MOCK_BEERS_SUGGESTION,
            MOCK_BEERS_SUGGESTION,
            MOCK_BEERS_SUGGESTION,
          ].map((item, idx) => {
            return (
              <Box
                key={idx}
                onClick={() => handleClickBeer(item.id)}
                w="full"
                h="full"
              >
                <BeerCard
                  beerName={item.name_ko}
                  img_src={item.image_url}
                  country={item.country}
                  sort={item.category.name_ko}
                  beerId={idx}
                  styleProps={styleProps(item.id)}
                />
              </Box>
            );
          })}
        </SimpleGrid>
      </VStack>
    </VStack>
  );
};

export default BeerCards;
