"use client";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useCallback, useEffect, useState } from "react";

import { useTranslation } from "react-i18next";
import { Food } from "../../../../common/interfaces/item.interface";
import Header from "../../../../components/header/header";
import LinearProgress from "../../../../components/linear-progress/linear-progress";
import Link from "../../../../components/link/link";
import PageTitle from "../../../../components/page-title/page-title";
import theme from "../../../../theme/theme";
import { RESOURCE_TAGS } from "../../../../utils/constants/resource-tags";
import { ROUTES } from "../../../../utils/constants/routes";
import { environmentVariables } from "../../../../utils/environment-variables";
import FoodDetails from "./food-details";

const URL = `${environmentVariables().public.backendUrl}/items/public/`;

type PageProps = {
  params: {
    id: string;
  };
};

export default function Page({ params }: PageProps) {
  const [food, setFood] = useState<Food | null>(null);
  const [loading, setLoading] = useState(true);
  const [portion, setPortion] = useState(100);
  const { t } = useTranslation();

  const handleOnChangePortion = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPortion(+e.target.value);
    },
    []
  );

  const { id } = params;

  useEffect(() => {
    const fetchFood = async () => {
      const response = await fetch(URL + id, {
        next: {
          tags: [RESOURCE_TAGS.PUBLIC_FOODS],
        },
      });

      if (!response.ok) {
        console.error("response", response);
        setLoading(false);
        return;
      }

      const item = await response.json();

      setFood(item);
      setLoading(false);
    };

    fetchFood();
  }, [id]);

  if (loading) {
    return (
      <div className="flex flex-col gap-10">
        <Typography className="self-center">
          {t("publicFoodDetails.loading")}
        </Typography>
        <LinearProgress />
      </div>
    );
  }

  if (!food) {
    return <Header size={1}>{t("publicFoodDetails.notFound")}</Header>;
  }

  return (
    <div className="flex flex-col gap-10">
      <PageTitle title={`${food.name} (${food.type})`} />
      <TextField
        label={t("publicFoodDetails.portionInputLabel")}
        type="number"
        value={portion}
        onChange={handleOnChangePortion}
        className="max-w-32"
      />
      <FoodDetails food={food} portion={portion} />
      <Link href={ROUTES.FOOD_SEARCH}>
        <ChevronLeftIcon sx={{ color: theme.colors.primary }} />
        {t("publicFoodDetails.backToSearch")}
      </Link>
    </div>
  );
}
