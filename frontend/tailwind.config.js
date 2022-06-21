/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {'PT': ['PT Sans',' sans-serif'],
      'Open': ['Open Sans', 'sans-serif']
    },
    },
    colors: {
      'primary': {
        DEFAULT: '#2BCDC5',
        '100': '#38817A',
        '200': '#393E46',
        '300': '#F66095',
        '400': '#2BCDC5',
      },
    }
  },
  plugins: [],
}
