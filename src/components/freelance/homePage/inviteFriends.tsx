"use client";
import { message } from "antd";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React, { useRef } from "react";

export default function InviteFriends() {
  const t = useTranslations();

  function copyLink() {
    const linkText: any = document.getElementById("link")?.innerText;
    console.log(linkText);
    navigator.clipboard
      .writeText(linkText)
      .then(() => message.success(t("Link Copied") + " : " + linkText))
      .catch((err) => message.error("Error copying text: ", err));
  }

  return (
    <div className="w-[286px] h-[239px] m-5">
      <div className="font-bold py-[12px]">{t("inviteYourFriends")}</div>
      <div className="my-5">{t("inviteAFriend")}</div>
      <div className=" w-full flex flex-col items-center">
        <div className="w-[238px] h-[41px] border-[1px] rounded-[12px] p-[10px] border-[#e7e8ec] flex flex-row justify-between ">
          <div
            className="flex flex-row items-center cursor-pointer"
            onClick={copyLink}
          >
            <span className="px-[2px]">
              <Image
                src={"/icons/copy.svg"}
                width={15}
                height={15}
                alt="copyIcon"
              />
            </span>
            <span>copy</span>
          </div>
          <div id="link">shoghlonline.com/3G32a </div>
        </div>
      </div>
      <div className="flex flex-row gap-5 m-5 justify-center">
        <Image src={"/icons/X.svg"} width={24} height={24} alt="X" />
        <Image src={"/icons/linkedinblue.svg"} width={24} height={24} alt="X" />
        <Image src={"/icons/instagram.svg"} width={24} height={24} alt="X" />
        <Image src={"/icons/facebook.svg"} width={24} height={24} alt="X" />
      </div>
    </div>
  );
}
