"use client";

import SearchIcon from "@mui/icons-material/Search";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { Item } from "../../../common/interfaces/item.interface";
import Button from "../../../components/button/button";
import FormInput from "../../../components/form-input/form-input";
import { environmentVariables } from "../../../utils/environment-variables";
import SearchResults from "./search-results";

type FormData = {
  search: string;
};

const initialFormData: FormData = {
  search: "",
};

const URL = `${environmentVariables().public.backendUrl}/items?`;

export default function FoodSearch() {
  const { control, handleSubmit, reset } = useForm<FormData>({
    defaultValues: initialFormData,
  });
  const [foods, setFoods] = useState([] as Item[]);

  const onSubmit = useCallback(async (data: FormData) => {
    const urlWithQuery =
      URL + new URLSearchParams({ name: data.search }).toString();

    const response = await fetch(urlWithQuery, {
      next: {
        tags: ["items"],
      },
    });

    const items = await response.json();

    setFoods(items);
  }, []);

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
        <Button type="submit" variant="contained" size="small">
          <SearchIcon />
        </Button>
      </form>
      <SearchResults items={foods} />
    </div>
  );
}
