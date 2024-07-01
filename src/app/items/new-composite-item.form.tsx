"use client";

import { useForm } from "react-hook-form";

import FormInput from "../../components/form-input/form-input";

import { useCallback, useEffect, useState } from "react";
import { environmentVariables } from "../../utils/environment-variables";
import styles from "./new-composite-item.module.css";

const GET_URL = `${environmentVariables().public.backendUrl}/items`;
const CREATE_URL = `${environmentVariables().public.backendUrl}/items/create-from-composition`;

type ItemWithWeight = {
  tempFormId: string;
  itemId: string;
  name: string;
  weight: number;
};

type FormData = {
  name: string;
  finalWeight: number;
};

export default function NewCompositeItemForm() {
  const [availableItems, setAvailableItems] = useState<any[]>([]);
  const [itemsWithWeights, setItemsWithWeights] = useState<ItemWithWeight[]>([
    {
      tempFormId: "1",
      itemId: "",
      name: "",
      weight: 0,
    },
    {
      tempFormId: "2",
      itemId: "",
      name: "",
      weight: 0,
    },
  ]);

  const { control, handleSubmit } = useForm<FormData>({
    defaultValues: {
      name: "",
      finalWeight: 0,
    },
  });

  const fetchItems = useCallback(async () => {
    const response = await fetch(GET_URL);
    const items = (await response.json()) as any[];
    setAvailableItems(items);
  }, []);

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  const onAddItem = useCallback(() => {
    setItemsWithWeights((prev) => [
      ...prev,
      {
        tempFormId: String(Math.random()),
        itemId: "",
        name: "",
        weight: 0,
      },
    ]);
  }, []);

  const onRemoveItem = useCallback((tempFormId: string) => {
    setItemsWithWeights((prev) =>
      prev.filter((item) => item.tempFormId !== tempFormId)
    );
  }, []);

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
      {itemsWithWeights.map((item, index) => (
        <div key={item.tempFormId}>
          <p>Olá</p>
          <button type="button" onClick={() => onRemoveItem(item.tempFormId)}>
            Remove
          </button>
        </div>
      ))}
      <button type="button" onClick={onAddItem}>
        Add item
      </button>
      <button type="submit">Create</button>
    </form>
  );
}
