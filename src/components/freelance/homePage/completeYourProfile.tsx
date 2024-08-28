"use client";
import { Button, Progress } from "antd";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import React from "react";

export default function CompleteYourProfile() {
  const t = useTranslations();
  const router = useRouter();
  function goToCompleteYourProfilePage() {
    router.push("/completeProfile/skills");
  }
  return (
    <div className="w-[286px] h-[167px] border-[1px] bg-[#f7f9ff] px-[16px] py-[12px] border-[#e0e1e6] rounded-[12px] m-5">
      <div>
        <span className="font-bold">{t("completeYourProfile")}: </span>
        <span>{t("increaseYourChances")} </span>
      </div>
      <div className="flex flex-col justify-center">
        <Progress className="m-2" percent={50} size="small" />
        <Button
          className="bg-transparent border-[1px] border-[#7179ce] h-[34px] w-[238px] m-2"
          onClick={goToCompleteYourProfilePage}
        >
          {t("completeYourProfile")}
        </Button>
      </div>
    </div>
  );
}
