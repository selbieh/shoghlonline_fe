"use client";
import AuthGuard from "@/components/authenticationHOC/authenticated";
import Advertise from "@/components/freelance/homePage/advertise";
import BookmarkedGigs from "@/components/freelance/homePage/bookmarkedGigs";
import CompleteYourProfile from "@/components/freelance/homePage/completeYourProfile";
import GigsSuitsYou from "@/components/freelance/homePage/gigsSuitsYou";
import InviteFriends from "@/components/freelance/homePage/inviteFriends";
import SearchAndFiltersSide from "@/components/freelance/homePage/searchAndFiltersSide";
import { freelanceActions } from "@/store/reducers/freelanceSlice";
import { RootState, useAppDispatch } from "@/store/rootReducer";
import { Tabs, TabsProps } from "antd";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";

const Freelance = () => {
  const t = useTranslations();
  const { profileReady } = useSelector((state: RootState) => state.profile);
  const dispatch = useAppDispatch();
  dispatch(freelanceActions.setQueryParams({}));

  const tabsItems: TabsProps["items"] = [
    {
      key: "1",
      label: (
        <div className="w-[154px] h-[36px] px-[12px] flex items-center justify-center text-[16px]">
          {t("gigsThatMaySuitsYou")}
        </div>
      ),
      children: <GigsSuitsYou />,
    },
    {
      key: "2",
      label: (
        <div className="w-[154px] h-[36px] px-[12px] flex items-center justify-center text-[16px]">
          <Image
            src={"/icons/bookmark.svg"}
            alt="bookmark"
            width={24}
            height={24}
          />
          <span>{t("bookmarkedGigs")}</span>
        </div>
      ),
      children: <BookmarkedGigs />,
    },
  ];

  return (
    <div className="flex flex-row">
      <div>
        {profileReady !== 4 && <CompleteYourProfile />}
        <InviteFriends />
        <Advertise />
      </div>

      <div className="w-full">
        <Tabs items={tabsItems} />
      </div>
    </div>
  );
};

export default AuthGuard(Freelance);
