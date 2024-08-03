"use client";

import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";
import Link from "../../../components/link/link";
import { ROUTES } from "../../../utils/constants/routes";
import LoginForm from "./login-form";

export default function RegisterPage() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center gap-4">
      <LoginForm />
      <Typography>
        {t("auth.noAccount")}{" "}
        <Link href={ROUTES.REGISTER}>{t("auth.registerCTA")}</Link>
      </Typography>
    </div>
  );
}
