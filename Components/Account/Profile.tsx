import { VStack } from "@chakra-ui/react";
import React from "react";
import EditProfileButton from "./EditProfileButton";
import InfoContainer from "./InfoContainer";
import MessageContainer from "./MessageContainer";

const Profile = () => {
  const imageSrc = "https://picsum.photos/seed/picsum/200/300";
  return (
    <VStack pt={0} px="20px" pb="10px">
      <InfoContainer imageSrc={imageSrc} />
      <MessageContainer />
      <EditProfileButton />
    </VStack>
  );
};

export default Profile;
