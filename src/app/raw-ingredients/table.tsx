import { RawIngredient } from "../../common/interfaces/raw-ingredient.interface";

import styles from "./table.module.css";

export default function Table({
  rawIngredients,
}: {
  rawIngredients: RawIngredient[];
}) {
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
