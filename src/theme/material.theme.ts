"use client";

import { createTheme } from "@mui/material/styles";

import theme from "./theme";

export const materialTheme = createTheme({
  palette: {
    primary: {
      main: theme.colors.primary.main,
      light: theme.colors.primary.light,
      dark: theme.colors.primary.dark,
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
    MuiButton: {
      defaultProps: {
        variant: "contained",
      },
      styleOverrides: {
        root: {
          color: theme.colors.primary.dark,
          fontFamily: "Roboto, sans-serif",
          fontWeight: 600,
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
        },
        sizeSmall: {
          fontSize: "0.75rem",
          textShadow: "none",
        },
        sizeLarge: {
          fontSize: "1rem",
        },
        outlined: {
          color: theme.colors.primary.dark,
          borderColor: theme.colors.primary.dark,
          "&:hover": {
            backgroundColor: theme.colors.primary.light,
            borderColor: theme.colors.primary.light,
          },
        },
      },
    },
  },
});
