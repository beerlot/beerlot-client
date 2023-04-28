import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: "749cf0298aa1d5b8c08d",
      clientSecret: "56ff3152c630e9e34192b929bb265c2c96500dd6",
    }),
  ],
  secret: "beerlot123",
};

export default NextAuth(authOptions);
