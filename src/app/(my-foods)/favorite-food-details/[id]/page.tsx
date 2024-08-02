"use client";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useCallback, useEffect, useState } from "react";

import FoodDetails from "../../../(public-foods)/food-details/[id]/food-details";
import { Food } from "../../../../common/interfaces/item.interface";
import Header from "../../../../components/header/header";
import LinearProgress from "../../../../components/linear-progress/linear-progress";
import Link from "../../../../components/link/link";
import PageTitle from "../../../../components/page-title/page-title";
import useAuth from "../../../../contexts/auth/use-auth";
import theme from "../../../../theme/theme";
import { RESOURCE_TAGS } from "../../../../utils/constants/resource-tags";
import { ROUTES } from "../../../../utils/constants/routes";
import { environmentVariables } from "../../../../utils/environment-variables";

const URL = `${environmentVariables().public.backendUrl}/items/private/`;

type PageProps = {
  params: {
    id: string;
  };
};

export default function Page({ params }: PageProps) {
  const [food, setFood] = useState<Food | null>(null);
  const [loading, setLoading] = useState(true);
  const [portion, setPortion] = useState(100);
  const { jwtToken } = useAuth();

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
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
        next: {
          tags: [RESOURCE_TAGS.PUBLIC_FOODS],
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
  }, [id, jwtToken]);

  if (loading) {
    return (
      <div className="flex flex-col gap-10">
        <Typography className="self-center">Loading food details...</Typography>
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
      <Link href={ROUTES.FAVORITE_FOODS}>
        <ChevronLeftIcon sx={{ color: theme.colors.primary }} />
        Back to search
      </Link>
    </div>
  );
}
