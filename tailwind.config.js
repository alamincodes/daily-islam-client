/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    fontFamily: {
      primary: 'Anek Bangla, sans-serif',
      secondary: 'Inter, sans-serif',
    },
    screens: {
      sm: "0px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {},
  },
  plugins: [],
};
