"use client";
import FooterFreelancer from "@/components/layoutFreelancer/footer";
import {
  Avatar,
  Button,
  Divider,
  Layout,
  Menu,
  MenuProps,
  Select,
  Space,
} from "antd";
import Search, { SearchProps } from "antd/es/input/Search";
import { useTranslations } from "next-intl";
const { Header, Content, Footer } = Layout;
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { CiMail } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import { IoNotificationsOutline } from "react-icons/io5";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
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
              <Avatar
                icon={<FaRegUserCircle />}
                size={24}
                className="cursor-pointer hover:scale-110 transition-all"
                onClick={() => router.push("/freelance/profile")}
              />
              <IoNotificationsOutline size={24} />
              <CiMail size={24} />
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
            </Space>
          </div>
          <div className="logo">
            <Space size={"large"}>
              <a
                href="#"
                className=" text-[15px] font-bold leading-[24px] tracking-[0.5px] text-[#1B2D5E]"
              >
                {t("services")}
              </a>
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
              router.push(`/freelance/freelanceSearchAndCategory/${e.key}`);
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
