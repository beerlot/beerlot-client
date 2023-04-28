import {Box, Container, HStack, SimpleGrid, Text} from "@chakra-ui/react";
import Image from "next/image";
import {SignUpType} from "../../../interface/types";
import {BeerResponseType} from "../../../typedef/server/beer";
import {
  BeerCard,
  BeerCardBody,
  BeerCardFooter,
  BeerCategoryTag,
  BeerCategoryTagLabel,
  BeerNameText,
} from "../shared/Card/BeerCardItem";
import {BlankHeader} from "../shared/Headers/BlankHeader";
import SearchInputHome from "./SearchInputHome";
import {WelcomeTextContent} from "./WelcomeText";

interface HomeTemplateProps {
  userInfo?: SignUpType;
  topBeersList?: BeerResponseType[];
}
const HomeTemplate: React.FC<HomeTemplateProps> = ({
  userInfo,
  topBeersList,
}) => {
  return (
    <Box w="full" h="full" bg="gray.100" overflowY="scroll">
      <Container p={"0px"} bg="white" maxW="450px" h="full">
        <Box p="64px 24px 24px" pt="64px">
          <BlankHeader />
          {/* TODO: v2 alarm feature */}
          {/* <RightBellHeader /> */}

          <WelcomeTextContent username={userInfo?.username} />

          <Box py={"34px"}>
            <SearchInputHome />
          </Box>

          {userInfo ? (
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
                <Text
                  textColor="orange.200"
                  textStyle={"h2_bold"}
                  display="inline"
                >
                  {userInfo.username}
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
          ) : (
            <>
              <Text textColor="black.100" textStyle={"h2_bold"}>
                🔥 인기맥주 TOP10 🔥
              </Text>

              <SimpleGrid columns={2} spacing={"16px"}>
                {topBeersList &&
                  topBeersList.map((item) => {
                    return (
                      <BeerCard key={item.id} mt={1} w="full">
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
            </>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default HomeTemplate;

export const mockData: BeerResponseType = {
  id: 1,
  name: "Pale Ale",
  origin_country: "USA",
  image_url: "/images/preview-beer.png",
  category: {
    id: 1,
    name: "아메리칸 에일",
  },
};
