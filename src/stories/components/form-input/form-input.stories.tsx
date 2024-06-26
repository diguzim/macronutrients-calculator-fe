import { TextFieldProps } from "@mui/material/TextField";
import { Meta, StoryObj } from "@storybook/react";
import FormInput from "../../../components/form-input/form-input";
import useFormController from "../../../utils/storybook/helpers";

const Container: React.FC = (args: TextFieldProps) => {
  const name = "name";
  const { control, handleSubmit } = useFormController({
    defaultValues: {},
  });

  const onSubmit = (data: any) => {
    console.log("data:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormInput {...args} control={control} name={name} />
    </form>
  );
};

const meta = {
  title: "Components/Form Input",
  component: Container,
  tags: ["autodocs"],
} satisfies Meta<typeof FormInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Name",
    type: "text",
  },
};

export const Number: Story = {
  args: {
    label: "Weight",
    type: "number",
  },
};

export const Error: Story = {
  args: {
    label: "Name",
    type: "text",
    error: true,
    helperText: "This field is required",
  },
};

export const Disabled: Story = {
  args: {
    label: "Name",
    type: "text",
    disabled: true,
  },
};

export const Required: Story = {
  args: {
    label: "Name",
    type: "text",
    required: true,
  },
};

export const FullWidth: Story = {
  args: {
    label: "Name",
    type: "text",
    fullWidth: true,
  },
};

export const Multiline: Story = {
  args: {
    label: "Name",
    type: "text",
    multiline: true,
    rows: 4,
  },
};
