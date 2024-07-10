import { ThemeProvider } from "@mui/material/styles";
import type { Meta, StoryObj } from "@storybook/react";
import Topbar from "../../../components/topbar/topbar";
import AuthContext from "../../../contexts/auth/auth.context";
import I18nProvider from "../../../contexts/i18n/i18n.provider";
import { theme } from "../../../theme/material.theme";

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
    <ThemeProvider theme={theme}>
      <I18nProvider>
        <AuthContext.Provider value={authContextValue}>
          <Topbar />
        </AuthContext.Provider>
      </I18nProvider>
    </ThemeProvider>
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
