"use client";
import { Button, Form, Upload } from "antd";
import TextArea from "antd/es/input/TextArea";
import React from "react";
import Image from "next/image";
import { CiImageOn } from "react-icons/ci";
import { useTranslations } from "next-intl";
const { Dragger } = Upload;
export default function ProposalForm() {
  const t = useTranslations();
  return (
    <div className=" w-full rounded-[12px] border-[1px] py-[30px] px-[24px] my-[20px]">
      <Form>
        <div className=" w-full rounded-[12px] border-[1px] py-[30px] px-[24px] my-[20px]">
          <Form.Item>
            <TextArea />
          </Form.Item>
          <Form.Item className="flex flex-col justify-center bg-[#f7f9ff]">
            <Dragger>
              <div className="w-full ">
                <p className="ant-upload-drag-icon flex flex-col items-center">
                  <Image
                    src={"/icons/upload.svg"}
                    width={42}
                    height={42}
                    alt="upload"
                  />
                </p>
                <Button
                  type="primary"
                  icon={
                    <Image
                      src={"/icons/add.svg"}
                      width={16}
                      height={16}
                      alt="plus"
                    />
                  }
                >
                  {t("uploadFile")}
                </Button>
                <div className=" text-[#a4bffb]">{t("draganddropafile")}</div>
              </div>
            </Dragger>
          </Form.Item>
        </div>
        <div className=" w-full rounded-[12px] border-[1px] py-[30px] px-[24px] my-[20px]"></div>
        <div className=" w-full rounded-[12px] border-[1px] py-[30px] px-[24px] my-[20px]"></div>
      </Form>
    </div>
  );
}
