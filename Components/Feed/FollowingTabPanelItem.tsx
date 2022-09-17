import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import StarRating from "../Utils/StarRating";
import ThumbsUpButton from "../Utils/ThumbsUpButton";

interface FollowingTabPanelItemProps {
  nickname: string;
  postingTime: string;
  beerName: string;
  ratingNumber: number;
  imageSrc: string;
  postText: string;
  thumbsUpNumber: number;
}

const FollowingTabPanelItem: React.FC<FollowingTabPanelItemProps> = ({
  nickname,
  postingTime,
  beerName,
  ratingNumber,
  imageSrc,
  postText,
  thumbsUpNumber,
}) => {
  return (
    <Box p={"12px"} bg="white">
      <Box
        gap={"4px"}
        display={"flex"}
        flexDirection="row"
        alignItems="end"
        my={"2px"}
      >
        <Avatar w={"26px"} h={"26px"} />
        <Text textStyle="h2_bold">{nickname}</Text>
        <Text textStyle="h3" color="Gray.200">
          |
        </Text>
        <Text textStyle="h3" color="Gray.200">
          {postingTime}
        </Text>
      </Box>
      <Box my={"2px"}>
        <Text textStyle="h3_bold">{beerName}</Text>
      </Box>
      <Box my={"2px"}>
        <StarRating />
        <Text>{ratingNumber}점</Text>
      </Box>
      {/* <Image width={330} height={330} alt="beer photo" src={imageSrc} /> */}
      <Box display="flex" alignItems="baseline" my={"2px"}>
        <Text textStyle="h3">{postText}</Text>
      </Box>
      <Flex justifyContent="end">
        <ThumbsUpButton thumbsUpNumber={thumbsUpNumber} />
      </Flex>
    </Box>
  );
};

export default FollowingTabPanelItem;
