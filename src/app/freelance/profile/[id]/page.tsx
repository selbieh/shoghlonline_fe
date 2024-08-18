"use client";
import { Button, Card, Divider, Progress, Rate, Tag } from "antd";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const Profile = ({ params: { id } }: { params: { id: string } }) => {
  const t = useTranslations();
  return (
    <div className="flex bg-white ">
      <div className="w-1/3  p-4 flex justify-center items-center gap-4 flex-col">
        <Card
          className="w-[370px] h-[378px] bg-[#F7F9FF] rounded-xl shadow-sm border-[1px] border-[#E0E1E6]"
          styles={{
            body: {
              padding: "16px, 24px, 16px, 24px",
            },
          }}
        >
          <div className="flex justify-center items-center flex-col gap-3">
            <Image
              src="https://via.placeholder.com/104"
              alt="Profile"
              width={104}
              height={104}
              className="rounded-full"
            />
            <p className="font-[Tajawal] text-[16px] font-medium leading-[24px] tracking-[0.15]">
              full name
            </p>
            <p className="font-[Tajawal] text-[16px] font-medium leading-[24px] tracking-[0.15]">
              example@example.com
            </p>
            <div className="flex gap-3">
              <span className="flex gap-2">
                <Image
                  src="/icons/cursor-1.svg"
                  alt="cursor-1"
                  width={16}
                  height={16}
                />
                <span className="font-[Tajawal] text-[11px] font-medium leading-[16px] tracking-[.5px]">
                  العنوان
                </span>
              </span>
              <span className="flex gap-2">
                <Image
                  src="/icons/time-clock-nine.svg"
                  alt="time-clock-nine"
                  width={16}
                  height={16}
                />
                <span className="font-[Tajawal] text-[11px] font-medium leading-[16px] tracking-[.5px]">
                  2:10 مساء
                </span>
              </span>
            </div>
          </div>
          <div className="mt-5">
            <h3 className="font-[Tajawal] text-[14px] font-bold leading-[24px] tracking-[0.5px] text-[#000]">
              {t("skills")}
            </h3>
            <div className="flex gap-2 p-3">
              <Tag
                color="#ECF2FF"
                bordered={false}
                className="bg-[#ECF2FF] w-[117px] h-[40px] px-[16px] py-[8px] rounded-[28px] text-center"
              >
                <span className="text-[#20102B] font-[Tajawal] text-[14px] font-normal leading-[24px] tracking-[0.5px]">
                  magenta
                </span>
              </Tag>
            </div>
          </div>
        </Card>
        <Card
          className="w-[370px] h-[155px] bg-[#F7F9FF] rounded-xl shadow-sm border-[1px] border-[#E0E1E6]"
          styles={{
            body: {
              padding: "16px, 24px, 16px, 24px",
            },
          }}
        >
          <div className="flex justify-between">
            <span className="font-[Tajawal] text-[14px] font-bold leading-[24px] tracking-[0.5px]">
              {t("rating")}
            </span>
            <span>
              <span className="font-[Tajawal] text-[16px] font-bold leading-[24px] tracking-[0.5px] px-2">
                3.5
              </span>
              <Rate disabled defaultValue={2} />
            </span>
          </div>
          <Divider />

          <div className="flex justify-between">
            <span className="w-[-webkit-fill-available] font-[Tajawal] text-[14px] font-bold leading-[24px] tracking-[0.5px]">
              {t("projectsCompleted")}
            </span>
            <span className="contents px-2 w-[45%]">
              <Progress size="small" percent={30} />
            </span>
          </div>
        </Card>
        <Card
          className="w-[370px] bg-[#F7F9FF] rounded-xl shadow-sm border-[1px] border-[#E0E1E6]"
          styles={{
            body: {
              padding: "16px, 24px, 16px, 24px",
            },
          }}
        >
          <h3 className="font-[Tajawal] text-[14px] font-bold leading-[24px] tracking-[0.5px] pb-2">
            {t("introductionVideo")}
          </h3>
          <span className="w-[-webkit-fill-available] rounded-xl">
            <video
              className="rounded-xl"
              src="https://www.w3schools.com/html/mov_bbb.mp4"
              controls
            ></video>
          </span>
          <Divider />
          <h3 className="font-[Tajawal] text-[14px] font-bold leading-[24px] tracking-[0.5px] pb-2">
            {t("languages")}
          </h3>
          <p className="font-[Tajawal] text-[12px] font-bold leading-[24px] tracking-[0.5px] text-[#62636C]">
            العربية :
            <span className="font-[Tajawal] text-[12px] font-medium leading-[24px] tracking-[0.5px] px-1">
              اساسية
            </span>
          </p>
          <Divider />
          <h3 className="font-[Tajawal] text-[14px] font-bold leading-[24px] tracking-[0.5px] pb-2">
            {t("teaching")}
          </h3>
          <div className="flex justify-between">
            <div>
              <p className="font-[Tajawal] text-[12px] font-bold leading-[24px] tracking-[0.5px] text-[#62636C]">
                جامعة القاهرة
              </p>
              <span className="font-[Tajawal] text-[12px] font-medium leading-[24px] tracking-[0.5px] px-1">
                بكالوريوس فنون
              </span>
            </div>
            <p className="font-[Tajawal] text-[12px] font-bold leading-[24px] tracking-[0.5px] text-[#62636C]">
              2020-2021
            </p>
          </div>
          <Divider />
          <h3 className="font-[Tajawal] text-[14px] font-bold leading-[24px] tracking-[0.5px] pb-2">
            {t("experiences")}
          </h3>
          <div className="flex justify-between">
            <div>
              <p className="font-[Tajawal] text-[12px] font-bold leading-[24px] tracking-[0.5px] text-[#62636C]">
                جامعة القاهرة
              </p>
              <span className="font-[Tajawal] text-[12px] font-medium leading-[24px] tracking-[0.5px] px-1">
                بكالوريوس فنون
              </span>
            </div>
            <p className="font-[Tajawal] text-[12px] font-bold leading-[24px] tracking-[0.5px] text-[#62636C]">
              2020-2021
            </p>
          </div>
          <Divider />
          <h3 className="font-[Tajawal] text-[14px] font-bold leading-[24px] tracking-[0.5px] pb-2">
            {t("certifications")}
          </h3>
          <div className="flex justify-between">
            <div>
              <p className="font-[Tajawal] text-[12px] font-bold leading-[24px] tracking-[0.5px] text-[#62636C]">
                الجهة
              </p>
              <span className="font-[Tajawal] text-[12px] font-medium leading-[24px] tracking-[0.5px] px-1">
                اسم الشهادة
              </span>
            </div>
            <p className="font-[Tajawal] text-[12px] font-bold leading-[24px] tracking-[0.5px] text-[#62636C]">
              <Button
                type="default"
                className="h-[34px] px-[12px] py-[8px] rounded-[6px] font-[Tajawal] text-[12px] font-bold leading-[18px] text-[#7179CE]"
              >
                {t("show")}
              </Button>
            </p>
          </div>
          <Divider />
          <h3 className="font-[Tajawal] text-[14px] font-bold leading-[24px] tracking-[0.5px] pb-2">
            {t("linkedAccounts")}
          </h3>
          <div className="flex gap-3">
            <div className="rounded-full w-[54px] h-[54px] px-[12px] py-[18px] border-[1px] border-[#BBD2FF] flex justify-center items-center">
              <Image
                src="/icons/behance.svg"
                alt="behance"
                width={29}
                height={18}
              />
            </div>
            <div className="rounded-full w-[54px] h-[54px] px-[12px] py-[18px] border-[1px] border-[#BBD2FF] flex justify-center items-center">
              <Image
                src="/icons/linkedin.svg"
                alt="linkedin"
                width={29}
                height={18}
              />
            </div>{" "}
            <div className="rounded-full w-[54px] h-[54px] px-[12px] py-[18px] border-[1px] border-[#BBD2FF] flex justify-center items-center">
              <Image
                src="/icons/github.svg"
                alt="github"
                width={29}
                height={18}
              />
            </div>
          </div>
        </Card>
      </div>
      <div className="w-2/3 p-4 flex gap-4 flex-col">
        <Card
          className="w-full bg-white rounded-xl shadow-sm border-[1px] border-[#E0E1E6]"
          styles={{
            body: {
              padding: "16px, 24px, 16px, 24px",
            },
          }}
        >
          <div className="flex justify-between items-center">
            <h3 className="font-[Tajawal] text-[24px] font-medium leading-[24px] tracking-[0.5px]">
              مصمم المو قع
            </h3>
            <div>
              <h3 className="font-[Tajawal] text-[16px] font-medium leading-[24px] tracking-[0.5px] text-black">
                {t("hourPrice")}{" "}
                <span className="font-[Tajawal] text-[16px] font-bold leading-[24px] tracking-[0.5px]">
                  20$
                </span>
              </h3>
              <p className="text-[#80828D] font-[Tajawal] text-[12px] font-medium leading-[24px] tracking-[0.5px] text-center">
                50 {t("hours/week")}
              </p>
            </div>
          </div>
          <Divider />
          <div>
            <h3 className="py-3 font-[Tajawal] text-[16px] font-medium leading-[24px] tracking-[0.5px] text-right">
              {t("description")}
            </h3>
            <p className="font-[Tajawal] text-[12px] font-medium leading-[24px] tracking-[0.5px] text-[#62636C]">
              أنا مصمم واجهات مواقع محترف مع خبرة تتجاوز [عدد السنوات] عامًا في
              تطوير تصاميم واجهات مستخدم رائعة وسهلة الاستخدام. أعمل بشغف على
              تحويل الأفكار إلى تصاميم بصرية جذابة تتماشى مع احتياجات المستخدم
              وتجعل تجربة التصفح سهلة وممتعة.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Profile;
