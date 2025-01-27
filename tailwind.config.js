const withMT = require("@material-tailwind/html/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", "./public/index.html",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.{js,ts}",
  ],
  theme: {
    screens: {
      xs: '360px', 
      sm: '640px', 
      md: '768px',  
      lg: '1024px', 
      xl: '1280px', 
      '2xl': '1536px', 
      '3xl': '1920px', 
    },    
    colors: {
      indigo: {
        100: "#cee1fb",
        200: "#9ec3f6",
        300: "#6da4f2",
        400: "#3d86ed",
        500: "#0c68e9",
        600: "#0a53ba",
        700: "#073e8c",
        800: "#052a5d",
        900: "#02152f"
      },
    },
    fontFamily: {
      barlow: ['Public Sans Variable'],
    },
    extend: {},
  },
  plugins: [],
});
