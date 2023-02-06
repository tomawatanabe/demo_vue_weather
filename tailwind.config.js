/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html,", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "weather-primary": "#00688A",
        "weather-secondary": "#004E71",
      },
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
        Hannari: ["Hannari"],
        Mplus1p: ["M PLUS 1p"],
        Sawarabi: ["Sawarabi Mincho"],
      },
      container: {
        padding: "2em",
        center: true,
      },
      screens: {
        sm: "640px",
        md: "768px",
      },
    },
  },
  plugins: [],
};
