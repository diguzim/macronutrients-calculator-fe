"use client";

import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { useForm } from "react-hook-form";

import { useSnackbar } from "notistack";
import Button from "../../components/button/button";
import FormInput from "../../components/form-input/form-input";
import { environmentVariables } from "../../utils/environment-variables";

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

  const router = useRouter();
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
        enqueueSnackbar("Registration successful!", { variant: "success" });
        reset(initialFormData);
        router.push("/login");
      } else {
        throw new Error("Error registering user");
      }
    } catch (error) {
      console.error(error);
      enqueueSnackbar("Error registering user", { variant: "error" });
    }
  }, []);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-2 w-96"
    >
      <FormInput name="name" control={control} label="Name" required />
      <FormInput name="email" control={control} label="Email" required />
      <FormInput name="password" control={control} label="Password" required />
      <Button variant="contained" size="large" type="submit">
        Register
      </Button>
    </form>
  );
}
