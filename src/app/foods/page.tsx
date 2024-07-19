import Link from "next/link";
import Button from "../../components/button/button";
import Header from "../../components/header/header";
import FoodSearch from "./food-search/food-search";

export default function Page() {
  return (
    <div className="flex flex-col gap-4">
      <header className="flex flex-col gap-2 items-center">
        <Header size={1}>Food Search</Header>
        <p>{"Search for a food to see it's nutritional data"}</p>
      </header>
      <FoodSearch />
      <section>
        <Header size={2} className="mb-2">
          Actions
        </Header>
        <div className="flex flex-row gap-4">
          <Link href="foods/new-item" passHref>
            <Button variant="contained" size="large">
              Create Food
            </Button>
          </Link>
          <Link href="foods/new-recipe" passHref>
            <Button variant="contained" size="large">
              Create Recipe
            </Button>
          </Link>
          <Link href="foods/calculate-nutritional-values" passHref>
            <Button variant="contained" size="large">
              Calculate Nutritional Values
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
