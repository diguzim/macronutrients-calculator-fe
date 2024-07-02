"use client";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";

import FormInput from "../../components/form-input/form-input";

import { useCallback, useEffect, useState } from "react";
import { environmentVariables } from "../../utils/environment-variables";
import styles from "./new-composite-item.module.css";

const GET_URL = `${environmentVariables().public.backendUrl}/items`;
const CREATE_URL = `${environmentVariables().public.backendUrl}/items/create-from-composition`;

type ItemWithWeight = {
  tempKeyId: string;
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
      tempKeyId: "1",
      itemId: "",
      name: "",
      weight: 0,
    },
    {
      tempKeyId: "2",
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
        tempKeyId: String(Math.random()),
        itemId: "",
        name: "",
        weight: 0,
      },
    ]);
  }, []);

  const onRemoveItem = useCallback((tempKeyId: string) => {
    setItemsWithWeights((prev) =>
      prev.filter((item) => item.tempKeyId !== tempKeyId)
    );
  }, []);

  const onSubmit = async (data: FormData) => {
    const transformedData = {
      ...data,
      finalWeight: Number(data.finalWeight),
      itemIdsWithWeights: itemsWithWeights.map((item) => ({
        itemId: item.itemId,
        weight: item.weight,
      })),
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
  };

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
      {itemsWithWeights.map((itemWithWeight) => (
        <div key={itemWithWeight.tempKeyId}>
          {/* This is not a FormSelect because we need to control it's state by ourselves */}
          {/* Therefore we used the pure Select from mui */}
          <InputLabel>Item</InputLabel>
          <Select
            value={itemWithWeight.itemId}
            onChange={(e) => {
              const selectedItemId = e.target.value;
              const selectedItem = availableItems.find(
                (item) => item.id === selectedItemId
              );

              setItemsWithWeights((prev) =>
                prev.map((item) =>
                  item.tempKeyId === itemWithWeight.tempKeyId
                    ? {
                        ...item,
                        itemId: selectedItemId,
                        name: selectedItem?.name,
                      }
                    : item
                )
              );
            }}
          >
            <MenuItem value="">Select an item</MenuItem>
            {availableItems.map((item) => (
              <MenuItem key={item.id} value={item.id}>
                {item.name}
              </MenuItem>
            ))}
          </Select>
          {/* Similar, but now with TextField from mui instead of FormInput */}
          <TextField
            label="Weight"
            type="number"
            value={itemWithWeight.weight}
            onChange={(e) => {
              const weight = Number(e.target.value);
              setItemsWithWeights((prev) =>
                prev.map((item) =>
                  item.tempKeyId === itemWithWeight.tempKeyId
                    ? { ...item, weight }
                    : item
                )
              );
            }}
          />
          <button
            type="button"
            onClick={() => onRemoveItem(itemWithWeight.tempKeyId)}
          >
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
