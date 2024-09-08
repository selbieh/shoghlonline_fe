import { Button, Dropdown, MenuProps, Space } from "antd";
import { useTranslations } from "next-intl";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import FreelancerProposalCard from "./freelancerProposalCard";

export default function GigProposals() {
  const t = useTranslations();

  const items: MenuProps["items"] = [
    {
      label: t("newest"),
      key: "1",
    },
  ];

  function sortBy(e: any) {
    console.log("key", e);
  }
  return (
    <div className=" flex flex-col items-center justify-center w-full rounded-[8px] border-[1px] py-[20px] px-[12px] my-2">
      <div className="flex flex-row justify-between items-center w-full border-b-[1px]">
        <div className=" font-bold">{t("proposals")}</div>
        <div className="px-10  border-b-[#e0e1e6] pb-5 flex gap-2 items-center">
          <Dropdown menu={{ items, onClick: (e) => sortBy(e) }}>
            <Space className=" w-[86px] h-[40px] border-[1px] border-[#e0e1e6] rounded-[12px] p-[10px]">
              ترتيب
              <IoIosArrowDown size={18} />
            </Space>
          </Dropdown>
        </div>
      </div>
      <FreelancerProposalCard />
      <FreelancerProposalCard />
      <FreelancerProposalCard />
      <FreelancerProposalCard />
      <FreelancerProposalCard />
      <div className="p-5">
        <Button type="primary">{t("more")}</Button>
      </div>
    </div>
  );
}
