import {Box, Container} from "@chakra-ui/react";
import {LoginTemplate} from "../../src/components/auth/login/LoginTemplate";
import {getSession} from "next-auth/react";
import {GetServerSideProps} from "next";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);
  const cookies = context.req.headers.cookie;
  console.log({session});
  console.log({cookies});

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      user: session.user,
    },
  };
};

const index = () => {
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
        <LoginTemplate />
      </Container>
    </Box>
  );
};

export default index;
