import { Meta, StoryObj } from "@storybook/react";
import AuthenticatedUserMenu from "../../../components/_old/authenticated-user-menu";

const meta = {
  title: "Components/_Old/Authenticated User Menu",
  component: AuthenticatedUserMenu,
  tags: ["autodocs"],
} satisfies Meta<typeof AuthenticatedUserMenu>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
