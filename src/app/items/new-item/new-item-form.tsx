"use client";

import { useSnackbar } from "notistack";
import { useForm } from "react-hook-form";

import FormInput from "../../../components/form-input/form-input";

import { useRouter } from "next/navigation";
import { useCallback } from "react";
import Button from "../../../components/button/button";
import FormSelect from "../../../components/form-select/form-select";
import { environmentVariables } from "../../../utils/environment-variables";
import { revalidateItems } from "./../revalidate-items";

const URL = `${environmentVariables().public.backendUrl}/items/create-from-absolute-values`;

type FormData = {
  name: string;
  type: string;
  weight: number;
  protein: number;
  fat: number;
  carbohydrate: number;
  fiber: number;
  kcal: number;
};

const initialFormData: FormData = {
  name: "",
  type: "",
  weight: 0,
  protein: 0,
  fat: 0,
  carbohydrate: 0,
  fiber: 0,
  kcal: 0,
};

export default function NewItemForm() {
  const { control, handleSubmit, reset } = useForm<FormData>({
    defaultValues: initialFormData,
  });
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();

  const onSubmit = useCallback(async (data: FormData) => {
    const transformedData = {
      ...data,
      weight: Number(data.weight),
      protein: Number(data.protein),
      fat: Number(data.fat),
      carbohydrate: Number(data.carbohydrate),
      fiber: Number(data.fiber),
      kcal: Number(data.kcal),
    };

    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(transformedData),
      });

      if (response.ok) {
        await revalidateItems();
        reset(initialFormData);
        enqueueSnackbar("Item added successfully", {
          variant: "success",
        });
        router.push("/items");
      } else {
        throw new Error("Error adding item");
      }
    } catch (error) {
      console.log("error", error);
      enqueueSnackbar("Error adding item", { variant: "error" });
    }
  }, []);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-2 max-w-96"
    >
      <FormInput name="name" control={control} label="Name" required />
      <FormSelect
        name="type"
        control={control}
        label="Type"
        options={[
          { label: "Raw ingredient", value: "raw" },
          { label: "Recipe", value: "recipe" },
        ]}
        required
      />
      <FormInput
        name="weight"
        control={control}
        label="Amount (g)"
        type="number"
        required
      />
      <FormInput
        name="protein"
        control={control}
        label="Protein (g)"
        type="number"
        required
      />
      <FormInput
        name="fat"
        control={control}
        label="Fat (g)"
        type="number"
        required
      />
      <FormInput
        name="carbohydrate"
        control={control}
        label="Carbohydrate (g)"
        type="number"
        required
      />
      <FormInput
        name="fiber"
        control={control}
        label="Fiber (g)"
        type="number"
        required
      />
      <FormInput
        name="kcal"
        control={control}
        label="Kcal"
        type="number"
        required
      />
      <Button type="submit" variant="contained" size="large">
        Create
      </Button>
    </form>
  );
}
