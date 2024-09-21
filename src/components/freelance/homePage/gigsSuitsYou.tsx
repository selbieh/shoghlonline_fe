import {
  Button,
  Divider,
  Dropdown,
  Input,
  MenuProps,
  Skeleton,
  Space,
  Spin,
} from "antd";
import { useTranslations } from "next-intl";
import React, { Fragment, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import GigOffer from "./gigOffer";
import { Vacancy } from "@/utils/types/sliceInitialStates/IFreelanceInitialState";
import { RootState, useAppDispatch } from "@/store/rootReducer";
import { useSelector } from "react-redux";
import { getVacancies } from "@/store/reducers/freelanceSlice";

export default function GigsSuitsYou() {
  const t = useTranslations();
  const { vacancies, getVacanciesError, getVacanciesLoading } = useSelector(
    (state: RootState) => state.freelance
  );
  const dispatch = useAppDispatch();

  console.log(vacancies);

  useEffect(() => {
    dispatch(getVacancies({}));
  }, []);

  const items: MenuProps["items"] = [
    {
      label: t("newest"),
      key: "1",
    },
    {
      label: t("oldest"),
      key: "2",
    },
    {
      label: t("priceUp"),
      key: "3",
    },
    {
      label: t("priceDown"),
      key: "4",
    },
  ];

  function sortBy(e: any) {
    console.log("key", e);
  }
  return (
    <Fragment>
      <div>{t("gigsSuitsYouTab")}</div>
      <div className="w-full m-5 ">
        <Input
          className="h-[56px]"
          placeholder={t("search")}
          prefix={<CiSearch size={20} />}
        />
      </div>

      <div className="w-full rounded-[12px] py-[26px] border-[1px] border-[#e0e1e6] m-5 p-5">
        <div className="px-10 border-b-[1px] border-b-[#e0e1e6] pb-5 flex gap-2 items-center">
          <span>{t("sortBy")}</span>
          <Dropdown
            menu={{ items, onClick: (e) => sortBy(e) }}
            // dropdownRender={}
          >
            <Space className=" w-[86px] h-[40px] border-[1px] border-[#e0e1e6] rounded-[12px] p-[10px]">
              الاحدث
              <IoIosArrowDown size={18} />
            </Space>
          </Dropdown>
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
        {/*
        <GigOffer data={null} />
        <GigOffer data={null} />
        <GigOffer data={null} />
        <GigOffer data={null} />
        <GigOffer data={null} />
        <GigOffer data={null} />
        <GigOffer data={null} /> */}
        <div className="w-full flex items-center justify-center">
          {vacancies.next && (
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
