"use client";

import { useEffect, useState } from "react";
import { RawIngredient } from "../../common/interfaces/raw-ingredient.interface";
import { environmentVariables } from "../../utils/environment-variables";
import Table from "./table";

import NewIngredientForm from "./new-ingredient-form";
import styles from "./page.module.css";

const URL = `${environmentVariables().public.backendUrl}/nutritional-entities/get-all`;

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
    <div className={styles.container}>
      <h1>Raw Ingredients</h1>
      <Table rawIngredients={rawIngredients} />
      <div className={styles.newIngredientContainer}>
        <h2>Add new raw ingredient</h2>
        <NewIngredientForm />
      </div>
    </div>
  );
}
