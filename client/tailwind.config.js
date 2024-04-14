/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens:{
      sm:'200px',
      md:'768px',
      lg:'1024px',
      xl:'1280px',
    },
    extend: {
      colors: {
        Red: '#d4161e;',
        bordergray: '#dedede',
        backgroundgray: '#ececec;',
        LightBlack: '#191919;',
        footercolor: '#787878;',
      },
    },
  },
  plugins: [],
}

