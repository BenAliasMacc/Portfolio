/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    fontSize: {
      'xs': '12px',
      '2xl': '1.625rem'
    },
    extend: {},
  },
  plugins: [],
}
