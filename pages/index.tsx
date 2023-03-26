import type {GetServerSideProps, NextPage} from "next";
import Head from "next/head";
import HomeTemplate from "../src/components/home/HomeTemplate";
import {getSession} from "next-auth/react";

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const session = await getSession(context);
//   const cookies = context.req.headers.cookie;
//   console.log("session from index", {session});
//   console.log("cookie from index", {cookies});

//   if (!session) {
//     return {
//       redirect: {
//         destination: "/login",
//         permanent: false,
//       },
//       props: {},
//     };
//   }

//   return {
//     props: {
//       user: session,
//     },
//   };
// };

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Beerlot</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeTemplate />
    </>
  );
};

export default Home;
