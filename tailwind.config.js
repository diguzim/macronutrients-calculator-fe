const theme = require("./src/theme/theme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: theme.colors.primary.main,
          light: theme.colors.primary.light,
          dark: theme.colors.primary.dark,
          contrast: theme.colors.primary.contrast,
        },
      },
      fontFamily: {
        sans: [theme.typography.fontFamily, "sans-serif"],
      },
    },
  },
  plugins: [],
};
