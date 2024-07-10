"use client";

import { useCallback, useEffect, useState } from "react";
import { environmentVariables } from "../../../utils/environment-variables";

import useAuth from "../../../contexts/auth/use-auth";
import { formatDatetime } from "../../../utils/datetime/formatDateTime";
import styles from "./meals-table.module.css";

const URL = `${environmentVariables().public.backendUrl}/meals`;

const fetchMeals = async (jwtToken: string) => {
  const response = await fetch(URL, {
    next: {
      tags: ["meals"],
    },
    headers: {
      Authorization: `Bearer ${jwtToken}`,
    },
  });

  if (response.ok) {
    return (await response.json()) as any[];
  } else {
    throw new Error("Failed to fetch meals");
  }
};

export default function MealsTable() {
  const [meals, setMeals] = useState([] as any[]);
  const { jwtToken } = useAuth();

  const loadMeals = useCallback(async () => {
    if (!jwtToken) return;

    try {
      const meals = await fetchMeals(jwtToken);
      setMeals(meals);
    } catch (error) {
      console.error(error);
    }
  }, [jwtToken]);

  useEffect(() => {
    loadMeals();
  }, [loadMeals]);

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
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {meals.map((meal) => (
          <tr key={meal.id}>
            <td>{meal.name}</td>
            <td>{meal.kcal}</td>
            <td>{meal.carbohydrate}</td>
            <td>{meal.protein}</td>
            <td>{meal.fat}</td>
            <td>{meal.fiber}</td>
            <td>{formatDatetime(meal.createdAt)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
