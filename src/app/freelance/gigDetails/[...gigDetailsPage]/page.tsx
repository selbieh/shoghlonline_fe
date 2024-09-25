"use client";
import ClientDetailsSection from "@/components/freelance/gigDetailsPage/clientDetailsSection";
import GigDetailsSection from "@/components/freelance/gigDetailsPage/gigDetailsSection";
import GigProposals from "@/components/freelance/gigDetailsPage/gigProposals";
import ShareSection from "@/components/freelance/gigDetailsPage/shareSection";
import { getVacancyById } from "@/store/reducers/freelanceSlice";
import { RootState, useAppDispatch } from "@/store/rootReducer";
import { Button } from "antd";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

export default function GigDetailsPage({
  params,
}: {
  params: { gigDetailsPage: string };
}) {
  const { getVacancyLoading, getVacancyError, vacancy } = useSelector(
    (state: RootState) => state.freelance
  );
  const dispatch = useAppDispatch();

  const t = useTranslations();
  const router = useRouter();
  console.log(params?.gigDetailsPage);

  console.log(vacancy);

  // useEffect(() => {
  //   dispatch(getVacancyById(params?.gigDetailsPage[0]));
  // }, []);

  return (
    <div className="m-10">
      <div>
        <div className="flex flex-row justify-between items-center ">
          <div className=" font-bold text-[16px]">{vacancy?.title}</div>
          <div className=" flex flex-row gap-2 items-center">
            <Button
              style={{ height: "42px" }}
              className="w-[219px] h-[42px] rounded-[6px] py-[12px] px-[20px]"
              type="primary"
              onClick={() => {
                router.push("../proposal/5");
              }}
            >
              {t("submitProposal")}
            </Button>
            <Button
              style={{ height: "42px" }}
              className="w-[136px] h-[42px] rounded-[6px] py-[12px] px-[20px] border-[1px] border-[#d2d5da]"
              icon={
                <Image
                  src={"/icons/bookmark.svg"}
                  alt="bokmark"
                  width={24}
                  height={24}
                />
              }
            >
              {t("bookmark")}
            </Button>
          </div>
        </div>
        <div className="flex flex-row items-center">
          <Image
            src={"/icons/clock.svg"}
            alt="bookmark"
            width={24}
            height={24}
          />
          <span>
            {t("since")}
            {new Date(vacancy?.created_at).toLocaleDateString("CA")}
          </span>
        </div>
      </div>
      <div className="flex flex-row gap-10">
        <div>
          {vacancy?.description}
          <div>
            <GigProposals />
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <GigDetailsSection />
          <ClientDetailsSection data={vacancy?.posted_by} />
          <ShareSection />
        </div>
      </div>
    </div>
  );
}
