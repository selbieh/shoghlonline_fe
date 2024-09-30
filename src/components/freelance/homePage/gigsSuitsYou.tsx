import Search from "@/components/search/search";
import { getVacancies } from "@/store/reducers/freelanceSlice";
import { RootState, useAppDispatch } from "@/store/rootReducer";
import {
  Button,
  ConfigProvider,
  Divider,
  message,
  Select,
  Skeleton,
} from "antd";
import { useTranslations } from "next-intl";
import React, { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";

import GigOffer from "./gigOffer";

export default function GigsSuitsYou() {
  const t = useTranslations();
  const { vacancies, getVacanciesError, getVacanciesLoading } = useSelector(
    (state: RootState) => state.freelance
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getVacancies({}));
  }, []);

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
    dispatch(getVacancies({ params: { ordering: e } }));
  }

  useEffect(() => {
    getVacanciesError && message.error("Something went wrong");
  }, [getVacanciesError]);

  return (
    <Fragment>
      <div>{t("gigsSuitsYouTab")}</div>
      <Search />

      <div className="w-full rounded-[12px] py-[26px] border-[1px] border-[#e0e1e6] m-5 p-5">
        <div className="px-10 border-b-[1px] border-b-[#e0e1e6] pb-5 flex gap-2 items-center">
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
