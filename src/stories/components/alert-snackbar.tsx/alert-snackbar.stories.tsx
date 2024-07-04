import { Meta, StoryObj } from "@storybook/react";
import AlertSnackbar, {
  AlertSnackbarProps,
} from "../../../components/alert-snackbar/alert-snackbar";

function Container(props: AlertSnackbarProps) {
  return (
    <div>
      <AlertSnackbar {...props} />
    </div>
  );
}

const meta = {
  title: "Components/Alert Snackbar",
  component: Container,
  tags: ["autodocs"],
} satisfies Meta<typeof AlertSnackbar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Success: Story = {
  args: {
    message: "This is a success message",
    severity: "success",
    open: true,
  },
};

export const Error: Story = {
  args: {
    message: "This is an error message",
    severity: "error",
    open: true,
  },
};

export const Warning: Story = {
  args: {
    message: "This is a warning message",
    severity: "warning",
    open: true,
  },
};

export const Info: Story = {
  args: {
    message: "This is an info message",
    severity: "info",
    open: true,
  },
};
