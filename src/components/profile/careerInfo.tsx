import { PatchReq } from "@/app/api/api";
import { StatusSuccessCodes } from "@/utils/successStatus";
import {
  Space,
  Button,
  Divider,
  Modal,
  Form,
  Input,
  InputNumber,
  message,
} from "antd";
import TextArea from "antd/es/input/TextArea";
import { useSession } from "next-auth/react";
import { useTranslations } from "next-intl";
import React, { useState } from "react";
import { FaRegEdit } from "react-icons/fa";

const CareerInfo = ({ userData, isOwner }: any) => {
  const t = useTranslations();
  const { data }: { data: any } = useSession<any>();
  const [form] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [typeItems, setTypeItems] = useState("");
  const [careerInfo, setCareerInfo] = useState<any>({
    job_title: userData?.job_title,
    bio_text: userData?.bio_text,
    hourly_price: userData?.hourly_price,
  });
  const [job_title, setJobTitle] = useState<any>(userData?.job_title);
  const [bio_text, setBioText] = useState<any>(userData?.bio_text);
  const [hourly_price, setHourlyPrice] = useState<any>(userData?.hourly_price);
  const showModal = (typeItem: any) => {
    form.setFieldsValue({
      job_title: job_title,
      bio_text: bio_text,
      hourly_price: hourly_price,
    });
    setTypeItems(typeItem);
    setIsModalOpen(true);
  };

  const handleOk = () => {
    form.submit();
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  async function onFinish(values: any) {
    console.log("values", values);
    PatchReq(`api/v1/client/profile/${data.user_id}/`, values).then((res) => {
      if (StatusSuccessCodes.includes(res?.status)) {
        setJobTitle(res?.data?.job_title);
        setBioText(res?.data?.bio_text);
        setHourlyPrice(res?.data?.hourly_price);
        setIsModalOpen(false);
        message.success(t("updatedSuccessfully"));
      } else {
        message.error(`${res?.detail}`);
      }
    });
  }
  return (
    <div>
      <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row justify-between items-center">
        <div className="flex flex-col md:flex-row items-center mb-4 md:mb-0">
          <Space className="flex flex-col md:flex-row items-center">
            {isOwner && (
              <Button
                onClick={() => showModal("jobTitle")}
                type="primary"
                className="p-0 h-[28px] w-[28px] rounded-md mb-2 md:mb-0"
              >
                <FaRegEdit color="#fff" size={15} />
              </Button>
            )}
            <h3 className=" text-[24px] font-medium leading-[24px] text-center md:text-left">
              {job_title ? job_title : t("jobTitle")}
            </h3>
          </Space>
        </div>
        <div className="flex flex-col md:flex-row gap-4 items-center">
          {isOwner && (
            <Button
              onClick={() => showModal("priceHour")}
              type="primary"
              className="p-0 h-[28px] w-[28px] rounded-md mb-2 md:mb-0"
            >
              <FaRegEdit color="#fff" size={15} />
            </Button>
          )}
          <div className="text-center md:text-left">
            <h3 className=" text-[16px] font-medium leading-[24px] text-black">
              {t("hourPrice")}{" "}
              <span className=" text-[16px] font-bold leading-[24px]">
                {hourly_price ? hourly_price : 0} $
              </span>
            </h3>
            <p className="text-[#80828D]  text-[12px] font-medium leading-[24px]">
              50 {t("hours/week")}
            </p>
          </div>
        </div>
      </div>
      <Divider />
      <div>
        <div className="flex flex-col md:flex-row gap-2 items-center">
          {isOwner && (
            <Button
              onClick={() => showModal("description")}
              type="primary"
              className="p-0 h-[28px] w-[28px] rounded-md mb-2 md:mb-0"
            >
              <FaRegEdit color="#fff" size={15} />
            </Button>
          )}
          <h3 className="py-3  text-[16px] font-medium leading-[24px] text-right md:text-left">
            {t("description")}
          </h3>
        </div>
        <p className=" text-[12px] font-medium leading-[24px] text-[#62636C]">
          {bio_text ? bio_text : "-"}
        </p>
      </div>
      <Modal
        title={t("jobInfo")}
        open={isModalOpen}
        onOk={handleOk}
        okText={t("save")}
        onCancel={handleCancel}
      >
        <Form
          form={form}
          className="py-3"
          name="create-project"
          onFinish={onFinish}
          autoComplete="off"
          layout="vertical"
        >
          {typeItems == "jobTitle" && (
            <Form.Item label={t("jobTitle")} name="job_title">
              <Input autoComplete="off" type="text" name="job_title" />
            </Form.Item>
          )}

          {typeItems == "description" && (
            <Form.Item label={t("description")} name="bio_text">
              <TextArea rows={4} autoComplete="off" name="bio_text" />
            </Form.Item>
          )}
          {typeItems == "priceHour" && (
            <Form.Item label={t("hourPrice")} name="hourly_price">
              <InputNumber
                suffix={t("hour") + "/$"}
                style={{ width: "100%" }}
              />
            </Form.Item>
          )}
        </Form>
      </Modal>
    </div>
  );
};

export default CareerInfo;
