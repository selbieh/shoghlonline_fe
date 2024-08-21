"use client";
import { postRequest } from "@/app/api/api";
import { authActions } from "@/store/reducers/authentcationSlice";
import { RootState, useAppDispatch } from "@/store/rootReducer";
import { StatusSuccessCodes } from "@/utils/successStatus";
import { Button, Divider, Form, Input, message } from "antd";
import { signOut } from "next-auth/react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

const Login = () => {
  const t = useTranslations();
  const [requestOTPForm] = Form.useForm();
  const router = useRouter();
  const dispatch = useAppDispatch();

  async function requestOTP(values: { email: string }) {
    dispatch(authActions.setLoginEmail(values?.email));
    postRequest("auth/request-otp/", values).then((res) => {
      if (StatusSuccessCodes.includes(res?.status)) {
        message.success(`${res?.data?.detail}`);
        router.push("./login/otp");
      } else {
        message.error(`${res.detail}`);
      }
    });
  }

  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          signOut();
        }}
        className="w-full h-[56px] px-[20px] py-[10px] rounded-[12px]"
      >
        TEST LOG OUT
      </Button>
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
        <div className="w-[434px] flex justify-center items-center bg-[#E9F1FF] rounded-[10px] h-[55px] cursor-pointer">
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
          {/* <Form.Item
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
          </Form.Item> */}
          {/* <a className="text-[#4285F4]  text-[14px] font-normal leading-[24px] tracking-[0.5px] py-2 my-2">
            {t("forgotPassword")}
          </a> */}
          <Form.Item className="mt-8">
            <Button
              type="primary"
              htmlType="submit"
              className="w-full h-[56px] px-[20px] py-[10px] rounded-[12px]"
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
