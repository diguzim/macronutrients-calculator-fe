"use client";

import SearchIcon from "@mui/icons-material/Search";
import { useCallback } from "react";
import { useForm } from "react-hook-form";
import Button from "../../../components/button/button";
import FormInput from "../../../components/form-input/form-input";

type FormData = {
  search: string;
};

const initialFormData: FormData = {
  search: "",
};

export default function FoodSearch() {
  const { control, handleSubmit, reset } = useForm<FormData>({
    defaultValues: initialFormData,
  });

  const onSubmit = useCallback(async (data: FormData) => {
    console.log(data);
  }, []);

  return (
    <div className="flex flex-col">
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
      <p>Here shall be the result of the search</p>
    </div>
  );
}
