"use client";

import SearchIcon from "@mui/icons-material/Search";
import { useRouter, useSearchParams } from "next/navigation";
import { useSnackbar } from "notistack";
import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Item } from "../../../../../common/interfaces/item.interface";
import Button from "../../../../../components/button/button";
import FormInput from "../../../../../components/form-input/form-input";
import LinearProgress from "../../../../../components/linear-progress/linear-progress";
import theme from "../../../../../theme/theme";
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
  const [foods, setFoods] = useState(null as Item[] | null);
  const sx = { color: theme.colors.primary.contrast };
  const { enqueueSnackbar } = useSnackbar();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const searchParams = useSearchParams();
  const incomingSearchTerm = searchParams.get("search");

  const fetchFoods = useCallback(
    async (name: string) => {
      const urlWithQuery = URL + new URLSearchParams({ name }).toString();

      setIsLoading(true);
      const response = await fetch(urlWithQuery, {
        next: {
          tags: ["items"],
        },
      });

      if (!response.ok) {
        enqueueSnackbar("Error searching foods", { variant: "error" });
        return;
      } else {
        const items = await response.json();

        setFoods(items);
      }
      setIsLoading(false);
    },
    [enqueueSnackbar]
  );

  const onSubmit = useCallback(
    async (data: FormData) => {
      router.push(`${ROUTES.FOODS}?search=${data.search}`);
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
          label="Search"
          size="small"
          required
        />
        <Button type="submit" size="small">
          <SearchIcon sx={sx} />
        </Button>
      </form>
      {isLoading && <LinearProgress />}
      {foods && <SearchResults items={foods} />}
    </div>
  );
}
