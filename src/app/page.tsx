"use client";

import { useTranslation } from "react-i18next";

export default function Page() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-4">
      <header>
        <h1 className="text-4xl text-primary">
          Welcome to the Macronutrient Calculator
        </h1>
      </header>
      <section>
        <h2 className="text-2xl text-primary">About Our Application</h2>
        <p>
          Our macronutrient calculator is designed to help you manage and
          understand your nutritional intake effectively. Whether you're
          tracking your meals, creating new recipes, or simply curious about the
          nutritional content of your food, our app has you covered.
        </p>
      </section>
      <section className="flex flex-col gap-3">
        <h2 className="text-2xl text-primary">Key Features</h2>

        <article>
          <h3 className="text-xl text-primary">Item Listing</h3>
          <p>
            Browse through a comprehensive list of food items, each with
            detailed nutritional values. Easily add new items to the list,
            complete with all their nutritional information.
          </p>
        </article>

        <article>
          <h3 className="text-xl text-primary">Recipe Creation</h3>
          <p>
            Create new composite items (recipes) by combining various
            ingredients from your item list. Our app calculates the total
            nutritional values for your recipes, making meal planning a breeze.
          </p>
        </article>

        <article>
          <h3 className="text-xl text-primary">Nutritional Calculation</h3>
          <p>
            Calculate the nutritional values of any item based on its weight.
            Get precise information on macronutrients to better manage your
            dietary needs.
          </p>
        </article>

        <article>
          <h3 className="text-xl text-primary">Meal Recording</h3>
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
