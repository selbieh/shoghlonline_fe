import React from "react";

export default function GigTag({ children }: { children: string }) {
  return (
    <div className="w-[88px] h-[21px] rounded-[12px] py-[7px] px-[12px] bg-[#deeaff] flex items-center ">
      {children}
    </div>
  );
}
