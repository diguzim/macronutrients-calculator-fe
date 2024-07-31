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
          fontFamily: "Roboto, sans-serif",
          fontWeight: 600,
          letterSpacing: "0.06em",
          textTransform: "uppercase",
        },
        contained: {
          color: theme.colors.white,
          backgroundColor: theme.colors.primary.dark,
        },
        outlined: {
          color: theme.colors.primary.dark,
          borderColor: theme.colors.primary.dark,
          "&:hover": {
            backgroundColor: theme.colors.primary.light,
            borderColor: theme.colors.primary.light,
          },
        },
        text: {
          color: theme.colors.black,
          "&:hover": {
            backgroundColor: theme.colors.gray,
          },
        },
        sizeSmall: {
          fontSize: "0.75rem",
          textShadow: "none",
        },
        sizeLarge: {
          fontSize: "1rem",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        body1: {
          color: theme.colors.darkBlack,
        },
      },
    },
  },
});
