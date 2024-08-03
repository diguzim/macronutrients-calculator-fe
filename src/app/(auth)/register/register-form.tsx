"use client";

import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { useForm } from "react-hook-form";

import { useSnackbar } from "notistack";
import { useTranslation } from "react-i18next";
import Button from "../../../components/button/button";
import FormInput from "../../../components/form-input/form-input";
import { ROUTES } from "../../../utils/constants/routes";
import { environmentVariables } from "../../../utils/environment-variables";

const URL = `${environmentVariables().public.backendUrl}/auth/register`;

type FormData = {
  name: string;
  email: string;
  password: string;
};

const initialFormData: FormData = {
  name: "",
  email: "",
  password: "",
};

export default function RegisterForm() {
  const { control, handleSubmit, reset } = useForm<FormData>({
    defaultValues: initialFormData,
  });

  const { t } = useTranslation();
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();

  const onSubmit = useCallback(
    async (data: FormData) => {
      try {
        const response = await fetch(URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        if (response.ok) {
          enqueueSnackbar(t("auth.registrationSuccess"), {
            variant: "success",
          });
          reset(initialFormData);
          router.push(ROUTES.LOGIN);
        } else {
          console.log("response", response);
          throw new Error("Error registering user");
        }
      } catch (error) {
        console.error(error);
        enqueueSnackbar(t("auth.registrationError"), { variant: "error" });
      }
    },
    [enqueueSnackbar, reset, router, t]
  );

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-2 w-96"
    >
      <FormInput
        name="name"
        control={control}
        label={t("auth.name")}
        required
      />
      <FormInput
        name="email"
        control={control}
        label={t("auth.email")}
        required
      />
      <FormInput
        name="password"
        control={control}
        label={t("auth.password")}
        required
      />
      <Button size="large" type="submit">
        {t("auth.register")}
      </Button>
    </form>
  );
}
