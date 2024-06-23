"use client";

import { useEffect, useState } from "react";
import { RawIngredient } from "../../common/interfaces/raw-ingredient.interface";
import { environmentVariables } from "../../utils/environment-variables";

const URL = `${environmentVariables().backendUrl}/nutritional-entities/get-all`;

export default function Page() {
  const [rawIngredients, setRawIngredients] = useState([] as RawIngredient[]);

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((nutritionalGroups: any[]) => {
        const rawIngredients = nutritionalGroups.find(
          (nutritionalGroup) => nutritionalGroup.type === "raw-ingredient"
        ).values;

        setRawIngredients(rawIngredients);
      })
      .catch((error) => {
        console.error("Error fetching raw ingredients", error);
      });
  }, []);

  return (
    <div>
      <h1>Raw Ingredients</h1>
      <ul>
        {rawIngredients.map((rawIngredient) => (
          <li key={rawIngredient.id}>{rawIngredient.name}</li>
        ))}
      </ul>
    </div>
  );
}
