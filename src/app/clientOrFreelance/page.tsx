"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Button, Radio } from "antd";
import AuthGuard from "@/components/authenticationHOC/authenticated";
import { useRouter } from "next/navigation";
import FreelanceIcon from "@/components/clientOrFreelance/freelanceIcon";
import ClientIcon from "@/components/clientOrFreelance/clientIcon";

function ClientOrFreeLance() {
  const t = useTranslations();
  const router = useRouter();
  const [clientOrFreelancer, setClientOrFreelancer] = useState<string>("");

  function chooseMode() {
    window.localStorage.setItem("mode", clientOrFreelancer);
    if (clientOrFreelancer === "client") {
    } else if (clientOrFreelancer === "freelancer") {
      router.push("/freelance");
    }
  }
  return (
    <section className="h-[100vh] ">
      <div className="logo p-10">
        <Image src="/images/logo.svg" alt="banner" width={117} height={39} />
      </div>
      <div className="flex flex-col  h-fit m-10">
        <div className="  font-bold text-[24px] ">
          {t("helloChooseClientOrFreelancer")}
        </div>
        <div className="  text-[rgba(98,_99,_108,_1)] text-[16px] ">
          {t("youCanChangeBetweenClientAndFreelance")}
        </div>
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="flex flex-col items-center w-fit gap-5">
          <div className="flex flex-col  md:flex-row lg:flex-row xl:flex-row items-center justify-center  w-full gap-2">
            <Radio.Group
              size="large"
              style={{ display: "grid" }}
              className="w-full grid grid-cols-1 sm:grid-cols-2  "
              onChange={(e) => {
                setClientOrFreelancer(e.target.value);
              }}
            >
              <Radio.Button
                key={"client"}
                style={{
                  height: "230px",
                  borderColor: "white",
                }}
                value={"client"}
              >
                <div
                  className={
                    clientOrFreelancer === "client"
                      ? " bg-[#7179CE] h-[230px] w-[230px] border-[2px] rounded-xl border-[#345bcb] justify-center items-center flex flex-col cursor-pointer "
                      : "bg-white h-[230px] w-[230px] border-[2px] rounded-xl border-[#345bcb] justify-center items-center flex flex-col cursor-pointer "
                  }
                >
                  {/* <Image
                    src="/images/client.svg"
                    alt="client"
                    width={117}
                    height={39}
                  /> */}
                  <ClientIcon
                    fill={clientOrFreelancer === "client" ? "white" : "#7179CE"}
                  />
                  <div
                    className={
                      clientOrFreelancer === "client"
                        ? "text-white"
                        : "text-[#7179ce]"
                    }
                  >
                    {t("client")}
                  </div>
                  <div
                    className={
                      clientOrFreelancer === "client"
                        ? "text-white"
                        : "text-[#7179ce]"
                    }
                  >
                    {t("wanttohire")}
                  </div>{" "}
                </div>
              </Radio.Button>
              <Radio.Button
                key={"freelancer"}
                style={{
                  height: "230px",
                  borderColor: "white",
                }}
                value={"freelancer"}
              >
                <div
                  className={
                    clientOrFreelancer === "freelancer"
                      ? " bg-[#7179CE] h-[230px] w-[230px] border-[2px] rounded-xl border-[#345bcb] justify-center items-center flex flex-col cursor-pointer "
                      : "bg-white h-[230px] w-[230px] border-[2px] rounded-xl border-[#345bcb] justify-center items-center flex flex-col cursor-pointer "
                  }
                >
                  <FreelanceIcon
                    fill={
                      clientOrFreelancer === "freelancer" ? "white" : "#7179CE"
                    }
                  />
                  <div
                    className={
                      clientOrFreelancer === "freelancer"
                        ? "text-white"
                        : "text-[#7179ce]"
                    }
                  >
                    {t("freelancer")}
                  </div>
                  <div
                    className={
                      clientOrFreelancer === "freelancer"
                        ? "text-white"
                        : "text-[#7179ce]"
                    }
                  >
                    {t("makeMoney")}
                  </div>{" "}
                </div>
              </Radio.Button>
            </Radio.Group>
          </div>
          <div className="w-full">
            <Button
              type="primary"
              className="w-full h-[56px]"
              disabled={clientOrFreelancer === ""}
              onClick={chooseMode}
            >
              {t("next")}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AuthGuard(ClientOrFreeLance);
