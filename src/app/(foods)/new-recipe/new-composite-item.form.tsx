"use client";

import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";

import FormInput from "../../../components/form-input/form-input";

import { useRouter } from "next/navigation";
import { useSnackbar } from "notistack";
import { useCallback, useEffect, useState } from "react";
import Button from "../../../components/button/button";
import { ROUTES } from "../../../utils/constants/routes";
import { environmentVariables } from "../../../utils/environment-variables";
import { revalidateItems } from "../search-foods/revalidate-items";

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
  const router = useRouter();

  const { enqueueSnackbar } = useSnackbar();

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
        await revalidateItems();
        onResetAll();
        enqueueSnackbar("Recipe created successfully", {
          variant: "success",
        });
        router.push(ROUTES.RECIPES);
      } else {
        throw new Error("Error creating recipe");
      }
    } catch (error) {
      console.error(error);
      enqueueSnackbar("Error creating recipe", {
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
      <FormInput
        name="finalWeight"
        control={control}
        label="Final Weight"
        type="number"
        required
      />
      {itemsWithWeights.map((itemWithWeight) => {
        return (
          <div
            key={itemWithWeight.tempKeyId}
            className="flex flex-row gap-2 items-center"
          >
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
            <RemoveCircleOutlineOutlinedIcon
              onClick={() => onRemoveItem(itemWithWeight.tempKeyId)}
              color="error"
            />
          </div>
        );
      })}
      <Button onClick={onAddItem} variant="outlined" size="medium">
        + Add item
      </Button>
      <Button type="submit" size="large">
        Create
      </Button>
    </form>
  );
}
