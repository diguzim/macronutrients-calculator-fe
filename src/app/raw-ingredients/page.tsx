"use client";

// import { Suspense } from "react";
import RawIngredientsTable from "./raw-ingredients-table";

import { Suspense } from "react";
import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.container}>
      <h1>Raw Ingredients</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <RawIngredientsTable />
      </Suspense>
      {/* <div className={styles.newIngredientContainer}>
        <h2>Add new raw ingredient</h2>
        <NewIngredientForm />
      </div> */}
    </div>
  );
}
