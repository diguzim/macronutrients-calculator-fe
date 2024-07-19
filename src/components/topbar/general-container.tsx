"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";

function GeneralLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      passHref
      className="text-primary-dark font-bold border-b-2 border-transparent hover:border-primary-dark transition duration-300"
    >
      {children}
    </Link>
  );
}

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
