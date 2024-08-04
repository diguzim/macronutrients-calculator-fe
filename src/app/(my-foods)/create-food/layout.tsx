"use client";

import { useTranslation } from "react-i18next";
import Layout from "../../../components/layout/layout";

export default function CreateFoodLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { t } = useTranslation();

  return (
    <Layout size="sm" title={t("createFood.title")}>
      {children}
    </Layout>
  );
}
