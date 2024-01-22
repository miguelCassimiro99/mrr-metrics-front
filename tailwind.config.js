const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "storyblok/**/*.{vue,js}",
    "components/**/*.{vue,js}",
    "pages/**/*.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2d2d2d",
        secondary: "#17113b",
        "secondary-dark": "#cca177",
        "primary-dark": "#2d2d2d",
        accent: "#8aacad",
      },
    },
  },
};
