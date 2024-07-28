import Link from "next/link";
import Button from "../../../components/button/button";
import PageTitle from "../../../components/page-title/page-title";
import { ROUTES } from "../../../utils/constants/routes";
import FoodSearch from "./_components/food-search/food-search";

export default function Page() {
  return (
    <div className="flex flex-col gap-10">
      <PageTitle
        title="Food Search"
        description="Search for a food to see it's nutritional data"
      />
      <FoodSearch />
      <section className="flex flex-col self-center">
        <div className="flex flex-row gap-4">
          <Link href={ROUTES.ADD_FOOD} passHref>
            <Button>Add Food</Button>
          </Link>
          <Link href={ROUTES.RECIPES} passHref>
            <Button>Create Recipe</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}