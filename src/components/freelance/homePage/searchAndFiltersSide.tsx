"use client";
import {
  getAvailableServices,
  getAvailableSkills,
} from "@/store/reducers/freelanceProfile";
import { freelanceActions } from "@/store/reducers/freelanceSlice";
import { RootState, useAppDispatch } from "@/store/rootReducer";
import { AvailableSkill } from "@/utils/types/sliceInitialStates/IFreelancerProfile";
import {
  Cascader,
  Checkbox,
  ConfigProvider,
  Form,
  Select,
  Slider,
  Spin,
} from "antd";
import { useTranslations } from "next-intl";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { CiCircleRemove } from "react-icons/ci";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useSelector } from "react-redux";

export default function SearchAndFiltersSide() {
  const {
    skillsList,
    availableSkills,
    loadingGetAvailableSkills,
    loadingGetAvailableServices,
    availableServices,
    getAvailableServicesServerError,
  } = useSelector((state: RootState) => state.profile);
  const dispatch = useAppDispatch();
  const [selectedSkills, setSelectedSkills] = useState<any[]>([]);
  const [selectedServices, setSelectedServices] = useState<any[]>([]);
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
      <ConfigProvider
        theme={{
          components: {
            Checkbox: {
              colorText: "#80828d",
              colorWhite: "#84a6f2",
              colorPrimary: "#e6f3ff",
            },
            Select: {
              borderRadius: 12,
              controlHeight: 40,
            },
          },
        }}
      >
        <Form layout="vertical" form={filterForm} onFinish={finishForm}>
          <div className="flex flex-col gap-3">
            <div className="w-[286px] h-[fit] py-[16px] px-[24px] rounded-[12px] border-[1px] bg-[#fdfdfe]">
              <Form.Item
                label={
                  <span className=" font-bold text-[12px]">
                    {t("categories")}
                  </span>
                }
                name="services"
              >
                <Select
                  placeholder={t("choseServices")}
                  mode="multiple"
                  showSearch
                  removeIcon={<CiCircleRemove size={25} />}
                  className=""
                  id="chooseService"
                  allowClear
                  tagRender={() => {
                    return <></>;
                  }}
                  options={availableServices}
                  // expandTrigger="hover"
                  // showCheckedStrategy={Cascader.SHOW_CHILD}
                  onChange={(e) => {
                    setSelectedServices(
                      availableServices?.filter((service: any) => {
                        return e.includes(service.value);
                      })
                    );
                    filterForm.submit();
                  }}
                />
              </Form.Item>
              <div className="px-[10px] w-[235px] items-center ">
                {selectedServices.length > 0 &&
                  selectedServices.map((service: any) => {
                    return (
                      <div
                        key={service.id}
                        className=" flex flex-row justify-between "
                      >
                        <span className=" text-[14px] text-[#80828d]">
                          {service.label}
                        </span>

                        <IoCloseCircleOutline
                          size={15}
                          key={service.value}
                          id={service.value}
                          className="cursor-pointer"
                          onClick={(e: any) => {
                            let servicesInTheForm =
                              filterForm.getFieldValue("services");
                            filterForm.setFieldValue(
                              "services",
                              servicesInTheForm?.filter((rec: any) => {
                                return rec != e.target.id;
                              })
                            );

                            setSelectedServices(
                              selectedServices.filter((service) => {
                                return service.value != e.target.id;
                              })
                            );
                            filterForm.submit();
                          }}
                        />
                      </div>
                    );
                  })}
              </div>
            </div>
            <div className="w-[286px] h-fit py-[16px] px-[24px] rounded-[12px] border-[1px] bg-[#fdfdfe]">
              <div className="w-full flex flex-row gap-[170px]  my-3">
                <span className=" font-bold text-[12px]">
                  {t("experienceLabel")}
                </span>
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
              <Form.Item
                label={
                  <span className=" font-bold text-[12px]">{t("skills")}</span>
                }
                name="skills"
              >
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
                  // defaultValue={[]}
                  onChange={(e) => {
                    filterForm.submit();
                    setSelectedSkills(
                      availableSkills?.filter((skill: AvailableSkill) => {
                        return e.includes(skill.id);
                      })
                    );
                  }}
                  tagRender={() => {
                    return <></>;
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
              <div className="px-[10px] w-[235px] items-center ">
                {selectedSkills.length > 0 &&
                  selectedSkills.map((skill: any) => {
                    return (
                      <div
                        key={skill.id}
                        className=" flex flex-row justify-between "
                      >
                        <span className=" text-[14px] text-[#80828d]">
                          {skill.name}
                        </span>

                        <IoCloseCircleOutline
                          size={15}
                          key={skill.id}
                          id={skill.id}
                          className="cursor-pointer"
                          onClick={(e: any) => {
                            let skillsInTheForm =
                              filterForm.getFieldValue("skills");

                            filterForm.setFieldValue(
                              "skills",
                              skillsInTheForm.filter((rec: any) => {
                                return rec != e.target.id;
                              })
                            );

                            setSelectedSkills(
                              selectedSkills.filter((skill) => {
                                return skill.id != e.target.id;
                              })
                            );
                            filterForm.submit();
                          }}
                        />
                      </div>
                    );
                  })}
              </div>
            </div>
            <div className="w-[286px] h-fit py-[16px] px-[24px] rounded-[12px] border-[1px] bg-[#fdfdfe]">
              <Form.Item
                label={
                  <span className=" font-bold text-[12px]">
                    {t("location")}
                  </span>
                }
                name="location"
              >
                <Select
                  onSelect={() => {
                    filterForm.submit();
                  }}
                />
              </Form.Item>
            </div>
            <div className="max-w-[286px] min-h-[144px] py-[16px] px-[24px] rounded-[12px] border-[1px] bg-[#fdfdfe]">
              <div className="w-full flex flex-row gap-[130px]  my-3">
                <span className=" font-bold text-[12px]">
                  {t("projectType")}
                </span>
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
            <div className="max-w-[286px] h-fit py-[16px] px-[24px] rounded-[12px] border-[1px] bg-[#fdfdfe] relative">
              <div className="w-full flex flex-row gap-[106px]  my-3">
                <span className=" font-bold text-[12px]">
                  {t("fixedPrice")}
                </span>
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
                  onChange={() => {
                    filterForm.submit();
                  }}
                />
              </Form.Item>
              <div className="flex flex-row justify-between absolute right-[35px] top-[60px] w-[220px]">
                <span className="text-[9px]">{t("least")}</span>
                <span className="text-[9px]">{t("highest")}</span>
              </div>
            </div>
            <div className="max-w-[286px] h-fit py-[16px] px-[24px] rounded-[12px] border-[1px] bg-[#fdfdfe] relative">
              <div className="w-full flex flex-row gap-[106px]  my-3">
                <span className=" font-bold text-[12px]">{t("hourPrice")}</span>
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
                  onChange={(e) => {
                    filterForm.submit();
                  }}
                />
              </Form.Item>
              <div className="flex flex-row justify-between absolute w-[220px] right-[35px] top-[75px]">
                <span className="text-[9px]">{t("least")}</span>
                <span className="text-[9px]">{t("highest")}</span>
              </div>
            </div>
            <div className="max-w-[286px] h-fit py-[16px] px-[24px] rounded-[12px] border-[1px] bg-[#fdfdfe]">
              <div className="w-full flex flex-row gap-[106px]  my-3">
                <span className=" font-bold text-[12px]">
                  {t("clientInfo")}
                </span>
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
                {/* <ConfigProvider
                  theme={{
                    token: {
                      colorText: "#80828d",
                      colorPrimary: "#7179ce",
                      colorBorder: "#7179ce",
                    },
                  }}
                > */}
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
                {/* </ConfigProvider> */}
              </Form.Item>
            </div>
          </div>
        </Form>
      </ConfigProvider>
    </div>
  );
}
