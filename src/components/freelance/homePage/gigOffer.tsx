import Image from "next/image";
import GigTag from "./gigTag";
import { Divider } from "antd";
import { useRouter } from "next/navigation";
import { useTranslations } from "use-intl";
import { Vacancy } from "@/utils/types/sliceInitialStates/IFreelanceInitialState";
import { AvailableSkill } from "@/utils/types/sliceInitialStates/IFreelancerProfile";
import { IoBookmarkOutline } from "react-icons/io5";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { bookmarkGig } from "@/store/reducers/freelanceSlice";
import { RootState, useAppDispatch } from "@/store/rootReducer";
import { useSelector } from "react-redux";

export default function GigOffer({ data }: { data: Vacancy }) {
  const { vacancies, getVacanciesError, getVacanciesLoading } = useSelector(
    (state: RootState) => state.freelance
  );
  const dispatch = useAppDispatch();
  const t = useTranslations();
  const router = useRouter();
  function goToGigDetailsPage() {
    router.push(`/freelance/gigDetails/${data?.id}`);
  }

  function bookmarkGigFunction() {
    dispatch(bookmarkGig({ vacancy_id: data?.id }));
  }

  return (
    <div className=" hover:bg-[#f7f9ff]  px-2">
      <div className=" flex flex-row justify-between w-full my-5">
        <div className="flex flex-row items-center">
          <div
            className=" font-bold text-[16px] mx-5 hover:cursor-pointer"
            onClick={goToGigDetailsPage}
          >
            {data?.title}
          </div>
          {data?.is_in_watchlist ? (
            <FaBookmark
              fill="gold"
              color="gold"
              className="hover:cursor-pointer"
              size={18}
              onClick={bookmarkGigFunction}
            />
          ) : (
            <FaRegBookmark
              className="hover:cursor-pointer"
              size={18}
              onClick={bookmarkGigFunction}
            />
          )}
        </div>
        <div className="flex flex-row items-center">
          <Image
            src={"/icons/clock.svg"}
            alt="bookmark"
            width={24}
            height={24}
          />
          <span>
            {t("since")} {new Date(data?.created_at).toLocaleDateString("CA")}
          </span>
        </div>
      </div>
      <div className="flex flex-row gap-20 mx-10">
        <div className="flex flex-row items-center gap-1 ">
          <Image
            src={"/icons/dollarcircle.svg"}
            width={18}
            height={18}
            alt="priceIcon"
          />
          <span>{data.salary_type}</span>
          <span>${data.salary}</span>
        </div>
        <div className="flex flex-row items-center gap-1 ">
          <Image
            src={"/icons/clock.svg"}
            width={18}
            height={18}
            alt="priceIcon"
          />
          <span>{t("estimatedTime")}</span>
          <span>:{data?.estimated_duration} </span>
          <span>{data?.duration_unit}</span>
        </div>
      </div>
      <div className=" m-10">{data?.description}</div>
      <div className="flex flex-row flex-wrap gap-5 mx-10">
        {data?.skills?.map((skill: AvailableSkill) => {
          return <GigTag key={Math.random()}>{skill.name}</GigTag>;
        })}
      </div>
      <div className="flex flex-row flex-wrap gap-5 m-10">
        <div className="flex flex-row items-center gap-1">
          <Image
            src={"/icons/location.svg"}
            alt="bookmark"
            width={24}
            height={24}
          />
          <span>{data?.location}</span>
        </div>
        <div className="flex flex-row items-center gap-1">
          <Image
            src={"/icons/verifiedPayment.svg"}
            alt="bookmark"
            width={24}
            height={24}
          />
          <span>تم التحقق من الدفع</span>
        </div>
        <div className="flex flex-row items-center gap-1">
          <Image
            src={"/icons/offers.svg"}
            alt="bookmark"
            width={24}
            height={24}
          />
          <span>
            {t("offers")} : {data?.applied_count}
          </span>
        </div>
      </div>
      <Divider className="bg-[#e7e8ec]" />
    </div>
  );
}
