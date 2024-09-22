import { useTranslations } from "next-intl";
import React from "react";

export default function ServiceStatsCard() {
  const t = useTranslations();
  return (
    <div className=" flex flex-row flex-wrap justify-around my-5">
      <div className="flex flex-col justify-between h-[110px] w-[260px] rounded-[11px] border-[2px] py-[15px] px-[11px]">
        <div className="font-bold text-[#62636c] text-[16px]">
          {t("newOrders")}
        </div>
        <div className="flex flex-row justify-between items-center">
          <span className="font-bold text-[27px]">40</span>
          <span
            className="font-bold text-[#7179ce] cursor-pointer"
            onClick={() => {}}
          >
            {t("showAll")}
          </span>
        </div>
      </div>
      <div className="flex flex-col justify-between h-[110px] w-[260px] rounded-[11px] border-[2px] py-[15px] px-[11px]">
        <div className="font-bold text-[#62636c] text-[16px]">
          {t("completedOrders")}
        </div>
        <div className="flex flex-row justify-between items-center">
          <span className="font-bold text-[27px]">40</span>
          <span
            className="font-bold text-[#7179ce] cursor-pointer"
            onClick={() => {}}
          >
            {t("showAll")}
          </span>
        </div>
      </div>
      <div className="flex flex-col justify-between h-[110px] w-[260px] rounded-[11px] border-[2px] py-[15px] px-[11px]">
        <div className="font-bold text-[#62636c] text-[16px]">
          {t("totalOrders")}
        </div>
        <div className="flex flex-row justify-between items-center">
          <span className="font-bold text-[27px]">40</span>
          <span
            className="font-bold text-[#7179ce] cursor-pointer"
            onClick={() => {}}
          >
            {t("showAll")}
          </span>
        </div>
      </div>
      <div className="flex flex-col justify-between h-[110px] w-[260px] rounded-[11px] border-[2px] py-[15px] px-[11px]">
        <div className="font-bold text-[#62636c] text-[16px]">
          {t("totalProfit")}
        </div>
        <div className="flex flex-row justify-between items-center">
          <span className="font-bold text-[27px]">40$</span>
          <span
            className="font-bold text-[#7179ce] cursor-pointer"
            onClick={() => {}}
          >
            {t("showAll")}
          </span>
        </div>
      </div>
    </div>
  );
}
