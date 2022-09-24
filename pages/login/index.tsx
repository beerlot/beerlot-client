import { Center } from "@chakra-ui/react";
import ContinueButton from "../../Components/Auth/Continue";
import SocialButton from "../../Components/Auth/SocialButton";

const LoginTemplate = () => {
  return (
    <Center h="calc(100vh)" gap="10px" flexDirection="column" px="20px">
      <SocialButton />
      <ContinueButton />
    </Center>
  );
};

export default LoginTemplate;
