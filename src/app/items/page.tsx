import Button from "@mui/material/Button";
import { Suspense } from "react";

import Link from "next/link";
import Header from "../../components/header/header";
import ItemsTable from "./items-table/items-table";

export default function Page() {
  return (
    <div className="flex flex-col gap-4">
      <header>
        <Header size={1} text="Items" />
      </header>
      <Suspense fallback={<div className="bg-red-500">Loading...</div>}>
        <ItemsTable />
      </Suspense>
      <section>
        <Header size={2} text="Actions" className="mb-2" />
        <div className="flex flex-row gap-4">
          <Link href="items/new-item" passHref>
            <Button variant="contained" size="large">
              Create Item
            </Button>
          </Link>
          <Link href="items/new-recipe" passHref>
            <Button variant="contained" size="large">
              Create Recipe
            </Button>
          </Link>
          <Link href="items/calculate-nutritional-values" passHref>
            <Button variant="contained" size="large">
              Calculate Nutritional Values
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
