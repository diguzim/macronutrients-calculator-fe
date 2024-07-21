"use client";

import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";
import { Item } from "../../common/interfaces/item.interface";
import Header from "../../components/header/header";
import LinearProgress from "../../components/linear-progress/linear-progress";
import { environmentVariables } from "../../utils/environment-variables";
import CalculateNutritionalValuesForm from "./_components/calculate-nutritional-values.form";

const GET_URL = `${environmentVariables().public.backendUrl}/items/search?name=`;

export default function Page() {
  const [foods, setFoods] = useState([] as Item[]);
  const [loadingFoods, setLoadingFoods] = useState(true);
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    const fetchFoods = async () => {
      const response = await fetch(GET_URL, {
        next: {
          tags: ["items"],
        },
      });

      if (!response.ok) {
        setLoadingFoods(false);
        enqueueSnackbar("Error fetching foods", { variant: "error" });
        return;
      }

      const items = await response.json();

      setFoods(items);
      setLoadingFoods(false);
    };

    fetchFoods();
  }, [enqueueSnackbar]);

  return (
    <div className="flex flex-col gap-10">
      <header className="flex flex-col gap-2 items-center">
        <Header size={1}>Recipe Nutrition Calculator</Header>
        <p>
          Add each portion that composes you meal and figure out what the
          nutritional values of the meal are.
        </p>
      </header>
      {loadingFoods ? (
        <LinearProgress />
      ) : (
        <CalculateNutritionalValuesForm foods={foods} />
      )}
    </div>
  );
}
