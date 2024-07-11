import { environmentVariables } from "../../../utils/environment-variables";

import styles from "./items-table.module.css";

const URL = `${environmentVariables().public.backendUrl}/items`;

const fetchItems = async () => {
  const response = await fetch(URL, {
    next: {
      tags: ["items"],
    },
  });

  if (response.ok) {
    return (await response.json()) as any[];
  } else {
    throw new Error("Failed to fetch items");
  }
};

export default async function ItemsTable() {
  const items = await fetchItems();

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Kcal (100g)</th>
          <th>Carbohydrates</th>
          <th>Protein</th>
          <th>Fat</th>
          <th>Fiber</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.type}</td>
            <td>{item.kcalPerGram}</td>
            <td>{item.carbohydrateRatio}</td>
            <td>{item.proteinRatio}</td>
            <td>{item.fatRatio}</td>
            <td>{item.fiberRatio}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
