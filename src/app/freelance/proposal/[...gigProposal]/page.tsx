import GigDetails from "@/components/freelance/proposal/gigDetails";
import ProposalForm from "@/components/freelance/proposal/proposalForm";
import { useTranslations } from "next-intl";
import React from "react";

export default function FreelancerProposal() {
  const t = useTranslations();
  return (
    <div>
      <div className=" font-bold text-[20px] mx-7 my-7">
        {t("submitingProposal")}
      </div>
      <GigDetails />
      <ProposalForm />
    </div>
  );
}
