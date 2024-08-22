"use client";
import { useTranslations } from "next-intl";
import React, { Fragment } from "react";
import Image from "next/image";
import Layout, { Content, Header } from "antd/es/layout/layout";
import { ConfigProvider } from "antd";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const t = useTranslations();

  return (
    <ConfigProvider
      theme={{
        components: {
          Select: {
            clearBg: "red",
            optionActiveBg: "#f7f9ff",
            optionPadding: 10,
            optionFontSize: 18,
            multipleItemBg: "#ecf2ff",
            multipleItemHeight: 40,
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