"use client";

import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";

import FormInput from "../../components/form-input/form-input";

import { useCallback, useEffect, useState } from "react";
import { environmentVariables } from "../../utils/environment-variables";
import styles from "./new-composite-item.module.css";
import { revalidateItems } from "./revalidate-items";

const GET_URL = `${environmentVariables().public.backendUrl}/items`;
const CREATE_URL = `${environmentVariables().public.backendUrl}/items/create-from-composition`;

type ItemWithWeight = {
  tempKeyId: string;
  itemId?: string;
  name?: string;
  weight: number;
};

type FormData = {
  name: string;
  finalWeight: number;
};

function generateEmptyItemWithWeight(): ItemWithWeight {
  return {
    tempKeyId: String(Math.random()),
    itemId: undefined,
    name: undefined,
    weight: 0,
  };
}

const initialFormData: FormData = {
  name: "",
  finalWeight: 0,
};

const initialItemsWithWeights: ItemWithWeight[] = [
  generateEmptyItemWithWeight(),
];

export default function NewCompositeItemForm() {
  const [availableItems, setAvailableItems] = useState<any[]>([]);

  const [itemsWithWeights, setItemsWithWeights] = useState<ItemWithWeight[]>(
    initialItemsWithWeights
  );
  const { control, handleSubmit, reset } = useForm<FormData>({
    defaultValues: initialFormData,
  });

  const fetchItems = useCallback(async () => {
    const response = await fetch(GET_URL, {
      next: {
        tags: ["items"],
      },
    });
    const items = (await response.json()) as any[];
    setAvailableItems(items);
  }, []);

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  const onAddItem = useCallback(() => {
    setItemsWithWeights((prev) => [...prev, generateEmptyItemWithWeight()]);
  }, []);

  const onRemoveItem = useCallback((tempKeyId: string) => {
    setItemsWithWeights((prev) =>
      prev.filter((item) => item.tempKeyId !== tempKeyId)
    );
  }, []);

  const onResetAll = useCallback(() => {
    setItemsWithWeights(initialItemsWithWeights);
    reset(initialFormData);
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
        await revalidateItems();
        onResetAll();
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
      {itemsWithWeights.map((itemWithWeight) => {
        console.log("itemWithWeight", itemWithWeight);
        return (
          <div key={itemWithWeight.tempKeyId} className={styles.itemWithWeight}>
            {/* This is not a FormSelect because we need to control it's state by ourselves */}
            {/* Therefore we used the pure Select from mui */}
            <Select
              label="Item"
              name="Item"
              id={`item-${itemWithWeight.tempKeyId}`}
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
              className={styles.selectItem}
            >
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
        );
      })}
      <button type="button" onClick={onAddItem}>
        Add item
      </button>
      <button type="submit">Create</button>
    </form>
  );
}
