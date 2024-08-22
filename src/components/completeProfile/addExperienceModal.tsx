import { Checkbox, DatePicker, Form, Input, Modal } from "antd";
import { useTranslations } from "next-intl";
import React, { Fragment } from "react";

export default function AddExperienceModal({
  isOpen,
  closeModal,
}: {
  isOpen: boolean;
  closeModal: () => void;
}) {
  const t = useTranslations();
  const [addExperienceForm] = Form.useForm();

  function addWorkExperience(values: any) {
    console.log(values);
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
            name="job_title"
            label={t("jobTitle")}
            rules={[{ required: true, message: t("requiredMessage") }]}
          >
            <Input placeholder={t("jonTitleex")} />
          </Form.Item>
          <Form.Item
            name="company"
            label={t("company")}
            rules={[{ required: true, message: t("requiredMessage") }]}
          >
            <Input placeholder={t("companyex")} />
          </Form.Item>
          <div className="flex flex-row w-full gap-2 ">
            <Form.Item
              name="from"
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
              <Form.Item name="to" label={t("to")} className="w-full">
                <DatePicker
                  picker="month"
                  placeholder={t("year/month")}
                  className="w-full"
                />
              </Form.Item>
              <Form.Item name="till_now" valuePropName="checked">
                <Checkbox>{t("tillNow")}</Checkbox>
              </Form.Item>
            </div>
          </div>
        </Form>
      </Modal>
    </Fragment>
  );
}
