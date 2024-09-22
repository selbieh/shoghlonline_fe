"use client";
import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Button, Checkbox } from "antd";
// import GigTag from "../homePage/gigTag";

export default function ServiceDetailsSection() {
  const t = useTranslations();

  return (
    <section className="w-[267px] h-fit rounded-[8px] border-[1px] py-[20px] px-[12px] flex flex-col gap-3 my-[10px]">
      <div className=" font-bold text-[12px]">{t("serviceDetails")}</div>
      <div className="flex flex-row items-center gap-2">
        <Image
          src={"/icons/status.svg"}
          alt="bookmark"
          width={18}
          height={18}
        />
        <span>{t("status")} : </span>
        <span className="w-[54px] h-[21px] rounded-[24px]  bg-[#34c75942] flex items-center justify-center">
          مفتوح
        </span>
      </div>

      <div className="flex flex-row items-center gap-2">
        <Image
          src={"/icons/dollarcircle.svg"}
          alt="bookmark"
          width={18}
          height={18}
        />
        <span>{t("servicePrice")} : </span>
        <span className="w-[54px] h-[21px] rounded-[24px]  bg-[#34c75942] flex items-center justify-center">
          $50
        </span>
      </div>
      <div className="flex flex-row items-center gap-2">
        <Image
          src={"/icons/offers.svg"}
          alt="bookmark"
          width={18}
          height={18}
        />
        <span>{t("serviceOrdered")} : </span>
        <span className="w-[54px] h-[21px] rounded-[24px]  bg-[#34c75942] flex items-center justify-center">
          5
        </span>
        <span>{t("time")}</span>
      </div>
      <div>
        <div className=" font-bold text-[12px] my-2">{t("extraServices")}</div>
        <Checkbox.Group className="w-full">
          <Checkbox value="c" className="w-fit">
            <div className="flex flex-row justify-between w-[200px] ">
              <span>{t("landingPage")}</span>
              <span className="font-bold">15$</span>
            </div>
          </Checkbox>
          <Checkbox value="b" className="w-fit">
            <div className="flex flex-row justify-between w-[200px] ">
              <span>{t("marketResearch")}</span>
              <span className="font-bold">15$</span>
            </div>
          </Checkbox>
        </Checkbox.Group>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex flex-row items-center">
          <Image
            src={"/icons/clock.svg"}
            alt="bookmark"
            width={24}
            height={24}
          />
          <span>{t("deliveryTime")} : 3 ايام</span>
        </div>
        <Button type="primary" className="w-[240px] h-[44px] font-bold">
          {t("orderTheService")} : 20$
        </Button>
      </div>
    </section>
  );
}
