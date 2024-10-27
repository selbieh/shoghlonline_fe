"use client";
import ClientDetailsSection from "@/components/freelance/gigDetailsPage/clientDetailsSection";
import GigDetailsSection from "@/components/freelance/gigDetailsPage/gigDetailsSection";
import GigProposals from "@/components/freelance/gigDetailsPage/gigProposals";
import ShareSection from "@/components/freelance/gigDetailsPage/shareSection";
import { bookmarkGig, getVacancyById } from "@/store/reducers/freelanceSlice";
import { RootState, useAppDispatch } from "@/store/rootReducer";
import { Button, Skeleton } from "antd";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
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

  useEffect(() => {
    dispatch(getVacancyById([params?.gigDetailsPage[0], {}]));
  }, []);

  function bookmarkGigFunction() {
    vacancy?.id && dispatch(bookmarkGig({ vacancy_id: vacancy?.id }));
    dispatch(getVacancyById([params?.gigDetailsPage[0], {}]));
  }

  return (
    <div className="m-10">
      <div>
        <div className="flex flex-row justify-between items-center ">
          {getVacancyLoading ? (
            <Skeleton.Input className="h-[16px] w-full" active />
          ) : (
            <div className=" font-bold text-[16px]">{vacancy?.title}</div>
          )}
          <div className=" flex flex-row gap-2 items-center">
            {getVacancyLoading ? (
              <div className="flex flex-row">
                <Skeleton.Button className="w-[219px] h-[42px] rounded-[6px] py-[12px] px-[20px]" />
                <Skeleton.Button className="w-[136px] h-[42px] rounded-[6px]" />
              </div>
            ) : (
              <>
                <Button
                  style={{ height: "42px" }}
                  className="w-[219px] h-[42px] rounded-[6px] py-[12px] px-[20px]"
                  type="primary"
                  onClick={() => {
                    router.push(`../proposal/${vacancy?.id}`);
                  }}
                >
                  {t("submitProposal")}
                </Button>
                <Button
                  style={{ height: "42px" }}
                  className="w-[136px] h-[42px] rounded-[6px] py-[12px] px-[20px] border-[1px] border-[#d2d5da]"
                  icon={
                    vacancy?.is_in_watchlist ? (
                      <FaBookmark
                        fill="gold"
                        color="gold"
                        className="hover:cursor-pointer"
                        size={18}
                        // onClick={bookmarkGigFunction}
                      />
                    ) : (
                      <FaRegBookmark
                        className="hover:cursor-pointer"
                        size={18}
                        // onClick={bookmarkGigFunction}
                      />
                    )
                  }
                  onClick={bookmarkGigFunction}
                >
                  {t("bookmark")}
                </Button>
              </>
            )}
          </div>
        </div>
        {getVacancyLoading ? (
          <Skeleton.Input className="h-[16px]" active />
        ) : (
          <div className="flex flex-row items-center">
            <Image
              src={"/icons/clock.svg"}
              alt="bookmark"
              width={24}
              height={24}
            />
            <span>
              {t("since")}
              {vacancy?.created_at &&
                new Date(vacancy?.created_at).toLocaleDateString("CA")}
            </span>
          </div>
        )}
      </div>
      <div className="flex flex-row gap-10">
        <div>
          {vacancy?.description}
          <div>
            <GigProposals />
          </div>
        </div>
        <div className="flex flex-col gap-5">
          {getVacancyLoading ? (
            <Skeleton
              active
              className="w-[267px] h-[395px] rounded-[8px] border-[1px] py-[20px] px-[12px] flex flex-col gap-3"
            />
          ) : (
            <GigDetailsSection data={vacancy} />
          )}
          {getVacancyLoading ? (
            <Skeleton
              className="w-[267px] h-[300px] rounded-[8px] border-[1px] py-[20px] px-[12px] flex flex-col gap-3"
              active
            />
          ) : (
            <ClientDetailsSection data={vacancy?.posted_by} />
          )}
          <ShareSection />
        </div>
      </div>
    </div>
  );
}
