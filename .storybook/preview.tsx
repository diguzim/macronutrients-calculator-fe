import React from "react";

import { ThemeProvider } from "@mui/material/styles";
import {
  INITIAL_VIEWPORTS,
  MINIMAL_VIEWPORTS,
} from "@storybook/addon-viewport";
import type { Preview } from "@storybook/react";

import "../src/app/globals.css";
import I18nProvider from "../src/contexts/i18n/i18n.provider";

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
    viewport: {
      viewports: {
        ...INITIAL_VIEWPORTS,
        ...MINIMAL_VIEWPORTS,
        small: {
          name: "Small screen",
          styles: {
            width: "375px",
            height: "667px",
          },
        },
        medium: {
          name: "Medium screen",
          styles: {
            width: "768px",
            height: "1024px",
          },
        },
        large: {
          name: "Large screen",
          styles: {
            width: "1440px",
            height: "900px",
          },
        },
      },
      defaultViewport: "responsive",
    },
  },
};

const withThemeProvider = (Story, context) => {
  return (
    <I18nProvider>
      <ThemeProvider theme={materialTheme}>
        <Story {...context} />
      </ThemeProvider>
    </I18nProvider>
  );
};

export const decorators = [withThemeProvider];

export default preview;
