import Link from "next/link";
import { useTranslation } from "react-i18next";
import { ROUTES } from "../../utils/constants/routes";
import Button from "../button/button";

export default function UnauthenticatedUserMenu() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-row gap-4">
      <Link href={ROUTES.REGISTER} passHref>
        <Button variant="outlined" size="large">
          {t("auth.register")}
        </Button>
      </Link>
      <Link href={ROUTES.LOGIN} passHref>
        <Button size="large">{t("auth.login")}</Button>
      </Link>
    </div>
  );
}
