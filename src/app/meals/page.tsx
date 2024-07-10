import { Suspense } from "react";
import MealsTable from "./meals-table/meals-table";
import NewMealForm from "./new-meal/new-meal.form";

export default function Page() {
  return (
    <div className="flex flex-col gap-2 bg-gray-50 p-2">
      <h1>Meals</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <MealsTable />
      </Suspense>
      <div className="flex flex-col gap-2 w-full">
        <h2>Add new composite</h2>
        <NewMealForm />
      </div>
    </div>
  );
}
