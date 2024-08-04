"use client";

import SearchIcon from "@mui/icons-material/Search";
import { useRouter, useSearchParams } from "next/navigation";
import { useSnackbar } from "notistack";
import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Food } from "../../../../../common/interfaces/item.interface";
import Button from "../../../../../components/button/button";
import FormInput from "../../../../../components/form-input/form-input";
import LinearProgress from "../../../../../components/linear-progress/linear-progress";
import theme from "../../../../../theme/theme";
import { RESOURCE_TAGS } from "../../../../../utils/constants/resource-tags";
import { ROUTES } from "../../../../../utils/constants/routes";
import { environmentVariables } from "../../../../../utils/environment-variables";
import SearchResults from "./search-results";

type FormData = {
  search: string;
};

const initialFormData: FormData = {
  search: "",
};

const URL = `${environmentVariables().public.backendUrl}/items/search?`;

export default function FoodSearch() {
  const { control, handleSubmit, setValue } = useForm<FormData>({
    defaultValues: initialFormData,
  });
  const [foods, setFoods] = useState(null as Food[] | null);
  const { enqueueSnackbar } = useSnackbar();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const { t } = useTranslation();
  const searchParams = useSearchParams();
  const incomingSearchTerm = searchParams.get("search");

  const fetchFoods = useCallback(
    async (name: string) => {
      const urlWithQuery = URL + new URLSearchParams({ name }).toString();

      setIsLoading(true);
      const response = await fetch(urlWithQuery, {
        next: {
          tags: [RESOURCE_TAGS.PUBLIC_FOODS],
        },
      });

      if (!response.ok) {
        enqueueSnackbar(t("foodSearch.searchError"), { variant: "error" });
        return;
      } else {
        const items = await response.json();

        setFoods(items);
      }
      setIsLoading(false);
    },
    [enqueueSnackbar, t]
  );

  const onSubmit = useCallback(
    async (data: FormData) => {
      router.push(`${ROUTES.FOOD_SEARCH}?search=${data.search}`);
    },
    [router]
  );

  useEffect(() => {
    if (incomingSearchTerm) {
      setValue("search", incomingSearchTerm);
      fetchFoods(incomingSearchTerm);
    }
  }, [fetchFoods, incomingSearchTerm, setValue]);

  return (
    <div className="flex flex-col gap-10">
      <form
        className="flex flex-row gap-2 max-w-96 self-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormInput
          control={control}
          name="search"
          label={t("general.search")}
          size="small"
          required
        />
        <Button type="submit" size="small">
          <SearchIcon sx={{ color: theme.colors.white }} />
        </Button>
      </form>
      {isLoading && <LinearProgress />}
      {foods && <SearchResults foods={foods} />}
    </div>
  );
}
