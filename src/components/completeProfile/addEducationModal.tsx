import { Checkbox, DatePicker, Form, Input, Modal } from "antd";
import { useTranslations } from "next-intl";
import React, { Fragment } from "react";

export default function AddEducationModal({
  isOpen,
  closeModal,
}: {
  isOpen: boolean;
  closeModal: () => void;
}) {
  const t = useTranslations();
  const [addEducationForm] = Form.useForm();

  function addEducation(values: any) {
    console.log(values);
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
            name="organization"
            label={t("organizationLabel")}
            rules={[{ required: true, message: t("requiredMessage") }]}
          >
            <Input placeholder={t("organizationex")} />
          </Form.Item>
          <Form.Item
            name="level"
            label={t("level")}
            rules={[{ required: true, message: t("requiredMessage") }]}
          >
            <Input placeholder={t("levelex")} />
          </Form.Item>
          <Form.Item
            name="specialization"
            label={t("specialization")}
            rules={[{ required: true, message: t("requiredMessage") }]}
          >
            <Input placeholder={t("specializationex")} />
          </Form.Item>
          <div className="flex flex-row w-full gap-2 ">
            <Form.Item
              name="from"
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
              name="to"
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
