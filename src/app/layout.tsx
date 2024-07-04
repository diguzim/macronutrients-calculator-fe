import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Sidebar from "../components/sidebar/sidebar";

import Topbar from "../components/topbar/topbar";
import "./globals.css";
import styles from "./layout.module.css";

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
          <div className={styles.topbarContainer}>
            <Topbar />
            <div className={styles.sidebarMainContainer}>
              <Sidebar />
              <main className={styles.main}>{children}</main>
            </div>
          </div>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
