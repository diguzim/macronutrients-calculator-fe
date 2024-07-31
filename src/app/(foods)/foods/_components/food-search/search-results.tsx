import Typography from "@mui/material/Typography";
import { Food } from "../../../../../common/interfaces/item.interface";
import FoodsTable from "../../../../../components/foods-table/foods-table";

type SearchResultsProps = {
  foods: Food[];
};

export default function SearchResults({ foods: items }: SearchResultsProps) {
  if (items.length === 0) {
    return <Typography>No results found</Typography>;
  }

  return (
    <div className="flex flex-col gap-4">
      <Typography className="ml-2">
        <span className="font-bold">{items.length}</span> results found
      </Typography>
      <FoodsTable foods={items} />
    </div>
  );
}
