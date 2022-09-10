import { Avatar, Box, Button, Text } from "@chakra-ui/react";
import React from "react";
const FollowingTabPanel = () => {
  const property = {
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    baths: 2,
    title: "Modern home in city center in the heart of historic Los Angeles",
    formattedPrice: "$1,900.00",
    reviewCount: 34,
    rating: 4,
  };

  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Box p="6">
        <Box display={"flex"} flexDirection="row">
          <Avatar />
          <Text>name </Text>
          <Text>|</Text>
          <Text>2시간 전</Text>
        </Box>
        <Box>
          <Text>버드와이저</Text>
        </Box>

        <Box>
          <Text>5점</Text>
        </Box>
        {/* <Image src={property.imageUrl} alt={property.imageAlt} /> */}

        <Box display="flex" alignItems="baseline">
          <Text>
            여윽시 내 최애 맥주.. 다시 미국 가고싶다ㅠㅠ 미국에서 먹었던 그
            느낌을 다시 느끼고 싶을 때면 꼭 버드와이저를 찾게 되더라구요. 그리고
            뭐니뭐니해도 버드와이저에는 감자칩이죠! 레이스랑 한 잔 하고 잡니다
            :) 모두들 굿나잇!
          </Text>
        </Box>
        <Box>
          <Button>thumbs up</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default FollowingTabPanel;
