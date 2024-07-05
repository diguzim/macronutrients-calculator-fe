import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Sidebar from "../components/sidebar/sidebar";
import Topbar from "../components/topbar/topbar";

import AuthProvider from "../contexts/auth/auth.provider";
import I18nProvider from "../contexts/i18n/i18n.provider";
import NotificationProvider from "../contexts/notification/notification.provider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MaCal - Macronutrient Calculator",
  description: "A system for calculating macronutrient values of food items.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppRouterCacheProvider>
          <I18nProvider>
            <AuthProvider>
              <NotificationProvider>
                <div className="flex flex-col w-full h-full">
                  <Topbar />
                  <div className="flex flex-row w-full h-full">
                    <Sidebar />
                    <main className="flex flex-col flex-1 p-1">{children}</main>
                  </div>
                </div>
              </NotificationProvider>
            </AuthProvider>
          </I18nProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
