import {
  Box,
  HStack,
  SimpleGrid,
  StackProps,
  Text,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import {useRouter} from "next/router";
import React, {useCallback} from "react";
import {useRecoilState} from "recoil";
import {POLICY_LABEL} from "../../../interface/server/types/Auth";
import {checkSelected} from "../../../utils/array";
import {signUpWithSocialLogin} from "../../api/beers/api";
import {mockData} from "../../home/HomeTemplate";
import {
  BeerCard,
  BeerCardBody,
  BeerCardFooter,
  BeerCategoryTag,
  BeerCategoryTagLabel,
  BeerNameText,
} from "../../shared/Card/BeerCardItem";

import FloatingButton from "../../shared/FloatingButton";
import {chosenBeerIdsState} from "../../store/atom";

interface BeerCardsProps extends StackProps {
  nickName: string;
}

const BeerCards: React.FC<BeerCardsProps> = ({nickName, ...props}) => {
  const [chosenBeerIds, setChosenBeerIds] = useRecoilState(chosenBeerIdsState);
  const isFullfilled = chosenBeerIds && chosenBeerIds.length > 0;
  const top10Beers = [
    mockData,
    mockData,
    mockData,
    mockData,
    mockData,
    mockData,
    mockData,
    mockData,
    mockData,
    mockData,
    mockData,
    mockData,
    mockData,
    mockData,
    mockData,
    mockData,
    mockData,
    mockData,
    mockData,
    mockData,
  ];

  // 여기서 전역에서 들고 있는 데이터를 꺼내다 써야 함.
  // 즉 이 전 단계에서 recoil에 데이터를 set해야함.
  const MOCK_AUTH = {
    username: "태희",
    status_message: "나는 태희다",
    image_url: "https://picsum.photos/200/300?grayscale",
    agreed_policies: [
      POLICY_LABEL.PERSONAL_INFORMATION_POLICY,
      POLICY_LABEL.TERMS_OF_SERVICE,
    ],
  };

  const router = useRouter();

  const handleClickComplete = () => {
    signUpWithSocialLogin(MOCK_AUTH);
    router.push("/");
  };
  // const isSelected = checkSelected(newBeerId, newChosenBeers);

  const handleClickBeer = (newBeerId: number | undefined) => {
    if (!newBeerId) return;
    let newChosenBeers = [...chosenBeerIds];
    if (checkSelected(newBeerId, newChosenBeers)) {
      newChosenBeers = newChosenBeers.filter((id) => id !== newBeerId);
    } else {
      newChosenBeers.push(newBeerId);
    }
    setChosenBeerIds(newChosenBeers);
  };

  return (
    <VStack w="full" h="full" {...props}>
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
            <Text as="span">님의 최애맥주</Text>
          </Box>
          <Box>
            <Text> N개를 골라주세요!</Text>
          </Box>
          <Box>
            <Text fontSize="12px" textColor="gray.300">
              고른 맥주를 바탕으로 취향 분석 후, 맥주를 추천해드릴게요 :)
            </Text>
          </Box>
        </VStack>
        <SimpleGrid columns={3} spacingX="10px" spacingY="25px">
          {top10Beers.map((item) => {
            return (
              <BeerCard
                key={item.id}
                mt={1}
                w="full"
                cursor="pointer"
                onClick={() => handleClickBeer(item?.id)}
              >
                <BeerCardBody w="full" h="full" position={"relative"}>
                  <Box position="relative">
                    {item.image_url && (
                      <Image
                        src={item.image_url}
                        alt={item.name}
                        width="175px"
                        height="175px"
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
        </SimpleGrid>
      </VStack>
      <FloatingButton
        disabled={!isFullfilled}
        text="완료!"
        onClick={handleClickComplete}
        bgColor={isFullfilled ? "orange.200" : "gray.200"}
        textColor={isFullfilled ? "white.100" : "black.100"}
        boxShadow={isFullfilled ? "0px 8px 16px rgba(0, 0, 0, 0.3)" : "none"}
      />
    </VStack>
  );
};

export default BeerCards;
