/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#75342d",
        secondary: "#333",
        white: "#fff",
        "primary-lighter": "#cca882",
        "secondary-lighter": "#595959",
        "light-bg": "#F8F9FA",
        gold: "#daa520",
        chess1: "#f0e6d6d8",
        chess2: "#b5886399",
        chess3: "#000000c7",
      },
      fontFamily: {
        sans: ["Lato", "Helvetica Neue", "Arial", "sans-serif"],
        serif: ["Georgia", "Times New Roman", "serif"],
      },
      fontSize: {
        14: "0.875rem", // For 14px
        18: "18px",
        h1: "2.5rem",
        large: "40px",
        "extra-large": "70px",
      },
      lineHeight: {
        base: "24px",
      },
      screens: {
        mobile: "768px",
      },
    },
  },
  plugins: [],
};
