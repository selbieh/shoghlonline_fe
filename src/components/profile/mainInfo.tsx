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
import { useTranslations } from "next-intl";
import Image from "next/image";
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
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (userData?.profile_picture) {
      setImageUrl(userData?.profile_picture);
    }
    if (userData?.skills) {
      setSkillsTags(userData?.skills);
    }
  }, [userData]);
  const patchUserData = (data: any) => {
    PatchReq("api/v1/client/profile/", data).then((res) => {
      if (StatusSuccessCodes.includes(res?.status)) {
        setLoading(false);
        setImageUrl(res?.data?.profile_picture);
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

  //#region Skills Modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    if (skillsTags !== userData?.skills) {
      patchUserData({ skills: skillsTags });
    }
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const [skillsTags, setSkillsTags] = useState<string[]>([]);
  const [inputVisible, setInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef<InputRef>(null);

  useEffect(() => {
    if (inputVisible) {
      inputRef.current?.focus();
    }
  }, [inputVisible]);

  const handleClose = (removedTag: string) => {
    const newTags = skillsTags.filter((tag) => tag !== removedTag);
    console.log(newTags);
    setSkillsTags(newTags);
  };

  const showInput = () => {
    setInputVisible(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleInputConfirm = () => {
    if (inputValue && !skillsTags.includes(inputValue)) {
      setSkillsTags([...skillsTags, inputValue]);
    }
    setInputVisible(false);
    setInputValue("");
  };

  //#endregion Skills Modal
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
              />
            ) : (
              uploadButton
            )}
          </Upload>
          {/* <Image
          src="https://via.placeholder.com/104"
          alt="Profile"
          width={104}
          height={104}
          className="rounded-full"
        /> */}
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
              <img
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
                onClick={showModal}
              >
                <FaRegEdit color="#fff" size={15} />
              </Button>
            )}
          </div>

          <div className="flex gap-2 p-3">
            {skillsTags.length > 0 ? (
              skillsTags.map<React.ReactNode>((tag, index) => {
                const isLongTag = tag.length > 20;
                const tagElem = (
                  <Tag
                    key={index}
                    color="#ECF2FF"
                    bordered={false}
                    className="bg-[#ECF2FF] w-[117px] h-[40px] px-[16px] py-[8px] rounded-[28px] text-center"
                  >
                    <span className="text-[#20102B]  text-[14px] font-normal leading-[24px] ">
                      {isLongTag ? `${tag.slice(0, 20)}...` : tag}
                    </span>
                  </Tag>
                );
                return isLongTag ? (
                  <Tooltip title={tag} key={tag}>
                    {tagElem}
                  </Tooltip>
                ) : (
                  tagElem
                );
              })
            ) : (
              <div className="flex justify-center items-center h-[64px] w-full">
                <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
              </div>
            )}
          </div>
        </div>
      </Card>
      <Modal
        title={t("skills")}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText={t("save")}
        cancelText={t("cancel")}
      >
        <Flex gap="4px 0" wrap>
          {skillsTags.map<React.ReactNode>((tag, index) => {
            const isLongTag = tag.length > 20;
            const tagElem = (
              <Tag
                key={tag}
                // closable={index !== 0}
                style={{ userSelect: "none" }}
                onClose={() => handleClose(tag)}
              >
                <span>{isLongTag ? `${tag.slice(0, 20)}...` : tag}</span>
              </Tag>
            );
            return isLongTag ? (
              <Tooltip title={tag} key={tag}>
                {tagElem}
              </Tooltip>
            ) : (
              tagElem
            );
          })}
          {inputVisible ? (
            <Input
              ref={inputRef}
              type="text"
              size="small"
              style={{
                height: 22,
                borderStyle: "dashed",
              }}
              value={inputValue}
              onChange={handleInputChange}
              onBlur={handleInputConfirm}
              onPressEnter={handleInputConfirm}
            />
          ) : (
            <Tag
              icon={<FaPlus />}
              onClick={showInput}
              className="flex gap-2 items-center bg-slate-100 text-slate-800"
            >
              {t("addNewSkill")}
            </Tag>
          )}
        </Flex>
      </Modal>
    </>
  );
};

export default MainInfo;
