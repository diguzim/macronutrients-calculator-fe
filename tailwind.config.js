/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#18c00a",
          light: "#18c00a",
          dark: "#18c00a",
          contrast: "#ffffff",
        },
        secondary: {
          DEFAULT: "#7a26ff",
          light: "#7a26ff",
          dark: "#7a26ff",
          contrast: "#ffffff",
        },
      },
    },
  },
  plugins: [],
};
