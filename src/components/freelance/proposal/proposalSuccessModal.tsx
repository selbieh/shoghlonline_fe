"use client";
import { Button, Modal } from "antd";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

export default function ProposalSuccessModal({
  isOpen,
  close,
}: {
  isOpen: boolean;
  close: () => void;
}) {
  const t = useTranslations();
  const router = useRouter();
  const pathName = usePathname();
  return (
    <Modal
      open={isOpen}
      className="max-w-[1170px] w-fit"
      okButtonProps={{ style: { display: "none" } }}
      cancelButtonProps={{ style: { display: "none" } }}
      closeIcon={null}
    >
      <div className="flex flex-col items-center">
        <Image
          src={"/icons/success.svg"}
          alt={t("success")}
          width={186}
          height={186}
        />
        <div className="text-[14px] font-bold">
          {t("proposalAppliedSuccessfully")}
        </div>
        <div className="text-[14px]">{t("proposalSuccessMessage")}</div>
        <div className="flex flex-row gap-2">
          <Button
            type="primary"
            className="h-[38px]"
            onClick={() => {
              close();
              router.push(`/freelance/gigDetails/${5}`);
            }}
          >
            {t("backToJob")}
          </Button>
          <Button
            className="h-[38px]"
            onClick={() => {
              close();
              router.push("/freelance");
            }}
          >
            {t("backToHome")}
          </Button>
        </div>
      </div>
    </Modal>
  );
}
