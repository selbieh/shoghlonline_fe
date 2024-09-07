import { Account, NextAuthOptions, Profile, Session, User } from "next-auth";
import Github from "next-auth/providers/github";
import CredentialsProvider, {
  CredentialInput,
} from "next-auth/providers/credentials";
import axios from "axios";
import { JWT } from "next-auth/jwt";
import { AdapterUser } from "next-auth/adapters";

export const options: NextAuthOptions = {
  providers: [
    Github({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        otp: { label: "OTP", type: "text" },
      },
      async authorize(credentials, req) {
        const res: any = await axios
          .post(`${process.env.NEXT_PUBLIC_BASE_URL}auth/login/`, credentials)
          .catch((err) => console.log(err));

        const user = await res?.data;
        if (user) {
          return { ...user, token: res?.data?.access };
        } else {
          throw Error(res[0]?.detail);
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, trigger, account, profile, session }) {
      if (account?.accessToken) {
        token.token = account.accessToken;
        user.id = account.id as string;
      }
      if (trigger === "update") {
        return { ...token, ...session };
      }

      return { ...token, ...user };
    },
    async session(
      params: {
        session: Session;
        token: JWT;
        user: AdapterUser;
      } & {
        newSession: any;
        trigger: "update";
      }
    ) {
      return { ...params?.session, ...params?.token, language: "ar" };
    },
    async signIn(params: {
      user: any;
      account: Account | null;
      profile?: Profile | undefined;
      email?: {
        verificationRequest?: boolean;
      };
      credentials?: Record<string, CredentialInput>;
    }) {
      if (params?.account?.provider === "credentials") {
        return params?.user;
      }
      return false;
    },
    async redirect(props) {
      if (props.url.split("/").includes("auth")) {
        return "/clientOrFreelance";
      } else {
        return "/";
      }
    },
  },
  session: {
    // Set the maximum session duration (default is 30 days)
    // Here, maxAge is set to 30 days in seconds
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  pages: {
    signIn: "/auth/login",
    // signOut: "/home",
  },

  secret: process.env.NEXTAUTH_SECRET,
};
