import { Button, Space } from "antd";
import Image from "next/image";
import LocaleSwitcherSelect from "../localization/LocaleSwitcherSelect";
import { useTranslations } from "next-intl";
const Hero = () => {
  const t = useTranslations();
  return (
    <section className="h-[100vh] bg-[url('/images/hero-bg.png')] bg-[#F4F7FA] bg-blend-color-dodge bg-no-repeat ">
      <div className="px-1 sm:px-11 md:px-11 lg:px-11 xl:px-11 py-4 h-full">
        <div className="flex justify-between items-center mb-5">
          <div className="logo">
            <Image
              src="/images/logo.svg"
              alt="banner"
              width={117}
              height={39}
            />
          </div>
          <div className="sign">
            <Space>
              <Button
                className="h-[38px] rounded-md text-[#000] border-[#D2D5DA] font-[Tajawal] text-[12px] font-bold leading-[18px]"
                href="/auth/login"
              >
                {t("login")}
              </Button>
              <Button
                type="primary"
                className="h-[38px] rounded-md font-[Tajawal] text-[12px] font-bold leading-[18px]"
                href="/auth/register"
              >
                {t("joinUs")}
              </Button>
              <LocaleSwitcherSelect />
            </Space>
          </div>
        </div>
        <div className="flex flex-wrap sm:flex-nowrap md:flex-nowrap lg:flex-nowrap xl:flex-nowrap sm:justify-between md:justify-between lg:justify-between mt-12 sm:mt-32 md:mt-32 lg::mt-32 xl:mt-32 ">
          <div className="w-full xl:w-[50%] md:w-[50%] sm:w-[50%] lg:w-[50%] py-5 px-1">
            <Image
              src="/images/Arrow-11.svg"
              alt="Arrow"
              width={72}
              height={59}
            />
            <div>
              <h2 className="font-[Tajawal] text-[46px] font-medium leading-[55.2px]">
                {t("heroTitle")}
              </h2>
            </div>
            <Image
              src="/images/Vector 1.svg"
              alt="Vector 1"
              width={270}
              height={17}
              className="my-9"
            />
            <div>
              <p className="font-[Tajawal] text-[24px] font-normal leading-[28.8px] ">
                {t("heroText")}
              </p>
            </div>
            <Button
              type="primary"
              className="h-[38px] rounded-md font-[Tajawal] text-[12px] font-bold leading-[18px] mt-9"
            >
              {t("heroBtn")}
            </Button>
          </div>
          <div className="w-full md:w-[50%] sm:w-[50%] lg:w-[50%]  flex items-center justify-center py-5 px-1">
            <div className="absolute flex flex-col gap-4 justify-around items-center w-auto md:w-[600px] lg:w-[600px] xl:w-[600px] h-[400px]">
              <div className="flex justify-end sm:justify-between md:justify-between lg:justify-between xl:justify-between gap-4 w-full">
                <Image
                  src="/images/Frame 20.svg"
                  alt="Asset-hero"
                  width={205}
                  height={50}
                />
                <Image
                  src="/images/Frame 21.svg"
                  alt="Asset-hero"
                  width={205}
                  height={50}
                />
              </div>

              <div className="flex justify-end sm:justify-between md:justify-between lg:justify-between xl:justify-between gap-4 w-full">
                <Image
                  src="/images/Frame 22.svg"
                  alt="Asset-hero"
                  width={205}
                  height={50}
                />
                <Image
                  src="/images/Frame 23.svg"
                  alt="Asset-hero"
                  width={205}
                  height={50}
                />
              </div>
            </div>
            <Image
              src="/images/Asset-hero-1.svg"
              alt="Asset-hero"
              width={464}
              height={298}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
