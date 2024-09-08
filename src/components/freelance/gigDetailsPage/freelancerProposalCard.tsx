import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function FreelancerProposalCard() {
  return (
    <div className="w-full border-b-[1px] py-5">
      <div className="flex flex-row justify-between items-center">
        <div>
          <div className=" flex flex-row items-center gap-2">
            <span className=" font-bold ">محمد ياسر</span>
            <span>
              <Image
                src={"/icons/rating.svg"}
                height={14}
                width={71}
                alt="rating"
              />
            </span>{" "}
            <span>منذ 10 دقائق</span>
          </div>
          <div className="flex flex-row gap-2">
            <Image
              src={"/icons/status.svg"}
              alt="bookmark"
              width={18}
              height={18}
            />
            <span className=" text-[#62636c]">مصمم جرافيك</span>
          </div>
        </div>
        <div className="flex flex-row gap-2">
          <span className=" text-[#7179ce] font-bold">تبليغ عن محتوي</span>
          <Image
            src="/icons/reportFlag.svg"
            width={16}
            height={16}
            alt="Report"
          />
        </div>
      </div>
      <div className="py-2">
        أسعد الله يومك! أنا [اسمك]، مصمم تجربة المستخدم وواجهة المستخدم ذو خبرة
        في تصميم تطبيقات الويب والجوال. لقد اطلعت على تفاصيل مشروعكم وأنا متحمس
        جدًا للعمل معكم لتصميم واجهات مبتكرة وسهلة الاستخدام تلبي احتياجات
        المستخدمين وتحقق أهدا... <Link href={"#"}>عرض المزيد</Link>
      </div>
    </div>
  );
}
