"use client";

import HomePagesLayout from "@/components/layouts/homepageLayout";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <HomePagesLayout place="client">{children}</HomePagesLayout>;
}
