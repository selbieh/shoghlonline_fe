import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import GigTag from "../homePage/gigTag";
import { Vacancy } from "@/utils/types/sliceInitialStates/IFreelanceInitialState";
import { AvailableSkill } from "@/utils/types/sliceInitialStates/IFreelancerProfile";

export default function GigDetailsSection({ data }: { data: Vacancy | null }) {
  const t = useTranslations();
  return (
    <section className="w-[267px] h-fit rounded-[8px] border-[1px] py-[20px] px-[12px] flex flex-col gap-3">
      <div className=" font-bold text-[12px]">{t("gigDetails")}</div>
      <div className="flex flex-row items-center gap-2">
        <Image
          src={"/icons/status.svg"}
          alt="bookmark"
          width={18}
          height={18}
        />
        <span>{t("status")} : </span>
        <span className="w-[54px] h-[21px] rounded-[24px]  bg-[#34c75942] flex items-center justify-center">
          مفتوح
        </span>
      </div>
      <div className="flex flex-row items-center gap-2">
        <Image src={"/icons/clock.svg"} alt="bookmark" width={18} height={18} />
        <span>{t("estimatedTime")} : </span>
        <span className=" w-fit h-[21px] rounded-[24px]  bg-[#34c75942] flex items-center justify-center">
          {data?.estimated_duration} {data?.duration_unit}
        </span>
      </div>
      <div className="flex flex-row items-center gap-2">
        <Image
          src={"/icons/dollarcircle.svg"}
          alt="bookmark"
          width={18}
          height={18}
        />
        <span>{data?.salary_type} : </span>
        <span className="w-[54px] h-[21px] rounded-[24px]  bg-[#34c75942] flex items-center justify-center">
          {data?.salary} $
        </span>
      </div>
      <div className="flex flex-row items-center gap-2">
        <Image
          src={"/icons/offers.svg"}
          alt="bookmark"
          width={18}
          height={18}
        />
        <span>{t("offers")} : </span>
        <span className="w-[54px] h-[21px] rounded-[24px]  bg-[#34c75942] flex items-center justify-center">
          {data?.applied_count}
        </span>
      </div>
      <div className="flex flex-row items-center gap-2">
        <Image
          src={"/icons/dollarcircle.svg"}
          alt="bookmark"
          width={18}
          height={18}
        />
        <span>{t("avgPrice")} : </span>
        <span className="w-[54px] h-[21px] rounded-[24px]  bg-[#34c75942] flex items-center justify-center">
          $55
        </span>
      </div>
      <div className="flex flex-row items-center gap-2">
        <Image
          src={"/icons/experience.svg"}
          alt="bookmark"
          width={18}
          height={18}
        />
        <span>{t("experience")} : </span>
        <span className="w-[54px] h-[21px] rounded-[24px]  bg-[#34c75942] flex items-center justify-center">
          {data?.required_experience}{" "}
        </span>
      </div>
      <div>
        <div className=" font-bold text-[12px] my-2">{t("requiredSkills")}</div>
        <div className="flex flex-row flex-wrap  items-center gap-2">
          {data?.skills?.map((skill: AvailableSkill) => {
            return <GigTag key={Math.random()}>{skill.name}</GigTag>;
          })}
        </div>
      </div>
    </section>
  );
}
