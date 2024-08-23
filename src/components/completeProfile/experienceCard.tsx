import { useTranslations } from "next-intl";
import React from "react";

export default function ExperienceCard() {
  const t = useTranslations();
  return (
    <div className="w-[244px] h-[131px] rounded-[12px] border-[1px] p-[5px]  bg-[#fdfdfe] border-[#deeaff] flex flex-col ">
      <div className="py-2">
        {t("jobTitle")}:{"مصمم واجهات مستخدم"}
      </div>
      <div className="py-2">
        {t("company")}:{"جوجل"}
      </div>
      <div className="py-2 flex justify-start gap-2">
        <span className="">
          {t("from")} : {"12/5/2024"}
        </span>
        <span>
          {t("to")}:{"12/5/2024"}
        </span>
      </div>
    </div>
  );
}
