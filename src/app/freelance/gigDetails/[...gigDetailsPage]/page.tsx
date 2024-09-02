"use client";
import ClientDetailsSection from "@/components/freelance/gigDetailsPage/clientDetailsSection";
import GigDetailsSection from "@/components/freelance/gigDetailsPage/gigDetailsSection";
import GigProposals from "@/components/freelance/gigDetailsPage/gigProposals";
import ShareSection from "@/components/freelance/gigDetailsPage/shareSection";
import InviteFriends from "@/components/freelance/homePage/inviteFriends";
import { Button } from "antd";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

export default function GigDetailsPage() {
  const t = useTranslations();
  return (
    <div className="m-10">
      <div>
        <div className="flex flex-row justify-between items-center ">
          <div className=" font-bold text-[16px]">
            مصمم تجربة المستخدم وواجهة المستخدم لتصميم تطبيقات الويب والجوال
            بطريقة سهلة وجذابة
          </div>
          <div className=" flex flex-row gap-2 items-center">
            <Button
              className="w-[219px] h-[42px] rounded-[6px] py-[12px] px-[20px]"
              type="primary"
            >
              {t("submitProposal")}
            </Button>
            <Button
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
          </div>
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
      <div className="flex flex-row gap-10">
        <div>
          نبحث عن مصمم تجربة المستخدم وواجهة المستخدم موهوب للانضمام إلى فريقنا
          والمساعدة في تصميم تطبيقات ويب وجوال سهلة الاستخدام، تفاعلية وجذابة
          بصريًا. ستتعاون كجزء من الفريق مع فريق التطوير لدينا لتصميم واجهات
          مستخدم مريحة توفر تجارب مستخدم سلسة عبر منصات متعددة. المسؤوليات:
          تصميم وتطوير الرسوم التخطيطية والنماذج الأولية والنماذج ذات الدقة
          العالية لتطبيقات الويب والجوال. إجراء أبحاث المستخدم واختبارات
          القابلية للاستخدام لتوجيه قرارات التصميم. إنشاء واجهات سهلة الاستخدام
          وجذابة بصريًا تتماشى مع هوية العلامة التجارية. التعاون مع المطورين
          لضمان قابلية تنفيذ التصاميم. تحسين التصاميم بشكل مستمر بناءً على
          التعليقات واختبارات المستخدم. البقاء على اطلاع بأحدث اتجاهات التصميم
          والأدوات والتقنيات. المتطلبات: خبرة مثبتة كمصمم تجربة المستخدم وواجهة
          المستخدم مع محفظة قوية تعرض تصاميم لتطبيقات الويب والجوال. إتقان أدوات
          التصميم مثل Adobe XD، Figma، Sketch أو ما شابهها. فهم قوي لمبادئ
          التصميم المرتكزة على المستخدم وأفضل الممارسات. القدرة على إنشاء الرسوم
          التخطيطية، وتدفقات المستخدم، والنماذج الأولية. خبرة في التصميم
          التفاعلي والتصميم التكيفي. مهارات تواصل ممتازة والقدرة على العمل في
          بيئة تعاونية. اهتمام بالتفاصيل وشغف بتقديم تجارب مستخدم استثنائية.
          المؤهلات المفضلة: خبرة في العمل مع أنظمة التصميم. معرفة بـ HTML/CSS
          والمبادئ الأساسية لتطوير الواجهة الأمامية. الإلمام بمعايير وإرشادات
          الوصول. إذا كنت مبدعًا وتتمتع بشغف بتصميم منتجات رقمية تركز على
          المستخدم، فنحن نود أن نسمع منك! يرجى تضمين رابط لمحفظة أعمالك مع طلب
          التقديم.
          <div>
            <GigProposals />
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <GigDetailsSection />
          <ClientDetailsSection />
          <ShareSection />
        </div>
      </div>
    </div>
  );
}
