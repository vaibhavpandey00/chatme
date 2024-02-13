/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primary': '#F6F1F1',
      'secondary': '#06223F',
      'ternary': '#2d4155',
      'White': '#fff',
      'lightWhite': '#0C549F',
      'lightWhite2': '#0A4889',
      'gray': '#272727'
    },
    extend: {},
    fontFamily: {
      secText: ["Work Sans", "sans-serif"]
    }
  },
  plugins: [],
}

