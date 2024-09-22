import { useTranslations } from "next-intl";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { FaStar } from "react-icons/fa";

export default function ServiceCard() {
  const t = useTranslations();
  const router = useRouter();
  return (
    <div>
      <div
        className=" cursor-pointer"
        onClick={() => {
          router.push("/client/serviceDetails/5");
        }}
      >
        <Image
          src={"/images/serviceCardImage.png"}
          alt="service image"
          width={255}
          height={123}
        />
        <div className="max-w-[255px]">
          أقدم خدمة تصميم واجهات مواقع مخصصة تجمع بين الجمال والوظيفية
        </div>
      </div>
      <div className="flex flex-row justify-between">
        <div className=" self-auto w-fit h-fit rounded-[2px] py-[3px] px-[10px] bg-[#ecf2ff]">
          <span className="text-[#345bcb]">{t("from")} </span>
          <span className="text-[#7179ce] font-bold">15$</span>
        </div>
        <div className=" flex flex-row gap-1 w-fit h-fit rounded-[2px] py-[3px] px-[10px] bg-[#fff4d6] items-center">
          <span className="text-[#84a6f2] font-bold">(51)</span>
          <span className="text-[#345bcb]">4.9</span>
          <FaStar color="#fed26c" />
        </div>
      </div>
    </div>
  );
}
