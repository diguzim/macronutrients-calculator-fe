import { Meta, StoryObj } from "@storybook/react";
import AppBar from "../../../components/app-bar/app-bar";
import {
  AuthenticatedDecorator,
  UnauthenticatedDecorator,
} from "../../../utils/storybook/decorators";

const AppBarWithinPage = () => {
  return (
    <div>
      <AppBar />
      <div className="h-64 bg-green-100 text-center pt-5">
        ...Imagine some content here...
      </div>
    </div>
  );
};

const meta = {
  title: "Components/App Bar",
  component: AppBarWithinPage,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "small",
    },
  },
  decorators: [AuthenticatedDecorator],
} satisfies Meta<typeof AppBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const SmallScreen: Story = {
  parameters: {
    viewport: {
      defaultViewport: "small",
    },
  },
};

export const Unathenticated: Story = {
  decorators: [UnauthenticatedDecorator],
};
