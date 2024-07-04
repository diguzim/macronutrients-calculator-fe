import type { Meta, StoryObj } from "@storybook/react";
import Topbar from "../../../components/topbar/topbar";

const meta = {
  title: "Components/Topbar",
  component: Topbar,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Topbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
