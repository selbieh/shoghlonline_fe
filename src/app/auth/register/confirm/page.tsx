"use client";
import { Avatar, Button, Divider, Form, Input } from "antd";
import { PhoneNumberUtil } from "google-libphonenumber";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React, { useState } from "react";
import { PhoneInput } from "react-international-phone";

export default function ConfirmPage() {
  const t = useTranslations();
  const phoneUtil = PhoneNumberUtil.getInstance();
  const [phone, setPhone] = useState("");
  const [registerForm] = Form.useForm();

  function registerFormFinish(values: any) {
    console.log(values);
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-5">
        <h1 className=" text-[24px] font-bold leading-[52px] text-[#000000]">
          {t("createAccount")}
        </h1>
      </div>
      <div className="mb-5">
        <Avatar size="default">U</Avatar>
        <span className="p-2">email@gmail.com</span>
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
              disabled
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
              {t("finish")}
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
