"use client";
import { Button, ConfigProvider, Divider, Select, Skeleton } from "antd";
import { useTranslations } from "next-intl";
import React, { Fragment } from "react";
import GigOffer from "./gigOffer";
import Image from "next/image";
import Search from "@/components/search/search";
import {
  freelanceActions,
  getVacancies,
} from "@/store/reducers/freelanceSlice";
import { RootState, useAppDispatch } from "@/store/rootReducer";
import { useSelector } from "react-redux";
import { useSearchParams } from "next/navigation";

export default function SearchAndCategoryGigs() {
  const t = useTranslations();
  const { vacancies, getVacanciesError, getVacanciesLoading, queryParams } =
    useSelector((state: RootState) => state.freelance);

  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const dispatch = useAppDispatch();

  const items = [
    {
      label: t("newest"),
      value: "newest",
    },
    {
      label: t("oldest"),
      value: "oldest",
    },
    {
      label: t("priceUp"),
      value: "price up",
    },
    {
      label: t("priceDown"),
      value: "price down",
    },
  ];

  function sortBy(e: any) {
    params.set("ordering", e);
    let qParams: any = {};
    params.forEach((val, key) => {
      qParams[key] = val;
    });

    dispatch(freelanceActions.setQueryParams(qParams));
    // dispatch(getVacancies({ params: { ...queryParams, ordering: e } }));
  }
  return (
    <Fragment>
      <Search />

      <div className="w-full rounded-[12px] py-[26px] border-[1px] border-[#e0e1e6] m-5 p-5">
        <div className=" flex flex-row justify-between border-b-[#e0e1e6] border-b-[1px]">
          <div className="px-10   pb-5 flex gap-2 items-center">
            <span className="font-bold ">{t("bestResults")}</span>
            <span>{t("sortBy")}</span>
            <ConfigProvider
              theme={{
                components: {
                  Select: {
                    borderRadius: 12,
                    controlHeight: 40,
                  },
                },
              }}
            >
              <Select
                options={items}
                defaultValue={"newest"}
                onSelect={sortBy}
                className="min-w-[120px]"
              />
            </ConfigProvider>
          </div>
          <Button
            style={{
              height: "40px",
              width: "fit",
              padding: "8px 12px 8px 12px",
              borderRadius: "6px",
              color: "#7179ce",
            }}
            icon={
              <Image src="/icons/bell.svg" alt="bell" width={18} height={18} />
            }
          >
            {t("receiveNotifications")}
          </Button>
        </div>
        {getVacanciesLoading ? (
          <>
            <Skeleton active className="w-full h-[339px] my-5" />
            <Divider className="bg-[#e7e8ec]" />
          </>
        ) : (
          <>
            {vacancies?.results?.map((vacancy: any) => {
              return <GigOffer key={vacancy.id} data={vacancy} />;
            })}
          </>
        )}
        <div className="w-full flex items-center justify-center">
          {vacancies?.next && (
            <Button
              style={{ height: "34px" }}
              className="w-[95px] h-[34px] rounded-[6px] py-[8px] px-[12]"
              type="primary"
            >
              {t("more")}
            </Button>
          )}
        </div>
      </div>
    </Fragment>
  );
}
