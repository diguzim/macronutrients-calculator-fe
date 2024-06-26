"use client";

import { Suspense } from "react";
import CookedDishesTable from "./cooked-dishes-table";

import NewCookedDishForm from "./new-cooked-dish-form";

import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.container}>
      <h1>Cooked Dishes</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <CookedDishesTable />
      </Suspense>
      <div className={styles.cookedDishContainer}>
        <h2>Add new cooked dish(not working)</h2>
        <NewCookedDishForm />
      </div>
    </div>
  );
}
