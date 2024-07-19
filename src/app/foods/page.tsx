import Link from "next/link";
import Button from "../../components/button/button";
import Header from "../../components/header/header";
import FoodSearch from "./_components/food-search/food-search";

export default function Page() {
  return (
    <div className="flex flex-col gap-10">
      <header className="flex flex-col gap-2 items-center">
        <Header size={1}>Food Search</Header>
        <p>{"Search for a food to see it's nutritional data"}</p>
      </header>
      <FoodSearch />
      <section className="flex flex-col self-center">
        <div className="flex flex-row gap-4">
          <Link href="foods/add-food" passHref>
            <Button variant="contained" size="large">
              Add Food
            </Button>
          </Link>
          <Link href="foods/new-recipe" passHref>
            <Button variant="contained" size="large">
              Create Recipe
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
