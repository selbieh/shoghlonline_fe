import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import GigTag from "../homePage/gigTag";

export default function GigDetailsSection() {
  const t = useTranslations();
  return (
    <section className="w-[267px] h-[395px] rounded-[8px] border-[1px] py-[20px] px-[12px] flex flex-col gap-3">
      <div className=" font-bold text-[12px]">{t("gigDetails")}</div>
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
        <Image src={"/icons/clock.svg"} alt="bookmark" width={18} height={18} />
        <span>{t("estimatedTime")} : </span>
        <span className="w-[54px] h-[21px] rounded-[24px]  bg-[#34c75942] flex items-center justify-center">
          1 : 3
        </span>
      </div>
      <div className="flex flex-row items-center gap-2">
        <Image
          src={"/icons/dollarcircle.svg"}
          alt="bookmark"
          width={18}
          height={18}
        />
        <span>{t("constPrice")} : </span>
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
        <span>{t("offers")} : </span>
        <span className="w-[54px] h-[21px] rounded-[24px]  bg-[#34c75942] flex items-center justify-center">
          5 - 10
        </span>
      </div>
      <div className="flex flex-row items-center gap-2">
        <Image
          src={"/icons/dollarcircle.svg"}
          alt="bookmark"
          width={18}
          height={18}
        />
        <span>{t("avgPrice")} : </span>
        <span className="w-[54px] h-[21px] rounded-[24px]  bg-[#34c75942] flex items-center justify-center">
          $55
        </span>
      </div>
      <div className="flex flex-row items-center gap-2">
        <Image
          src={"/icons/experience.svg"}
          alt="bookmark"
          width={18}
          height={18}
        />
        <span>{t("experience")} : </span>
        <span className="w-[54px] h-[21px] rounded-[24px]  bg-[#34c75942] flex items-center justify-center">
          متوسط
        </span>
      </div>
      <div>
        <div className=" font-bold text-[12px] my-2">{t("requiredSkills")}</div>
        <div className="flex flex-row flex-wrap  items-center gap-2">
          <GigTag>فوتوشوب</GigTag>
          <GigTag>فوتوشوب</GigTag>
          <GigTag>فوتوشوب</GigTag>
          <GigTag>فوتوشوب</GigTag>
          <GigTag>فوتوشوب</GigTag>
          <GigTag>فوتوشوب</GigTag>
          <GigTag>فوتوشوب</GigTag>
        </div>
      </div>
    </section>
  );
}
