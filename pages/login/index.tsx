import {Box, Button, Container} from "@chakra-ui/react";
import {signIn, signOut, useSession} from "next-auth/react";
import {LoginTemplate} from "../../src/components/auth/login/LoginTemplate";

const Login = () => {
  const {data: session} = useSession();
  if (session) {
    return (
      <Box pt="200px">
        <div>session exists {session.user?.email}</div>
        <Button onClick={() => signOut()}>log out{session.user?.email}</Button>
      </Box>
    );
  }

  return (
    <Box w="full" h="full" bg="gray.100">
      <Container
        p={"0px"}
        h="full"
        w="full"
        bg="white"
        position="relative"
        maxW="450px"
      >
        <Button mt={"40x"} onClick={() => signIn()}>
          google login
        </Button>
        <LoginTemplate />
      </Container>
    </Box>
  );
};

export default Login;
