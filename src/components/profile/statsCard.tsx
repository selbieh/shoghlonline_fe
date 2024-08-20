import { useTranslations } from "next-intl";

const StatsCard = () => {
  const t = useTranslations();
  return (
    <div>
      <div className="flex flex-col justify-between w-[170px] h-[80px] px-[8px] py-[11px] rounded-[8px] border-[1px] border-[solid] border-[#C8C8C8]">
        <h3 className="text-[14px] font-medium text-[#62636C]">
          {t("totalJobs")}
        </h3>
        <div className="flex justify-between items-center">
          <span className="text-[20px] font-bold text-[#1B2D5E]">40</span>
          <a href="" className="text-[9px] font-bold text-[#7179CE]">
            {t("displayAll")}
          </a>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
