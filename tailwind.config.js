/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],

  theme: {
    extend: {
      fontFamily: {
        cursive: ["Arima", "cursive"],
        main: ["Poppins", "sans-serif"],
      },
      colors: {
        dark: "#141414",
        light: "#ffffff",
        dimmed: "#ffffff80",
        gradient: {
          100: "#24C6DC",
          200: "#514A9D",
        },
      },
    },
  },
  plugins: [],
};
