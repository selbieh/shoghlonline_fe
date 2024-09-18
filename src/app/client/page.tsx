"use client";
import AuthGuard from "@/components/authenticationHOC/authenticated";
import BookmarkedServices from "@/components/client/bokmarkedServices";
import ServicesThatMaySuitsYou from "@/components/client/servicesThatSuitsYou";
import Advertise from "@/components/freelance/homePage/advertise";
import BookmarkedGigs from "@/components/freelance/homePage/bookmarkedGigs";
import CompleteYourProfile from "@/components/freelance/homePage/completeYourProfile";
import GigsSuitsYou from "@/components/freelance/homePage/gigsSuitsYou";
import InviteFriends from "@/components/freelance/homePage/inviteFriends";
import { Tabs, TabsProps } from "antd";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import React from "react";

const ClientHomePage = () => {
  const t = useTranslations();
  const tabsItems: TabsProps["items"] = [
    {
      key: "1",
      label: (
        <div className="w-[154px] h-[36px] px-[12px] flex items-center justify-center text-[16px]">
          {t("servicesThatMaySuitsYou")}
        </div>
      ),
      children: <ServicesThatMaySuitsYou />,
    },
    {
      key: "2",
      label: (
        <div className="w-[154px] h-[36px] px-[12px]  flex items-center justify-center text-[16px]">
          <Image
            src={"/icons/bookmark.svg"}
            alt="bookmark"
            width={24}
            height={24}
          />
          <span>{t("bookmarkedServices")}</span>
        </div>
      ),
      children: <BookmarkedServices />,
    },
  ];

  return (
    <div className="flex flex-row">
      <div>
        <CompleteYourProfile />
        <InviteFriends />
        <Advertise />
      </div>

      <div>
        <Tabs className="w-full" items={tabsItems} />
      </div>
    </div>
  );
};

export default AuthGuard(ClientHomePage);
