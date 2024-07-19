"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";
import useAuth from "../../contexts/auth/use-auth";
import Button from "../button/button";

export default function AuthenticationContainer() {
  const { isAuthenticated, logout } = useAuth();
  const { t } = useTranslation();

  return (
    <div className="flex flex-row items-center justify-between gap-5 mr-5">
      {isAuthenticated && (
        <Button variant="outlined" onClick={logout}>
          {t("auth.logout")}
        </Button>
      )}
      {!isAuthenticated && (
        <>
          <Link href="/login" passHref>
            <Button>{t("auth.login")}</Button>
          </Link>
          <Link href="/register" passHref>
            <Button>{t("auth.register")}</Button>
          </Link>
        </>
      )}
    </div>
  );
}
