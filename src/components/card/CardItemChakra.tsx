import {Box, Flex, Text, VStack} from "@chakra-ui/react";
import axios from "axios";
import React, {useState} from "react";
import {useMutation} from "react-query";
import styled from "styled-components";
import {LikeButton} from "../shared/LikeButton";

interface CardItemProps {
  beerId: number;
  isTwoByTwo: boolean;
  beerName: string;
  img_src: string;
  sort: string;
  country: string;
  borderColor: string;
}

const CardItemChakra: React.FC<CardItemProps> = ({
  beerName,
  beerId,
  img_src,
  sort,
  country,
  isTwoByTwo,
  borderColor,
}) => {
  const [isLiked, setIsLiked] = useState(false);

  const likeBeer = useMutation((beerId: number) =>
    axios.post(`/api/v1/beers/${beerId}/likes`)
  );

  const dislikeBeer = useMutation((beerId: number) =>
    axios.delete(`/api/v1/beers/${beerId}/likes`)
  );

  const handleClick = () => {
    setIsLiked(!isLiked);
    isLiked ? dislikeBeer.mutate(beerId) : likeBeer.mutate(beerId); // 데이터 저장
  };

  return (
    <>
      <VStack
        position="relative"
        alignItems="flex-start"
        gap="4px"
        p="8px"
        border="1px solid"
        borderRadius="12px"
        borderColor={borderColor}
      >
        <Box position="absolute" right="0px" top="0px">
          <LikeButton
            isLiked={isLiked}
            onClick={handleClick}
            position="absolute"
            top="12px"
            right="12px"
            w="27px"
            h="29px"
            aria-label="like button"
          />
        </Box>
        <CardImage src={img_src} alt={beerName} isTwoByTwo={isTwoByTwo} />
        <Text textStyle="h4" color="black">
          {beerName}
        </Text>
        <Flex justifyContent="space-between">
          <Text py="0" px="3px">
            {country}
          </Text>
          <Flex
            py="0"
            px="5px"
            borderRadius="20px"
            bg="orange.300"
            alignItems="center"
          >
            <Text textStyle="h4" color="white">
              {sort}
            </Text>
          </Flex>
        </Flex>
      </VStack>
    </>
  );
};

export default CardItemChakra;

export const CardImage = styled.img<{isTwoByTwo: boolean}>`
  border-radius: 7px;
  width: ${(isTwoByTwo) => (isTwoByTwo ? `37vw` : `30vw`)};
  height: ${(isTwoByTwo) => (isTwoByTwo ? `37vw` : `30vw`)};
`;
