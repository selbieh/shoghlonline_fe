"use client";

import DescriptionServiceForm from "@/components/servicesForm/descriptionServiceForm";
import PriceAndAddons from "@/components/servicesForm/priceAndAddones";
import {
  Button,
  ConfigProvider,
  Divider,
  Form,
  message,
  Steps,
  StepsProps,
} from "antd";
import { useWatch } from "antd/es/form/Form";
import { useTranslations } from "next-intl";
import { useState } from "react";

const Page = () => {
  const t = useTranslations();
  const [form] = Form.useForm();
  const [current, setCurrent] = useState(0);
  // const [formValues, setFormValues] = useState<any>({});

  const next = () => {
    const values = form.getFieldsValue(true);
    console.log("values", values);

    // setFormValues((prev: any) => ({ ...prev, ...values }));
    setCurrent(current + 1);
  };

  const prev = () => {
    console.log("form.getFieldsValue(true);", form.getFieldsValue(true));

    setCurrent(current - 1);
  };
  const items: StepsProps["items"] = [
    {
      title: t("serviceDescription"),
      description: "",
    },
    {
      title: t("priceAndAddons"),
    },
    {
      title: t("portfolio"),
    },
    {
      title: t("clientQuestions"),
    },
  ];
  const stepperItems = [
    {
      title: "First",
      content: <DescriptionServiceForm />,
    },
    {
      title: "Second",
      content: <PriceAndAddons />,
    },
    {
      title: "Last",
      content: "Last-content",
    },
  ];
  const finished = () => {
    // console.log("formValues", formValues);
  };
  return (
    <div className="p-5 h-[150vh]">
      <h1 className="text-[20px] font-bold leading-[34.29px] pb-6">
        {t("createService")}
      </h1>
      <div className="px-[24px] py-[45px] rounded-[12px] border-[1px] border-[solid] border-[#E0E1E6]">
        <ConfigProvider
          theme={{
            components: {
              Form: {
                labelHeight: 16,
              },
            },
          }}
        >
          <Form form={form} className="flex">
            <Steps
              style={{ width: "180px", height: "250px" }}
              direction="vertical"
              size="small"
              current={current}
              items={items}
            />
            <div className="flex gap-5 w-full">
              <Divider type="vertical" style={{ height: "100%" }} />
              <div className="w-full">
                {stepperItems[current].content}
                <div className="flex justify-end my-4">
                  {current < stepperItems.length - 1 && (
                    <Button
                      type="primary"
                      onClick={() => next()}
                      className="h-[34px]"
                    >
                      Next
                    </Button>
                  )}
                  {current === stepperItems.length - 1 && (
                    <Button
                      type="primary"
                      onClick={() => finished()}
                      className="h-[34px]"
                    >
                      Done
                    </Button>
                  )}
                  {current > 0 && (
                    <Button
                      style={{ margin: "0 8px" }}
                      onClick={() => prev()}
                      className="h-[34px]"
                    >
                      Previous
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </Form>
        </ConfigProvider>
      </div>
    </div>
  );
};

export default Page;
