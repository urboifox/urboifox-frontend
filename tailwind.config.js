/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],

  theme: {
    extend: {
      fontFamily: {
        main: ["Montserrat", "sans-serif"],
      },
      colors: {
        primary: {
          100: "#CC0000",
        },
        dark: "#111",
        light: "#ffffff",
        dimmed: "#ffffff80",
        darkDimmed: "#11111180",
        gradient: {
          100: "#24C6DC",
          200: "#514A9D",
        },
      },
    },
  },
  plugins: [],
};
