import {GetServerSideProps} from "next";
import {getSession} from "next-auth/react";
import React from "react";
import SignUpTemplate from "../../src/components/auth/sign-up/SignUpTemplate";
import {COOKIE_NAME} from "@/../interface/static";

const index = () => {
  return <SignUpTemplate />;
};

export default index;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);
  const cookies = context.req.headers.cookie;

  if (cookies && cookies.includes(COOKIE_NAME)) {
    return {
      redirect: {
        destination: "/account",
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
};
