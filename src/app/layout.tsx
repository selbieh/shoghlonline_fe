import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "react-international-phone/style.css";

import { ConfigProvider } from "antd";
import { getLocale, getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shogle Online",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <ConfigProvider
            theme={{
              token: { colorPrimary: "#7179CE", fontFamily: "Tajawal" },
            }}
          >
            {children}
          </ConfigProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
