"use client";
import { GetByIdReq } from "@/app/api/api";
import AuthGuard from "@/components/authenticationHOC/authenticated";
import AccountInfo from "@/components/settings/accountInfo";
import { StatusSuccessCodes } from "@/utils/successStatus";
import { message, Tabs, TabsProps } from "antd";
import { useSession } from "next-auth/react";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

const Page = () => {
  const t = useTranslations();
  const { data }: { data: any } = useSession<any>();
  const [userData, setUserData] = useState<any>({});

  const tabsItems: TabsProps["items"] = [
    {
      key: "0",
      label: (
        <div className="w-[206px] h-[35px] px-[12px] text-[12px] font-medium leading-[34.29px]">
          {t("accountInfo")}
        </div>
      ),
      children: <AccountInfo user={userData}></AccountInfo>,
    },
  ];
  useEffect(() => {
    console.log("data", data);
    getUserProfileData();
  }, []);
  const getUserProfileData = () => {
    GetByIdReq(`api/v1/client/profile/`).then((res: any) => {
      if (StatusSuccessCodes.includes(res.status)) {
        setUserData(res?.data);
      } else {
        message.error(`${res.detail}`);
      }
    });
  };
  return (
    <div className="p-5">
      <div className="py-2 text-[20px] font-bold leading-[34.29px]">
        {t("settings")}
      </div>
      <div className="px-[24px] py-[45px] rounded-[12px] border-[1px] border-[solid] border-[#E0E1E6] h-[814px]">
        <Tabs tabPosition={"left"} style={{ height: 220 }} items={tabsItems} />
      </div>
    </div>
  );
};

export default AuthGuard(Page);
