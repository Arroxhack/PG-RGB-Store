/** @type {import('tailwindcss').Config} */
    
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        PT: ["PT Sans", " sans-serif"],
        Open: ["Open Sans", "sans-serif"],
      },
    },
    colors: {
      primary: {
        DEFAULT: "#2BCDC5",
        100: "#38817A",
        200: "#212126",
        300: "#F66095",
        400: "#2BCDC5",
        500: "#FF0099",
      
      },
      secundary:{
        DEFAULT: '#000000',
        50: '#FF0000',
        100: '#FFFFFF',
        250: '#eeeeee',
        500: '#000000'
      }
    },
    screens: {
      sm: "375px",
      // => @media (min-width: 375px) { ... }

      md: "768px",
      // => @media (min-width: 960px) { ... }

      lg: "1000px",
      // => @media (min-width: 1440px) { ... }
    },
  },
  plugins: [],

};

