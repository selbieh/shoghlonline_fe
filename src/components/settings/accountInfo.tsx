"use client";
import { PatchReq } from "@/app/api/api";
import { StatusSuccessCodes } from "@/utils/successStatus";
import { Button, Divider, Form, Input, message, Spin } from "antd";
import { useSession } from "next-auth/react";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

const AccountInfo = ({ user }: any) => {
  const t = useTranslations();
  const [form] = Form.useForm();
  const { data }: { data: any } = useSession<any>();
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    fillForm();
  }, []);
  const fillForm = (values?: any) => {
    form.setFieldsValue({
      first_name: values ? values.first_name : user?.first_name,
      last_name: values ? values?.last_name : user?.last_name,
      email: values ? values?.email : user?.email,
    });
  };
  const onFinish = (values: any) => {
    console.log("values", values);
    setLoading(true);
    PatchReq(`api/v1/client/profile/${data.user_id}/`, values).then((res) => {
      if (StatusSuccessCodes.includes(res?.status)) {
        setLoading(false);
        fillForm(res.data);
        message.success(t("updatedSuccessfully"));
      } else {
        message.error(`${res?.detail}`);
      }
    });
  };
  console.log("user", user);
  return (
    <div>
      <h3 className="text-[20px] font-medium leading-[34.29px]">
        {t("accountInfo")}
      </h3>
      {isLoading ? (
        <div className="flex justify-center items-center w-full h-full py-7">
          <Spin />
        </div>
      ) : (
        <div className="w-full py-8">
          <Form
            form={form}
            name="form"
            onFinish={onFinish}
            autoComplete="off"
            layout="vertical"
          >
            <div className="flex gap-5 w-full">
              <Form.Item
                label={
                  <span className="text-[14px] font-medium leading-[24px] tracking-[0.5px] text-[#20102B]">
                    {t("firstName")}
                  </span>
                }
                name="first_name"
                rules={[{ required: true, message: t("firstNameRequired") }]}
                className="w-1/2"
              >
                <Input />
              </Form.Item>
              <Form.Item
                className="w-1/2"
                label={
                  <span className="text-[14px] font-medium leading-[24px] tracking-[0.5px] text-[#20102B]">
                    {t("lastName")}
                  </span>
                }
                name="last_name"
                rules={[{ required: true, message: t("lastNameRequired") }]}
              >
                <Input />
              </Form.Item>
            </div>
            <Divider />
            <Form.Item
              className="w-1/2"
              label={
                <span className="text-[14px] font-medium leading-[24px] tracking-[0.5px] text-[#20102B]">
                  {t("email")}
                </span>
              }
              name="email"
              rules={[
                { required: true, message: t("emailRequired") },
                { type: "email", message: t("EmailValidationInvalid") },
              ]}
            >
              <Input type="email" />
            </Form.Item>
            <Divider />
            <div className="py-5">
              <h3 className="text-[14px] font-bold leading-[24px] tracking-[0.5px] py-3">
                {t("deActiveAccount")}
              </h3>
              <p className="text-[14px] font-normal leading-[24px] tracking-[0.5px] py-3 w-[400px]">
                {t("deActiveAccountText")}
              </p>
              <Button className="h-[34px] text-red-600 text-[12px] font-bold leading-[18px] my-3">
                {t("deActiveAccount")}
              </Button>
            </div>
            <Form.Item className="flex justify-end">
              <Button type="primary" htmlType="submit" className="h-[34px]">
                {t("save")}
              </Button>
            </Form.Item>
          </Form>
        </div>
      )}
    </div>
  );
};

export default AccountInfo;
