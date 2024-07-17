"use client";

import CalculateIcon from "@mui/icons-material/Calculate";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import EditNoteIcon from "@mui/icons-material/EditNote";
import ListIcon from "@mui/icons-material/List";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import Image from "next/image";
import { useTranslation } from "react-i18next";

import Link from "next/link";
import Button from "../components/button/button";
import Header from "../components/header/header";

export default function Page() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-4 max-w-screen-2xl m-auto">
      <div className="flex flex-row gap-12">
        <div className="flex flex-col justify-center gap-6 max-w-lg">
          <Header size={1} className="text-6xl text-center text-secondary-dark">
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
        <Header className="mt-16 mb-4 self-center text-secondary-dark" size={2}>
          One Place - Many features
        </Header>
        <div className="flex flex-row flex-wrap gap-10">
          <div className="flex flex-col bg-secondary-light px-4 py-5 w-80">
            <div className="flex flex-row items-center justify-center gap-2">
              <Header size={3} className="text-secondary-dark text-center">
                Item Listing
              </Header>
              <ListIcon />
            </div>
            <p className="mt-2 mb-4 text-secondary-contrast">
              Browse through a comprehensive list of food items, each with
              detailed nutritional values. Easily add new items to the list.
            </p>
            <div className="grow" />
            <Link href="/items" className="self-end" passHref>
              <Button variant="outlined" endIcon={<ChevronRightIcon />}>
                Go to Items
              </Button>
            </Link>
          </div>
          <div className="flex flex-col bg-secondary-light px-4 py-5 w-80">
            <div className="flex flex-row items-center justify-center gap-2">
              <Header size={3} className="text-secondary-dark text-center">
                Recipe Creation
              </Header>
              <RestaurantMenuIcon />
            </div>
            <p className="mt-2 mb-4 text-secondary-contrast">
              Create recipes by combining ingredients. Calculates the total
              nutritional values for your recipes, making meal planning a
              breeze.
            </p>
            <div className="grow" />
            <Link href="/items/new-recipe" className="self-end" passHref>
              <Button variant="outlined" endIcon={<ChevronRightIcon />}>
                Go to Recipes
              </Button>
            </Link>
          </div>
          <div className="flex flex-col bg-secondary-light px-4 py-5 w-80">
            <div className="flex flex-row items-center justify-center gap-2">
              <Header size={3} className="text-secondary-dark text-center">
                Nutrients Calculator
              </Header>
              <CalculateIcon />
            </div>
            <p className="mt-2 mb-4 text-secondary-contrast">
              Calculate the nutritional values of any item based on its weight.
              Get precise information on macronutrients to better manage your
              dietary needs.
            </p>
            <div className="grow" />
            <Link
              href="/items/calculate-nutritional-values"
              className="self-end"
              passHref
            >
              <Button variant="outlined" endIcon={<ChevronRightIcon />}>
                Go to Calculator
              </Button>
            </Link>
          </div>
          <div className="flex flex-col bg-secondary-light px-4 py-5 w-80">
            <div className="flex flex-row items-center justify-center gap-2">
              <Header size={3} className="text-secondary-dark text-center">
                Meal Recording
              </Header>
              <EditNoteIcon />
            </div>
            <p className="mt-2 mb-4 text-secondary-contrast">
              Record your meals and get detailed nutritional equivalents for
              everything you consume. Track your intake over time.
            </p>
            <div className="grow" />
            <Link href="/login" className="self-end" passHref>
              <Button
                className="self-end"
                variant="outlined"
                endIcon={<ChevronRightIcon />}
              >
                Access
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
