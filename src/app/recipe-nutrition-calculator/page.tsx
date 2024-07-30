"use client";

import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";
import { Food } from "../../common/interfaces/item.interface";
import LinearProgress from "../../components/linear-progress/linear-progress";
import PageTitle from "../../components/page-title/page-title";
import { RESOURCE_TAGS } from "../../utils/constants/resource-tags";
import { environmentVariables } from "../../utils/environment-variables";
import CalculateNutritionalValuesForm from "./_components/calculate-nutritional-values.form";

const GET_URL = `${environmentVariables().public.backendUrl}/items/search?name=`;

export default function Page() {
  const [foods, setFoods] = useState([] as Food[]);
  const [loadingFoods, setLoadingFoods] = useState(true);
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    const fetchFoods = async () => {
      const response = await fetch(GET_URL, {
        next: {
          tags: [RESOURCE_TAGS.PUBLIC_FOODS],
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
      <PageTitle
        title="Recipe Nutrition Calculator"
        description="Add each portion that composes you meal and figure out what the nutritional values of the meal are."
      />
      {loadingFoods ? (
        <LinearProgress />
      ) : (
        <CalculateNutritionalValuesForm foods={foods} />
      )}
    </div>
  );
}
