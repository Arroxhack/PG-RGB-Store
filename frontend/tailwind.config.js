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
        '200': '#060607',
        '300': '#F66095',
        '400': '#2BCDC5',
      },
    },
    screens: {
      'sm': '370px',
      // => @media (min-width: 375px) { ... }

      'md': '768px',
      // => @media (min-width: 960px) { ... }

      'lg': '1440px',
      // => @media (min-width: 1440px) { ... }
    }
  },
  plugins: [],
}
