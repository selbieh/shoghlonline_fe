"use client";
import { GetByIdReq } from "@/app/api/api";
import AuthGuard from "@/components/authenticationHOC/authenticated";
import CareerInfo from "@/components/profile/careerInfo";
import CompletedJobs from "@/components/profile/completedJobs";
import FeedbackProfile from "@/components/profile/feedback";
import MainInfo from "@/components/profile/mainInfo";
import PreviousWork from "@/components/profile/previousWork";
import QualificationInfo from "@/components/profile/qualificationInfo";
import ServicesProfile from "@/components/profile/services";
import StatsCard from "@/components/profile/statsCard";
import { StatusSuccessCodes } from "@/utils/successStatus";
import { Button, Card, Divider, message, Progress, Rate } from "antd";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { BiSolidFlagAlt } from "react-icons/bi";
import { FaArrowLeft, FaRegEdit } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";

function Profile({ params: { id } }: any) {
  const t = useTranslations();
  const [userData, setUserData] = React.useState<any>({});
  const [isOwner, setIsOwner] = React.useState<boolean>(true);
  const router = useRouter();
  const [completedProjects, setCompletedProjects] = React.useState(0);
  useEffect(() => {
    getUserProfileData();
    setIsOwner(id ? false : true);
  }, []);

  const getUserProfileData = () => {
    GetByIdReq(`api/v1/client/profile/`).then((res: any) => {
      if (StatusSuccessCodes.includes(res.status)) {
        console.log(res);
        setUserData(res?.data);
        setCompletedProjects(
          (res?.data?.completed_projects * 100) /
            (res?.data?.completed_projects +
              res?.data?.project_cancelled +
              res?.data?.project_ongoing)
        );
      } else {
        message.error(`${res.detail}`);
      }
    });
  };
  return (
    <div className="flex flex-col md:flex-row bg-white">
      <div className="w-full md:w-1/3 lg:w-1/3 xl:w-1/3  p-4 flex justify-start items-center gap-4 flex-col">
        <MainInfo userData={userData} isOwner={isOwner}></MainInfo>
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
              <Rate disabled defaultValue={userData?.rating} />
            </span>
          </div>
          <Divider />

          <div className="flex justify-between">
            <span className="w-[-webkit-fill-available]  text-[14px] font-bold leading-[24px] ">
              {t("projectsCompleted")}
            </span>
            <span className="contents px-2 w-[45%]">
              <Progress size="small" percent={completedProjects} />
            </span>
          </div>
        </Card>
        <QualificationInfo
          userData={userData}
          isOwner={isOwner}
        ></QualificationInfo>
      </div>
      <div className="w-full md:w-2/3 lg:w-2/3 xl:w-2/3 p-4 flex gap-4 flex-col">
        <div className="flex justify-end">
          <Button
            style={{ height: "32px" }}
            type="primary"
            className="h-[38px] rounded-md  text-[12px] font-bold leading-[18px]"
            href="/freelance/settings"
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
            <h3
              className="text-[12px] font-bold leading-[18px] text-[#7179CE] cursor-pointer"
              onClick={() => {
                router.push("/completeProfile/skills");
              }}
            >
              {t("completeProfileNow")}
            </h3>
            {}
            <BiSolidFlagAlt color="#7179CE" />
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
          <CareerInfo userData={userData} isOwner={isOwner}></CareerInfo>
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
            <Button
              style={{ height: "28px" }}
              type="primary"
              className="p-0 h-[28px] w-[28px] rounded-md"
            >
              <FaRegEdit color="#fff" size={15} />
            </Button>
          </div>

          <PreviousWork></PreviousWork>
        </div>
      </div>
    </div>
  );
}

export default AuthGuard(Profile);
