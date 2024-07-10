"use client";

import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#18c00a",
      light: "#18c00a",
      dark: "#18c00a",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#7a26ff",
      light: "#7a26ff",
      dark: "#7a26ff",
      contrastText: "#ffffff",
    },
  },
  typography: {
    fontFamily: "Inter, sans-serif",
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
});
