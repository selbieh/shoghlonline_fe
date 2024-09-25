import { Button, Divider, Select, Skeleton } from "antd";
import { useTranslations } from "next-intl";
import React, { Fragment, useEffect } from "react";
import GigOffer from "./gigOffer";
import { RootState, useAppDispatch } from "@/store/rootReducer";
import { useSelector } from "react-redux";
import { getBookmarkedVacancies } from "@/store/reducers/freelanceSlice";

export default function BookmarkedGigs() {
  const {
    bookmarkedVacancies,
    getBookmarkedVacanciesError,
    getBookmarkedVacanciesLoading,
  } = useSelector((state: RootState) => state.freelance);

  const t = useTranslations();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getBookmarkedVacancies({}));
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
    dispatch(getBookmarkedVacancies({ params: { ordering: e } }));
  }
  return (
    <Fragment>
      {/* <div>{t("gigsSuitsYouTab")}</div> */}

      <div className="w-full rounded-[12px] py-[26px] border-[1px] border-[#e0e1e6] m-5 p-5">
        <div className="px-10 border-b-[1px] border-b-[#e0e1e6] pb-5 flex gap-2 items-center">
          <span>{t("sortBy")}</span>
          <Select
            options={items}
            defaultValue={"newest"}
            onSelect={sortBy}
            className="min-w-[120px]"
          />
        </div>
        {getBookmarkedVacanciesLoading ? (
          <>
            <Skeleton active className="w-full h-[339px] my-5" />
            <Divider className="bg-[#e7e8ec]" />
          </>
        ) : (
          <>
            {bookmarkedVacancies?.results?.map((vacancy: any) => {
              return <GigOffer key={vacancy.id} data={vacancy} />;
            })}
          </>
        )}

        <div className="w-full flex items-center justify-center">
          {bookmarkedVacancies?.next && (
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
