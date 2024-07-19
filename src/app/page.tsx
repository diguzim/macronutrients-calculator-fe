"use client";

import CalculateIcon from "@mui/icons-material/Calculate";
import EditNoteIcon from "@mui/icons-material/EditNote";
import ListIcon from "@mui/icons-material/List";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import Image from "next/image";
import { useTranslation } from "react-i18next";

import { useMemo } from "react";
import Header from "../components/header/header";
import theme from "../theme/theme";
import { withSx } from "../utils/hocs/with-sx.hoc";
import FeatureCard from "./_components/feature-card/feature-card";

export default function Page() {
  const { t } = useTranslation();

  const features = useMemo(() => {
    const sx = { color: theme.colors.primary.dark };

    return [
      {
        title: "Item Listing",
        description:
          "Browse through a comprehensive list of food items, each with detailed nutritional values. Easily add new items to the list.",
        actionLink: "/items",
        actionText: "Go to Items",
        icon: withSx(ListIcon, sx),
      },
      {
        title: "Recipe Creation",
        description:
          "Create recipes by combining ingredients. Calculates the total nutritional values for your recipes, making meal planning a breeze.",
        actionLink: "/items/new-recipe",
        actionText: "Go to Recipes",
        icon: withSx(RestaurantMenuIcon, sx),
      },
      {
        title: "Nutrients Calculator",
        description:
          "Calculate the nutritional values of any item based on its weight. Get precise information on macronutrients to better manage your dietary needs.",
        actionLink: "/items/calculate-nutritional-values",
        actionText: "Go to Calculator",
        icon: withSx(CalculateIcon, sx),
      },
      {
        title: "Meal Recording",
        description:
          "Record your meals and get detailed nutritional equivalents for everything you consume. Track your intake over time.",
        actionLink: "/login",
        actionText: "Access",
        icon: withSx(EditNoteIcon, sx),
      },
    ];
  }, []);

  return (
    <div className="flex flex-col gap-4 max-w-screen-2xl m-auto">
      <div className="flex flex-row gap-12 mb-16">
        <div className="flex flex-col justify-center gap-6 max-w-lg">
          <Header
            size={1}
            className="text-6xl text-center font-bold text-primary-dark"
          >
            UNDERSTAND YOUR FOOD
          </Header>
          <p>
            MaCal (Macronutrients Calculator) is designed to help you manage and
            understand your nutritional intake effectively.
          </p>
        </div>
        <Image src="/nuts.png" alt="Food" width={700} height={800} />
      </div>
      <section className="flex flex-col gap-3">
        <Header
          className="mb-4 self-center font-semibold text-primary-dark"
          size={2}
        >
          One Place - Many features
        </Header>
        <div className="flex flex-row flex-wrap gap-10">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </section>
    </div>
  );
}
