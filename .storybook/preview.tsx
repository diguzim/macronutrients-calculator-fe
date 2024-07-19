import React from "react";

import { ThemeProvider } from "@mui/material/styles";
import type { Preview } from "@storybook/react";
import "../src/app/globals.css";

import { materialTheme } from "../src/theme/material.theme";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: "/",
      },
    },
  },
};

const withThemeProvider = (Story, context) => {
  return (
    <ThemeProvider theme={materialTheme}>
      <Story {...context} />
    </ThemeProvider>
  );
};

export const decorators = [withThemeProvider];

export default preview;
