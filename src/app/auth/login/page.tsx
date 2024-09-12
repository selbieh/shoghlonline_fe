"use client";
import { postAuthRequest, postRequest } from "@/app/api/api";
import { authActions } from "@/store/reducers/authentcationSlice";
import { RootState, useAppDispatch } from "@/store/rootReducer";
import { StatusSuccessCodes } from "@/utils/successStatus";
import { Button, Divider, Form, Input, message } from "antd";
import { signIn, signOut } from "next-auth/react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { redirect, useRouter } from "next/navigation";
import { useState } from "react";
import { useSelector } from "react-redux";

const Login = () => {
  const t = useTranslations();
  const [requestOTPForm] = Form.useForm();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [sendOtpLoading, setSendOtpLoading] = useState<boolean>(false);

  async function requestOTP(values: { email: string }) {
    dispatch(authActions.setLoginEmail(values?.email));
    setSendOtpLoading(true);
    postAuthRequest("auth/request-otp/", values).then((res) => {
      setSendOtpLoading(false);
      if (StatusSuccessCodes.includes(res?.status)) {
        message.success(`${res?.data?.detail}`);
        router.push("./login/otp");
      } else {
        message.error(`${res.detail}`);
      }
    });
  }
  async function googleSignIn() {
    const res = await signIn("google", {
      redirect: false,
      callbackUrl: "/clientOrFreelance",
    });
  }

  return (
    <div>
      {/* <Button
        type="primary"
        onClick={() => {
          signOut();
        }}
        className="w-full h-[56px] px-[20px] py-[10px] rounded-[12px]"
      >
        TEST LOG OUT
      </Button> */}
      <div className="flex justify-between items-center">
        <h1 className=" text-[24px] font-bold leading-[52px] text-[#000000]">
          {t("login")}
        </h1>
        <div>
          <p className=" text-[13px] font-normal leading-[15.6px] text-[#8D8D8D] ">
            {t("dontHaveAccount")}
          </p>
          <a
            className=" text-[13px] font-normal leading-[15.6px] text-[#0089ED]"
            href="./register"
          >
            {t("register")}
          </a>
        </div>
      </div>
      <div className="flex gap-4 w-full justify-between items-center py-8">
        <div
          className="w-[434px] flex justify-center items-center bg-[#E9F1FF] rounded-[10px] h-[55px] cursor-pointer"
          onClick={googleSignIn}
        >
          <Image src="/images/google.svg" alt="google" width={26} height={26} />
          <span className="px-4  text-[16px] font-normal leading-[19.2px] text-[#4285F4]">
            {t("loginWithGoogle")}
          </span>
        </div>
        <div className="flex justify-center">
          <div className="w-[60px] h-[55px] bg-[#F6F6F6] rounded-[10px] flex justify-center items-center cursor-pointer">
            <Image
              src="/images/facebook.svg"
              alt="facebook"
              width={29}
              height={29}
            />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-[60px] h-[55px] bg-[#F6F6F6] rounded-[10px] flex justify-center items-center cursor-pointer">
            <Image src="/images/apple.svg" alt="apple" width={29} height={29} />
          </div>
        </div>
      </div>

      <Divider>
        <span className=" text-[14px] font-normal leading-[24px] tracking-[0.5px]">
          {t("orByEmail")}
        </span>
      </Divider>
      <div>
        <Form
          name="validateOnly"
          form={requestOTPForm}
          autoComplete="off"
          layout="vertical"
          onFinish={requestOTP}
        >
          <Form.Item
            name="email"
            label={t("email")}
            // validateTrigger="onBlur"
            rules={[
              {
                required: true,
                message: t("EmailValidationRequired"),
              },
              { type: "email", message: t("EmailValidationInvalid") },
            ]}
          >
            <Input
              type="text"
              className="h-[56px]"
              id="email"
              placeholder={t("Please Enter Your Email")}
            />
          </Form.Item>

          <Form.Item className="mt-8">
            <Button
              type="primary"
              htmlType="submit"
              className="w-full h-[56px] px-[20px] py-[10px] rounded-[12px]"
              loading={sendOtpLoading}
            >
              {t("sendOTP")}
            </Button>
          </Form.Item>
        </Form>
        <Button
          onClick={() => {
            router.push("./register");
          }}
          className="w-full h-[56px] px-[20px] py-[10px] rounded-[12px]"
        >
          {t("createAccount")}
        </Button>
      </div>
    </div>
  );
};

export default Login;
