import Image from "next/image";
import GigTag from "./gigTag";
import { Divider } from "antd";

export default function GigOffer({ data }: { data: any }) {
  return (
    <div className=" hover:bg-[#f7f9ff] hover:cursor-pointer">
      <div className=" flex flex-row justify-between w-full my-5">
        <div className="flex flex-row items-center">
          <div className=" font-bold text-[16px] mx-5">
            مطلوب مصمم جرافيك لتصميم نماذج التطبيقات والمواقع الإلكترونية
          </div>
          <Image
            src={"/icons/bookmark.svg"}
            alt="bookmark"
            width={24}
            height={24}
          />
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
      <div className="flex flex-row gap-20 mx-10">
        <div className="flex flex-row items-center gap-1 ">
          <Image
            src={"/icons/dollarcircle.svg"}
            width={18}
            height={18}
            alt="priceIcon"
          />
          <span>سعر ثابت</span>
          <span>$50</span>
        </div>
        <div className="flex flex-row items-center gap-1 ">
          <Image
            src={"/icons/clock.svg"}
            width={18}
            height={18}
            alt="priceIcon"
          />
          <span>الوقت التقديري للمشروع</span>
          <span>1:3 شهور</span>
        </div>
      </div>
      <div className=" m-10">
        نبحث عن مصمم جرافيك ماهر لإنشاء نماذج تطبيقات ومواقع إلكترونية جذابة
        بصريًا لوكالتنا. يجب أن يكون المرشح المثالي لديه فهم قوي لمبادئ التصميم
        والقدرة على العمل وفقًا لإرشادات علامتنا التجارية. تشمل المسؤوليات
        الرئيسية إنشاء نماذج تمثل بدقة رؤية العميل وترجمتها إلى تصاميم جذابة.
        يجب أن يكون لدى المصمم خبرة في إنشاء نماذج للمنصات المحمولة والويب على
        حد سواء.
      </div>
      <div className="flex flex-row flex-wrap gap-5 mx-10">
        <div className="w-[88px] h-[21px] rounded-[12px] py-[7px] px-[12px] bg-[#deeaff] flex items-center ">
          فوتوشوب
        </div>
        <GigTag>فوتوشوب</GigTag>
      </div>
      <div className="flex flex-row flex-wrap gap-5 m-10">
        <div className="flex flex-row items-center gap-1">
          <Image
            src={"/icons/location.svg"}
            alt="bookmark"
            width={24}
            height={24}
          />
          <span>القاهرة - مصر</span>
        </div>
        <div className="flex flex-row items-center gap-1">
          <Image
            src={"/icons/verifiedPayment.svg"}
            alt="bookmark"
            width={24}
            height={24}
          />
          <span>تم التحقق من الدفع</span>
        </div>
        <div className="flex flex-row items-center gap-1">
          <Image
            src={"/icons/offers.svg"}
            alt="bookmark"
            width={24}
            height={24}
          />
          <span>العروض 5 - 10</span>
        </div>
      </div>
      <Divider className="bg-[#e7e8ec]" />
    </div>
  );
}
