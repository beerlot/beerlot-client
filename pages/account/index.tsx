import {Box, Container} from "@chakra-ui/react";
import {GetServerSideProps} from "next";
import {useEffect} from "react";
import {getMyAccountApi} from "../../src/api/auth/api";
import AccountsTemplate from "../../src/components/account/AccountsTemplate";
import {getServerSession} from "next-auth";
import {authOptions} from "../api/auth/[...nextauth]";
import {COOKIE_NAME} from "@/../interface/static";

const AccountPage = () => {
  useEffect(() => {
    getMyAccountApi();
  }, []);

  return (
    <Box w="full" h="full" overflowY={"scroll"} bg="gray.100">
      <Container p={"0px"} w="full" bg="white" position="relative" maxW="450px">
        <AccountsTemplate />
      </Container>
    </Box>
  );
};

export default AccountPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const cookies = context.req.headers.cookie;

  if (!cookies || !cookies.includes(COOKIE_NAME)) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
};
