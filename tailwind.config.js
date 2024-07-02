/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#191af1",
        secondary: "#f7991d",
        opacity: "#2E5898",
        button: "#5384CE",
        footer: "#1c3964",
        icofont: "#41419d",
      },
      skew: {
        17: "17deg",
        18: "18deg",
        19: "19deg",
        20: "20deg",
        21: "21deg",
        22: "22deg",
        23: "23deg",
        24: "24deg",
        25: "25deg",
        26: "26deg",
        27: "27deg",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "3rem",
        xl: "4rem",
      },
      fontFamily: {
        inter: ["Poppins", "sans-serif"],
        cursive: ["Ephesis", "cursive"],
      },
    },
    rotate: {
      25: "25deg",
      20: "20deg",
      30: "30deg",
      40: "40deg",
      50: "50deg",
      60: "60deg",
      70: "70deg",
      80: "80deg",
    },
  },
  height: {
    calc: "calc(80vh - 50px)",
  },
  plugins: [],
};
