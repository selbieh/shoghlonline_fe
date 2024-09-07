import { PatchReq } from "@/app/api/api";
import { StatusSuccessCodes } from "@/utils/successStatus";
import {
  Card,
  Button,
  Tag,
  Upload,
  GetProp,
  UploadProps,
  message,
  Spin,
  Modal,
  InputRef,
  theme,
  Flex,
  Tooltip,
  Input,
  Empty,
} from "antd";
import { useSession } from "next-auth/react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { FaPlus, FaRegEdit } from "react-icons/fa";
type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];

const beforeUpload = (file: FileType) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
};
const MainInfo = ({ userData, isOwner }: any) => {
  const t = useTranslations();
  const { data }: { data: any } = useSession<any>();

  const [loading, setLoading] = useState(false);
  const [currentSkillsTags, setCurrentSkillsTags] = useState<any>([]);
  const router = useRouter();
  useEffect(() => {
    if (userData?.profile_picture) {
      setImageUrl(userData?.profile_picture);
    }
    if (userData?.skills) {
      setCurrentSkillsTags(userData?.skills);
    }
  }, [userData]);
  const patchUserData = (data: any) => {
    PatchReq(`api/v1/client/profile/${data.user_id}/`, data).then((res) => {
      if (StatusSuccessCodes.includes(res?.status)) {
        setLoading(false);
        setImageUrl(res?.data?.profile_picture);
        setCurrentSkillsTags(res?.data?.skills);
        message.success(t("updatedSuccessfully"));
      } else {
        message.error(`${res?.detail}`);
      }
    });
  };

  //#region Image Upload
  const [imageUrl, setImageUrl] = useState<string>();

  const uploadButton = (
    <button
      style={{ border: 0, background: "none" }}
      type="button"
      className="flex justify-center flex-col items-center gap-1 text-[#8D949F] text-[14px] font-medium cursor-pointer"
    >
      {loading ? <Spin /> : <FaPlus />}
      <div style={{ marginTop: 8 }}>{t("Upload")}</div>
    </button>
  );

  const handleChange: UploadProps["onChange"] = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      const formData = new FormData();
      formData.append("profile_picture", info.file.originFileObj as FileType);
      patchUserData(formData);
    }
  };

  //#endregion Image Upload

  return (
    <>
      <Card
        className="w-[370px] h-[378px] bg-[#F7F9FF] rounded-xl shadow-sm border-[1px] border-[#E0E1E6]"
        styles={{
          body: {
            padding: "16px, 24px, 16px, 24px",
          },
        }}
      >
        <div className="flex justify-center items-center flex-col gap-3">
          <Upload
            name="avatar"
            listType="picture-circle"
            className="avatar-uploader"
            showUploadList={false}
            beforeUpload={beforeUpload}
            onChange={handleChange}
          >
            {imageUrl ? (
              <Image
                src={imageUrl}
                alt="avatar"
                style={{ width: "100%" }}
                width={104}
                height={104}
                className="rounded-full"
              />
            ) : (
              uploadButton
            )}
          </Upload>

          <p className=" text-[16px] font-medium leading-[24px] ">
            {userData?.first_name} {userData?.last_name}
          </p>
          <p className=" text-[16px] font-medium leading-[24px] ">
            {userData?.email}
          </p>
          <div className="flex gap-3">
            <span className="flex gap-2">
              <Image
                src="/icons/cursor-1.svg"
                alt="cursor-1"
                width={16}
                height={16}
              />
              <span className=" text-[11px] font-medium leading-[16px] ">
                {userData?.location}
              </span>
            </span>
            <span className="flex gap-2">
              <Image
                src="/icons/time-clock-nine.svg"
                alt="time-clock-nine"
                width={16}
                height={16}
              />
              <span className=" text-[11px] font-medium leading-[16px] ">
                2:10 مساء
              </span>
            </span>
          </div>
        </div>
        <div className="mt-5">
          <div className="flex justify-between items-center">
            <h3 className=" text-[14px] font-bold leading-[24px]  text-[#000]">
              {t("skills")}
            </h3>
            {isOwner && (
              <Button
                type="primary"
                className="p-0 h-[28px] w-[28px] rounded-md"
                onClick={() => {
                  router.push("/completeProfile/skills");
                }}
              >
                <FaRegEdit color="#fff" size={15} />
              </Button>
            )}
          </div>

          <div className="flex gap-2 p-3">
            {currentSkillsTags.length > 0 ? (
              currentSkillsTags.map((tag: any) => (
                <Tag
                  key={tag.id}
                  color="#ECF2FF"
                  bordered={false}
                  className="bg-[#ECF2FF] w-[117px] h-[40px] px-[16px] py-[8px] rounded-[28px] text-center"
                >
                  <span className="text-[#20102B]  text-[14px] font-normal leading-[24px] ">
                    {tag?.name}
                  </span>
                </Tag>
              ))
            ) : (
              <div className="flex justify-center items-center h-[64px] w-full">
                <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
              </div>
            )}
          </div>
        </div>
      </Card>
    </>
  );
};

export default MainInfo;
