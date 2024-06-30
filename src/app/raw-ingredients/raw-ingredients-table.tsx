import { useCallback, useEffect, useState } from "react";
import { environmentVariables } from "../../utils/environment-variables";

import styles from "./raw-ingredients-table.module.css";

const URL = `${environmentVariables().public.backendUrl}/items`;

export default function RawIngredientsTable() {
  const [rawIngredients, setRawIngredients] = useState<any[]>([]);

  const fetchRawIngredients = useCallback(async () => {
    const response = await fetch(URL);
    const rawIngredients: any[] = await response.json();

    return rawIngredients;
  }, []);

  const loadRawIngredients = useCallback(async () => {
    const rawIngredients = await fetchRawIngredients();

    setRawIngredients(rawIngredients);
  }, []);

  useEffect(() => {
    loadRawIngredients();
  }, []);

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Kcal (100g)</th>
          <th>Carbohydrates</th>
          <th>Protein</th>
          <th>Fat</th>
          <th>Fiber</th>
        </tr>
      </thead>
      <tbody>
        {rawIngredients.map((rawIngredient) => (
          <tr key={rawIngredient.id}>
            <td>{rawIngredient.name}</td>
            <td>{rawIngredient.kcalPerGram}</td>
            <td>{rawIngredient.carbohydrateRatio}</td>
            <td>{rawIngredient.proteinRatio}</td>
            <td>{rawIngredient.fatRatio}</td>
            <td>{rawIngredient.fiberRatio}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
