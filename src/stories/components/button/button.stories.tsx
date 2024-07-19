import { Meta, StoryObj } from "@storybook/react";
import Button from "../../../components/button/button";

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Click Me",
  },
};

export const Small: Story = {
  args: {
    children: "Click Me",
    size: "small",
  },
};

export const Large: Story = {
  args: {
    children: "Click Me",
    size: "large",
  },
};

export const Disabled: Story = {
  args: {
    children: "Click Me",
    disabled: true,
  },
};

export const FullWidth: Story = {
  args: {
    children: "Click Me",
    fullWidth: true,
  },
};

export const Outlined: Story = {
  args: {
    children: "Click Me",
    variant: "outlined",
  },
};

export const Text: Story = {
  args: {
    children: "Click Me",
    variant: "text",
  },
};
