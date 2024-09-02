import { useTranslations } from "next-intl";
import React from "react";

export default function EducationCard({ data }: { data: any }) {
  const t = useTranslations();
  return (
    <div className="w-[244px] h-fit rounded-[12px] border-[1px] p-[5px]  bg-[#fdfdfe] border-[#deeaff] flex flex-col ">
      <div className="py-2">
        {t("organization")}:{data?.institution}
      </div>
      <div className="py-2">
        {t("level")}:{data?.degree}
      </div>
      <div className="py-2">
        {t("specialization")}:{data?.field_of_study}
      </div>
      <div className="py-2 flex justify-start gap-2">
        <span className="">
          {t("from")} :{" "}
          {new Date(data?.start_date).toLocaleDateString("CA", {
            year: "numeric",
          })}
        </span>
        <span>
          {t("to")}:
          {new Date(data?.end_date).toLocaleDateString("CA", {
            year: "numeric",
          })}
        </span>
      </div>
    </div>
  );
}
