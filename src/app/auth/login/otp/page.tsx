"use client";
import { authActions } from "@/store/reducers/authentcationSlice";
import { RootState, useAppDispatch } from "@/store/rootReducer";
import { Button, Form, Input, message } from "antd";
import { signIn } from "next-auth/react";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function RegisterOTP() {
  const t = useTranslations();
  const router = useRouter();
  const [loginForm] = Form.useForm();
  const dispatch = useAppDispatch();

  const { loginEmail }: any = useSelector((state: RootState) => state.auth);
  async function login(values: any) {
    const res = await signIn("credentials", {
      otp: values.otp,
      email: loginEmail,
    });
  }

  useEffect(() => {
    if (!loginEmail) {
      message.error("RequestOTPFirst");
      router.push("../login");
    }
  }, []);

  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="font-[Tajawal] text-[24px] font-bold leading-[52px] text-[#000000]">
          {t("enterOTP")}
        </h1>
      </div>
      <div className="flex justify-between items-center mb-5">
        <h1 className="font-[Tajawal] text-[16px]   text-[rgba(98,_99,_108,_1)] w-[248px]">
          {t("otpSentToEmail")}
        </h1>
      </div>

      <div>
        <Form
          name="validateOnly"
          form={loginForm}
          autoComplete="off"
          layout="vertical"
          onFinish={login}
        >
          <Form.Item
            className=" w-full flex items-center justify-center"
            name="otp"
            label={<p className="mb-2 text-[16px]">{t("enterOTP")}</p>}
          >
            <Input.OTP className="h-[74px]" length={5} size="large" />
          </Form.Item>
          <Form.Item className="mt-8">
            <Button
              type="primary"
              htmlType="submit"
              className="w-full h-[56px] px-[20px] py-[10px] rounded-[12px]"
            >
              {t("login")}
            </Button>
          </Form.Item>
          <Button className="w-full h-[56px] font-bold px-[20px] py-[10px] rounded-[12px]">
            {t("resendOTP")}
          </Button>
        </Form>
      </div>
    </div>
  );
}
