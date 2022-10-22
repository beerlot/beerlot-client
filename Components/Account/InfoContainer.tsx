import { HStack } from "@chakra-ui/react";
import React from "react";
import ProfileAvatar from "../Utils/ProfileAvatar";

interface InfoContainerProps {
  imageSrc: string;
}

const InfoContainer: React.FC<InfoContainerProps> = ({ imageSrc }) => {
  return (
    <HStack>
      <ProfileAvatar alt="user profile photo" src={imageSrc} boxSize="76px" />
    </HStack>
  );
};

export default InfoContainer;
