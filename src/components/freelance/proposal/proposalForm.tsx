"use client";
import {
  Button,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Upload,
} from "antd";
import TextArea from "antd/es/input/TextArea";
import React, { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { BsCurrencyDollar } from "react-icons/bs";
import { FiMinusCircle } from "react-icons/fi";
import ProposalSuccessModal from "./proposalSuccessModal";
import { useRouter } from "next/navigation";
const { Dragger } = Upload;
export default function ProposalForm() {
  const t = useTranslations();
  const [paymentMethod, setPaymentMethod] = useState<string>("totalJob");
  const [proposalSuccessModalOpen, setProposalSuccessModalOpen] =
    useState<boolean>(false);
  const suffixSelector = (
    <Form.Item name="suffix">
      <Select style={{ width: 80 }} className="h-[56px] min-w-fit">
        <Select.Option value="day">{t("day")}</Select.Option>
        <Select.Option value="week">{t("week")}</Select.Option>
        <Select.Option value="month">{t("month")}</Select.Option>
        <Select.Option value="year">{t("year")}</Select.Option>
      </Select>
    </Form.Item>
  );

  function closeProposalModal() {
    setProposalSuccessModalOpen(false);
  }
  return (
    <div className=" w-full rounded-[12px] border-[1px] py-[30px] px-[24px] my-[20px]">
      <Form layout="vertical">
        <div className=" w-full rounded-[12px] border-[1px] py-[30px] px-[24px] my-[20px]">
          <Form.Item
            label={<label className="font-bold">{t("coverLetter")}</label>}
            extra={t("noMore500Letter")}
            className="w-full h-fit"
          >
            <TextArea
              style={{ minHeight: 266 }}
              className="w-full "
              maxLength={500}
              placeholder={t("typeCoverLetterHere")}
            />
          </Form.Item>
          <Form.Item className="flex flex-col justify-center bg-[#f7f9ff] ">
            <Dragger className="h-[176px]">
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
                  style={{ height: "34px" }}
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
        <div className=" w-full rounded-[12px] border-[1px] py-[30px] px-[24px] my-[20px]">
          <Form.Item
            label={
              <span className="font-bold">
                {t("chooseFavoritePaymentMethod")}
              </span>
            }
          >
            <Radio.Group
              style={{ display: "grid" }}
              className="w-full grid grid-cols-1 sm:grid-cols-2  "
              onChange={(e) => {
                setPaymentMethod(e.target.value);
              }}
              defaultValue={"totalJob"}
            >
              <div
                className={
                  paymentMethod === "totalJob"
                    ? "max-w-[533px] max-h-[96px] p-[12px] border-[1px] rounded-[4px] bg-[#f7f9ff]"
                    : "max-w-[533px] max-h-[96px] p-[12px] border-[1px] rounded-[4px]"
                }
              >
                <Radio key={"totalJob"} value={"totalJob"} className="w-full">
                  <div className="px-2">
                    <div className="pb-[10px] font-bold text-[12px]">
                      {t("totalJob")}
                    </div>
                    <div className="text-[12px] text-[#665b6d]">
                      {t("totalJobDescription")}
                    </div>{" "}
                  </div>
                </Radio>
              </div>
              <div
                className={
                  paymentMethod === "steps"
                    ? "max-w-[533px] max-h-[96px] p-[12px] border-[1px] rounded-[4px] bg-[#f7f9ff]"
                    : "max-w-[533px] max-h-[96px] p-[12px] border-[1px] rounded-[4px]"
                }
              >
                <Radio key={"steps"} value={"steps"} className="w-full">
                  <div className="px-2">
                    <div className="pb-[10px] font-bold text-[12px]">
                      {t("stepsJob")}
                    </div>
                    <div className="text-[12px] text-[#665b6d]">
                      {t("projectStepsDescription")}
                    </div>{" "}
                  </div>
                </Radio>
              </div>
            </Radio.Group>
          </Form.Item>
          {paymentMethod === "totalJob" && (
            <Form.Item
              label={<span className="font-bold">{t("price")}</span>}
              className="w-full"
            >
              <InputNumber
                className="w-full h-[56px]"
                placeholder="300"
                suffix={<BsCurrencyDollar />}
              />
            </Form.Item>
          )}
          {paymentMethod === "steps" && (
            <>
              <h3 className=" font-bold mb-5">{t("jobSteps")}</h3>
              <Form.List name="steps">
                {(fields, { add, remove }) => (
                  <>
                    {fields.map((key, name, ...restField) => (
                      <Form.Item key={Math.random()}>
                        <div>
                          <div className="flex flex-row justify-between">
                            <Form.Item
                              label={t("stepDescription")}
                              className="max-w-[487px] w-full"
                            >
                              <Input
                                placeholder={t("stepDescription")}
                                className="w-full h-[56px]"
                              />
                            </Form.Item>
                            <Form.Item
                              label={t("stepPrice")}
                              className="max-w-[280px] w-full"
                            >
                              <InputNumber className="w-full h-[56px]" />
                            </Form.Item>
                            <Form.Item
                              label={t("completeOn")}
                              className="max-w-[280px] w-full"
                            >
                              <DatePicker className="w-full h-[56px]" />
                            </Form.Item>
                            <FiMinusCircle
                              size={15}
                              className="dynamic-delete-button cursor-pointer"
                              onClick={() => remove(name)}
                            />
                          </div>
                        </div>
                      </Form.Item>
                    ))}
                    <Form.Item>
                      <div
                        onClick={() => add()}
                        className="text-[14px] font-bold text-[#7179ce] cursor-pointer"
                      >
                        {t("addStep")} +
                      </div>
                    </Form.Item>
                  </>
                )}
              </Form.List>
            </>
          )}
          <div className="p-2 font-bold">
            <span className=" px-10">{t("platformPercentage")}</span>
            <span>10$</span>
          </div>
          <div className="p-5 font-bold">
            <span className=" px-10">{t("yourProfit")}</span>
            <span>290$</span>
          </div>
        </div>
        <div className=" w-full rounded-[12px] border-[1px] py-[30px] px-[24px] my-[20px]">
          <Form.Item
            label={<span className="font-bold">{t("projectDuration")}</span>}
            className="w-full"
          >
            <InputNumber
              placeholder="0"
              className="h-[56px] min-w-[300px]"
              addonAfter={suffixSelector}
            />
          </Form.Item>
        </div>
        <div className="flex flex-row justify-end gap-5 px-2">
          <Button
            style={{ height: "34px" }}
            type="primary"
            className="h-[34px] w-[84px]"
            onClick={() => {
              setProposalSuccessModalOpen(true);
            }}
          >
            {t("apply")}
          </Button>
          <Button style={{ height: "34px" }} className="h-[34px] w-[84px]">
            {t("cancel")}
          </Button>
        </div>
      </Form>
      <ProposalSuccessModal
        isOpen={proposalSuccessModalOpen}
        close={closeProposalModal}
      />
    </div>
  );
}
