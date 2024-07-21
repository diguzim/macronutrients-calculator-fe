import { Meta, StoryObj } from "@storybook/react";
import LinearProgress from "../../../components/linear-progress/linear-progress";

const meta = {
  title: "Components/Linear Progress",
  component: LinearProgress,
  tags: ["autodocs"],
} satisfies Meta<typeof LinearProgress>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
