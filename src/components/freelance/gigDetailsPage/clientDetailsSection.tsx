import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { PostedBy } from "@/utils/types/sliceInitialStates/IFreelanceInitialState";

export default function ClientDetailsSection({ data }: { data: PostedBy }) {
  const t = useTranslations();

  return (
    <section className="w-[267px] h-[300px] rounded-[8px] border-[1px] py-[20px] px-[12px] flex flex-col gap-3">
      <div className=" font-bold text-[12px]">{t("clientInfo")}</div>
      <div className="flex flex-row items-center gap-2">
        <Image
          src={"/icons/client.svg"}
          alt="bookmark"
          width={18}
          height={18}
        />
        <span>
          {data.first_name} {data.last_name}
        </span>
      </div>
      <div className="flex flex-row items-center gap-2">
        <Image
          src={"/icons/verifiedPayment.svg"}
          alt="bookmark"
          width={18}
          height={18}
        />
        <span>{t("paymentVerified")}</span>
      </div>
      <div className="flex flex-row items-center gap-2">
        <Image
          src={"/icons/location.svg"}
          alt="bookmark"
          width={24}
          height={24}
        />
        <span>القاهرة - مصر</span>
      </div>
      <div className="flex flex-row items-center gap-2">
        <Image
          src={"/icons/dollarcircle.svg"}
          alt="bookmark"
          width={18}
          height={18}
        />
        <span>rating : </span>
        <span className="w-[54px] h-[21px] rounded-[24px]  bg-[#34c75942] flex items-center justify-center">
          $50
        </span>
      </div>
      <div className="flex flex-row items-center gap-2">
        <Image
          src={"/icons/status.svg"}
          alt="bookmark"
          width={18}
          height={18}
        />
        <span>{t("completedJobs")} : </span>
        <span className="w-[54px] h-[21px] rounded-[24px]  bg-[#34c75942] flex items-center justify-center">
          20
        </span>
      </div>
      <div className="flex flex-row items-center gap-2">
        <Image
          src={"/icons/status.svg"}
          alt="bookmark"
          width={18}
          height={18}
        />
        <span>{t("openJobs")} : </span>
        <span className="w-[54px] h-[21px] rounded-[24px]  bg-[#34c75942] flex items-center justify-center">
          5
        </span>
      </div>
      <div className="flex flex-row items-center gap-2">
        <Image
          src={"/icons/dollarcircle.svg"}
          alt="bookmark"
          width={18}
          height={18}
        />
        <span>{t("totalSpent")} : </span>
        <span className="w-[54px] h-[21px] rounded-[24px]  bg-[#34c75942] flex items-center justify-center">
          $10k
        </span>
      </div>
    </section>
  );
}
