"use client";

import { useTransition } from "react";
import { Dropdown, Select } from "antd";
import { setUserLocale } from "@/services/locale";
import { useTranslations } from "next-intl";
import { IoLanguage } from "react-icons/io5";
import { Locale } from "../../../config";

type Props = {
  defaultValue: string;
  label: string;
};

export default function LocaleSwitcherSelect() {
  const t = useTranslations();
  const [isPending, startTransition] = useTransition();
  const items = [
    {
      key: "en",
      value: "en",
      label: t("en"),
      onClick: (val: any) => {
        onChange(val.key);
      },
    },
    {
      key: "ar",
      value: "ar",
      label: t("ar"),
      onClick: (val: any) => {
        onChange(val.key);
      },
    },
  ];
  function onChange(value: string) {
    const locale = value as Locale;
    startTransition(() => {
      setUserLocale(locale);
    });
  }

  return (
    <div className="relative mx-2">
      <Dropdown menu={{ items: items }}>
        <IoLanguage size={24} />
      </Dropdown>
    </div>
  );
}
