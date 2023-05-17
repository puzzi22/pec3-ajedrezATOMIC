/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        wood: "#cca882",
        "dark-grey": "#333",
        "pale-grey": "#595959",
        "broken-white": "#F8F9FA",
        "chess-beige": "#f0e6d6d8",
        "chess-brown": "#b5886399",
        "chess-black": "#000000c7",
      },
      fontFamily: {
        sans: ["Lato", "Helvetica Neue", "Arial", "sans-serif"],
        serif: ["Georgia", "Times New Roman", "serif"],
      },
      fontSize: {
        h1: "2.5rem",
      },
      lineHeight: {
        base: "24px",
      },
    },
  },
  plugins: [],
};
