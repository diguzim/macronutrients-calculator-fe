"use client";

import { useTranslation } from "react-i18next";
import Header from "../components/header/header";

export default function Page() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-4">
      <header>
        <Header text="Welcome to MaCal" size={1} />
      </header>
      <section>
        <p>
          MaCal (Macronutrients Calculator) is designed to help you manage and
          understand your nutritional intake effectively. Whether you're
          tracking your meals, creating new recipes, or simply curious about the
          nutritional content of your food, our app has you covered.
        </p>
      </section>
      <section className="flex flex-col gap-3">
        <Header text="Key Features" size={2} />
        <article>
          <Header text="Item Listing" size={3} />
          <p>
            Browse through a comprehensive list of food items, each with
            detailed nutritional values. Easily add new items to the list,
            complete with all their nutritional information.
          </p>
        </article>

        <article>
          <Header text="Recipe Creation" size={3} />
          <p>
            Create new composite items (recipes) by combining various
            ingredients from your item list. Our app calculates the total
            nutritional values for your recipes, making meal planning a breeze.
          </p>
        </article>

        <article>
          <Header text="Nutritional Calculation" size={3} />
          <p>
            Calculate the nutritional values of any item based on its weight.
            Get precise information on macronutrients to better manage your
            dietary needs.
          </p>
        </article>

        <article>
          <Header text="Meal Recording" size={3} />
          <p>
            Record your meals and get detailed nutritional equivalents for
            everything you consume. Track your intake over time and make
            informed dietary choices.
          </p>
        </article>
      </section>
    </div>
  );
}
