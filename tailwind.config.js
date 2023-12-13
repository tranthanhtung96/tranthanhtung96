/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", ...defaultTheme.fontFamily.sans],
        dancing: ["Dancing Script", ...defaultTheme.fontFamily.sans],
        comfort: ["Comfortaa", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
  darkMode: true,
};
