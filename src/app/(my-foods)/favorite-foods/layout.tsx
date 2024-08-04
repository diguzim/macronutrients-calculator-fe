"use client";

import { useTranslation } from "react-i18next";
import Layout from "../../../components/layout/layout";

export default function FavoriteFoodsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { t } = useTranslation();

  return (
    <Layout size="md" title={t("favoriteFoods.title")}>
      {children}
    </Layout>
  );
}
