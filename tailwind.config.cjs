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
      'lg': '18px',
      'xl': '20px',
      '2xl': '26px'
    },
    extend: {},
  },
  plugins: [],
}
