"use client";
import CompletedJobs from "@/components/profile/completedJobs";
import FeedbackProfile from "@/components/profile/feedback";
import MainInfo from "@/components/profile/mainInfo";
import PreviousWork from "@/components/profile/previousWork";
import QualificationInfo from "@/components/profile/qualificationInfo";
import ServicesProfile from "@/components/profile/services";
import StatsCard from "@/components/profile/statsCard";
import { Button, Card, Divider, Progress, Rate, Space, Tag } from "antd";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import { FaArrowLeft, FaRegEdit } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";

const Profile = ({ params: { id } }: { params: { id: string } }) => {
  const t = useTranslations();
  return (
    <div className="flex flex-col md:flex-row bg-white">
      <div className="w-full md:w-1/3 lg:w-1/3 xl:w-1/3  p-4 flex justify-start items-center gap-4 flex-col">
        <MainInfo></MainInfo>
        <Card
          className="w-[370px] h-[155px] bg-[#F7F9FF] rounded-xl shadow-sm border-[1px] border-[#E0E1E6]"
          styles={{
            body: {
              padding: "16px, 24px, 16px, 24px",
            },
          }}
        >
          <div className="flex justify-between">
            <span className=" text-[14px] font-bold leading-[24px] ">
              {t("rating")}
            </span>
            <span>
              <span className=" text-[16px] font-bold leading-[24px]  px-2">
                3.5
              </span>
              <Rate disabled defaultValue={2} />
            </span>
          </div>
          <Divider />

          <div className="flex justify-between">
            <span className="w-[-webkit-fill-available]  text-[14px] font-bold leading-[24px] ">
              {t("projectsCompleted")}
            </span>
            <span className="contents px-2 w-[45%]">
              <Progress size="small" percent={30} />
            </span>
          </div>
        </Card>
        <QualificationInfo></QualificationInfo>
      </div>
      <div className="w-full md:w-2/3 lg:w-2/3 xl:w-2/3 p-4 flex gap-4 flex-col">
        <div className="flex justify-end">
          <Button
            type="primary"
            className="h-[38px] rounded-md  text-[12px] font-bold leading-[18px]"
            href=""
          >
            <IoSettingsOutline />

            {t("settings")}
          </Button>
        </div>
        <div className="flex flex-col md:flex-row items-center h-auto md:h-[127px] px-[24px] py-[20px] rounded-[12px] border-[1px] border-[solid] border-[#E0E1E6] bg-[#DEEAFF]">
          <div className="flex w-full md:w-3/4 justify-around items-center mb-4 md:mb-0">
            <div className="flex justify-center md:justify-start w-full md:w-auto mb-4 md:mb-0">
              <Progress
                type="circle"
                percent={70}
                size={79}
                format={(percent) => (
                  <span className="text-[#000000] px-1  text-[9px] font-medium leading-[10.8px] ">
                    {t("profileCompleted")} {percent} %
                  </span>
                )}
                strokeColor={"#7179CE"}
                strokeWidth={5}
              />
            </div>
            <div className="flex flex-col items-center md:items-start w-full md:w-auto">
              <h3 className="text-[15px] font-bold leading-[24px] text-[#1B2D5E] text-center md:text-left">
                {t("completeProfile")}
              </h3>
              <p className="text-[12px] font-normal leading-[24px] text-[#1B2D5E] text-center md:text-left">
                {t("completeProfileDesc")}
              </p>
            </div>
          </div>
          <div className="flex w-full md:w-1/4 justify-center md:justify-end gap-2">
            <h3 className="text-[12px] font-bold leading-[18px] text-[#7179CE]">
              {t("completeProfileNow")}
            </h3>
            <FaArrowLeft color="#7179CE" />
          </div>
        </div>
        <div className="flex flex-wrap md:flex-row justify-between gap-4 md:gap-12">
          <StatsCard></StatsCard>
          <StatsCard></StatsCard>
          <StatsCard></StatsCard>
          <StatsCard></StatsCard>
        </div>
        <Card
          className="w-full bg-white rounded-xl shadow-sm border-[1px] border-[#E0E1E6]"
          styles={{
            body: {
              padding: "16px, 24px, 16px, 24px",
            },
          }}
        >
          <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center mb-4 md:mb-0">
              <Space className="flex flex-col md:flex-row items-center">
                <Button
                  type="primary"
                  className="p-0 h-[28px] w-[28px] rounded-md mb-2 md:mb-0"
                >
                  <FaRegEdit color="#fff" size={15} />
                </Button>
                <h3 className=" text-[24px] font-medium leading-[24px] text-center md:text-left">
                  مصمم المو قع
                </h3>
              </Space>
            </div>
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <Button
                type="primary"
                className="p-0 h-[28px] w-[28px] rounded-md mb-2 md:mb-0"
              >
                <FaRegEdit color="#fff" size={15} />
              </Button>
              <div className="text-center md:text-left">
                <h3 className=" text-[16px] font-medium leading-[24px] text-black">
                  {t("hourPrice")}{" "}
                  <span className=" text-[16px] font-bold leading-[24px]">
                    20$
                  </span>
                </h3>
                <p className="text-[#80828D]  text-[12px] font-medium leading-[24px]">
                  50 {t("hours/week")}
                </p>
              </div>
            </div>
          </div>
          <Divider />
          <div>
            <div className="flex flex-col md:flex-row gap-2 items-center">
              <Button
                type="primary"
                className="p-0 h-[28px] w-[28px] rounded-md mb-2 md:mb-0"
              >
                <FaRegEdit color="#fff" size={15} />
              </Button>
              <h3 className="py-3  text-[16px] font-medium leading-[24px] text-right md:text-left">
                {t("description")}
              </h3>
            </div>
            <p className=" text-[12px] font-medium leading-[24px] text-[#62636C]">
              أنا مصمم واجهات مواقع محترف مع خبرة تتجاوز [عدد السنوات] عامًا في
              تطوير تصاميم واجهات مستخدم رائعة وسهلة الاستخدام. أعمل بشغف على
              تحويل الأفكار إلى تصاميم بصرية جذابة تتماشى مع احتياجات المستخدم
              وتجعل تجربة التصفح سهلة وممتعة.
            </p>
          </div>
        </Card>
        <div className="flex flex-col gap-2 h-[289px] px-[23px] py-[26px] rounded-[12px] border-[1px] border-[solid] border-[#E0E1E6]">
          <h3 className="text-[16px] font-medium leading-[24px] tracking-[0.5px] py-2">
            {t("services")}
          </h3>
          <ServicesProfile></ServicesProfile>
        </div>
        <div className="flex flex-col gap-2 h-[289px] px-[23px] py-[26px] rounded-[12px] border-[1px] border-[solid] border-[#E0E1E6]">
          <h3 className="text-[16px] font-medium leading-[24px] tracking-[0.5px] py-2">
            {t("feedback")}
          </h3>
          <FeedbackProfile></FeedbackProfile>
        </div>
        <div className="flex flex-col gap-2 h-[210px] px-[23px] py-[26px] rounded-[12px] border-[1px] border-[solid] border-[#E0E1E6]">
          <h3 className="text-[16px] font-medium leading-[24px] tracking-[0.5px] py-2">
            {t("completedJob")}
          </h3>
          <CompletedJobs></CompletedJobs>
        </div>
        <div className="flex flex-col gap-2 h-[289px] px-[23px] py-[26px] rounded-[12px] border-[1px] border-[solid] border-[#E0E1E6]">
          <div className="flex justify-between items-center">
            <h3 className="text-[16px] font-medium leading-[24px] tracking-[0.5px] py-2">
              {t("previousWork")}
            </h3>
            <Button type="primary" className="p-0 h-[28px] w-[28px] rounded-md">
              <FaRegEdit color="#fff" size={15} />
            </Button>
          </div>

          <PreviousWork></PreviousWork>
        </div>
      </div>
    </div>
  );
};

export default Profile;
