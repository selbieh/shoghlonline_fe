"use client";
import Hero from "@/components/langingPage/hero";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const { status }: { status: any } = useSession<any>();
  const router = useRouter();
  useEffect(() => {
    status === "authenticated" ? router.push("/clientOrFreelance") : "";
  }, [status]);
  return (
    <main className="flex min-h-screen flex-col justify-between">
      <Hero></Hero>
    </main>
  );
}
