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
    children: "Button",
  },
};

export const Disabled: Story = {
  args: {
    children: "Button",
    disabled: true,
  },
};

export const FullWidth: Story = {
  args: {
    children: "Button",
    fullWidth: true,
  },
};

export const Outlined: Story = {
  args: {
    children: "Button",
    variant: "outlined",
  },
};

export const Text: Story = {
  args: {
    children: "Button",
    variant: "text",
  },
};

export const Contained: Story = {
  args: {
    children: "Button",
    variant: "contained",
  },
};
