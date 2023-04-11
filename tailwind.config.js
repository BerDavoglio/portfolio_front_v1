/* eslint-disable global-require */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        js_bg: "url('./images/js_bg.jpg')",
        ber: "url('./images/ber_foto_1.jpeg')",
      },
    },
  },
  plugins: [
  ],
};
