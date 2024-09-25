"use client";
import { Form, Input } from "antd";
import { useTranslations } from "next-intl";
import React from "react";

const PriceAndAddons = () => {
  const t = useTranslations();
  return (
    <div>
      <Form.List name="priceAndAddons">
        {(fields, operation, meta) => (
          <Form.Item
            className="w-1/2"
            label={
              <span className="text-[14px] font-medium leading-[24px] tracking-[0.5px] text-[#20102B]">
                {t("email")}
              </span>
            }
            name="email"
            rules={[
              { required: true, message: t("emailRequired") },
              { type: "email", message: t("EmailValidationInvalid") },
            ]}
          >
            <Input type="email" />
          </Form.Item>
        )}
      </Form.List>
    </div>
  );
};

export default PriceAndAddons;
