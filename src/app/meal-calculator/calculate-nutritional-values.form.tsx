"use client";

import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";

import { useSnackbar } from "notistack";
import { useCallback, useEffect, useState } from "react";
import Button from "../../components/button/button";
import { environmentVariables } from "../../utils/environment-variables";
import styles from "./calculate-nutritional-values.module.css";

const GET_URL = `${environmentVariables().public.backendUrl}/items`;
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

export default function CalculateNutritionalValuesForm() {
  const [availableItems, setAvailableItems] = useState<any[]>([]);
  const [nutritionalValues, setNutritionalValues] = useState<NutritionalValues>(
    {
      kcal: 0,
      carbohydrate: 0,
      protein: 0,
      fat: 0,
      fiber: 0,
    }
  );
  const [itemsWithWeights, setItemsWithWeights] = useState<ItemWithWeight[]>(
    initialItemsWithWeights
  );
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

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

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
    <div>
      <form onSubmit={onSubmit} className="flex flex-col gap-2 max-w-96">
        {itemsWithWeights.map((itemWithWeight) => {
          return (
            <div
              key={itemWithWeight.tempKeyId}
              className="flex gap-2  items-center"
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
          Calculate
        </Button>
      </form>
      <div>
        <h3>Result</h3>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Nutrient</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Kcal</td>
              <td>{nutritionalValues.kcal}</td>
            </tr>
            <tr>
              <td>Carbohydrates</td>
              <td>{nutritionalValues.carbohydrate}</td>
            </tr>
            <tr>
              <td>Protein</td>
              <td>{nutritionalValues.protein}</td>
            </tr>
            <tr>
              <td>Fat</td>
              <td>{nutritionalValues.fat}</td>
            </tr>
            <tr>
              <td>Fiber</td>
              <td>{nutritionalValues.fiber}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
