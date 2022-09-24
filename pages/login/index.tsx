import { Box, Center } from "@chakra-ui/react";
import ContinueButton from "../../Components/Auth/Continue";
import SocialButton from "../../Components/Auth/SocialButton";
import Title from "../../Components/Auth/Title";
import { X } from "../../public/svg";

const LoginTemplate = () => {
  return (
    <>
      <Title />
      <Center h="calc(100vh)" gap="10px" flexDirection="column" px="20px">
        <SocialButton />
        <ContinueButton />
      </Center>
    </>
  );
};

export default LoginTemplate;
