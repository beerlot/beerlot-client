import {VStack} from "@chakra-ui/react";
import React from "react";
import {useRecoilState} from "recoil";
import {userInfoState} from "../../store/atom";
import EditProfileButton from "./EditProfileButton";
import InfoContainer from "./InfoContainer";
import MessageContainer from "./MessageContainer";

const Profile = () => {
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);

  // TODO: error handling should be added
  if (userInfo === null) {
    throw new Error("this shouldn't happen");
  }

  const {
    image_url = `/image/default-profile.png`,
    username,
    statusMessage = "",
  } = userInfo;

  return (
    <VStack pt={0} px="20px" pb="10px">
      <InfoContainer imageSrc={image_url} />
      <MessageContainer nickName={username} bio={statusMessage} />
      <EditProfileButton />
    </VStack>
  );
};

export default Profile;
