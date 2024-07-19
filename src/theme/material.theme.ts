"use client";

import { createTheme } from "@mui/material/styles";

import theme from "./theme";

export const materialTheme = createTheme({
  palette: {
    primary: {
      main: theme.colors.primary.main,
      light: theme.colors.primary.light,
      dark: theme.colors.primary.dark,
      contrastText: theme.colors.primary.contrast,
    },
    secondary: {
      main: theme.colors.secondary.main,
      light: theme.colors.secondary.light,
      dark: theme.colors.secondary.dark,
      contrastText: theme.colors.secondary.contrast,
    },
  },
  typography: {
    fontFamily: `${theme.typography.fontFamily} sans-serif`,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
  components: {
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: theme.colors.primary.main,
        },
      },
    },
  },
});
