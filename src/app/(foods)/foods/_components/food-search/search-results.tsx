"use client";

import { Food } from "../../../../../common/interfaces/item.interface";
import FoodsTable from "../../../../../components/foods-table/foods-table";

type SearchResultsProps = {
  foods: Food[];
};

export default function SearchResults({ foods: items }: SearchResultsProps) {
  if (items.length === 0) {
    return <p className="text-2xl">No results found</p>;
  }

  return (
    <div className="flex flex-col gap-4">
      <p className="ml-2">
        <span className="font-bold">{items.length}</span> results found
      </p>
      <FoodsTable foods={items} />
    </div>
  );
}
