import { Card, Button, Tag } from "antd";
import { useTranslations } from "next-intl";
import React from "react";
import { FaRegEdit } from "react-icons/fa";

const MainInfo = () => {
  const t = useTranslations();
  return (
    <Card
      className="w-[370px] h-[378px] bg-[#F7F9FF] rounded-xl shadow-sm border-[1px] border-[#E0E1E6]"
      styles={{
        body: {
          padding: "16px, 24px, 16px, 24px",
        },
      }}
    >
      <div className="flex justify-center items-center flex-col gap-3">
        <img
          src="https://via.placeholder.com/104"
          alt="Profile"
          width={104}
          height={104}
          className="rounded-full"
        />
        <p className=" text-[16px] font-medium leading-[24px] ">full name</p>
        <p className=" text-[16px] font-medium leading-[24px] ">
          example@example.com
        </p>
        <div className="flex gap-3">
          <span className="flex gap-2">
            <img
              src="/icons/cursor-1.svg"
              alt="cursor-1"
              width={16}
              height={16}
            />
            <span className=" text-[11px] font-medium leading-[16px] ">
              العنوان
            </span>
          </span>
          <span className="flex gap-2">
            <img
              src="/icons/time-clock-nine.svg"
              alt="time-clock-nine"
              width={16}
              height={16}
            />
            <span className=" text-[11px] font-medium leading-[16px] ">
              2:10 مساء
            </span>
          </span>
        </div>
      </div>
      <div className="mt-5">
        <div className="flex justify-between items-center">
          <h3 className=" text-[14px] font-bold leading-[24px]  text-[#000]">
            {t("skills")}
          </h3>
          <Button type="primary" className="p-0 h-[28px] w-[28px] rounded-md">
            <FaRegEdit color="#fff" size={15} />
          </Button>
        </div>

        <div className="flex gap-2 p-3">
          <Tag
            color="#ECF2FF"
            bordered={false}
            className="bg-[#ECF2FF] w-[117px] h-[40px] px-[16px] py-[8px] rounded-[28px] text-center"
          >
            <span className="text-[#20102B]  text-[14px] font-normal leading-[24px] ">
              magenta
            </span>
          </Tag>
        </div>
      </div>
    </Card>
  );
};

export default MainInfo;
