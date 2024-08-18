"use client";
import { Button, Divider, Form, Input } from "antd";
import { PhoneNumberUtil } from "google-libphonenumber";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React, { useState } from "react";
import { PhoneInput } from "react-international-phone";

export default function Register() {
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
          {t("createAccount")}
        </h1>
        <div>
          <p className="font-[Tajawal] text-[13px] font-normal leading-[15.6px] text-[#8D8D8D] ">
            {t("haveAccount")}
          </p>
          <a
            className="font-[Tajawal] text-[13px] font-normal leading-[15.6px] text-[#0089ED]"
            href="./login"
          >
            {t("login")}
          </a>
        </div>
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
          form={registerForm}
          autoComplete="off"
          layout="vertical"
          onFinish={registerFormFinish}
        >
          <Form.Item
            name="mobile"
            label={t("mobile")}
            rules={[
              {
                required: true,
                message: t("MobileValidationRequired"),
              },
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
            <PhoneInput
              style={{ direction: "ltr", width: "100%" }}
              defaultCountry="eg"
              placeholder="Mobile"
              className="h-[56px]"
              value={phone}
              onChange={(phone) => {
                setPhone(phone);
              }}
              forceDialCode={true}
              inputStyle={{
                height: "56px",
                fontSize: "14px",
                borderRadius: "12px",
                padding: "10px",
                border: "1px solid #E7E8EC",
                width: "100%",
              }}
              countrySelectorStyleProps={{
                style: {
                  height: "56px",
                  padding: "10px",
                  borderRadius: "12px",
                  border: "1px solid #E7E8EC",
                  marginRight: "5px",
                },
                buttonStyle: { height: "40px", border: "none" },
              }}
            />
          </Form.Item>
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
          </Form.Item>{" "}
          <div className=" flex flex-row justify-between gap-2">
            <Form.Item
              className="w-full"
              name="first_name"
              label={t("firstName")}
              rules={
                [
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
                ]
              }
            >
              <Input
                type="text"
                className="h-[56px] w-full"
                id="firstName"
                placeholder={t("firstName")}
              />
            </Form.Item>
            <Form.Item
              name="last_name"
              label={t("lastName")}
              className="w-full"
              rules={
                [
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
                ]
              }
            >
              <Input
                type="text"
                className="h-[56px]"
                id="lastName"
                placeholder={t("lastName")}
              />
            </Form.Item>
          </div>
          <Form.Item className="mt-8">
            <Button
              type="primary"
              htmlType="submit"
              className="w-full h-[56px] px-[20px] py-[10px] rounded-[12px]"
            >
              {t("next")}
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}