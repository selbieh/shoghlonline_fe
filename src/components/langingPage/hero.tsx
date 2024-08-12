import { Button, Space } from "antd";
import Image from "next/image";
import LocaleSwitcherSelect from "../localization/LocaleSwitcherSelect";
const Hero = () => {
  return (
    <section className="h-[100vh] bg-[url('/images/hero-bg.png')] bg-[#F4F7FA] bg-blend-color-dodge bg-no-repeat ">
      <div className=" p-14 flex flex-col justify-between h-full">
        <div className="flex justify-between items-center">
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
              <Button className="h-[38px] rounded-md text-[#000] border-[#000]">
                Sign Up
              </Button>
              <Button type="primary" className="h-[38px] rounded-md">
                Log In
              </Button>
              <LocaleSwitcherSelect />
            </Space>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="w-[50%]">
            <Image
              src="/images/Arrow-11.svg"
              alt="Arrow"
              width={72}
              height={59}
            />
            <div>
              <h2 className="font-[Tajawal] text-[46px] font-medium leading-[55.2px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
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
              <p className="font-[Tajawal] text-[24px] font-normal leading-[28.8px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, voluptates vitae earum laborum
              </p>
            </div>
            <Button type="primary" className="h-[38px] rounded-md my-9">
              Get Started
            </Button>
          </div>
          <div className="w-[50%]  flex items-center justify-center">
            <div className="absolute flex flex-col gap-4 justify-around items-center w-[600px] h-[400px]">
              <div className="flex justify-between gap-4 w-full">
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

              <div className="flex justify-between gap-4 w-full">
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
