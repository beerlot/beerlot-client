import {
  Box,
  Flex,
  HStack,
  IconButton,
  Input,
  Tag,
  Text,
  VStack,
} from "@chakra-ui/react";
import { CrossXBlack, WhiteCross } from "../../../../public/svg";
import { CreateReviewRequestTypeV2 } from "../../../../typedef/review";

interface BeerPurchaseSectionProps {
  reviewInfo: CreateReviewRequestTypeV2;
  handleChangePlace: (newPlace:string) => void;
  clearInput: () => void;
  handleClickPlaceTag: (place: string) => void;
  placeInputValue: string;
}

export const BeerPurchaseSection: React.FC<BeerPurchaseSectionProps> = ({
  reviewInfo,
  handleChangePlace,
  clearInput,
  handleClickPlaceTag,
  placeInputValue,
}) => {
  return (
    <VStack p="10px" gap="10px" w="full" alignItems={"flex-start"}>
      <Box>
        <Text as="span" textStyle="h2" textColor="black.100">
          이 맥주 어디서 구매하셨나요?{" "}
        </Text>
        <Text as="span" textStyle="h2" textColor="gray.200">
          (선택)
        </Text>
      </Box>
      <HStack w="full" gap="10px" justify={"space-between"}>
        {reviewInfo.buy_from ? (
          <HStack>
            <Tag
              justifyContent="row"
              borderRadius={"4px"}
              bg="white"
              border="1px solid"
              borderColor={"orange.200"}
              cursor="pointer"
            >
              <Text textStyle={"h2"} textColor="orange.200">
                {reviewInfo.buy_from}
              </Text>
            </Tag>
            {reviewInfo.buy_from.includes("기타") && (
              <HStack
                px={"0px"}
                py={"2px"}
                borderBottom="1px solid"
                borderBottomColor={"orange.200"}
              >
                {/* styling slightly weird, width should be fixed */}
                <Input
                  onChange={(e)=>handleChangePlace(e.target.value)}
                  value={placeInputValue}
                  w="auto"
                  h="auto"
                  border="none"
                  px={"0px"}
                  borderRadius={"none"}
                  focusBorderColor="none"
                  placeholder="직접 입력해주세요!"
                  _placeholder={{ color: "orange.100" }}
                  color="orange.200"
                  textStyle={"h2"}
                />

                <IconButton
                  onClick={clearInput}
                  bg="gray.200"
                  size={"24px"}
                  borderRadius="full"
                  px={"0px"}
                  aria-label="delete-x-button"
                  icon={<WhiteCross />}
                  _hover={{}}
                  _active={{}}
                />
              </HStack>
            )}
          </HStack>
        ) : (
          <Flex gap="10px">
            {purchasePlaces.map((place) => {
              return (
                <Tag
                  borderRadius={"4px"}
                  bg="gray.100"
                  key={place}
                  size="md"
                  cursor="pointer"
                  onClick={() => handleClickPlaceTag(place)}
                >
                  <Text textStyle={"h2"} textColor="gray.300">
                    {place}
                  </Text>
                </Tag>
              );
            })}
          </Flex>
        )}

        {reviewInfo.buy_from && (
          <IconButton
            bg="initial"
            size={"24px"}
            px={"0px"}
            aria-label="delete-x-button"
            icon={<CrossXBlack />}
            _hover={{}}
            _active={{}}
            onClick={() => handleClickPlaceTag("")}
          />
        )}
      </HStack>
    </VStack>
  );
};

//TODO : should be replaced
export const purchasePlaces = ["편의점", "펍", "대형마트", "기타"];
