import {Box, HStack, Text} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import {BeerResponseType} from "../../../../typedef/server/beer";
import {
  BeerCard,
  BeerCardBody,
  BeerCardFooter,
  BeerCategoryTag,
  BeerCategoryTagLabel,
  BeerNameText,
} from "@components/shared/Card/BeerCardItem";

interface LoggedInBeersListProps {
  topBeersList?: BeerResponseType[];
  userName?: string;
}
const LoggedInBeersList: React.FC<LoggedInBeersListProps> = ({
  topBeersList,
  userName,
}) => {
  return (
    <>
      <Text textColor="black.100" textStyle={"h2_bold"}>
        🔥 인기맥주 TOP10 🔥
      </Text>
      <HStack overflowX={"auto"} w="full" gap={"12px"}>
        {topBeersList &&
          topBeersList.map((item) => {
            return (
              <BeerCard key={item.id} mt={1}>
                <BeerCardBody>
                  <Box position="relative">
                    {item.image_url && (
                      <Image
                        src={item.image_url}
                        alt={item.name}
                        width="124px"
                        height="128px"
                        objectFit="cover"
                      />
                    )}
                  </Box>
                </BeerCardBody>
                <BeerCardFooter>
                  <BeerNameText>{item.name}</BeerNameText>
                  <HStack>
                    <BeerNameText>{item.origin_country}</BeerNameText>
                    <BeerCategoryTag>
                      <BeerCategoryTagLabel>
                        {item.category?.name}
                      </BeerCategoryTagLabel>
                    </BeerCategoryTag>
                  </HStack>
                </BeerCardFooter>
              </BeerCard>
            );
          })}
      </HStack>
      <Text textColor="black.100" textStyle={"h2_bold"} mt={8}>
        🍻{" "}
        <Text textColor="orange.200" textStyle={"h2_bold"} display="inline">
          {userName}
        </Text>
        님께 추천해요 🍻
      </Text>
      <HStack overflowX={"auto"} w="full" gap={"12px"}>
        {topBeersList &&
          topBeersList.map((item) => {
            return (
              <BeerCard key={item.id} mt={1} borderColor={"orange.200"}>
                <BeerCardBody>
                  <Box position="relative">
                    {item.image_url && (
                      <Image
                        src={item.image_url}
                        alt={item.name}
                        width="124px"
                        height="128px"
                        objectFit="cover"
                      />
                    )}
                  </Box>
                </BeerCardBody>
                <BeerCardFooter>
                  <BeerNameText>{item.name}</BeerNameText>
                  <HStack>
                    <BeerNameText>{item.origin_country}</BeerNameText>
                    <BeerCategoryTag bg="orange.200">
                      <BeerCategoryTagLabel>
                        {item.category?.name}
                      </BeerCategoryTagLabel>
                    </BeerCategoryTag>
                  </HStack>
                </BeerCardFooter>
              </BeerCard>
            );
          })}
      </HStack>
    </>
  );
};

export {LoggedInBeersList};
