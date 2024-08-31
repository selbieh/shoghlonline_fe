import { Checkbox, DatePicker, Form, Input, message, Modal } from "antd";
import { useTranslations } from "next-intl";
import React, { Fragment } from "react";
import dayjs from "dayjs";
import { PatchReq } from "@/app/api/api";
import { useSession } from "next-auth/react";
import { StatusSuccessCodes } from "@/utils/successStatus";
import { useAppDispatch } from "@/store/rootReducer";
import { getFreelancerProfileData } from "@/store/reducers/freelanceProfile";

export default function AddEducationModal({
  isOpen,
  closeModal,
}: {
  isOpen: boolean;
  closeModal: () => void;
}) {
  const { data }: { data: any } = useSession<any>();
  const t = useTranslations();
  const [addEducationForm] = Form.useForm();
  const dispatch = useAppDispatch();

  function addEducation(values: any) {
    values.start_date = dayjs(values.start_date).format("YYYY-MM-DD");
    values.end_date = dayjs(values.end_date).format("YYYY-MM-DD");

    console.log(values);
    let url = `api/v1/client/profile/${data?.user_id}/`;
    PatchReq(url, { educations: [values] }).then((res: any) => {
      if (StatusSuccessCodes.includes(res?.status)) {
        message.success(t("updatedSuccessfully"));
        dispatch(getFreelancerProfileData([{}, data?.user_id]));
        addEducationForm.resetFields();
        closeModal();
      } else {
        res.errors.map((err: any) => {
          message.error(`${err.code}:${err.detail}`);
        });
      }
    });
  }

  return (
    <Fragment>
      <Modal
        title={t("addEducation")}
        open={isOpen}
        onCancel={() => {
          addEducationForm.resetFields();
          closeModal();
        }}
        onOk={() => {
          addEducationForm.submit();
        }}
        okText={t("save")}
        cancelText={t("cancel")}
        maskClosable={false}
      >
        <Form form={addEducationForm} layout="vertical" onFinish={addEducation}>
          <Form.Item
            name="institution"
            label={t("organizationLabel")}
            rules={[{ required: true, message: t("requiredMessage") }]}
          >
            <Input placeholder={t("organizationex")} />
          </Form.Item>
          <Form.Item
            name="degree"
            label={t("level")}
            rules={[{ required: true, message: t("requiredMessage") }]}
          >
            <Input placeholder={t("levelex")} />
          </Form.Item>
          <Form.Item
            name="field_of_study"
            label={t("specialization")}
            rules={[{ required: true, message: t("requiredMessage") }]}
          >
            <Input placeholder={t("specializationex")} />
          </Form.Item>
          <div className="flex flex-row w-full gap-2 ">
            <Form.Item
              name="start_date"
              label={t("from")}
              className="w-full"
              rules={[{ required: true, message: t("requiredMessage") }]}
            >
              <DatePicker
                picker="year"
                placeholder={t("year")}
                className="w-full"
              />
            </Form.Item>

            <Form.Item
              name="end_date"
              label={`${t("to")} (${t("graduationYear")})`}
              className="w-full"
            >
              <DatePicker
                picker="year"
                placeholder={t("year")}
                className="w-full"
              />
            </Form.Item>
          </div>
        </Form>
      </Modal>
    </Fragment>
  );
}
