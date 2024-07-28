"use client";

import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";

import { useRouter } from "next/navigation";
import { useSnackbar } from "notistack";
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
          setIsLoading(false);
          router.push(ROUTES.MEALS);
          reset(initialFormData);
          enqueueSnackbar("Login successful!", { variant: "success" });
        } else {
          throw new Error("Error logging in user");
        }
      } catch (error) {
        setIsLoading(false);
        console.error(error);
        enqueueSnackbar("Error logging in user", { variant: "error" });
      }
    },
    [enqueueSnackbar, login, reset, router]
  );

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-2 w-96"
    >
      <FormInput name="email" control={control} label="Email" required />
      <FormInput
        name="password"
        type="password"
        control={control}
        label="Password"
        required
      />
      <Button size="large" type="submit" disabled={isLoading}>
        Login
      </Button>
    </form>
  );
}
