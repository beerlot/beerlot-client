import {Box, Center, HStack, Image, Text, VStack} from "@chakra-ui/react";
import {useState} from "react";
import {LeftBackBeerNameRightHeart} from "../../common/headers/LeftBackBeerNameRightHeart";
import {LeftBackTitle} from "../../common/headers/LeftBackTitle";
import OrangeLikeButton from "../../common/OrangeLikeButton";
import {Rating} from "../../common/Rating";
import {useToast} from "@chakra-ui/react";
interface DetailInfoProps {
  beerName: string;
  volume: number;
  category: string;
  country: string;
  beerImg: string;
}

export const DetailInfo: React.FC<DetailInfoProps> = ({
  beerName,
  volume,
  category,
  country,
  beerImg,
}) => {
  const [didPassStar, setDidPassStar] = useState(false);
  const [rate, setRate] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const iconProps = {
    w: "40px",
    h: "40px",
    cursor: "pointer",
  };
  const id = "test-toast";
  const toastTitle = isLiked
    ? "좋아요한 맥주에서 삭제했어요!"
    : "좋아요한 맥주에 추가했어요!";

  const toast = useToast({
    position: "bottom",
    title: toastTitle,
    id: id,
    isClosable: true,
    duration: 3000,
    containerStyle: {
      margin: "8px",
      maxWidth: "90%",
    },
    render: () => (
      <Box
        mx="12px"
        py="8px"
        color="white"
        bg="blue.500"
        backgroundColor="black.200"
        borderRadius="5px"
      >
        <Text textStyle={"h3"} textColor="white" textAlign={"center"}>
          {toastTitle}
        </Text>
      </Box>
    ),
  });

  const handleClickLike = (state: boolean) => {
    setIsLiked(state);
    toast();
  };

  return (
    <>
      {/* title */}
      {didPassStar ? (
        <LeftBackBeerNameRightHeart beerName={beerName} />
      ) : (
        <LeftBackTitle />
      )}
      {/* image  */}
      <Center pt="72px" w="full">
        <Image
          boxSize="320px"
          src={beerImg}
          fallbackSrc="https://via.placeholder.com/150"
          alt={`${beerName} image`}
          borderRadius="6px"
        />
      </Center>

      <VStack px="24px" py="20px" w="full" alignItems="flex-start" gap="20px">
        {/* panel */}
        <HStack w="full" justifyContent="space-between">
          <Text textStyle="h1">{beerName}</Text>
          <HStack gap="20px">
            {/* like button */}
            <OrangeLikeButton
              isClicked={isLiked}
              onClick={handleClickLike}
              iconProps={iconProps}
            />
            <Box />
          </HStack>
        </HStack>
        {/* description */}
        <HStack>
          <Text textStyle="h2">
            {volume} | {category} | {country}
          </Text>
        </HStack>
        <Center w="full">
          <Rating
            rate={rate}
            styleProps={{
              gap: "20px",
            }}
          />
        </Center>
      </VStack>
    </>
  );
};
