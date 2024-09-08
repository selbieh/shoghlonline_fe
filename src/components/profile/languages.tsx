"use client";
import { PatchReq } from "@/app/api/api";
import { StatusSuccessCodes } from "@/utils/successStatus";
import {
  Button,
  Card,
  Empty,
  Form,
  Input,
  message,
  Modal,
  Select,
  Space,
  Typography,
} from "antd";
import { useSession } from "next-auth/react";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";

const Languages = ({ userData, isOwner }: any) => {
  const t = useTranslations();
  const [form] = Form.useForm();
  const [isLangModalOpen, setIsLangModalOpen] = useState(false);
  const [currentLangs, setCurrentLangs] = useState<any>([]);
  const { data }: { data: any } = useSession<any>();

  useEffect(() => {
    if (userData.languages) {
      form.setFieldsValue({
        languages: userData?.languages,
      });
      setCurrentLangs(userData?.languages);
    }
  }, [userData]);
  const patchUserData = (values: any) => {
    PatchReq(`api/v1/client/profile/${data.user_id}/`, values).then((res) => {
      if (StatusSuccessCodes.includes(res?.status)) {
        setCurrentLangs(res?.data?.languages);
        message.success(t("updatedSuccessfully"));
        setIsLangModalOpen(false);
      } else {
        message.error(`${res?.detail}`);
      }
    });
  };
  const showLangModal = () => {
    setIsLangModalOpen(true);
  };

  const handleLangOk = () => {
    form.submit();
    patchUserData(form.getFieldsValue());
  };

  const handleLangCancel = () => {
    form.resetFields();
    setIsLangModalOpen(false);
  };
  const onFinish = (values: any) => {
    console.log("Received values of form:", values);
  };
  //#endregion language
  return (
    <div>
      <div className="flex justify-between items-center">
        <h3 className=" text-[14px] font-bold leading-[24px]  pb-2">
          {t("languages")}
        </h3>
        {isOwner && (
          <Button
            style={{ height: "28px" }}
            onClick={showLangModal}
            type="primary"
            className="p-0 h-[28px] w-[28px] rounded-md"
          >
            <FaRegEdit color="#fff" size={15} />
          </Button>
        )}
      </div>
      {currentLangs?.length > 0 ? (
        currentLangs?.map((item: any, index: number) => (
          <p
            className=" text-[12px] font-bold leading-[24px]  text-[#62636C]"
            key={index}
          >
            {item?.name}:
            <span className=" text-[12px] font-medium leading-[24px]  px-1">
              {item?.level}
            </span>
          </p>
        ))
      ) : (
        <div>
          <Empty />
        </div>
      )}
      <Modal
        title={t("languages")}
        open={isLangModalOpen}
        onOk={handleLangOk}
        onCancel={handleLangCancel}
      >
        <Form
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 18 }}
          form={form}
          name="dynamic_form_complex"
          style={{ maxWidth: 600 }}
          autoComplete="off"
          initialValues={{ languages: userData?.languages }}
        >
          <Form.List name="languages">
            {(fields, { add, remove }) => (
              <div
                style={{ display: "flex", rowGap: 16, flexDirection: "column" }}
              >
                {fields.map((field) => (
                  <Card
                    size="small"
                    title={`${t("language")} ${field.name + 1}`}
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
                      label={t("nameOfLanguage")}
                      name={[field.name, "name"]}
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item label={t("level")} name={[field.name, "level"]}>
                      <Select
                        options={[
                          { value: "Beginner", label: t("Beginner") },
                          { value: "Intermediate", label: t("Intermediate") },
                          { value: "Advanced", label: t("Advanced") },
                          { value: "Native", label: t("Native") },
                        ]}
                      />
                    </Form.Item>
                  </Card>
                ))}

                <Button
                  style={{ height: "34px" }}
                  type="dashed"
                  onClick={() => add()}
                  block
                >
                  + {t("addNewLanguage")}
                </Button>
              </div>
            )}
          </Form.List>
        </Form>
      </Modal>
    </div>
  );
};

export default Languages;
