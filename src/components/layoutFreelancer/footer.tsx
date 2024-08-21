import { useTranslations } from "next-intl";
import React from "react";

const FooterFreelancer = () => {
  const t = useTranslations();
  return (
    <div className="h-[227px] bg-[#7179CE] flex py-5 px-2 w-full justify-around items-center">
      <div className="flex flex-col">
        <h3 className=" text-[16px] font-medium leading-[17.6px] text-white py-4">
          {t("ImportantLinks")}
        </h3>
        <p className=" text-[16px] font-normal leading-[22.4px] text-[#E2E8F0] py-2">
          {t("Home")}
        </p>
        <p className=" text-[16px] font-normal leading-[22.4px] text-[#E2E8F0] py-2">
          {t("whoWe")}
        </p>
        <p className=" text-[16px] font-normal leading-[22.4px] text-[#E2E8F0] py-2">
          {t("Services")}
        </p>
      </div>
      <div className="flex flex-col">
        <h3 className=" text-[16px] font-medium leading-[17.6px] text-white py-4">
          {t("support")}
        </h3>
        <p className=" text-[16px] font-normal leading-[22.4px] text-[#E2E8F0] py-2">
          {t("commonQuestions")}
        </p>
        <p className=" text-[16px] font-normal leading-[22.4px] text-[#E2E8F0] py-2">
          {t("technicalSupport")}
        </p>
        <p className=" text-[16px] font-normal leading-[22.4px] text-[#E2E8F0] py-2">
          {t("termsAndConditions")}
        </p>
      </div>
      <div className="flex flex-col">
        <h3 className=" text-[16px] font-medium leading-[17.6px] text-white py-4">
          {t("contactUs")}
        </h3>
        <p className=" text-[16px] font-normal leading-[22.4px] text-[#E2E8F0] py-2">
          {t("email")} : pZmCt@example.com
        </p>
        <p className=" text-[16px] font-normal leading-[22.4px] text-[#E2E8F0] py-2">
          {t("phone")} : +966 123456789
        </p>
        <p className=" text-[16px] font-normal leading-[22.4px] text-[#E2E8F0] py-2">
          {t("address")} : المملكة العربية السعودية
        </p>
      </div>
    </div>
  );
};

export default FooterFreelancer;
