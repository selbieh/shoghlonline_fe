"use client";
import { PatchReq } from "@/app/api/api";
import { StatusSuccessCodes } from "@/utils/successStatus";
import {
  Card,
  Button,
  Divider,
  message,
  UploadProps,
  Empty,
  Spin,
  Modal,
} from "antd";
import { useSession } from "next-auth/react";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import Languages from "./languages";
import Certifications from "./certifications";

const QualificationInfo = ({ userData, isOwner }: any) => {
  const t = useTranslations();
  const { data }: { data: any } = useSession<any>();

  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const ref = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (userData?.bio_video) {
      setVideoUrl(userData?.bio_video);
    }
  }, [userData]);
  const patchUserData = (values: any) => {
    setLoading(true);
    PatchReq(`api/v1/client/profile/${data.user_id}/`, values).then((res) => {
      if (StatusSuccessCodes.includes(res?.status)) {
        setLoading(false);
        setVideoUrl(res?.data?.bio_video);
        message.success(t("updatedSuccessfully"));
      } else {
        message.error(`${res?.detail}`);
      }
    });
  };

  //#region video Upload
  const [videoUrl, setVideoUrl] = useState<string>();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      if (file) {
        const formData = new FormData();
        formData.append("bio_video", file);
        patchUserData(formData);
      }
    }
  };

  //#endregion video Upload

  return (
    <>
      <Card
        className="w-[370px] bg-[#F7F9FF] rounded-xl shadow-sm border-[1px] border-[#E0E1E6]"
        styles={{
          body: {
            padding: "16px 24px 16px 24px",
          },
        }}
      >
        <div className="flex justify-between items-center">
          <h3 className=" text-[14px] font-bold leading-[24px]  pb-2">
            {t("introductionVideo")}
          </h3>
          {isOwner && (
            <Button
              onClick={() => ref.current?.click()}
              type="primary"
              className="p-0 h-[28px] w-[28px] rounded-md"
            >
              <FaRegEdit color="#fff" size={15} />
            </Button>
          )}
          <input ref={ref} type="file" onChange={handleChange} hidden />
        </div>

        <span className="w-[-webkit-fill-available] rounded-xl">
          {loading ? (
            <div>
              <Spin />
            </div>
          ) : videoUrl ? (
            <>
              <video className="rounded-xl" src={videoUrl} controls></video>
            </>
          ) : (
            <div>
              <Empty />
            </div>
          )}
        </span>
        <Divider />
        <Languages userData={userData} isOwner={isOwner}></Languages>
        <Divider />
        <div className="flex justify-between items-center">
          <h3 className=" text-[14px] font-bold leading-[24px]  pb-2">
            {t("teaching")}
          </h3>
          {isOwner && (
            <Button
              onClick={() => router.push("/completeProfile/education")}
              type="primary"
              className="p-0 h-[28px] w-[28px] rounded-md"
            >
              <FaRegEdit color="#fff" size={15} />
            </Button>
          )}
        </div>
        <div>
          {userData?.educations?.length > 0 ? (
            userData?.educations?.map((item: any, index: number) => (
              <div key={index} className="flex justify-between">
                <div>
                  <p className=" text-[12px] font-bold leading-[24px]  text-[#62636C]">
                    {item?.institution}
                  </p>
                  <span className=" text-[12px] font-medium leading-[24px]  px-1">
                    {item?.degree}
                  </span>
                </div>
                <p className=" text-[12px] font-bold leading-[24px]  text-[#62636C]">
                  {new Date(item?.start_date).getFullYear()} -{" "}
                  {new Date(item?.end_date).getFullYear()}
                </p>
              </div>
            ))
          ) : (
            <div>
              <Empty />
            </div>
          )}
        </div>
        <Divider />
        <div className="flex justify-between items-center">
          <h3 className=" text-[14px] font-bold leading-[24px]  pb-2">
            {t("experiences")}
          </h3>
          {isOwner && (
            <Button
              onClick={() => router.push("/completeProfile/experience")}
              type="primary"
              className="p-0 h-[28px] w-[28px] rounded-md"
            >
              <FaRegEdit color="#fff" size={15} />
            </Button>
          )}
        </div>
        <div>
          {userData?.experiences?.length > 0 ? (
            userData?.experiences?.map((item: any, index: number) => (
              <div key={index} className="flex justify-between">
                <div>
                  <p className=" text-[12px] font-bold leading-[24px]  text-[#62636C]">
                    {item?.company_name}
                  </p>
                  <span className=" text-[12px] font-medium leading-[24px]  px-1">
                    {item?.role}
                  </span>
                </div>
                <p className=" text-[12px] font-bold leading-[24px]  text-[#62636C]">
                  {new Date(item?.start_date).getFullYear()} -{" "}
                  {item.is_still_working
                    ? t("Present")
                    : new Date(item?.end_date).getFullYear()}
                </p>
              </div>
            ))
          ) : (
            <div>
              <Empty />
            </div>
          )}
        </div>

        <Divider />
        <Certifications userData={userData} isOwner={isOwner}></Certifications>
        <Divider />
        <h3 className=" text-[14px] font-bold leading-[24px]  pb-2">
          {t("linkedAccounts")}
        </h3>
        <div className="flex gap-3">
          <div className="rounded-full w-[54px] h-[54px] px-[12px] py-[18px] border-[1px] border-[#BBD2FF] flex justify-center items-center">
            <img
              src="/icons/behance.svg"
              alt="behance"
              width={29}
              height={18}
            />
          </div>
          <div className="rounded-full w-[54px] h-[54px] px-[12px] py-[18px] border-[1px] border-[#BBD2FF] flex justify-center items-center">
            <img
              src="/icons/linkedin.svg"
              alt="linkedin"
              width={29}
              height={18}
            />
          </div>{" "}
          <div className="rounded-full w-[54px] h-[54px] px-[12px] py-[18px] border-[1px] border-[#BBD2FF] flex justify-center items-center">
            <img src="/icons/github.svg" alt="github" width={29} height={18} />
          </div>
        </div>
      </Card>
    </>
  );
};

export default QualificationInfo;
