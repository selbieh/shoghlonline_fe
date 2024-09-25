"use client";
import AvatarDropdownMenu from "@/components/freelance/homePage/avatarDropdownMenu";
import FooterFreelancer from "@/components/layoutFreelancer/footer";
import {
  Avatar,
  Button,
  ConfigProvider,
  Divider,
  Dropdown,
  Layout,
  Menu,
  MenuProps,
  Select,
  Space,
  Switch,
} from "antd";
import Search, { SearchProps } from "antd/es/input/Search";
import { useTranslations } from "next-intl";
const { Header, Content, Footer } = Layout;
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { CiMail } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import { IoNotificationsOutline } from "react-icons/io5";

export default function HomePagesLayout({
  children,
  place,
}: {
  children: React.ReactNode;
  place: string;
}) {
  const t = useTranslations();
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const pathname = usePathname();
  const { replace } = useRouter();
  const items1: MenuProps["items"] = [
    {
      key: "1",
      label: t("musicAndAudio"),
    },
    {
      key: "2",
      label: t("writingAndTranslate"),
    },
    {
      key: "3",
      label: t("marketing"),
    },
    {
      key: "4",
      label: t("videoAndMotion"),
    },
    {
      key: "5",
      label: t("programmingAndTechnology"),
    },
    {
      key: "6",
      label: t("designAndCreative"),
    },
    {
      key: "7",
      label: t("managmentAndBusiness"),
    },
    {
      key: "8",
      label: t("consulting"),
    },
    {
      key: "9",
      label: t("other"),
    },
  ];
  const options = [
    {
      value: "1",
      label: t("jobs"),
    },
    {
      value: "2",
      label: t("services"),
    },
  ];
  const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
    console.log(info?.source, value);

  const items: MenuProps["items"] = [
    {
      key: "1",
      icon: (
        <Avatar
          icon={<FaRegUserCircle />}
          size={24}
          className="cursor-pointer hover:scale-110 transition-all"
          onClick={() => router.push("/freelance/profile")}
        />
      ),

      label: (
        <div className="flex flex-row justify-between">
          <div>Name</div>
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: "#34c759",
                // controlInteractiveSize: 16,
              },
            }}
          >
            <Switch
              checkedChildren={t("online")}
              unCheckedChildren={t("offline")}
              defaultChecked
            />
          </ConfigProvider>
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          2nd menu item (disabled)
        </a>
      ),
      // icon: <SmileOutlined />,
      disabled: true,
    },
    {
      key: "3",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          3rd menu item (disabled)
        </a>
      ),
      disabled: true,
    },
    {
      key: "4",
      danger: true,
      label: "a danger item",
    },
  ];
  const itemsServersMenu: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <div
          className="flex gap-4 bg-[#F7F9FF] border-[0.5px] border-[solid] border-[#A4BFFB] rounded-[20px] p-4 cursor-pointer"
          onClick={() => router.push("/freelance/serviceForm")}
        >
          <Image
            src={"/icons/add-circle.svg"}
            alt="setting"
            width={38}
            height={38}
          />
          <div className="flex flex-col gap-1 items-start">
            <h3 className="text-[14px] font-bold leading-[24px] tracking-[0.5px] text-[#20102B]">
              {t("addNewService")}
            </h3>
            <p className="text-[12px] font-normal leading-[24px] tracking-[0.5px] text-[#62636C]">
              {t("addNewServiceDescription")}
            </p>
          </div>
        </div>
      ),
    },
    {
      key: "4",
      danger: true,
      label: "a danger item",
    },
  ];
  return (
    <>
      <Layout>
        <Header
          className="flex  items-center justify-between bg-white"
          style={{
            backgroundColor: "white",
            height: "65px",
          }}
        >
          <div>
            <Space size={"middle"}>
              <Dropdown dropdownRender={(menu) => <AvatarDropdownMenu />}>
                <a onClick={(e) => e.preventDefault()}>
                  <Space>
                    <Avatar
                      icon={<FaRegUserCircle />}
                      size={24}
                      className="cursor-pointer hover:scale-110 transition-all"
                      // onClick={() => router.push("/freelance/profile/1")}
                    />
                  </Space>
                </a>
              </Dropdown>
              <IoNotificationsOutline size={24} />
              <CiMail size={24} />
              <div className="searchBox">
                <ConfigProvider
                  theme={{
                    token: {
                      controlHeight: 40,
                      // controlInteractiveSize: 16,
                    },
                  }}
                >
                  <Space.Compact
                    className="hidden md:flex lg:flex xl:flex"
                    size="middle"
                  >
                    <Select defaultValue="1" options={options} />
                    <Search
                      placeholder={t("search")}
                      allowClear
                      onSearch={onSearch}
                      style={{ width: 200 }}
                    />
                  </Space.Compact>
                </ConfigProvider>
              </div>
            </Space>
          </div>
          <div className="logo">
            <Space size={"large"}>
              <Dropdown menu={{ items: itemsServersMenu }}>
                <a
                  onClick={(e) => e.preventDefault()}
                  className=" text-[15px] font-bold leading-[24px] tracking-[0.5px] text-[#1B2D5E]"
                >
                  {t("services")}
                </a>
              </Dropdown>
              <a
                href="#"
                className=" text-[15px] font-bold leading-[24px] tracking-[0.5px] text-[#1B2D5E]"
              >
                {t("jobs")}
              </a>
              <Image
                src="/images/logo.svg"
                alt="banner"
                width={79}
                height={32}
              />
            </Space>
          </div>
        </Header>
        <Header
          style={{
            backgroundColor: "white",
            height: "65px",
            lineHeight: "65px",
          }}
        >
          <Divider
            style={{ backgroundColor: "#DEEAFF", height: "1px", margin: 0 }}
          />
          <Menu
            mode="horizontal"
            items={items1}
            onSelect={(e) => {
              console.log(e);
              params.set("category", e.key);
              router.push(`/${place}/${place}SearchAndCategory/${e.key}`);
            }}
            style={{
              flex: 1,
              minWidth: 0,
              backgroundColor: "white",
              height: "64px",
              display: "flex",
              alignItems: "center",
            }}
          />
          <Divider
            style={{ backgroundColor: "#DEEAFF", height: "1px", margin: 0 }}
          />
        </Header>
        <Content
          style={{
            minHeight: "52vh",
            backgroundColor: "white",
          }}
          className="px-2 md:px-12 lg:px-12 xl:px-12"
        >
          {children}
        </Content>
        <Footer style={{ margin: 0, padding: 0 }}>
          <FooterFreelancer></FooterFreelancer>
        </Footer>
      </Layout>
    </>
  );
}
