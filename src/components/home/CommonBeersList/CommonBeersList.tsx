import {generateBeerDetailUrl} from "@/../utils/url";
import {CommonBeerImage} from "@/components/shared/CommonBeerImage/CommonBeerImage";
import {LikeButton} from "@/components/shared/LikeButton";
import {Box, HStack, SimpleGrid, Text} from "@chakra-ui/react";
import {
  BeerCard,
  BeerCardBody,
  BeerCardFooter,
  BeerCategoryTag,
  BeerCategoryTagLabel,
  BeerNameText,
} from "@components/shared/Card/BeerCardItem";
import {useRouter} from "next/router";
import React, {useCallback} from "react";
import {BeerResponseType} from "../../../../typedef/server/beer";
import {useLikeBeer} from "@/../hooks/useLikeBeer";

interface CommonBeersListProps {
  topBeersList?: BeerResponseType[];
}
const CommonBeersList: React.FC<CommonBeersListProps> = ({topBeersList}) => {
  const router = useRouter();
  const {isLikedBeer, likeBeer, dislikeBeer} = useLikeBeer();
  const onClickCard = useCallback(
    (id?: number, name?: string) => {
      if (!id || !name) return; //TODO: add toast

      const url = generateBeerDetailUrl(id, name);
      router.push(url);
    },
    [router]
  );
  const handleClickLike = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      if (isLikedBeer) {
        dislikeBeer();
      } else {
        likeBeer();
      }
      e.stopPropagation();
    },
    [dislikeBeer, isLikedBeer, likeBeer]
  );

  return (
    <>
      <Text textColor="black.100" textStyle={"h2_bold"}>
        🔥 인기맥주 TOP10 🔥
      </Text>

      <SimpleGrid columns={2} spacing={"16px"}>
        {topBeersList &&
          topBeersList.map((item) => {
            return (
              <BeerCard
                key={item.id}
                mt={1}
                w="full"
                onClick={() => onClickCard(item?.id, item.name)}
              >
                <BeerCardBody w="full" h="full" position={"relative"}>
                  <Box position="relative">
                    {item.image_url && (
                      <CommonBeerImage
                        src={item.image_url}
                        alt={item.name}
                        width="175px"
                        height="175px"
                        objectFit="cover"
                      />
                    )}
                  </Box>
                  <Box position="absolute" top={0} right={0}>
                    <LikeButton
                      isLiked={true}
                      onClick={handleClickLike}
                      h={7}
                      aria-label="like button"
                    />
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
      </SimpleGrid>
    </>
  );
};

export {CommonBeersList};
