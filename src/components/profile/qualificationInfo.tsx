import { Card, Button, Divider } from "antd";
import { useTranslations } from "next-intl";
import React from "react";
import { FaRegEdit } from "react-icons/fa";

const QualificationInfo = () => {
  const t = useTranslations();
  return (
    <Card
      className="w-[370px] bg-[#F7F9FF] rounded-xl shadow-sm border-[1px] border-[#E0E1E6]"
      styles={{
        body: {
          padding: "16px 24px 16px 24px",
        },
      }}
    >
      <div className="flex justify-between items-center">
        <h3 className=" text-[14px] font-bold leading-[24px]  pb-2">
          {t("introductionVideo")}
        </h3>
        <Button type="primary" className="p-0 h-[28px] w-[28px] rounded-md">
          <FaRegEdit color="#fff" size={15} />
        </Button>
      </div>

      <span className="w-[-webkit-fill-available] rounded-xl">
        <video
          className="rounded-xl"
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          controls
        ></video>
      </span>
      <Divider />
      <div className="flex justify-between items-center">
        <h3 className=" text-[14px] font-bold leading-[24px]  pb-2">
          {t("languages")}
        </h3>
        <Button type="primary" className="p-0 h-[28px] w-[28px] rounded-md">
          <FaRegEdit color="#fff" size={15} />
        </Button>
      </div>

      <p className=" text-[12px] font-bold leading-[24px]  text-[#62636C]">
        العربية :
        <span className=" text-[12px] font-medium leading-[24px]  px-1">
          اساسية
        </span>
      </p>
      <Divider />
      <div className="flex justify-between items-center">
        <h3 className=" text-[14px] font-bold leading-[24px]  pb-2">
          {t("teaching")}
        </h3>
        <Button type="primary" className="p-0 h-[28px] w-[28px] rounded-md">
          <FaRegEdit color="#fff" size={15} />
        </Button>
      </div>

      <div className="flex justify-between">
        <div>
          <p className=" text-[12px] font-bold leading-[24px]  text-[#62636C]">
            جامعة القاهرة
          </p>
          <span className=" text-[12px] font-medium leading-[24px]  px-1">
            بكالوريوس فنون
          </span>
        </div>
        <p className=" text-[12px] font-bold leading-[24px]  text-[#62636C]">
          2020-2021
        </p>
      </div>
      <Divider />
      <div className="flex justify-between items-center">
        <h3 className=" text-[14px] font-bold leading-[24px]  pb-2">
          {t("experiences")}
        </h3>
        <Button type="primary" className="p-0 h-[28px] w-[28px] rounded-md">
          <FaRegEdit color="#fff" size={15} />
        </Button>
      </div>

      <div className="flex justify-between">
        <div>
          <p className=" text-[12px] font-bold leading-[24px]  text-[#62636C]">
            جامعة القاهرة
          </p>
          <span className=" text-[12px] font-medium leading-[24px]  px-1">
            بكالوريوس فنون
          </span>
        </div>
        <p className=" text-[12px] font-bold leading-[24px]  text-[#62636C]">
          2020-2021
        </p>
      </div>
      <Divider />
      <div className="flex justify-between items-center">
        <h3 className=" text-[14px] font-bold leading-[24px]  pb-2">
          {t("certifications")}
        </h3>
        <Button type="primary" className="p-0 h-[28px] w-[28px] rounded-md">
          <FaRegEdit color="#fff" size={15} />
        </Button>
      </div>

      <div className="flex justify-between">
        <div>
          <p className=" text-[12px] font-bold leading-[24px]  text-[#62636C]">
            الجهة
          </p>
          <span className=" text-[12px] font-medium leading-[24px]  px-1">
            اسم الشهادة
          </span>
        </div>
        <p className=" text-[12px] font-bold leading-[24px]  text-[#62636C]">
          <Button
            type="default"
            className="h-[34px] px-[12px] py-[8px] rounded-[6px]  text-[12px] font-bold leading-[18px] text-[#7179CE]"
          >
            {t("show")}
          </Button>
        </p>
      </div>
      <Divider />
      <h3 className=" text-[14px] font-bold leading-[24px]  pb-2">
        {t("linkedAccounts")}
      </h3>
      <div className="flex gap-3">
        <div className="rounded-full w-[54px] h-[54px] px-[12px] py-[18px] border-[1px] border-[#BBD2FF] flex justify-center items-center">
          <img src="/icons/behance.svg" alt="behance" width={29} height={18} />
        </div>
        <div className="rounded-full w-[54px] h-[54px] px-[12px] py-[18px] border-[1px] border-[#BBD2FF] flex justify-center items-center">
          <img
            src="/icons/linkedin.svg"
            alt="linkedin"
            width={29}
            height={18}
          />
        </div>{" "}
        <div className="rounded-full w-[54px] h-[54px] px-[12px] py-[18px] border-[1px] border-[#BBD2FF] flex justify-center items-center">
          <img src="/icons/github.svg" alt="github" width={29} height={18} />
        </div>
      </div>
    </Card>
  );
};

export default QualificationInfo;
