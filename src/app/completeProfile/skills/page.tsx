"use client";
import { useTranslations } from "next-intl";
import React, { useEffect } from "react";
import Image from "next/image";
import {
  Button,
  ConfigProvider,
  Divider,
  Form,
  Input,
  message,
  Progress,
  Select,
  Spin,
} from "antd";
import { CiCircleRemove } from "react-icons/ci";
import { useRouter } from "next/navigation";
import { RootState, useAppDispatch } from "@/store/rootReducer";
import { useSelector } from "react-redux";
import {
  getAvailableSkills,
  getFreelancerProfileData,
} from "@/store/reducers/freelanceProfile";
import { PatchReq } from "@/app/api/api";
import { StatusSuccessCodes } from "@/utils/successStatus";
import { useSession } from "next-auth/react";

export default function SkillsPage() {
  const {
    loadingGetAvailableSkills,
    skillsList,
    freelancerProfileData,
    profileReady,
  } = useSelector((state: RootState) => state.profile);
  const t = useTranslations();
  const [workAndSkillsForm] = Form.useForm();
  const router = useRouter();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAvailableSkills({}));
  }, []);
  const { data }: { data: any } = useSession<any>();

  function submitSkillsForm(values: any) {
    let url = `api/v1/client/profile/${data?.user_id}/`;
    PatchReq(url, values).then((res: any) => {
      if (StatusSuccessCodes.includes(res?.status)) {
        message.success(t("updatedSuccessfully"));
        dispatch(getFreelancerProfileData([{}, data?.user_id]));
        router.push("./experience");
      } else {
        res.errors.map((err: any) => {
          message.error(`${err.code}:${err.detail}`);
        });
      }
    });
  }

  function skip() {
    router.push("./experience");
  }

  function searchForSkill(searchParam: string) {
    if (searchParam) {
      dispatch(getAvailableSkills({ params: { search: searchParam } }));
    } else {
      dispatch(getAvailableSkills({}));
    }
  }

  useEffect(() => {
    workAndSkillsForm.setFieldsValue({
      ...freelancerProfileData,
      skills: freelancerProfileData?.skills?.map((skill: any) => {
        return skill.id;
      }),
    });
  }, [freelancerProfileData]);

  return (
    <div className="h-fit  flex flex-col px-[50px] m-10">
      <div className="  font-bold text-[24px] ">{t("work and skills")}</div>
      <Form
        form={workAndSkillsForm}
        layout="vertical"
        className="py-5 flex flex-col gap-5"
        onFinish={submitSkillsForm}
      >
        <Form.Item
          name="job_title"
          label={t("jobTitle")}
          className="w-full max-w-[750px] h-[84px]"
          rules={[{ required: true, message: t("requiredMessage") }]}
        >
          <Input
            defaultValue={freelancerProfileData?.job_title}
            placeholder={t("enterJobTitle")}
            className="h-[56px]"
            type="text"
            id="jobTitle"
          />
        </Form.Item>
        <Form.Item
          name="skills"
          label={`${t("skills")}  (${t("maxSkills")})`}
          className="w-full max-w-[750px] h-[200px]"
          rules={[
            { type: "array" },
            { required: true, message: t("requiredMessage") },
          ]}
        >
          <Select
            defaultValue={freelancerProfileData?.skills}
            placeholder={t("enterSkills")}
            removeIcon={<CiCircleRemove size={25} />}
            className="min-h-[56px]"
            maxCount={15}
            id="chooseSkill"
            mode="multiple"
            allowClear
            filterOption={false}
            style={{ width: "100%" }}
            onSearch={searchForSkill}
            loading={loadingGetAvailableSkills}
            options={skillsList}
            onBlur={() => {
              dispatch(getAvailableSkills({}));
            }}
            notFoundContent={
              loadingGetAvailableSkills ? (
                <Spin size="small" />
              ) : (
                <div>{t("noMatchedSkills")}</div>
              )
            }
          />
        </Form.Item>
        <Divider style={{ backgroundColor: "#7179ce", height: "1px" }} />
        <div className="flex flex-row justify-between w-full">
          <div className="flex flex-row gap-5 w-full">
            <Button
              htmlType="submit"
              type="primary"
              className="w-full max-w-[251px] h-[56px] rounded-[12px] px-[20px] py-[10px]"
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
      </Form>
    </div>
  );
}
