"use client";
import { useTranslations } from "next-intl";
import React from "react";
import Image from "next/image";
import { Button, Cascader, Divider, Form } from "antd";
import { servicesOptions } from "@/utils/dummyData/dummydata";
import { CiCircleRemove } from "react-icons/ci";

export default function ServicesPage() {
  const t = useTranslations();
  const [servicesForm] = Form.useForm();

  function submitServicesForm(values: any) {
    console.log(values);
  }

  function skip() {}
  return (
    <div className="h-fit  flex flex-col px-[50px] m-10">
      <div className="  font-bold text-[24px] ">
        {t("whatServicesDoYouProvide")}
      </div>
      <Form
        form={servicesForm}
        layout="vertical"
        className="py-5 flex flex-col gap-5"
        onFinish={submitServicesForm}
      >
        <Form.Item
          name="services"
          label={t("services")}
          className="w-full max-w-[750px] h-[200px]"
          rules={[{ type: "array" }]}
        >
          <Cascader
            placeholder={t("choseServices")}
            multiple
            removeIcon={<CiCircleRemove size={25} />}
            className="min-h-[56px]"
            id="chooseService"
            allowClear
            options={servicesOptions}
            expandTrigger="hover"
            showCheckedStrategy={Cascader.SHOW_CHILD}
          />
        </Form.Item>
        <Divider style={{ backgroundColor: "#7179ce", height: "1px" }} />
        <div className="flex flex-row justify-between w-full">
          <div className="flex flex-row gap-5 w-full">
            <Button
              htmlType="submit"
              type="primary"
              className="w-full max-w-[251px] h-[56px] rounded-[12px] px-[20px] py-[10px]"
            >
              {t("next")}
            </Button>
            <Button
              className="w-full max-w-[251px] h-[56px] rounded-[12px] px-[20px] py-[10px]"
              onClick={skip}
            >
              {t("skip")}
            </Button>
          </div>
          <div className="flex flex-col h-[50px] justify-between">
            <div className=" text-[16px]">{t("profileReady")}</div>
            <Image src="/icons/steps.svg" alt="steps" width={250} height={5} />
          </div>
        </div>
      </Form>
    </div>
  );
}
