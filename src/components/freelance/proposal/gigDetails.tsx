import { useTranslations } from "next-intl";
import React from "react";
import GigTag from "../homePage/gigTag";
import Image from "next/image";

export default function GigDetails() {
  const t = useTranslations();
  return (
    <div className=" w-full rounded-[12px] border-[1px] py-[30px] px-[24px] my-[20px]">
      <div className=" font-bold">{t("gigDetails")}</div>
      <div className="flex flex-row items-center w-full">
        <div className=" flex flex-col gap-3 border-l-[1px] w-[30%]">
          <div className="flex flex-row items-center gap-2">
            <Image
              src={"/icons/clock.svg"}
              alt="bookmark"
              width={18}
              height={18}
            />
            <span>{t("estimatedTime")} : </span>
            <span className="w-[54px] h-[21px] rounded-[24px]  bg-[#34c75942] flex items-center justify-center">
              1 : 3
            </span>
          </div>
          <div className="flex flex-row items-center gap-2">
            <Image
              src={"/icons/dollarcircle.svg"}
              alt="bookmark"
              width={18}
              height={18}
            />
            <span>{t("constPrice")} : </span>
            <span className="w-[54px] h-[21px] rounded-[24px]  bg-[#34c75942] flex items-center justify-center">
              $50
            </span>
          </div>
          <div className="flex flex-row items-center gap-2">
            <Image
              src={"/icons/offers.svg"}
              alt="bookmark"
              width={18}
              height={18}
            />
            <span>{t("offers")} : </span>
            <span className="w-[54px] h-[21px] rounded-[24px]  bg-[#34c75942] flex items-center justify-center">
              5 - 10
            </span>
          </div>
          <div className="flex flex-row items-center gap-2">
            <Image
              src={"/icons/dollarcircle.svg"}
              alt="bookmark"
              width={18}
              height={18}
            />
            <span>{t("avgPrice")} : </span>
            <span className="w-[54px] h-[21px] rounded-[24px]  bg-[#34c75942] flex items-center justify-center">
              $55
            </span>
          </div>
          <div className="flex flex-row items-center gap-2">
            <Image
              src={"/icons/experience.svg"}
              alt="bookmark"
              width={18}
              height={18}
            />
            <span>{t("experience")} : </span>
            <span className="w-[54px] h-[21px] rounded-[24px]  bg-[#34c75942] flex items-center justify-center">
              متوسط
            </span>
          </div>
          <div>
            <div className=" font-bold text-[12px] my-2">
              {t("requiredSkills")}
            </div>
            <div className="flex flex-row flex-wrap  items-center gap-2">
              <GigTag>فوتوشوب</GigTag>
              <GigTag>فوتوشوب</GigTag>
              <GigTag>فوتوشوب</GigTag>
              <GigTag>فوتوشوب</GigTag>
              <GigTag>فوتوشوب</GigTag>
              <GigTag>فوتوشوب</GigTag>
              <GigTag>فوتوشوب</GigTag>
            </div>
          </div>
        </div>
        <div className="w-fit px-[15px]">
          <div className=" font-bold my-2">{t("jobDescription")}</div>
          <div className="w-full max-w-fit">
            والمساعدة في تصميم تطبيقات ويب وجوال سهلة الاستخدام، تفاعلية وجذابة
            بصريًا. ستتعاون كجزء من الفريق مع فريق التطوير لدينا لتصميم واجهات
            مستخدم مريحة توفر تجارب مستخدم سلسة عبر منصات متعددة. المسؤوليات:
            تصميم وتطوير الرسوم التخطيطية والنماذج الأولية والنماذج ذات الدقة
            العالية لتطبيقات الويب والجوال. إجراء أبحاث المستخدم واختبارات
            القابلية للاستخدام لتوجيه قرارات التصميم. إنشاء واجهات سهلة
            الاستخدام وجذابة بصريًا تتماشى مع هوية العلامة التجارية. التعاون مع
            المطورين لضمان قابلية تنفيذ التصاميم. تحسين التصاميم بشكل مستمر
            بناءً على التعليقات واختبارات المستخدم. البقاء على اطلاع بأحدث
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
          </div>
        </div>
      </div>
    </div>
  );
}
