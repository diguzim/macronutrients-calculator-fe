"use client";

import Button from "@mui/material/Button";
import { useCallback } from "react";
import { useForm } from "react-hook-form";

import { useSnackbar } from "notistack";
import FormInput from "../../components/form-input/form-input";
import useAuth from "../../contexts/auth/use-auth";
import { environmentVariables } from "../../utils/environment-variables";

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

  const { login } = useAuth();
  const { enqueueSnackbar } = useSnackbar();

  const onSubmit = useCallback(async (data: FormData) => {
    try {
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
        enqueueSnackbar("Login successful!", { variant: "success" });
        reset(initialFormData);
      } else {
        throw new Error("Error logging in user");
      }
    } catch (error) {
      console.error(error);
      enqueueSnackbar("Error logging in user", { variant: "error" });
    }
  }, []);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-2 max-w-96"
    >
      <FormInput name="email" control={control} label="Email" required />
      <FormInput
        name="password"
        type="password"
        control={control}
        label="Password"
        required
      />
      <Button variant="contained" size="large" type="submit">
        Login
      </Button>
    </form>
  );
}
