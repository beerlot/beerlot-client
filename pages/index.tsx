import { Box, Center } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import HomeComponent from "../Components/Home/Home";

const Home: NextPage = () => {
  return (
    <>
      <Box
        h="full"
        bg="Gray.100"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Head>
          <title>Beerlot</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <HomeComponent />
      </Box>
    </>
  );
};

export default Home;
