"use client";
import { Breadcrumb, Button, Divider } from "antd";
import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import ShareSection from "@/components/freelance/gigDetailsPage/shareSection";
import ServiceDetailsSection from "@/components/client/serviceDetailsSection";
import FreelancerDetailsSection from "@/components/client/freelancerInfoSection";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ServiceStatsCard from "@/components/client/serviceStatsCard";

export default function ServiceDetailsPage({
  params,
}: {
  params: { service: number[] };
}) {
  const t = useTranslations();
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div className="w-full p-[50px]">
      {params.service[0] == 2 && <ServiceStatsCard />}
      <div className=" flex flex-col gap-[30px]">
        <div className="flex flex-row justify-between">
          <div>
            <span className="font-bold text-[16px]">
              أقدم خدمة تصميم واجهات مواقع مخصصة تجمع بين الجمال والوظيفية
            </span>
            <Breadcrumb
              separator=">"
              items={[
                {
                  title: "تطوير المواقع",
                },
                {
                  title: "تصميم المواقع",
                },
              ]}
            />
          </div>
          {params.service[0] == 5 ? (
            <Button
              style={{ height: "42px" }}
              className="w-[136px] h-[42px] rounded-[6px] py-[12px] px-[20px] border-[1px] border-[#d2d5da]"
              icon={
                <Image
                  src={"/icons/bookmark.svg"}
                  alt="bokmark"
                  width={24}
                  height={24}
                />
              }
            >
              {t("bookmark")}
            </Button>
          ) : (
            <Button
              style={{ height: "42px" }}
              type="primary"
              className="w-[136px] h-[42px] rounded-[6px] py-[12px] px-[20px] border-[1px] border-[#d2d5da]"
              icon={
                <Image
                  src={"/icons/edit.svg"}
                  alt="bokmark"
                  width={24}
                  height={24}
                />
              }
            >
              {t("edit")}
            </Button>
          )}
        </div>
        <div className="flex flex-row items-center">
          <Image
            src={"/icons/clock.svg"}
            alt="bookmark"
            width={24}
            height={24}
          />
          <span>منذ 10 دقائق</span>
        </div>
      </div>
      <Divider style={{ backgroundColor: "#b9bbc6", height: "1px" }} />
      <div className=" flex flex-row gap-[20px]">
        <div>
          <Image
            src="/images/serviceCardImage.png"
            alt="service image"
            width={855}
            height={372}
          />
          <h3 className="text-[12px] font-bold my-2">{t("aboutTheService")}</h3>
          <p>
            نبحث عن مصمم تجربة المستخدم وواجهة المستخدم موهوب للانضمام إلى
            فريقنا والمساعدة في تصميم تطبيقات ويب وجوال سهلة الاستخدام، تفاعلية
            وجذابة بصريًا. ستتعاون كجزء من الفريق مع فريق التطوير لدينا لتصميم
            واجهات مستخدم مريحة توفر تجارب مستخدم سلسة عبر منصات متعددة.
            المسؤوليات: تصميم وتطوير الرسوم التخطيطية والنماذج الأولية والنماذج
            ذات الدقة العالية لتطبيقات الويب والجوال. إجراء أبحاث المستخدم
            واختبارات القابلية للاستخدام لتوجيه قرارات التصميم. إنشاء واجهات
            سهلة الاستخدام وجذابة بصريًا تتماشى مع هوية العلامة التجارية.
            التعاون مع المطورين لضمان قابلية تنفيذ التصاميم. تحسين التصاميم بشكل
            مستمر بناءً على التعليقات واختبارات المستخدم. البقاء على اطلاع بأحدث
            اتجاهات التصميم والأدوات والتقنيات. المتطلبات: خبرة مثبتة كمصمم
            تجربة المستخدم وواجهة المستخدم مع محفظة قوية تعرض تصاميم لتطبيقات
            الويب والجوال. إتقان أدوات التصميم مثل Adobe XD، Figma، Sketch أو ما
            شابهها. فهم قوي لمبادئ التصميم المرتكزة على المستخدم وأفضل
            الممارسات. القدرة على إنشاء الرسوم التخطيطية، وتدفقات المستخدم،
            والنماذج الأولية. خبرة في التصميم التفاعلي والتصميم التكيفي. مهارات
            تواصل ممتازة والقدرة على العمل في بيئة تعاونية. اهتمام بالتفاصيل
            وشغف بتقديم تجارب مستخدم استثنائية. المؤهلات المفضلة: خبرة في العمل
            مع أنظمة التصميم. معرفة بـ HTML/CSS والمبادئ الأساسية لتطوير الواجهة
            الأمامية. الإلمام بمعايير وإرشادات الوصول. إذا كنت مبدعًا وتتمتع
            بشغف بتصميم منتجات رقمية تركز على المستخدم، فنحن نود أن نسمع منك!
            يرجى تضمين رابط لمحفظة أعمالك مع طلب التقديم.
          </p>
        </div>
        <div className="max-w-[267px]">
          <ServiceDetailsSection />
          {params.service[0] == 5 && (
            <Button className="w-full h-[44px]">{t("contactMe")}</Button>
          )}
          <FreelancerDetailsSection />
          <ShareSection />
        </div>
      </div>
      <div className="Widt wifull h-[227px]px border-[1px] rounded-[8px] py-[20px] px-12px m-[20px]">
        <h2 className="p-5 font-bold text-[12px]">{t("servicesGallery")}</h2>
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={false}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          //   autoPlay={this.props.deviceType !== "mobile" ? true : false}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          // deviceType={this.props.deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {/* <div className="px-[22px]"> */}
          <Image
            src="/images/serviceCardImage.png"
            alt="service image"
            width={400}
            height={154}
          />
          <Image
            src="/images/serviceCardImage.png"
            alt="service image"
            width={400}
            height={154}
          />
          <Image
            src="/images/serviceCardImage.png"
            alt="service image"
            width={400}
            height={154}
          />
          <Image
            src="/images/serviceCardImage.png"
            alt="service image"
            width={400}
            height={154}
          />
          <Image
            src="/images/serviceCardImage.png"
            alt="service image"
            width={400}
            height={154}
          />
          <Image
            src="/images/serviceCardImage.png"
            alt="service image"
            width={400}
            height={154}
          />
          {/* </div> */}
        </Carousel>
      </div>
    </div>
  );
}
