import { Suspense } from "react";

import Header from "../../components/header/header";
import CalculateNutritionalValuesForm from "./calculate-nutritional-values/calculate-nutritional-values.form";
import ItemsTable from "./items-table/items-table";
import NewCompositeItemForm from "./new-composite-item/new-composite-item.form";
import NewItemForm from "./new-item/new-item-form";

export default function Page() {
  return (
    <div className="flex flex-col gap-2">
      <header>
        <Header size={1} text="Items" />
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <ItemsTable />
      </Suspense>
      <section className="flex flex-col gap-2 w-full">
        <Header size={2} text="Add new item" />
        <NewItemForm />
      </section>
      <section className="flex flex-col gap-2 w-full">
        <Header size={2} text="Add new recipe" />
        <NewCompositeItemForm />
      </section>
      <section className="flex flex-col gap-2 w-full">
        <Header size={2} text="Calculate nutritional values" />
        <CalculateNutritionalValuesForm />
      </section>
    </div>
  );
}
