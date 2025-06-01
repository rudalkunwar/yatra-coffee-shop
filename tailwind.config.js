/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        coffee: {
          50: "#f8f5f2",
          100: "#f1ebe5",
          200: "#e3d7cb",
          300: "#d5c3b1",
          400: "#c7af97",
          500: "#b99b7d",
          600: "#a17c5f",
          700: "#7d5f48",
          800: "#5a4332",
          900: "#36281c",
        },
        cream: "#fdfbf7",
        latte: "#e6d5c3",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [],
};
