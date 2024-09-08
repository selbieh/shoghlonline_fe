"use client";
import { PatchReq } from "@/app/api/api";
import { StatusSuccessCodes } from "@/utils/successStatus";
import { Button, Card, Empty, Form, Input, message, Modal, Select } from "antd";
import { useSession } from "next-auth/react";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";

const Certifications = ({ userData, isOwner }: any) => {
  const t = useTranslations();
  const [form] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentCerts, setCurrentCerts] = useState<any>([]);
  const { data }: { data: any } = useSession<any>();

  useEffect(() => {
    if (userData.certifications) {
      form.setFieldsValue({
        languages: userData?.certifications,
      });
      setCurrentCerts(userData?.certifications);
    }
  }, [userData]);
  const patchUserData = (values: any) => {
    PatchReq(`api/v1/client/profile/${data.user_id}/`, values).then((res) => {
      if (StatusSuccessCodes.includes(res?.status)) {
        setCurrentCerts(res?.data?.certifications);
        message.success(t("updatedSuccessfully"));
        setIsModalOpen(false);
      } else {
        message.error(`${res?.detail}`);
      }
    });
  };
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    form.submit();
    patchUserData(form.getFieldsValue());
  };

  const handleCancel = () => {
    form.resetFields();
    setIsModalOpen(false);
  };
  const onFinish = (values: any) => {
    console.log("Received values of form:", values);
  };
  //#endregion language
  return (
    <div>
      <div className="flex justify-between items-center">
        <h3 className=" text-[14px] font-bold leading-[24px]  pb-2">
          {t("certifications")}
        </h3>
        {isOwner && (
          <Button
            style={{ height: "28px" }}
            onClick={showModal}
            type="primary"
            className="p-0 h-[28px] w-[28px] rounded-md"
          >
            <FaRegEdit color="#fff" size={15} />
          </Button>
        )}
      </div>
      {currentCerts?.length > 0 ? (
        currentCerts?.map((item: any, index: number) => (
          <div className="flex justify-between" key={index}>
            <div>
              <p className=" text-[12px] font-bold leading-[24px]  text-[#62636C]">
                {item?.name}
              </p>
              <span className=" text-[12px] font-medium leading-[24px]  px-1">
                {item?.issued_by}
              </span>
            </div>
            <p className=" text-[12px] font-bold leading-[24px]  text-[#62636C]">
              <Button
                style={{ height: "34px" }}
                type="default"
                className="h-[34px] px-[12px] py-[8px] rounded-[6px]  text-[12px] font-bold leading-[18px] text-[#7179CE]"
              >
                {t("show")}
              </Button>
            </p>
          </div>
        ))
      ) : (
        <div>
          <Empty />
        </div>
      )}
      <Modal
        title={t("certifications")}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 18 }}
          form={form}
          name="dynamic_form_complex"
          style={{ maxWidth: 600 }}
          autoComplete="off"
          initialValues={{ certifications: userData?.certifications }}
        >
          <Form.List name="certifications">
            {(fields, { add, remove }) => (
              <div
                style={{ display: "flex", rowGap: 16, flexDirection: "column" }}
              >
                {fields.map((field) => (
                  <Card
                    size="small"
                    title={`${t("certificate")} ${field.name + 1}`}
                    key={field.key}
                    extra={
                      <IoCloseOutline
                        onClick={() => {
                          remove(field.name);
                        }}
                      />
                    }
                  >
                    <Form.Item
                      label={t("nameOfCertificate")}
                      style={{ display: "contents" }}
                      name={[field.name, "name"]}
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      label={t("issuedBy")}
                      name={[field.name, "issued_by"]}
                    >
                      <Input />
                    </Form.Item>
                  </Card>
                ))}

                <Button
                  style={{ height: "34px" }}
                  type="dashed"
                  onClick={() => add()}
                  block
                >
                  + {t("addNewCertificate")}
                </Button>
              </div>
            )}
          </Form.List>
        </Form>
      </Modal>
    </div>
  );
};

export default Certifications;
