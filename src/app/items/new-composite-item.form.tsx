"use client";

import { useForm } from "react-hook-form";

import FormInput from "../../components/form-input/form-input";

import { useCallback, useEffect, useState } from "react";
import { environmentVariables } from "../../utils/environment-variables";
import styles from "./new-composite-item.module.css";

const GET_URL = `${environmentVariables().public.backendUrl}/items`;
const CREATE_URL = `${environmentVariables().public.backendUrl}/items/create-from-composition`;

type FormData = {
  name: string;
  itemIdsWithWeights: { itemId: string; weight: number }[];
  finalWeight: number;
};

export default function NewCompositeItemForm() {
  const [items, setItems] = useState<any[]>([]);
  console.log("items", items);

  const { control, handleSubmit } = useForm<FormData>({
    defaultValues: {
      name: "",
      itemIdsWithWeights: [],
      finalWeight: 0,
    },
  });

  const fetchItems = useCallback(async () => {
    const response = await fetch(GET_URL);
    const items = (await response.json()) as any[];
    setItems(items);
  }, []);

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  const onSubmit = useCallback(async (data: FormData) => {
    const transformedData = {
      ...data,
      finalWeight: Number(data.finalWeight),
    };

    try {
      const response = await fetch(CREATE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(transformedData),
      });

      if (response.ok) {
        alert("Composite item created successfully");
      } else {
        throw new Error("Error creating composite item");
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <FormInput name="name" control={control} label="Name" required />
      <FormInput
        name="finalWeight"
        control={control}
        label="Final Weight"
        type="number"
        required
      />
      <button type="submit">Add</button>
    </form>
  );
}
