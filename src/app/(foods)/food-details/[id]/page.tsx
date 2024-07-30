"use client";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import TextField from "@mui/material/TextField";
import { useCallback, useEffect, useState } from "react";

import { Item } from "../../../../common/interfaces/item.interface";
import Header from "../../../../components/header/header";
import LinearProgress from "../../../../components/linear-progress/linear-progress";
import Link from "../../../../components/link/link";
import PageTitle from "../../../../components/page-title/page-title";
import theme from "../../../../theme/theme";
import { ROUTES } from "../../../../utils/constants/routes";
import { environmentVariables } from "../../../../utils/environment-variables";
import FoodDetails from "./food-details";

const URL = `${environmentVariables().public.backendUrl}/items/`;

type PageProps = {
  params: {
    id: string;
  };
};

export default function Page({ params }: PageProps) {
  const [food, setFood] = useState<Item | null>(null);
  const [loading, setLoading] = useState(true);
  const [portion, setPortion] = useState(100);

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
          tags: ["items"],
        },
      });

      if (!response.ok) {
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
        <p className="self-center">Loading food details...</p>
        <LinearProgress />
      </div>
    );
  }

  if (!food) {
    return <Header size={1}>Food not found</Header>;
  }

  return (
    <div className="flex flex-col gap-10">
      <PageTitle title={`${food.name} (${food.type})`} />
      <TextField
        label="Portion (g)"
        type="number"
        value={portion}
        onChange={handleOnChangePortion}
        className="max-w-32"
      />
      <FoodDetails food={food} portion={portion} />
      <div className="block">
        <Link href={ROUTES.FOODS}>
          <ChevronLeftIcon sx={{ color: theme.colors.primary.dark }} />
          Back to search
        </Link>
      </div>
    </div>
  );
}
