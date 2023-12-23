import { primaryColor } from "./src/utils/constants";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],

  theme: {
    extend: {
      fontFamily: {
        sec: ["Roboto", "sans-serif"],
      },
      colors: {
        primary: {
          100: primaryColor,
        },
        bg: "#000000",
        dark: "#000000",
        light: "#ffffff",
        dimmed: "#ffffff80",
        darkDimmed: "#0a0a0a80",
      },
    },
  },
  plugins: [],
};
