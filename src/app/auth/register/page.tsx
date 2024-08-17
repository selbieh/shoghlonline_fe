"use client";
import { Button, Divider, Form, Input } from "antd";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

export default function Register() {
  const t = useTranslations();

  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="font-[Tajawal] text-[24px] font-bold leading-[52px] text-[#000000]">
          {t("createAccount")}
        </h1>
      </div>
      <div className="flex gap-4 w-full justify-between items-center py-8">
        <div className="w-[434px] flex justify-center items-center bg-[#E9F1FF] rounded-[10px] h-[55px] cursor-pointer">
          <Image src="/images/google.svg" alt="google" width={26} height={26} />
          <span className="px-4 font-[Tajawal] text-[16px] font-normal leading-[19.2px] text-[#4285F4]">
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
        <span className="font-[Tajawal] text-[14px] font-normal leading-[24px] tracking-[0.5px]">
          {t("orByEmail")}
        </span>
      </Divider>
      <div>
        <Form
          name="validateOnly"
          //   form={form}
          autoComplete="off"
          layout="vertical"
          //   onFinish={credentialsLogin}
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
              { type: "email" },
              // {
              //   validator(_, value) {
              //     const parsedPhoneNumber =
              //       phoneUtil.parseAndKeepRawInput(value);
              //     if (phoneUtil.isValidNumber(parsedPhoneNumber)) {
              //       return Promise.resolve();
              //     } else {
              //       return Promise.reject(new Error("Phone is not valid!"));
              //     }
              //   },
              // },
            ]}
          >
            <Input
              type="text"
              className="h-[56px]"
              id="email"
              placeholder={t("Please Enter Your Email")}
            />
          </Form.Item>
          <Form.Item
            name="password"
            label={t("password")}
            rules={[
              { required: true, message: t("passwordValidation") },
              // {
              //   validator(_, value) {
              //     if (
              //       /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[-_[@$#}{+=!%*?&])[A-Za-z\d@$-_[}+={#!%*?&]{8,}$/.test(
              //         value
              //       )
              //     ) {
              //       return Promise.resolve();
              //     } else {
              //       return Promise.reject(
              //         new Error(
              //           "min 8 characters, at least one UPPERCASE letter, one lowercase letter, one number and one special character"
              //         )
              //       );
              //     }
              //   },
              // },
            ]}
          >
            <Input.Password
              className="h-[56px]"
              id="password"
              placeholder={t("Please Enter A New Password")}
            />
          </Form.Item>
          <a className="text-[#4285F4] font-[Tajawal] text-[14px] font-normal leading-[24px] tracking-[0.5px] py-2 my-2">
            {t("forgotPassword")}
          </a>
          <Form.Item className="mt-8">
            <Button
              type="primary"
              htmlType="submit"
              className="w-full h-[56px] px-[20px] py-[10px] rounded-[12px]"
            >
              {t("login")}
            </Button>
          </Form.Item>
        </Form>
        <Button className="w-full h-[56px] px-[20px] py-[10px] rounded-[12px]">
          {t("createAccount")}
        </Button>
      </div>
    </div>
  );
}
