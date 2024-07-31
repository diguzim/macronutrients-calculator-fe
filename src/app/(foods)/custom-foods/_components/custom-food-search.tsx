"use client";

import SearchIcon from "@mui/icons-material/Search";
import { useRouter, useSearchParams } from "next/navigation";
import { useSnackbar } from "notistack";
import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Food } from "../../../../common/interfaces/item.interface";
import Button from "../../../../components/button/button";
import FormInput from "../../../../components/form-input/form-input";
import LinearProgress from "../../../../components/linear-progress/linear-progress";
import useAuth from "../../../../contexts/auth/use-auth";
import theme from "../../../../theme/theme";
import { RESOURCE_TAGS } from "../../../../utils/constants/resource-tags";
import { ROUTES } from "../../../../utils/constants/routes";
import { environmentVariables } from "../../../../utils/environment-variables";
import SearchResults from "./search-results";

type FormData = {
  search: string;
};

const initialFormData: FormData = {
  search: "",
};

const URL = `${environmentVariables().public.backendUrl}/items/search-private?`;

export default function CustomFoodSearch() {
  const { control, handleSubmit, setValue } = useForm<FormData>({
    defaultValues: initialFormData,
  });
  const [foods, setFoods] = useState(null as Food[] | null);
  const { enqueueSnackbar } = useSnackbar();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const searchParams = useSearchParams();
  const incomingSearchTerm = searchParams.get("search");
  const { jwtToken } = useAuth();

  const fetchFoods = useCallback(
    async (name: string) => {
      const urlWithQuery = URL + new URLSearchParams({ name }).toString();

      setIsLoading(true);
      const response = await fetch(urlWithQuery, {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
        next: {
          tags: [RESOURCE_TAGS.CUSTOM_FOODS],
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
    [enqueueSnackbar, jwtToken]
  );

  const onSubmit = useCallback(
    async (data: FormData) => {
      router.push(`${ROUTES.CUSTOM_FOODS}?search=${data.search}`);
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
          <SearchIcon sx={{ color: theme.colors.white }} />
        </Button>
      </form>
      {isLoading && <LinearProgress />}
      {foods && <SearchResults foods={foods} />}
    </div>
  );
}
