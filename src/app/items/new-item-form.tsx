"use client";

import { useForm } from "react-hook-form";

import FormInput from "../../components/form-input/form-input";

import { environmentVariables } from "../../utils/environment-variables";
import styles from "./new-item-form.module.css";

const URL = `${environmentVariables().public.backendUrl}/items`;

type FormData = {
  name: string;
  weight: number;
  protein: number;
  fat: number;
  carbohydrate: number;
  fiber: number;
  kcal: number;
};

export default function NewItemForm() {
  const { control, handleSubmit } = useForm<FormData>({
    defaultValues: {
      name: "",
      weight: 0,
      protein: 0,
      fat: 0,
      carbohydrate: 0,
      fiber: 0,
      kcal: 0,
    },
  });

  const onSubmit = async (data: FormData) => {
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
        alert("Ingredient added successfully");
      } else {
        throw new Error("Error adding item");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <FormInput name="name" control={control} label="Name" required />
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
      <button type="submit">Add</button>
    </form>
  );
}
