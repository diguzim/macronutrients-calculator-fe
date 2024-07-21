"use client";

import CalculateIcon from "@mui/icons-material/Calculate";
import EditNoteIcon from "@mui/icons-material/EditNote";
import ListIcon from "@mui/icons-material/List";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import Image from "next/image";
import { useTranslation } from "react-i18next";

import { useMemo } from "react";
import Header from "../../components/header/header";
import theme from "../../theme/theme";
import { withSx } from "../../utils/hocs/with-sx.hoc";
import FeatureCard from "./_components/feature-card/feature-card";

export default function Page() {
  const { t } = useTranslation();

  const features = useMemo(() => {
    const sx = { color: theme.colors.primary.dark };

    return [
      {
        title: "Search Foods",
        description:
          "Browse through a comprehensive list of food items, each with detailed nutritional values. Easily add new items to the list.",
        actionLink: "/search-foods",
        actionText: "Search",
        icon: withSx(ListIcon, sx),
      },
      {
        title: "Recipe Calculator",
        description:
          "Create recipes by combining ingredients. Calculates the total nutritional values for your recipes, making meal planning a breeze.",
        actionLink: "/recipe-nutrition-calculator",
        actionText: "Go to Calculator",
        icon: withSx(RestaurantMenuIcon, sx),
      },
      {
        title: "Nutrients Calculator",
        description:
          "Calculate the nutritional values of any item based on its weight. Get precise information on macronutrients to better manage your dietary needs.",
        actionLink: "/food-details/c64bbd58-2800-44d8-8bc6-db760801d88c",
        actionText: "Example",
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
    <div className="flex flex-col gap-4">
      <div className="flex flex-row gap-12 mb-16">
        <div className="flex-1 flex flex-col justify-center gap-6">
          <Header size={1} className="text-6xl text-center font-bold">
            UNDERSTAND YOUR FOOD
          </Header>
          <p>
            MaCal (Macronutrients Calculator) is designed to help you manage and
            understand your nutritional intake effectively.
          </p>
        </div>
        <div className="flex-1 relative aspect-square">
          <Image src="/nuts.png" alt="Food" layout="fill" objectFit="contain" />
        </div>
      </div>
      <section className="flex flex-col gap-3">
        <Header className="mb-4 self-center font-semibold" size={2}>
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
