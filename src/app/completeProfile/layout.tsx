"use client";
import { useTranslations } from "next-intl";
import React, { Fragment, useEffect } from "react";
import Image from "next/image";
import Layout, { Content, Header } from "antd/es/layout/layout";
import { ConfigProvider } from "antd";
import { useAppDispatch } from "@/store/rootReducer";
import { getFreelancerProfileData } from "@/store/reducers/freelanceProfile";
import { useSession } from "next-auth/react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const t = useTranslations();
  const dispatch = useAppDispatch();
  const { data }: { data: any } = useSession<any>();
  useEffect(() => {
    dispatch(getFreelancerProfileData([{}, data?.user_id]));
  });

  return (
    <ConfigProvider
      theme={{
        components: {
          Select: {
            optionActiveBg: "#f7f9ff",
            optionPadding: 10,
            optionFontSize: 18,
            multipleItemBg: "#ecf2ff",
            multipleItemHeight: 40,
          },
          Input: {
            controlHeight: 56,
          },
          DatePicker: {
            controlHeight: 56,
          },
          Cascader: {
            lineHeight: 5,
            // controlWidth: 50,
            controlItemWidth: 237,
            dropdownHeight: 357,
            // menuPadding: 50,
            // optionPadding: 50,
            // optionSelectedBg: "red",
          },
        },
      }}
    >
      <Layout>
        <Header className="flex h-fit justify-between bg-white">
          <div className="flex flex-col  h-fit m-5">
            <div className="  font-bold text-[24px] ">{t("profileSetup")}</div>
            <div className="  text-[rgba(98,_99,_108,_1)] text-[16px] ">
              {t("thisInformationHelpsIncreaseYourChancesOfGettingGigs")}
            </div>
          </div>
          <div className="logo p-10">
            <Image
              src="/images/logo.svg"
              alt="banner"
              width={117}
              height={39}
            />
          </div>
        </Header>
        <Content className="bg-white">{children}</Content>
      </Layout>
    </ConfigProvider>
  );
}
