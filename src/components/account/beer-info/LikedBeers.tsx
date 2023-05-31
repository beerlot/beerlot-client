import {
  useBeerDislikeMutation,
  useBeerLikeMutation,
} from "@/../hooks/query/useBeerLikeMutation";
import { useUserBeersQuery } from "@/../hooks/query/useUserQuery";
import { BeerResponseType } from "@/../typedef/server/beer";
import { generateBeerDetailUrl } from "@/../utils/url";
import { CommonBeerImage } from "@/components/shared/CommonBeerImage/CommonBeerImage";
import { LikeButton } from "@/components/shared/LikeButton";
import { Box, HStack, SimpleGrid } from "@chakra-ui/react";
import {
  BeerCard,
  BeerCardBody,
  BeerCardFooter,
  BeerCategoryTag,
  BeerCategoryTagLabel,
  BeerNameText,
} from "@components/shared/Card/BeerCardItem";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useCallback, useEffect, useMemo } from "react";

const LikedBeers = () => {
  const accessToken = Cookies.get("beerlot-oauth-auth-request") ?? "";
  const userBeersQuery = useUserBeersQuery(accessToken);

  const router = useRouter();
  const likedBeerIds = useMemo(
    () =>
      userBeersQuery?.data?.contents?.map((item: BeerResponseType) => item.id),
    []
  );

  const likeBeerMutation = useBeerLikeMutation({
    onSuccess: () => {
      userBeersQuery.refetch();
    },
  });

  const dislikeBeerMutation = useBeerDislikeMutation({
    onSuccess: () => {
      userBeersQuery.refetch();
    },
  });

  const checkIsLiked = (id?: number) => {
    if (id === undefined) return false;
    return likedBeerIds?.includes(id) ?? false;
  };

  useEffect(() => {
    userBeersQuery?.refetch();
  }, []);

  const handleClickCard = useCallback(
    (id?: number, name?: string) => {
      if (!id || !name) return; //TODO: add toast

      const url = generateBeerDetailUrl(id, name);
      router.push(url);
    },
    [router]
  );
  console.log({ likedBeerIds });
  const handleClickLike = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, id?: number) => {
      e.stopPropagation();
      if (id === undefined) return;

      const isLiked = likedBeerIds?.includes(id);
      console.log({ isLiked });
      if (!isLiked) {
        likeBeerMutation.mutate({ beerId: id, accessToken });
      } else {
        dislikeBeerMutation.mutate({ beerId: id, accessToken });
      }
    },
    [accessToken, dislikeBeerMutation, likeBeerMutation, likedBeerIds]
  );

  return (
    <SimpleGrid columns={2} spacing={"16px"}>
      {userBeersQuery?.data?.contents?.map((item: BeerResponseType) => {
        return (
          <BeerCard
            key={item.id}
            mt={1}
            w="full"
            onClick={() => handleClickCard(item?.id, item.name)}
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
                  isLiked={checkIsLiked(item?.id)}
                  onClick={(e) => handleClickLike(e, item.id)}
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
  );
};

export { LikedBeers };
