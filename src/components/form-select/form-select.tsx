import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectProps } from "@mui/material/Select";
import React from "react";
import { Control, Controller } from "react-hook-form";

interface FormSelectProps extends Omit<SelectProps, "name"> {
  name: string;
  control: Control<any>;
  options: { label: string; value: any }[];
  label: string;
}

const FormSelect: React.FC<FormSelectProps> = ({
  name,
  control,
  options,
  label,
  ...rest
}) => (
  <Controller
    name={name}
    control={control}
    render={({ field, fieldState: { error } }) => (
      <FormControl error={!!error} fullWidth>
        <InputLabel>{label}</InputLabel>
        <Select {...field} {...rest}>
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
        {/* <FormHelperText>
          {error ? error.message : rest.helperText}
        </FormHelperText> */}
      </FormControl>
    )}
  />
);

export default FormSelect;
