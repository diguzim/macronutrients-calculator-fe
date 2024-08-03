"use client";

import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";

import { useRouter } from "next/navigation";
import { useSnackbar } from "notistack";
import { useTranslation } from "react-i18next";
import Button from "../../../components/button/button";
import FormInput from "../../../components/form-input/form-input";
import useAuth from "../../../contexts/auth/use-auth";
import { ROUTES } from "../../../utils/constants/routes";
import { environmentVariables } from "../../../utils/environment-variables";

const URL = `${environmentVariables().public.backendUrl}/auth/login`;

type FormData = {
  email: string;
  password: string;
};

const initialFormData: FormData = {
  email: "",
  password: "",
};

export default function RegisterForm() {
  const { control, handleSubmit, reset } = useForm<FormData>({
    defaultValues: initialFormData,
  });
  const [isLoading, setIsLoading] = useState(false);

  const { t } = useTranslation();
  const router = useRouter();
  const { login } = useAuth();
  const { enqueueSnackbar } = useSnackbar();

  const onSubmit = useCallback(
    async (data: FormData) => {
      try {
        setIsLoading(true);
        const response = await fetch(URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        if (response.ok) {
          const { token, user } = await response.json();
          login(user, token);
          router.push(ROUTES.FAVORITE_FOODS);
          reset(initialFormData);
          enqueueSnackbar(t("auth.loginSuccess"), { variant: "success" });
        } else {
          console.log("response", response);
          throw new Error("Error logging in user");
        }
      } catch (error) {
        console.error(error);
        enqueueSnackbar(t("auth.loginError"), { variant: "error" });
      }

      setIsLoading(false);
    },
    [enqueueSnackbar, login, reset, router, t]
  );

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-2 w-96"
    >
      <FormInput
        name="email"
        control={control}
        label={t("auth.email")}
        required
      />
      <FormInput
        name="password"
        type="password"
        control={control}
        label={t("auth.password")}
        required
      />
      <Button size="large" type="submit" disabled={isLoading}>
        {t("auth.login")}
      </Button>
    </form>
  );
}
