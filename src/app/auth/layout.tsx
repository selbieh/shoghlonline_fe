import Image from "next/image";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="h-[100vh] bg-[linear-gradient(180deg,_#7179CE_50%,_#fff_50%)]">
      <div className="logo p-10">
        <Image src="/images/logo-2.svg" alt="banner" width={117} height={39} />
      </div>
      <div className="flex items-center h-fit flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row ">
        <div className="w-[96%] sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-2/3 flex justify-center">
          <div className="bg-white border-[1px] border-[#D2D5DA] m-2 sm:m-16 md:m-16 lg:m-16 xl:m-16 p-4 sm:p-8 md:p-8 lg:p-8 xl:p-8 rounded-[40px] [box-shadow:0px_4px_35px_0px_#00000014] w-full sm:w-[663px] md:w-[663px] lg:w-[663px] xl:w-[663px]">
            {children}
          </div>
        </div>
        <div className="w-1/3 hidden sm:flex  md:flex lg:flex xl:flex justify-center items-center">
          <Image
            src="/images/Illustration - Asset 39.svg"
            alt="Profile picture"
            width={341}
            height={446}
          />
        </div>
      </div>
    </section>
  );
}
