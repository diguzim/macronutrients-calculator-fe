"use client";

import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import FormInput from "../form-input/form-input";

type FormData = {
  search: string;
};

const initialFormData: FormData = {
  search: "",
};

export default function SearchInput() {
  const { control, handleSubmit, reset } = useForm<FormData>({
    defaultValues: initialFormData,
  });
  const router = useRouter();

  const onSubmit = async (data: FormData) => {
    router.push(`search-foods?search=${data.search}`);
    reset(initialFormData);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-row gap-4 ml-4 w-40"
    >
      <FormInput
        control={control}
        name="search"
        placeholder="Search..."
        size="small"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </form>
  );
}
