import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Sidebar from "../components/sidebar/sidebar";
import Topbar from "../components/topbar/topbar";

import AuthProvider from "../contexts/auth/auth.provider";
import I18nProvider from "../contexts/i18n/i18n.provider";
import NotificationProvider from "../contexts/notification/notification.provider";
import { theme } from "../theme/material.theme";
import "../theme/tailwind.theme.css";
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
            <ThemeProvider theme={theme}>
              <AuthProvider>
                <NotificationProvider>
                  <div className="flex flex-row w-full h-full">
                    <Sidebar />
                    <div className="flex flex-col w-full h-full">
                      <Topbar />
                      <main className="flex flex-col flex-1 p-6">
                        {children}
                      </main>
                    </div>
                  </div>
                </NotificationProvider>
              </AuthProvider>
            </ThemeProvider>
          </I18nProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
