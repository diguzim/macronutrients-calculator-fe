import React from "react";
import { Controller, Control } from "react-hook-form";
import TextField, { TextFieldProps } from "@mui/material/TextField";

// Definindo as props que nosso componente `FormInput` aceitará
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
