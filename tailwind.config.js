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
          DEFAULT: "#4caf50",
          light: "#80e27e",
          dark: "#087f23",
          contrast: "#ffffff",
        },
      },
    },
  },
  plugins: [],
};
