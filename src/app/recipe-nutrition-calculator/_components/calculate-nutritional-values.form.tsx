"use client";

import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";

import { useSnackbar } from "notistack";
import { useCallback, useState } from "react";
import { Food } from "../../../common/interfaces/item.interface";
import Button from "../../../components/button/button";
import Header from "../../../components/header/header";
import { environmentVariables } from "../../../utils/environment-variables";
import NutritionalDetails from "./nutritional-details";

const CREATE_URL = `${environmentVariables().public.backendUrl}/items/calculate-nutritional-values`;

type ItemWithWeight = {
  tempKeyId: string;
  itemId?: string;
  name?: string;
  weight: number;
};

type NutritionalValues = {
  kcal: number;
  carbohydrate: number;
  protein: number;
  fat: number;
  fiber: number;
};

function generateEmptyItemWithWeight(): ItemWithWeight {
  return {
    tempKeyId: String(Math.random()),
    itemId: undefined,
    name: undefined,
    weight: 0,
  };
}

const initialItemsWithWeights: ItemWithWeight[] = [
  generateEmptyItemWithWeight(),
];

type CalculateNutritionalValuesFormProps = {
  foods: Food[];
};

export default function CalculateNutritionalValuesForm({
  foods: availableItems,
}: CalculateNutritionalValuesFormProps) {
  const [nutritionalValues, setNutritionalValues] =
    useState<NutritionalValues | null>(null);
  const [itemsWithWeights, setItemsWithWeights] = useState<ItemWithWeight[]>(
    initialItemsWithWeights
  );
  const [loadingCalculate, setLoadingCalculate] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const onAddItem = useCallback(() => {
    setItemsWithWeights((prev) => [...prev, generateEmptyItemWithWeight()]);
  }, []);

  const onRemoveItem = useCallback((tempKeyId: string) => {
    setItemsWithWeights((prev) =>
      prev.filter((item) => item.tempKeyId !== tempKeyId)
    );
  }, []);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoadingCalculate(true);

    const transformedData = {
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

      setLoadingCalculate(false);

      if (response.ok) {
        const data = await response.json();
        setNutritionalValues(data);
      } else {
        throw new Error("Error calculating nutritional values");
      }
    } catch (error) {
      console.error(error);
      enqueueSnackbar("Error calculating nutritional values", {
        variant: "error",
      });
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <Header size={2} className="self-center">
        Add Ingredients
      </Header>
      <form onSubmit={onSubmit} className="flex flex-col gap-2">
        {itemsWithWeights.map((itemWithWeight) => {
          return (
            <div
              key={itemWithWeight.tempKeyId}
              className="flex flex-row gap-2 items-center"
            >
              {/* This is not a FormSelect because we need to control it's state by ourselves */}
              {/* Therefore we used the pure Select from mui */}
              <TextField
                label="Item"
                value={itemWithWeight.itemId}
                select
                className="flex-grow"
                onChange={(e) => {
                  const selectedItemId = e.target.value;
                  const selectedItem = availableItems.find(
                    (item) => item.id.toString() === selectedItemId
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
              </TextField>
              {/* Similar, but now with TextField from mui instead of FormInput */}
              <TextField
                label="Weight (g)"
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
        <Button
          className="self-start"
          onClick={onAddItem}
          variant="outlined"
          size="medium"
        >
          + Ingredient
        </Button>
        <div className="mt-4 self-center">
          <Button type="submit" size="large" disabled={loadingCalculate}>
            Calculate
          </Button>
        </div>
      </form>
      {nutritionalValues && !loadingCalculate && (
        <NutritionalDetails nutritionalValues={nutritionalValues} />
      )}
    </div>
  );
}
