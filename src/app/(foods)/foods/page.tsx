import PageTitle from "../../../components/page-title/page-title";
import FoodSearch from "./_components/food-search/food-search";

export default function Page() {
  return (
    <div className="flex flex-col gap-10">
      <PageTitle
        title="Food Search"
        description="Search for a food to see it's nutritional data"
      />
      <FoodSearch />
    </div>
  );
}
