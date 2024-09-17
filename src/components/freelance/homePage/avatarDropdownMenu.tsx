import { Avatar, ConfigProvider, Dropdown, Switch } from "antd";
import { signOut } from "next-auth/react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React, { useTransition } from "react";
import { CiSettings } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import { MdLogout, MdOutlineLanguage } from "react-icons/md";
import { Locale } from "../../../../config";
import { setUserLocale } from "@/services/locale";

export default function AvatarDropdownMenu() {
  const t = useTranslations();
  const [isPending, startTransition] = useTransition();
  async function logout() {
    signOut();
  }

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
    <div className="w-[352px] h-fit border-[1px] rounded-[12px] border-[#7179ce] bg-white">
      <Link
        href={"/freelance/profile/1"}
        className="w-full h-[60px] p-[10px] flex flex-row justify-between items-center hover:bg-[#f7f9ff] cursor-pointer
"
      >
        <div className="flex flex-row gap-2 cursor-pointer justify-center">
          <Avatar
            icon={<FaRegUserCircle />}
            size={24}
            className="cursor-pointer hover:scale-110 transition-all"
          />
          <span>Name</span>
        </div>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#34c759",
            },
          }}
        >
          <Switch
            checkedChildren={t("online")}
            unCheckedChildren={t("offline")}
            defaultChecked
          />
        </ConfigProvider>
      </Link>
      <div
        className="w-full h-[60px] p-[10px] flex flex-row gap-2 items-center hover:bg-[#f7f9ff] cursor-pointer
"
      >
        <CiSettings size={18} />
        <span className=" text-[14px]">{t("settings")}</span>
      </div>
      <div
        className="w-full h-[60px] p-[10px] flex flex-row justify-between items-center hover:bg-[#f7f9ff] cursor-pointer
"
      >
        <div className="flex flex-row gap-2 cursor-pointer justify-center">
          <Image
            src="/icons/enterAsClient.svg"
            alt="icon"
            width={18}
            height={18}
          />
          <span>{t("enterAsClient")}</span>
        </div>

        <Switch defaultChecked={false} />
      </div>
      <div
        className="w-full h-[60px] p-[10px] flex flex-row gap-2 items-center hover:bg-[#f7f9ff] cursor-pointer
"
      >
        <Image
          src={"/icons/tellAfriendIcon.svg"}
          alt="icon"
          height={18}
          width={18}
        />
        <span className=" text-[14px]">{t("tellAFriend")}</span>
      </div>
      <div
        className="w-full h-[60px] p-[10px] flex flex-row gap-2 items-center hover:bg-[#f7f9ff] cursor-pointer justify-between
"
      >
        <div className="flex flex-row gap-2">
          <MdOutlineLanguage size={18} />
          <span className=" text-[14px]">{t("languages")}</span>
        </div>
        <Dropdown menu={{ items: items }}>
          <div>{t("english")}</div>
        </Dropdown>
      </div>

      <div
        className="w-full h-[60px] p-[10px] flex flex-row gap-2 items-center hover:bg-[#f7f9ff] cursor-pointer
"
        onClick={logout}
      >
        <MdLogout size={18} />
        <span className=" text-[14px]">{t("logout")}</span>
      </div>
    </div>
  );
}
