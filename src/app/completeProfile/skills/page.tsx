"use client";
import { useTranslations } from "next-intl";
import React from "react";
import Image from "next/image";
import { Button, ConfigProvider, Divider, Form, Input, Select } from "antd";
import { skillsOptions } from "@/utils/dummyData/dummydata";
import { CiCircleRemove } from "react-icons/ci";

export default function SkillsPage() {
  const t = useTranslations();
  const [workAndSkillsForm] = Form.useForm();

  function submitSkillsForm(values: any) {
    console.log(values);
  }

  return (
    <div className="h-fit  flex flex-col px-[50px] m-10">
      <div className="  font-bold text-[24px] ">{t("work and skills")}</div>
      <Form
        form={workAndSkillsForm}
        layout="vertical"
        className="py-5 flex flex-col gap-5"
        onFinish={submitSkillsForm}
      >
        <Form.Item
          name="job_title"
          label={t("jobTitle")}
          className="w-full max-w-[750px] h-[84px]"
        >
          <Input
            placeholder={t("enterJobTitle")}
            className="h-[56px]"
            type="text"
            id="jobTitle"
          />
        </Form.Item>
        <Form.Item
          name="skills"
          label={`${t("skills")}  (${t("maxSkills")})`}
          className="w-full max-w-[750px] h-[200px]"
          rules={[{ type: "array" }]}
        >
          <Select
            placeholder={t("enterSkills")}
            removeIcon={<CiCircleRemove size={25} />}
            className="min-h-[56px]"
            maxCount={15}
            id="chooseSkill"
            mode="multiple"
            allowClear
            style={{ width: "100%" }}
            // onChange={handleChange}
            options={skillsOptions}
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
            <Button className="w-full max-w-[251px] h-[56px] rounded-[12px] px-[20px] py-[10px]">
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
