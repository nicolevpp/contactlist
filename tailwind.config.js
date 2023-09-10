/** @type {import('tailwindcss').Config} */

const defaultTheme= require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./views/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'courgette': ['Courgette', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
};

