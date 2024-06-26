import { environmentVariables } from "../../utils/environment-variables";

import styles from "./raw-ingredients-table.module.css";

const URL = `${environmentVariables().public.backendUrl}/nutritional-entities/get-all`;

const fetchRawIngredients = async () => {
  const response = await fetch(URL);
  const nutritionalGroups: any[] = await response.json();
  const rawIngredients: any[] = nutritionalGroups.find(
    (nutritionalGroup) => nutritionalGroup.type === "raw-ingredient"
  ).values;

  return rawIngredients;
};

export default async function RawIngredientsTable() {
  const rawIngredients = await fetchRawIngredients();

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
