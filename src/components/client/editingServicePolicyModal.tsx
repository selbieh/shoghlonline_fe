import { editingPolicy } from "@/utils/dummyData/dummydata";
import { Button, Checkbox, Modal } from "antd";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function EditingServicePolicyModal({
  modalOpen,
  closeModal,
}: {
  modalOpen: boolean;
  closeModal: () => void;
}) {
  const t = useTranslations();
  const [agree, setAgree] = useState<boolean>(false);
  const router = useRouter();
  return (
    <Modal
      title={t("editServicesModalTitle")}
      open={modalOpen}
      onCancel={closeModal}
      width={1089}
      //   height={747}

      maskClosable={false}
      okButtonProps={{ style: { display: "none" } }}
      cancelButtonProps={{ style: { display: "none" } }}
    >
      <div
        dangerouslySetInnerHTML={{ __html: editingPolicy }}
        className="w-fit h-fit max-w-[1041px]  max-h-[450px] overflow-auto  bg-[#e0e1e6] p-[10px] rounded-md m-[10px]"
      ></div>
      <div className="my-[10px]">
        <Checkbox
          onChange={(e) => {
            setAgree(e.target.checked);
          }}
        >
          {t("agree")}
        </Checkbox>
      </div>
      <Button
        onClick={() => {
          router.push("#");
        }}
        type="primary"
        className="h-[44px] w-[137px] font-bold"
        disabled={!agree}
      >
        {t("editService")}
      </Button>
    </Modal>
  );
}
