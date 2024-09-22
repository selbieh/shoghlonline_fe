import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Rate } from "antd";

export default function FreelancerDetailsSection() {
  const t = useTranslations();

  return (
    <section className="w-[267px] h-بهف rounded-[8px] border-[1px] py-[20px] px-[12px] flex flex-col gap-3 my-[10px]">
      <div className=" font-bold text-[12px]">{t("freelancerInfo")}</div>
      <div className="flex flex-row items-center gap-2">
        <Image
          src={"/icons/client.svg"}
          alt="bookmark"
          width={18}
          height={18}
        />
        <span>أحمد السيد</span>
      </div>
      <div className="flex flex-row items-center gap-2">
        <Image
          src={"/icons/verifiedPayment.svg"}
          alt="bookmark"
          width={18}
          height={18}
        />
        <span>{t("contactInfoVerified")}</span>
      </div>
      <div className="flex flex-row items-center gap-2">
        <Image
          src={"/icons/location.svg"}
          alt="bookmark"
          width={24}
          height={24}
        />
        <span>القاهرة - مصر</span>
      </div>
      <div className="flex flex-row items-center gap-2">
        <Rate disabled defaultValue={4} allowHalf />
        {" 4.0 "}
      </div>
      <div className="flex flex-row items-center gap-2">
        <Image
          src={"/icons/status.svg"}
          alt="bookmark"
          width={18}
          height={18}
        />
        <span>{t("servicesNumber")} : </span>
        <span className="w-[54px] h-[21px] rounded-[24px]  bg-[#34c75942] flex items-center justify-center">
          20
        </span>
      </div>
    </section>
  );
}
