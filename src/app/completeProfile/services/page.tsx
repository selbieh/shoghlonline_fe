"use client";
import { useTranslations } from "next-intl";
import React, { useEffect } from "react";
import Image from "next/image";
import { Button, Cascader, Divider, Form, message, Progress } from "antd";
import { servicesOptions } from "@/utils/dummyData/dummydata";
import { CiCircleRemove } from "react-icons/ci";
import { RootState, useAppDispatch } from "@/store/rootReducer";
import {
  getAvailableServices,
  getFreelancerProfileData,
  profileActions,
} from "@/store/reducers/freelanceProfile";
import { useSelector } from "react-redux";
import { PatchReq } from "@/app/api/api";
import { StatusSuccessCodes } from "@/utils/successStatus";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function ServicesPage() {
  const t = useTranslations();
  const [servicesForm] = Form.useForm();
  const dispatch = useAppDispatch();
  const {
    loadingGetAvailableServices,
    availableServices,
    getAvailableServicesServerError,
    freelancerProfileData,
    profileReady,
  } = useSelector((state: RootState) => state.profile);
  const router = useRouter();
  const { data }: { data: any } = useSession<any>();

  useEffect(() => {
    dispatch(getAvailableServices({}));
  }, []);

  function submitServicesForm(values: any) {
    values.services = values?.services?.map((value: any) => {
      if (value.length === 1) {
        return value[0];
      } else {
        return value[1];
      }
    });
    console.log(values);
    let url = `api/v1/client/profile/${data?.user_id}/`;
    PatchReq(url, values).then((res: any) => {
      if (StatusSuccessCodes.includes(res?.status)) {
        message.success(t("updatedSuccessfully"));
        dispatch(getFreelancerProfileData([{}, data?.user_id]));
        // router.push("./experience");
      } else {
        res.errors.map((err: any) => {
          message.error(`${err.code}:${err.detail}`);
        });
      }
    });
  }

  useEffect(() => {
    servicesForm.setFieldsValue({
      ...freelancerProfileData,
      services: freelancerProfileData?.services?.map((service: any) => {
        return [1, service.id];
      }),
    });
  }, [freelancerProfileData]);
  function skip() {}
  return (
    <div className="h-fit  flex flex-col px-[50px] m-10">
      <div className="  font-bold text-[24px] ">
        {t("whatServicesDoYouProvide")}
      </div>
      <Form
        form={servicesForm}
        layout="vertical"
        className="py-5 flex flex-col gap-5"
        onFinish={submitServicesForm}
      >
        <Form.Item
          name="services"
          label={t("services")}
          className="w-full max-w-[750px] h-[200px]"
          rules={[{ type: "array" }]}
        >
          <Cascader
            placeholder={t("choseServices")}
            multiple
            defaultValue={freelancerProfileData?.servcies}
            removeIcon={<CiCircleRemove size={25} />}
            className="min-h-[56px]"
            id="chooseService"
            allowClear
            options={availableServices}
            expandTrigger="hover"
            showCheckedStrategy={Cascader.SHOW_CHILD}
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
