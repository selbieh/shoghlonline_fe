import { Button } from "antd";
import { useTranslations } from "next-intl";
import React from "react";
import ServiceCard from "./serviceCard";

export default function ServiceCategory() {
  const t = useTranslations();
  return (
    <div className="w-full">
      <div className="flex flex-row justify-between p-[20px]">
        <span className="text-[16px]">{t("webDevelopment")}</span>
        <Button
          className=" w-[95px] h-[34px] rounded-[6px] py-[8px] px-[12px]"
          type="primary"
        >
          {t("showAll")}
        </Button>
      </div>
      <div className="flex flex-row flex-wrap gap-[60px] p-[20px] justify-center">
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
    </div>
  );
}
