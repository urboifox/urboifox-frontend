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
          100: "#E67E00",
        },
        dark: "#0a0a0a",
        light: "#ffffff",
        dimmed: "#ffffff80",
        darkDimmed: "#0a0a0a80",
        gradient: {
          100: "#24C6DC",
          200: "#514A9D",
        },
      },
    },
  },
  plugins: [],
};
