import { Account, NextAuthOptions, Profile, Session, User } from "next-auth";
import CredentialsProvider, {
  CredentialInput,
} from "next-auth/providers/credentials";
import axios from "axios";
import { JWT } from "next-auth/jwt";
import { AdapterUser } from "next-auth/adapters";
import Google from "next-auth/providers/google";
import { handelErrors, setAuthorizationToken } from "../../api";
import { StatusSuccessCodes } from "@/utils/successStatus";

export const options: NextAuthOptions = {
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
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
          .catch((err) => {
            throw err;
          });

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
      if (params?.account?.provider === "google") {
        let body = {
          access_token: params?.account?.access_token,
          email: params?.profile?.email,
          id_token: params?.account?.id_token,
        };
        console.log(params);
        const res: any = await axios
          .post(`${process.env.NEXT_PUBLIC_BASE_URL}auth/google/`, body)
          .catch((err) => {
            throw err;
          });
        if (StatusSuccessCodes.includes(res.status)) {
          console.log("response db fdb", res?.data);
          setAuthorizationToken(res?.data?.access);
          const user = res?.data?.user;
          const accessToken = res?.data?.access;
          if (user && accessToken) {
            params.account.accessToken = accessToken;
            // user.token =accessToken;
            params.account.id = res.data.user.id;
            return { ...user };
          } else {
            return null;
          }
        } else {
          return handelErrors(res);
        }
      }
      return false;
    },
    async redirect(props) {
      if (props.url.startsWith("/")) return `${props.baseUrl}${props.url}`;
      // Allows callback URLs on the same origin
      else if (new URL(props.url).origin === props.baseUrl) return props.url;
      return props.baseUrl;
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
