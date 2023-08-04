 // tailwind.config.js
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // You can customize your colors here
        // For example:
        // blueGray: colors.blueGray,
        // coolGray: colors.coolGray,
        // trueGray: colors.trueGray,
        // ...
      },
    },
  },
  plugins: [],
};
