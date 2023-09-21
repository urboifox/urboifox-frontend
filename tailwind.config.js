import { primaryColor } from "./src/constants";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],

  theme: {
    extend: {
      colors: {
        primary: {
          100: primaryColor,
        },
        bg: "#000000",
        dark: "#0a0a0a",
        light: "#ffffff",
        dimmed: "#ffffff80",
        darkDimmed: "#0a0a0a80",
      },
    },
  },
  plugins: [],
};
