"use client";
import AddEducationModal from "@/components/completeProfile/addEducationModal";
import EducationCard from "@/components/completeProfile/educationCard";
import { RootState } from "@/store/rootReducer";
import { Button, Divider, Progress } from "antd";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function EducationPage() {
  const t = useTranslations();
  const { freelancerProfileData, profileReady } = useSelector(
    (state: RootState) => state.profile
  );
  useEffect(() => {}, [freelancerProfileData]);
  const [addEducationModalOpen, setAddEducationModalOpen] =
    useState<boolean>(false);
  const router = useRouter();

  function openAddEducationModal() {
    setAddEducationModalOpen(true);
  }
  function closeAddEducationModal() {
    setAddEducationModalOpen(false);
  }

  function skip() {
    router.push("./services");
  }
  function next() {
    router.push("./services");
  }

  return (
    <div className="h-fit  flex flex-col px-[50px] m-10">
      <div className="  font-bold text-[24px] m-5 ">{t("education")}</div>
      <div className="flex flex-row flex-wrap gap-5">
        {freelancerProfileData?.educations.map((education: any) => {
          return <EducationCard key={education.id} data={education} />;
        })}
        <Button
          onClick={openAddEducationModal}
          icon={
            <Image
              src="/icons/add.svg"
              alt="add icon"
              width={24}
              height={24}
            ></Image>
          }
          style={{ height: "131px" }}
          className="w-[244px] h-[131px] rounded-[12px] border-[1px] px-[50px] py-[40px] bg-[#f7f9ff] border-[#7179ce] flex flex-row items-center justify-center"
        >
          <div className=" text-[#7179ce] text-[14px]">{t("addEducation")}</div>
        </Button>
      </div>
      <AddEducationModal
        isOpen={addEducationModalOpen}
        closeModal={closeAddEducationModal}
      />
      <Divider style={{ backgroundColor: "#7179ce", height: "1px" }} />
      <div className="flex flex-row justify-between w-full">
        <div className="flex flex-row gap-5 w-full">
          <Button
            htmlType="submit"
            type="primary"
            className="w-full max-w-[251px] h-[56px] rounded-[12px] px-[20px] py-[10px]"
            onClick={next}
          >
            {t("next")}
          </Button>
          <Button
            className="w-full max-w-[251px] h-[56px] rounded-[12px] px-[20px] py-[10px]"
            onClick={skip}
          >
            {t("skip")}
          </Button>
        </div>
        <div className="flex flex-col h-[50px] justify-between">
          <div className=" text-[16px]">
            {t("profileReady")} {profileReady / 0.04}%
          </div>
          <Progress
            steps={4}
            percent={profileReady / 0.04}
            size={[50, 2]}
            strokeColor={"#7179CE"}
          />
        </div>
      </div>
    </div>
  );
}
