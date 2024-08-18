import axios, { AxiosRequestConfig } from "axios";
import { getSession, signOut } from "next-auth/react";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

export async function setAuthorizationToken(token?: string) {
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    return;
  } else {
    const session: any = await getSession();

    const userToken = session?.token;
    if (userToken) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${userToken}`;
    } else {
      axios.defaults.headers.common["Authorization"] = null;
    }
  }
}

export async function postRequest(
  path: string,
  body: any,
  config?: AxiosRequestConfig
) {
  await setAuthorizationToken();
  const res = axios
    .create({ baseURL })
    .post(path, body, config)
    .catch(handelErrors);
  return res;
}

export function handelErrors(err: any) {
  if (err.response?.status == 404) {
    //window.location.href = "/404";
  } else if (
    err.response?.data?.errors[0]?.code === "token_not_valid" ||
    err.response?.data?.errors[0]?.code === "not_authenticated"
  ) {
    // message.error("sorry your are not allowed");
    signOut({ callbackUrl: "/auth/login" });
  }
  return err?.response?.data;
}
