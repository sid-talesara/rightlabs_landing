/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {},
    fontFamily: {
      grifter: ["grifter"],
      gil: ["gilroy", "sans-serif"],
      gilMed: ["gilroy-med", "sans-serif"],
      gilBold: ["gilroy-bold", "sans-serif"],
      gilLight: ["gilroy-light"],
    },
    colors: {
      blue: "#0C4DB0",
      yellow: "#EEDC28",
      blue_dark: "#032A56",
      blue_text: "#3693FE",
      blue_light: "#E8F3FF",
      blue_dark_2: "#001125",
      white: "#fff",
      black: "#000",
    },
    plugins: [require("flowbite/plugin")],
  },
};
