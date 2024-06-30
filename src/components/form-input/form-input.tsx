import TextField, { TextFieldProps } from "@mui/material/TextField";
import React from "react";
import { Control, Controller } from "react-hook-form";

interface FormInputProps extends Omit<TextFieldProps, "name"> {
  name: string;
  control: Control<any>;
}

const FormInput: React.FC<FormInputProps> = ({ name, control, ...rest }) => (
  <Controller
    name={name}
    control={control}
    render={({ field, fieldState: { error } }) => (
      <TextField
        {...field}
        {...rest}
        error={!!error}
        helperText={error ? error.message : rest.helperText}
      />
    )}
  />
);

export default FormInput;
