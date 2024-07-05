"use client";

import Button from "@mui/material/Button";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import useAuth from "../../contexts/auth/use-auth";

export default function AuthenticationContainer() {
  const { isAuthenticated, logout } = useAuth();
  const { t } = useTranslation();

  return (
    <div className="flex flex-row items-center justify-between gap-5 mr-5">
      {isAuthenticated && (
        <Button variant="outlined" size="large" onClick={logout}>
          {t("auth.logout")}
        </Button>
      )}
      {!isAuthenticated && (
        <>
          <Link href="/login" passHref>
            <Button variant="outlined" size="large">
              {t("auth.login")}
            </Button>
          </Link>
          <Link href="/register" passHref>
            <Button variant="contained" size="large">
              {t("auth.register")}
            </Button>
          </Link>
        </>
      )}
    </div>
  );
}
