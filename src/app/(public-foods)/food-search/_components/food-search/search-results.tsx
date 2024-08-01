import Typography from "@mui/material/Typography";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { Food } from "../../../../../common/interfaces/item.interface";
import FoodsTable from "../../../../../components/foods-table/foods-table";

type SearchResultsProps = {
  foods: Food[];
};

export default function SearchResults({ foods: items }: SearchResultsProps) {
  const router = useRouter();

  const onFoodClick = useCallback(
    (foodId: string) => {
      router.push(`/food-details/${foodId}`);
    },
    [router]
  );

  if (items.length === 0) {
    return <Typography>No results found</Typography>;
  }

  return (
    <div className="flex flex-col gap-4">
      <Typography className="ml-2">
        <span className="font-bold">{items.length}</span> results found
      </Typography>
      <FoodsTable foods={items} onFoodClick={onFoodClick} />
    </div>
  );
}
