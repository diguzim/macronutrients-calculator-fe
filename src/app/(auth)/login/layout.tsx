"use client";

import { useTranslation } from "react-i18next";
import Layout from "../../../components/layout/layout";

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { t } = useTranslation();

  return (
    <Layout size="sm" title={t("auth.login")}>
      {children}
    </Layout>
  );
}
