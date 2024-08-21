"use client";
import { postAuthRequest, postRequest } from "@/app/api/api";
import { authActions } from "@/store/reducers/authentcationSlice";
import { RootState, useAppDispatch } from "@/store/rootReducer";
import { StatusSuccessCodes } from "@/utils/successStatus";
import { Button, Divider, Form, Input, message } from "antd";
import OTP from "antd/es/input/OTP";
import { PhoneNumberUtil } from "google-libphonenumber";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { PhoneInput } from "react-international-phone";
import { useSelector } from "react-redux";

export default function RegisterOTP() {
  const t = useTranslations();
  const [otpForm] = Form.useForm();
  const { registerEmail }: any = useSelector((state: RootState) => state.auth);
  const dispatch = useAppDispatch();
  const router = useRouter();

  function registerFormFinish(values: any) {
    postAuthRequest("api/v1/client/verify-otp/", {
      email: registerEmail,
      otp: values?.otp,
    }).then((res: any) => {
      if (StatusSuccessCodes.includes(res.status)) {
        console.log(res);
        message.success(`${res?.data?.detail}`);
        router.push("../../auth/login");
      } else {
        console.log(res);
        message.error(`${res.detail}`);
      }
    });
  }

  useEffect(() => {
    if (!registerEmail) {
      message.error("RequestOTPFirst");
      router.push("../register");
    }
  }, []);

  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className=" text-[24px] font-bold leading-[52px] text-[#000000]">
          {t("enterOTP")}
        </h1>
      </div>
      <div className="flex justify-between items-center mb-5">
        <h1 className=" text-[16px]   text-[rgba(98,_99,_108,_1)] w-[248px]">
          {t("otpSentToEmail")}
        </h1>
      </div>

      <div>
        <Form
          name="validateOnly"
          form={otpForm}
          autoComplete="off"
          layout="vertical"
          onFinish={registerFormFinish}
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
              {t("finish")}
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
