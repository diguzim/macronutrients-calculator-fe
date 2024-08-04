"use client";

import { useTranslation } from "react-i18next";
import Layout from "../../../components/layout/layout";

export default function FoodSearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { t } = useTranslation();
  return (
    <Layout
      size="md"
      title={t("foodSearch.title")}
      description={t("foodSearch.subtitle1")}
    >
      {children}
    </Layout>
  );
}
