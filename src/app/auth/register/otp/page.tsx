"use client";
import { Button, Divider, Form, Input } from "antd";
import OTP from "antd/es/input/OTP";
import { PhoneNumberUtil } from "google-libphonenumber";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React, { useState } from "react";
import { PhoneInput } from "react-international-phone";

export default function RegisterOTP() {
  const t = useTranslations();
  const phoneUtil = PhoneNumberUtil.getInstance();
  const [phone, setPhone] = useState("");
  const [registerForm] = Form.useForm();

  function registerFormFinish(values: any) {
    console.log(values);
  }

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
          form={registerForm}
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
