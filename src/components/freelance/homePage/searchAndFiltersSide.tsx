"use client";
import {
  getAvailableServices,
  getAvailableSkills,
} from "@/store/reducers/freelanceProfile";
import {
  freelanceActions,
  getVacancies,
} from "@/store/reducers/freelanceSlice";
import { RootState, useAppDispatch } from "@/store/rootReducer";
import {
  Cascader,
  Checkbox,
  ConfigProvider,
  Form,
  Input,
  Select,
  Slider,
  Spin,
} from "antd";
import { useTranslations } from "next-intl";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import { CiCircleRemove } from "react-icons/ci";
import { useSelector } from "react-redux";

export default function SearchAndFiltersSide() {
  const {
    skillsList,
    loadingGetAvailableSkills,
    loadingGetAvailableServices,
    availableServices,
    getAvailableServicesServerError,
  } = useSelector((state: RootState) => state.profile);
  const dispatch = useAppDispatch();

  const t = useTranslations();
  const options = [
    { label: t("beginner"), value: "beginner" },
    { label: t("intermediate"), value: "intermediate" },
    { label: t("expert"), value: "expert" },
  ];
  const projectTypeOptions = [
    { label: t("fixedPrice"), value: "fixedPrice" },
    { label: t("byHour"), value: "byHour" },
  ];
  const clientInfoOptions = [{ label: t("paymentVerified"), value: true }];

  const searchParams = useSearchParams();
  const queryParams = new URLSearchParams(searchParams);
  const pathname = usePathname();
  const { replace } = useRouter();
  const [filterForm] = Form.useForm();

  useEffect(() => {
    dispatch(getAvailableServices({}));
    dispatch(getAvailableSkills({}));
  }, []);

  function searchForSkill(searchParam: string) {
    if (searchParam) {
      dispatch(getAvailableSkills({ params: { search: searchParam } }));
    } else {
      dispatch(getAvailableSkills({}));
    }
  }

  function finishForm(values: any) {
    console.log(values);

    for (let key in values) {
      if (values[key] !== undefined) {
        if (values[key].length > 0) {
          if (key === "hour_price") {
            queryParams.set("min_hour_price", values[key][0]);
            queryParams.set("max_hour_price", values[key][1]);
          } else if (key === "fixed_price") {
            queryParams.set("min_fixed_price", values[key][0]);
            queryParams.set("max_fixed_price", values[key][1]);
          } else {
            queryParams.set(key, values[key]);
          }
        } else {
          queryParams.delete(key);
        }
      } else {
        if (key === "hour_price") {
          queryParams.delete("min_hour_price");
          queryParams.delete("max_hour_price");
        } else if (key === "fixed_price") {
          queryParams.delete("min_fixed_price");
          queryParams.delete("max_fixed_price");
        }
        queryParams.delete(key);
      }
    }
    let qParams: any = {};
    queryParams.forEach((val, key) => {
      qParams[key] = val;
    });

    dispatch(freelanceActions.setQueryParams(qParams));
    replace(`${pathname}?${queryParams.toString()}`);
  }

  function clear() {
    queryParams.forEach((val, key) => {
      queryParams.delete(key);
    });
    dispatch(freelanceActions.setQueryParams({}));
    replace(`${pathname}`);
    filterForm.resetFields();
    `1`;
  }
  return (
    <div className="h-full w-fit my-[72px]  ">
      <div className="w-full flex flex-row justify-evenly my-3">
        <span className="font-bold">{t("filter")}</span>
        <span
          onClick={clear}
          className="text-[#1b3dbc] text-[14px] cursor-pointer"
        >
          {t("clear")}
        </span>
      </div>
      <Form layout="vertical" form={filterForm} onFinish={finishForm}>
        <div className="flex flex-col gap-3">
          <div className="w-[286px] h-[fit] py-[16px] px-[24px] rounded-[12px] border-[1px] bg-[#fdfdfe]">
            <Form.Item label={t("categories")} name="services">
              <ConfigProvider
                theme={{
                  token: {
                    controlHeight: 40,
                  },
                }}
              >
                <Cascader
                  placeholder={t("choseServices")}
                  multiple
                  removeIcon={<CiCircleRemove size={25} />}
                  className=""
                  id="chooseService"
                  allowClear
                  options={availableServices}
                  expandTrigger="hover"
                  showCheckedStrategy={Cascader.SHOW_CHILD}
                  onChange={() => {
                    filterForm.submit();
                  }}
                />
              </ConfigProvider>
            </Form.Item>
          </div>
          <div className="w-[286px] h-fit py-[16px] px-[24px] rounded-[12px] border-[1px] bg-[#fdfdfe]">
            <div className="w-full flex flex-row gap-[170px]  my-3">
              <span>{t("experienceLabel")}</span>
              <span
                className="text-[#1b3dbc] text-[14px] cursor-pointer"
                onClick={() => {
                  filterForm.setFieldValue("experience", undefined);
                  filterForm.submit();
                }}
              >
                {t("clear")}
              </span>
            </div>
            <Form.Item name="experience">
              <Checkbox.Group
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
                options={options}
                onChange={(e) => {
                  filterForm.submit();
                }}
              />
            </Form.Item>
          </div>
          <div className="w-[286px] h-fit py-[16px] px-[24px] rounded-[12px] border-[1px] bg-[#fdfdfe]">
            <Form.Item label={t("skills")} name="skills">
              <Select
                placeholder={t("search")}
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
                defaultValue={[]}
                onChange={() => {
                  filterForm.submit();
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
          </div>
          <div className="w-[286px] h-fit py-[16px] px-[24px] rounded-[12px] border-[1px] bg-[#fdfdfe]">
            <Form.Item label={t("location")} name="location">
              <Select
                onSelect={() => {
                  filterForm.submit();
                }}
              />
            </Form.Item>
          </div>
          <div className="max-w-[286px] min-h-[144px] py-[16px] px-[24px] rounded-[12px] border-[1px] bg-[#fdfdfe]">
            <div className="w-full flex flex-row gap-[130px]  my-3">
              <span>{t("projectType")}</span>
              <span
                className="text-[#1b3dbc] text-[14px] cursor-pointer"
                onClick={() => {
                  filterForm.setFieldValue("jop_type", undefined);
                  filterForm.submit();
                }}
              >
                {t("clear")}
              </span>
            </div>
            <Form.Item name="jop_type">
              <Checkbox.Group
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
                options={projectTypeOptions}
                onChange={(e) => {
                  filterForm.submit();
                }}
              />
            </Form.Item>
          </div>
          <div className="max-w-[286px] h-fit py-[16px] px-[24px] rounded-[12px] border-[1px] bg-[#fdfdfe]">
            <div className="w-full flex flex-row gap-[106px]  my-3">
              <span>{t("fixedPrice")}</span>
              <div className="flex flex-row gap-1">
                <span
                  className="text-[#1b3dbc] text-[14px] cursor-pointer "
                  onClick={() => {
                    filterForm.submit();
                  }}
                >
                  {t("apply1")}
                </span>

                <span
                  className="text-[#1b3dbc] text-[14px] cursor-pointer "
                  onClick={() => {
                    filterForm.setFieldValue("fixed_price", undefined);
                    filterForm.submit();
                  }}
                >
                  {t("clear")}
                </span>
              </div>
            </div>
            <Form.Item name="fixed_price">
              <Slider
                reverse
                max={1000}
                min={0}
                range
                step={1}
                defaultValue={[0, 0]}
                // onChange={(e) => {
                //   filterForm.submit();
                // }}
              />
            </Form.Item>
            <div className="flex flex-row justify-between">
              <span className="text-[9px]">{t("least")}</span>
              <span className="text-[9px]">{t("highest")}</span>
            </div>
          </div>
          <div className="max-w-[286px] h-fit py-[16px] px-[24px] rounded-[12px] border-[1px] bg-[#fdfdfe]">
            <div className="w-full flex flex-row gap-[106px]  my-3">
              <span>{t("hourPrice")}</span>
              <div className="flex flex-row gap-1">
                <span
                  className="text-[#1b3dbc] text-[14px] cursor-pointer "
                  onClick={() => {
                    filterForm.submit();
                  }}
                >
                  {t("apply1")}
                </span>

                <span
                  className="text-[#1b3dbc] text-[14px] cursor-pointer "
                  onClick={() => {
                    filterForm.setFieldValue("hour_price", undefined);
                    filterForm.submit();
                  }}
                >
                  {t("clear")}
                </span>
              </div>
            </div>
            <Form.Item name="hour_price">
              <Slider
                reverse
                max={1000}
                min={0}
                range
                step={1}
                defaultValue={[0, 0]}
                // onChange={(e) => {
                //   filterForm.submit();
                // }}
              />
            </Form.Item>
            <div className="flex flex-row justify-between">
              <span className="text-[9px]">{t("least")}</span>
              <span className="text-[9px]">{t("highest")}</span>
            </div>
          </div>
          <div className="max-w-[286px] h-fit py-[16px] px-[24px] rounded-[12px] border-[1px] bg-[#fdfdfe]">
            <div className="w-full flex flex-row gap-[106px]  my-3">
              <span>{t("clientInfo")}</span>
              <span
                className="text-[#1b3dbc] text-[14px] cursor-pointer"
                onClick={() => {
                  filterForm.setFieldValue("payment_verified", undefined);
                  filterForm.submit();
                }}
              >
                {t("clear")}
              </span>
            </div>
            <Form.Item name="payment_verified">
              <Checkbox.Group
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
                options={clientInfoOptions}
                onChange={(e) => {
                  filterForm.submit();
                }}
              />
            </Form.Item>
          </div>
        </div>
      </Form>
    </div>
  );
}
