import type { Meta, StoryObj } from "@storybook/react";
import Topbar from "../../../components/topbar/topbar";
import AuthContext from "../../../contexts/auth/auth.context";

type ContainerArgsType = {
  isAuthenticated: boolean;
};

const Container = (args: ContainerArgsType) => {
  const authContextValue = {
    isAuthenticated: args.isAuthenticated,
    user: null,
    jwtToken: null,
    login: () => {},
    logout: () => {},
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      <Topbar />
    </AuthContext.Provider>
  );
};

const meta = {
  title: "Components/Topbar",
  component: Container,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Topbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NotAuthenticated: Story = {
  args: {
    isAuthenticated: false,
  },
};

export const Authenticated: Story = {
  args: {
    isAuthenticated: true,
  },
};
