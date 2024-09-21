"use client";
import { Button, Dropdown, Input, MenuProps, Space } from "antd";
import { useTranslations } from "next-intl";
import React, { Fragment } from "react";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import GigOffer from "./gigOffer";
import Image from "next/image";

export default function SearchAndCategoryGigs() {
  const t = useTranslations();

  const items: MenuProps["items"] = [
    {
      label: t("newest"),
      key: "1",
    },
  ];

  function sortBy(e: any) {
    console.log("key", e);
  }
  return (
    <Fragment>
      <div className="w-full m-5 ">
        <Input
          className="h-[56px]"
          placeholder={t("search")}
          prefix={<CiSearch size={20} />}
        />
      </div>

      <div className="w-full rounded-[12px] py-[26px] border-[1px] border-[#e0e1e6] m-5 p-5">
        <div className=" flex flex-row justify-between border-b-[#e0e1e6] border-b-[1px]">
          <div className="px-10   pb-5 flex gap-2 items-center">
            <span className="font-bold ">{t("bestResults")}</span>
            <span>{t("sortBy")}</span>
            <Dropdown menu={{ items, onClick: (e) => sortBy(e) }}>
              <Space className=" w-[86px] h-[40px] border-[1px] border-[#e0e1e6] rounded-[12px] p-[10px]">
                الاحدث
                <IoIosArrowDown size={18} />
              </Space>
            </Dropdown>
          </div>
          <Button
            style={{
              height: "40px",
              width: "fit",
              padding: "8px 12px 8px 12px",
              borderRadius: "6px",
              color: "#7179ce",
            }}
            icon={
              <Image src="/icons/bell.svg" alt="bell" width={18} height={18} />
            }
          >
            {t("receiveNotifications")}
          </Button>
        </div>
        {/* <GigOffer data={null} />
        <GigOffer data={null} />
        <GigOffer data={null} />
        <GigOffer data={null} />
        <GigOffer data={null} />
        <GigOffer data={null} />
        <GigOffer data={null} />
        <GigOffer data={null} /> */}
        <div className="w-full flex items-center justify-center">
          <Button
            style={{ height: "34px" }}
            className="w-[95px] h-[34px] rounded-[6px] py-[8px] px-[12]"
            type="primary"
          >
            {t("more")}
          </Button>
        </div>
      </div>
    </Fragment>
  );
}
