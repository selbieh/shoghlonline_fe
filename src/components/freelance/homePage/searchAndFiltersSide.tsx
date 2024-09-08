"use client";
import { Checkbox, ConfigProvider, Form, Input, Select, Slider } from "antd";
import { useTranslations } from "next-intl";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

export default function SearchAndFiltersSide() {
  const t = useTranslations();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const pathname = usePathname();
  const { replace } = useRouter();

  const options = [
    { label: t("beginner"), value: "beginner" },
    { label: t("intermediate"), value: "intermediate" },
    { label: t("expert"), value: "expert" },
  ];
  const projectTypeOptions = [
    { label: t("fixedPrice"), value: "fixedPrice" },
    { label: t("byHour"), value: "byHour" },
  ];
  const clientInfoOptions = [
    { label: t("paymentVerified"), value: "paymentVerified" },
  ];
  return (
    <div className="h-full w-fit my-[72px]  ">
      <div className="w-full flex flex-row justify-evenly my-3">
        <span className="font-bold">{t("filter")}</span>
        <span
          onClick={() => {
            params.delete("category");
            replace(`${pathname}`);
          }}
          className="text-[#1b3dbc] text-[14px] cursor-pointer"
        >
          {t("clear")}
        </span>
      </div>
      <Form layout="vertical">
        <div className="flex flex-col gap-3">
          <div className="w-[286px] h-[fit] py-[16px] px-[24px] rounded-[12px] border-[1px]">
            <Form.Item label={t("categories")}>
              <Select />
            </Form.Item>
          </div>
          <div className="w-[286px] h-fit py-[16px] px-[24px] rounded-[12px] border-[1px]">
            <Form.Item>
              <div className="w-full flex flex-row gap-[170px]  my-3">
                <span>{t("experienceLabel")}</span>
                <span className="text-[#1b3dbc] text-[14px] cursor-pointer">
                  {t("clear")}
                </span>
              </div>
              <Checkbox.Group
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
                options={options}
                onChange={(e) => {
                  params.set("category", e[0]);
                  replace(`${pathname}?category=${e[0]}`);
                }}
              />
            </Form.Item>
          </div>
          <div className="w-[286px] h-fit py-[16px] px-[24px] rounded-[12px] border-[1px]">
            <Form.Item label={t("skills")}>
              <Select />
            </Form.Item>
          </div>
          <div className="w-[286px] h-fit py-[16px] px-[24px] rounded-[12px] border-[1px]">
            <Form.Item label={t("location")}>
              <Select />
            </Form.Item>
          </div>
          <div className="max-w-[286px] min-h-[144px] py-[16px] px-[24px] rounded-[12px] border-[1px]">
            <Form.Item>
              <div className="w-full flex flex-row gap-[130px]  my-3">
                <span>{t("projectType")}</span>
                <span className="text-[#1b3dbc] text-[14px] cursor-pointer">
                  {t("clear")}
                </span>
              </div>
              <Checkbox.Group
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
                options={projectTypeOptions}
                onChange={() => {}}
              />
            </Form.Item>
          </div>
          <div className="max-w-[286px] h-fit py-[16px] px-[24px] rounded-[12px] border-[1px]">
            <Form.Item label={t("fixedPrice")}>
              <div className="flex flex-row justify-between">
                <span className="text-[9px]">{t("least")}</span>
                <span className="text-[9px]">{t("highest")}</span>
              </div>
              <Slider
                reverse
                max={1000}
                min={0}
                range
                step={1}
                defaultValue={[20, 50]}
                onChange={() => {}}
              />
            </Form.Item>
          </div>
          <div className="max-w-[286px] h-fit py-[16px] px-[24px] rounded-[12px] border-[1px]">
            <Form.Item label={t("hourPrice")}>
              <div className="flex flex-row justify-between">
                <span className="text-[9px]">{t("least")}</span>
                <span className="text-[9px]">{t("highest")}</span>
              </div>
              <Slider
                reverse
                max={1000}
                min={0}
                range
                step={1}
                defaultValue={[20, 50]}
                onChange={() => {}}
              />
            </Form.Item>
          </div>
          <div className="max-w-[286px] h-fit py-[16px] px-[24px] rounded-[12px] border-[1px]">
            <Form.Item>
              <div className="w-full flex flex-row gap-[106px]  my-3">
                <span>{t("clientInfo")}</span>
                <span className="text-[#1b3dbc] text-[14px] cursor-pointer">
                  {t("clear")}
                </span>
              </div>
              <Checkbox.Group
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
                options={clientInfoOptions}
                onChange={() => {}}
              />
            </Form.Item>
          </div>
        </div>
      </Form>
    </div>
  );
}
