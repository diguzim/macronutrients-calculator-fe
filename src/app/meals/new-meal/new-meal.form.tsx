"use client";

import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";

import FormInput from "../../../components/form-input/form-input";

import { useSnackbar } from "notistack";
import { useCallback, useEffect, useState } from "react";
import Button from "../../../components/button/button";
import useAuth from "../../../contexts/auth/use-auth";
import { RESOURCE_TAGS } from "../../../utils/constants/resource-tags";
import { environmentVariables } from "../../../utils/environment-variables";
import { revalidateMeals } from "../revalidate-meals";

const GET_URL = `${environmentVariables().public.backendUrl}/items/search?name=`;
const CREATE_URL = `${environmentVariables().public.backendUrl}/meals/create-from-items`;

type ItemWithWeight = {
  tempKeyId: string;
  itemId?: string;
  name?: string;
  weight: number;
};

type FormData = {
  name: string;
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
};

const initialItemsWithWeights: ItemWithWeight[] = [
  generateEmptyItemWithWeight(),
];

export default function NewMealForm() {
  const [availableItems, setAvailableItems] = useState<any[]>([]);
  const [itemsWithWeights, setItemsWithWeights] = useState<ItemWithWeight[]>(
    initialItemsWithWeights
  );
  const { control, handleSubmit, reset } = useForm<FormData>({
    defaultValues: initialFormData,
  });
  const { jwtToken } = useAuth();

  const { enqueueSnackbar } = useSnackbar();

  const fetchFoods = useCallback(async () => {
    const response = await fetch(GET_URL, {
      next: {
        tags: [RESOURCE_TAGS.PUBLIC_FOODS],
      },
    });
    const items = (await response.json()) as any[];
    setAvailableItems(items);
  }, []);

  useEffect(() => {
    fetchFoods();
  }, [fetchFoods]);

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
  }, [reset]);

  const onSubmit = async (data: FormData) => {
    if (!jwtToken) {
      enqueueSnackbar("You need to be logged in", {
        variant: "error",
      });
      return;
    }

    const transformedData = {
      ...data,
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
          Authorization: `Bearer ${jwtToken}`,
        },
        body: JSON.stringify(transformedData),
      });

      if (response.ok) {
        enqueueSnackbar("Meal created successfully", {
          variant: "success",
        });
        await revalidateMeals();
        onResetAll();
      } else {
        throw new Error("Error creating meal");
      }
    } catch (error) {
      console.error(error);
      enqueueSnackbar("Error creating meal", {
        variant: "error",
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-2 max-w-96"
    >
      <FormInput name="name" control={control} label="Name" required />
      {itemsWithWeights.map((itemWithWeight) => {
        return (
          <div key={itemWithWeight.tempKeyId} className="flex flex-row gap-2">
            {/* This is not a FormSelect because we need to control it's state by ourselves */}
            {/* Therefore we used the pure Select from mui */}
            <Select
              label="Item"
              name="Item"
              id={`item-${itemWithWeight.tempKeyId}`}
              value={itemWithWeight.itemId}
              className="min-w-52"
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
            <Button onClick={() => onRemoveItem(itemWithWeight.tempKeyId)}>
              Remove
            </Button>
          </div>
        );
      })}
      <Button onClick={onAddItem}>Add item</Button>
      <Button type="submit">Create</Button>
    </form>
  );
}
