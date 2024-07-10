import { Suspense } from "react";
import MealsTable from "./meals-table/meals-table";

export default function Page() {
  return (
    <div className="flex flex-col gap-2 bg-gray-50 p-2">
      <h1>Meals</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <MealsTable />
      </Suspense>
    </div>
  );
}
