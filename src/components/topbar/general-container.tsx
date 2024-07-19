"use client";

import { useTranslation } from "react-i18next";
import GeneralLink from "./general-link";

export default function GeneralContainer() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-row items-center justify-between gap-8 mr-5">
      <GeneralLink href="/">{t("general.home")}</GeneralLink>
      <GeneralLink href="/about">{t("general.about")}</GeneralLink>
      <GeneralLink href="/contact">{t("general.contact")}</GeneralLink>
    </div>
  );
}
