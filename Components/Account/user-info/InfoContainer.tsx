import { HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import ProfileAvatar from "../../Utils/ProfileAvatar";

interface InfoContainerProps {
  imageSrc: string;
}

const InfoContainer: React.FC<InfoContainerProps> = ({ imageSrc }) => {
  return (
    <HStack
      w="100%"
      align="stretch"
      alignItems="center"
      textStyle="h2"
      justifyContent="space-between"
      gap="30px"
    >
      <ProfileAvatar alt="user profile photo" src={imageSrc} boxSize="76px" />
      <VStack>
        <Text>10</Text>
        <Text>리뷰</Text>
      </VStack>
      <VStack>
        <Text>25</Text>
        <Text>팔로워</Text>
      </VStack>
      <VStack>
        <Text>72</Text>
        <Text>팔로잉</Text>
      </VStack>
    </HStack>
  );
};

export default InfoContainer;