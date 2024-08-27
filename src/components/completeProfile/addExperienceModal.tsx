import { RootState, useAppDispatch } from "@/store/rootReducer";
import { Checkbox, DatePicker, Form, Input, message, Modal } from "antd";
import { useTranslations } from "next-intl";
import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import { PatchReq } from "@/app/api/api";
import { StatusSuccessCodes } from "@/utils/successStatus";
import { getFreelancerProfileData } from "@/store/reducers/freelanceProfile";
import { useSession } from "next-auth/react";

export default function AddExperienceModal({
  isOpen,
  closeModal,
}: {
  isOpen: boolean;
  closeModal: () => void;
}) {
  const t = useTranslations();
  const [addExperienceForm] = Form.useForm();
  const { data }: { data: any } = useSession<any>();
  const dispatch = useAppDispatch();

  function addWorkExperience(values: any) {
    values.start_date = dayjs(values.start_date).format("YYYY-MM-DD");
    if (values.is_still_working) {
      values.end_date = null;
    } else {
      values.end_date = dayjs(values.end_date).format("YYYY-MM-DD");
    }
    let url = `api/v1/client/profile/${data?.user_id}/`;
    PatchReq(url, { experiences: [values] }).then((res: any) => {
      if (StatusSuccessCodes.includes(res?.status)) {
        message.success(t("updatedSuccessfully"));
        dispatch(getFreelancerProfileData([{}, data?.user_id]));
        addExperienceForm.resetFields();
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
        title={t("addWorkExperience")}
        open={isOpen}
        onCancel={() => {
          addExperienceForm.resetFields();
          closeModal();
        }}
        onOk={() => {
          addExperienceForm.submit();
        }}
        okText={t("save")}
        cancelText={t("cancel")}
        maskClosable={false}
      >
        <Form
          form={addExperienceForm}
          layout="vertical"
          onFinish={addWorkExperience}
        >
          <Form.Item
            name="role"
            label={t("jobTitle")}
            rules={[{ required: true, message: t("requiredMessage") }]}
          >
            <Input placeholder={t("jonTitleex")} />
          </Form.Item>
          <Form.Item
            name="company_name"
            label={t("company")}
            rules={[{ required: true, message: t("requiredMessage") }]}
          >
            <Input placeholder={t("companyex")} />
          </Form.Item>
          <div className="flex flex-row w-full gap-2 ">
            <Form.Item
              name="start_date"
              label={t("from")}
              className="w-full"
              rules={[{ required: true, message: t("requiredMessage") }]}
            >
              <DatePicker
                picker="month"
                placeholder={t("year/month")}
                className="w-full"
              />
            </Form.Item>
            <div className="w-full">
              <Form.Item name="end_date" label={t("to")} className="w-full">
                <DatePicker
                  picker="month"
                  placeholder={t("year/month")}
                  className="w-full"
                />
              </Form.Item>
              <Form.Item name="is_still_working" valuePropName="checked">
                <Checkbox>{t("tillNow")}</Checkbox>
              </Form.Item>
            </div>
          </div>
        </Form>
      </Modal>
    </Fragment>
  );
}
