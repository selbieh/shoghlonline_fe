import "./globals.css";
import "react-international-phone/style.css";

import { store } from "@/store/rootReducer";
import { ConfigProvider } from "antd";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { Inter } from "next/font/google";
import { Provider } from "react-redux";

import AuthProvider from "./providers/authProvider";

import type { Metadata } from "next";
import { AntdRegistry } from "@ant-design/nextjs-registry";
const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Shogle Online",
// };

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
        <AuthProvider>
          <NextIntlClientProvider messages={messages}>
            <ConfigProvider
              theme={{
                token: {
                  colorPrimary: "#7179CE",
                  fontFamily: "Tajawal",
                  controlHeight: 56,
                  controlInteractiveSize: 16,
                },
                components: {
                  Slider: {
                    trackBg: "#7179ce",
                    railBg: "#cedfff",
                    handleSize: 11,
                    handleColor: "#1b3dbc",
                    handleSizeHover: 11,
                    handleActiveColor: "#1b3dbc",
                  },
                },
              }}
            >
              <AntdRegistry>{children}</AntdRegistry>
            </ConfigProvider>
          </NextIntlClientProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
