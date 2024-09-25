"use client";
import { Button, Form, Input, InputNumber, Select, Space } from "antd";
import { useTranslations } from "next-intl";
import React from "react";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
});
import "react-quill/dist/quill.snow.css";
import type { UploadProps } from "antd";
import { message, Upload } from "antd";
import Image from "next/image";
const { Dragger } = Upload;
const DescriptionServiceForm = () => {
  const t = useTranslations();
  const options = [
    {
      value: "1",
      label: t("day"),
    },
    {
      value: "2",
      label: t("week"),
    },
    {
      value: "3",
      label: t("month"),
    },
  ];
  return (
    <>
      <h3 className="text-[14px] font-bold leading-[24px] tracking-[0.5px] pb-12">
        {t("serviceDescription")}
      </h3>
      <Form.List name="description">
        {(fields, operation, meta) => (
          <>
            <div className="flex gap-5 w-full">
              <Form.Item
                labelCol={{ span: 24 }}
                label={
                  <span className="text-[14px] font-medium leading-[24px] tracking-[0.5px] text-[#20102B]">
                    {t("serviceTitle")}
                  </span>
                }
                name="first_name"
                className="w-3/4"
              >
                <Input />
              </Form.Item>
              <Form.Item
                className="w-1/4"
                labelCol={{ span: 24 }}
                label={
                  <span className="text-[14px] font-medium leading-[24px] tracking-[0.5px] text-[#20102B]">
                    {t("ServiceCompletionTime")}
                  </span>
                }
                name="last_name"
              >
                <Space.Compact
                  className="hidden md:flex lg:flex xl:flex"
                  size="middle"
                >
                  <InputNumber
                    // style={{ width: 200 }}
                    className="w-3/4"
                    min={1}
                  />
                  <Select
                    defaultValue="1"
                    options={options}
                    className="w-1/4"
                  />
                </Space.Compact>
              </Form.Item>
            </div>
            <div className="flex gap-5 w-full">
              <Form.Item
                labelCol={{ span: 24 }}
                label={
                  <span className="text-[14px] font-medium leading-[24px] tracking-[0.5px] text-[#20102B]">
                    {t("department")}
                  </span>
                }
                name="department"
                className="w-1/2"
              >
                <Select defaultValue="1" options={options} className="w-full" />
              </Form.Item>
              <Form.Item
                className="w-1/2"
                labelCol={{ span: 24 }}
                label={
                  <span className="text-[14px] font-medium leading-[24px] tracking-[0.5px] text-[#20102B]">
                    {t("subCategory")}
                  </span>
                }
                name="subCategory"
              >
                <Select defaultValue="1" options={options} className="w-full" />
              </Form.Item>
            </div>
            <div>
              <Form.Item
                className="mb-[63px]"
                labelCol={{ span: 24 }}
                label={
                  <span className="text-[14px] font-medium leading-[24px] tracking-[0.5px] text-[#20102B]">
                    {t("serviceDescription")}
                  </span>
                }
                name="description"
                // extra={t("serviceDescriptionDescription")}
              >
                <ReactQuill theme="snow" value={""} className="h-[250px]" />
              </Form.Item>
            </div>
            <div>
              <Form.Item name="files" valuePropName="files">
                <Dragger className="bg-[#F7F9FF]">
                  <p className="ant-upload-drag-icon flex justify-center pt-5">
                    <Image
                      src="/images/fi_image.svg"
                      alt="upload"
                      width={42}
                      height={42}
                    />
                  </p>
                  <p className="ant-upload-text">
                    <Button type="primary" className="h-[34px] rounded-lg">
                      <Image
                        src="/icons/add-circle.svg"
                        alt="setting"
                        width={16}
                        height={16}
                      />
                      <span>{t("uploadImage")}</span>
                    </Button>
                  </p>
                  <p className="ant-upload-hint text-[14px] font-normal leading-[18px] text-[#A4BFFB] pb-5">
                    {t("uploadImageDescription")}
                  </p>
                </Dragger>
              </Form.Item>
            </div>
          </>
        )}
      </Form.List>
    </>
  );
};

export default DescriptionServiceForm;
