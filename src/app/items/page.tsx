import { Suspense } from "react";

import CalculateNutritionalValuesForm from "./calculate-nutritional-values/calculate-nutritional-values.form";
import ItemsTable from "./items-table/items-table";
import NewCompositeItemForm from "./new-composite-item/new-composite-item.form";
import NewItemForm from "./new-item/new-item-form";

export default function Page() {
  return (
    <div className="flex flex-col gap-2p-2">
      <h1>Items</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <ItemsTable />
      </Suspense>
      <div className="flex flex-col gap-2 w-full">
        <h2>Add new item</h2>
        <NewItemForm />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <h2>Add new composite</h2>
        <NewCompositeItemForm />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <h2>Calculate nutritional values</h2>
        <CalculateNutritionalValuesForm />
      </div>
    </div>
  );
}
