import Image from "next/image";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="h-[100vh] bg-[linear-gradient(180deg,_#7179CE_50%,_#fff_50%)]">
      <div className="logo p-10">
        <Image src="/images/logo-2.svg" alt="banner" width={117} height={39} />
      </div>
      <div className="flex items-center h-fit">
        <div className="w-1/2 flex justify-center items-center">
          <Image
            src="/images/Illustration - Asset 39.svg"
            alt="Profile picture"
            width={391}
            height={446}
          />
        </div>
        <div className="w-1/2">
          <div className="bg-white border-[1px] border-[#D2D5DA] m-8 p-3 rounded">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
