"use client";

import SearchIcon from "@mui/icons-material/Search";
import { useSearchParams } from "next/navigation";
import { useSnackbar } from "notistack";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { Item } from "../../../../../common/interfaces/item.interface";
import Button from "../../../../../components/button/button";
import FormInput from "../../../../../components/form-input/form-input";
import LinearProgress from "../../../../../components/linear-progress/linear-progress";
import theme from "../../../../../theme/theme";
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
  const { control, handleSubmit, formState } = useForm<FormData>({
    defaultValues: initialFormData,
  });
  const [foods, setFoods] = useState([] as Item[]);
  const sx = { color: theme.colors.primary.contrast };
  const { enqueueSnackbar } = useSnackbar();

  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("search");
  console.log("searchTerm", searchTerm);

  const { isSubmitted, isSubmitting } = formState;

  const onSubmit = useCallback(
    async (data: FormData) => {
      const urlWithQuery =
        URL + new URLSearchParams({ name: data.search }).toString();

      const response = await fetch(urlWithQuery, {
        next: {
          tags: ["items"],
        },
      });

      if (!response.ok) {
        enqueueSnackbar("Error searching foods", { variant: "error" });
        return;
      }

      const items = await response.json();

      setFoods(items);
    },
    [enqueueSnackbar]
  );

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
        />
        <Button type="submit" size="small">
          <SearchIcon sx={sx} />
        </Button>
      </form>
      {isSubmitting && <LinearProgress />}
      {!isSubmitting && isSubmitted && <SearchResults items={foods} />}
    </div>
  );
}
