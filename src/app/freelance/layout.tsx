"use client";

import HomePagesLayout from "@/components/layouts/homepageLayout";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <HomePagesLayout place="freelance">{children}</HomePagesLayout>;
}
