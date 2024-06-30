import { SelectProps } from "@mui/material/Select";
import { Meta, StoryObj } from "@storybook/react";
import FormSelect from "../../../components/form-select/form-select";
import useFormController from "../../../utils/storybook/helpers";

const Container: React.FC = (args: SelectProps) => {
  const label = "Options";
  const name = "name";
  const { control, handleSubmit } = useFormController({
    defaultValues: {},
  });
  const options = [
    { label: "Option 1", value: "option-1" },
    { label: "Option 2", value: "option-2" },
    { label: "Option 3", value: "option-3" },
  ];

  const onSubmit = (data: any) => {
    console.log("data:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormSelect
        {...args}
        control={control}
        name={name}
        label={label}
        options={options}
      />
    </form>
  );
};

const meta = {
  title: "Components/Form Select",
  component: Container,
  tags: ["autodocs"],
} satisfies Meta<typeof FormSelect>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Name",
    type: "text",
  },
};

export const Error: Story = {
  args: {
    label: "Options",
    error: true,
    helperText: "This field is required",
  },
};

export const Disabled: Story = {
  args: {
    label: "Options",
    disabled: true,
  },
};

export const Required: Story = {
  args: {
    label: "Options",
    required: true,
  },
};
