import { useTranslations } from "next-intl";
import React from "react";

export default function ExperienceCard({ data }: { data: any }) {
  const t = useTranslations();
  return (
    <div className="w-[244px] h-[131px] rounded-[12px] border-[1px] p-[5px]  bg-[#fdfdfe] border-[#deeaff] flex flex-col ">
      <div className="py-2">
        {t("jobTitle")}:{data?.role}
      </div>
      <div className="py-2">
        {t("company")}:{data?.company_name}
      </div>
      <div className="py-2 flex justify-start gap-2">
        <span className="">
          {t("from")} : {data?.start_date}
        </span>
        <span>
          {t("to")}:{data?.is_still_working ? t("tillNow") : data?.end_date}
        </span>
      </div>
    </div>
  );
}
