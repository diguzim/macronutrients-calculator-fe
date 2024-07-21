"use client";

import { Suspense } from "react";
import withAuth from "../../utils/hocs/with-auth";
import MealsTable from "./meals-table/meals-table";
import NewMealForm from "./new-meal/new-meal.form";

function Page() {
  return (
    <div className="flex flex-col gap-2 bg-white p-2">
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

export default withAuth(Page);
