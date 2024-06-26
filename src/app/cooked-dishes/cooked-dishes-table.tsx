import { environmentVariables } from "../../utils/environment-variables";

import styles from "./cooked-dishes-table.module.css";

const URL = `${environmentVariables().public.backendUrl}/nutritional-entities/get-all`;

const fetchCookedDishes = async () => {
  const response = await fetch(URL);
  const nutritionalGroups: any[] = await response.json();
  const cookedDishes: any[] = nutritionalGroups.find(
    (nutritionalGroup) => nutritionalGroup.type === "cooked-dish"
  ).values;

  return cookedDishes;
};

export default async function CookedDishesTable() {
  const cookedDishes = await fetchCookedDishes();

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
        {cookedDishes.map((cookedDish) => (
          <tr key={cookedDish.id}>
            <td>{cookedDish.name}</td>
            <td>{cookedDish.kcalPerGram}</td>
            <td>{cookedDish.carbohydrateRatio}</td>
            <td>{cookedDish.proteinRatio}</td>
            <td>{cookedDish.fatRatio}</td>
            <td>{cookedDish.fiberRatio}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
