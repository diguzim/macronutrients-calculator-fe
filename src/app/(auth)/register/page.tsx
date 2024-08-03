"use client";

import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";
import Link from "../../../components/link/link";
import { ROUTES } from "../../../utils/constants/routes";
import RegisterForm from "./register-form";

export default function RegisterPage() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center gap-4">
      <RegisterForm />
      <Typography>
        {t("auth.alreadyRegistered")}{" "}
        <Link href={ROUTES.LOGIN}>{t("auth.loginCTA")}</Link>
      </Typography>
    </div>
  );
}
