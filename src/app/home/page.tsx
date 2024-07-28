"use client";

import CalculateIcon from "@mui/icons-material/Calculate";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import SearchIcon from "@mui/icons-material/Search";
import Image from "next/image";
import { useTranslation } from "react-i18next";

import { useMemo } from "react";
import Header from "../../components/header/header";
import theme from "../../theme/theme";
import { ROUTES } from "../../utils/constants/routes";
import { withSx } from "../../utils/hocs/with-sx.hoc";
import FeatureCard from "./_components/feature-card/feature-card";

export default function Page() {
  const { t } = useTranslation();

  const features = useMemo(() => {
    const sx = { color: theme.colors.primary.dark };

    return [
      {
        title: "Food Search",
        description:
          "Browse through a comprehensive list of food items, each with detailed nutritional values.",
        actionLink: ROUTES.FOODS,
        actionText: "Search",
        icon: withSx(SearchIcon, sx),
      },
      {
        title: "Nutrients Calculator",
        description:
          "Calculate the nutritional values of any item based on its weight.",
        actionLink: `${ROUTES.FOOD_DETAILS}/c64bbd58-2800-44d8-8bc6-db760801d88c`,
        actionText: "Check an Example",
        icon: withSx(CalculateIcon, sx),
      },
      {
        title: "Recipe Calculator",
        description:
          "Calculate the nutritional values of your recipes based on the ingredients and their quantities.",
        actionLink: ROUTES.RECIPE_NUTRITION_CALCULATOR,
        actionText: "Go to Calculator",
        icon: withSx(CalculateIcon, sx),
      },
      {
        title: "Meals Tracker",
        description:
          "Record your meals and get detailed nutritional equivalents for everything you consume. Track your intake over time.",
        actionLink: ROUTES.MEALS,
        actionText: "Access",
        icon: withSx(RestaurantIcon, sx),
      },
    ];
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <div className="p-12 mb-16 bg-gradient-to-b from-primary-dark to-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-row gap-12">
            <div className="flex-1 flex flex-col justify-center gap-6">
              <Header size={1} className="text-6xl text-center font-bold">
                UNDERSTAND YOUR FOOD
              </Header>
              <p>
                MaCal (Macronutrients Calculator) is designed to help you manage
                and understand your nutritional intake effectively.
              </p>
            </div>
            <div className="flex-1 relative aspect-square">
              <Image
                src="/nuts.png"
                alt="Food"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto">
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
    </div>
  );
}
