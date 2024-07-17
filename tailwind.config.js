/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1976d2",
          light: "#63a4ff",
          dark: "#004ba0",
          contrast: "#ffffff",
        },
        secondary: {
          DEFAULT: "#C6E57D",
          light: "#DAEFAE",
          dark: "#5F7A1A",
          contrast: "#013334",
        },
      },
    },
  },
  plugins: [],
};
