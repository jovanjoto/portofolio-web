/** @type {import('tailwindcss').Config} */

const flowbite = require("flowbite-react/tailwind");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      colors : {
        first: "#2D2D2D",
        second: "#D98232",
        third: "#8A6F42",
        fourth: "#7C7C7C",
        fifth: "#3B4C63",
        grey1: "#adb5bd",
        grey2: "#6c757d",
        grey3: "#495057",
        grey4: "#343a40",
        grey5: "#212529",
        darkGrey: "#1a1a1a"
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      }                    
    },

  },
  plugins: [],
};
