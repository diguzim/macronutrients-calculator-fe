import { Meta, StoryObj } from "@storybook/react";
import AppBar from "../../../components/app-bar/app-bar";

const meta = {
  title: "Components/App Bar",
  component: AppBar,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "small",
    },
  },
} satisfies Meta<typeof AppBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const SmallScreen: Story = {
  args: {},
  parameters: {
    viewport: {
      defaultViewport: "small",
    },
  },
};
