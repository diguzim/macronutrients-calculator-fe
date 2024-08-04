"use client";

import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import theme from "../../theme/theme";
import { ROUTES } from "../../utils/constants/routes";
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
  const { t } = useTranslation();

  const onSubmit = async (data: FormData) => {
    router.push(`${ROUTES.FOOD_SEARCH}?search=${data.search}`);
    reset(initialFormData);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-row gap-4 ml-4 w-48"
    >
      <FormInput
        className="bg-gray"
        control={control}
        name="search"
        placeholder={`${t("general.search")}...`}
        size="medium"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: theme.colors.black }} />
            </InputAdornment>
          ),
        }}
      />
    </form>
  );
}
