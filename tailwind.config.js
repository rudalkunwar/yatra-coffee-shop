/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Premium Brand Colors - Yatra Coffee
        brand: {
          50: "#fef7f0",
          100: "#fdeee0",
          200: "#fad9bf",
          300: "#f6c094",
          400: "#f1a066",
          500: "#ed7d3c", // Primary Brand Color - Warm Coffee Orange
          600: "#de5a1f",
          700: "#b84718",
          800: "#943a1a",
          900: "#783119",
          950: "#411809",
        },
        // Premium Coffee Colors
        coffee: {
          50: "#faf8f5",
          100: "#f5f0ea",
          200: "#ebe1d5",
          300: "#e0d2c0",
          400: "#d5c3ab",
          500: "#cab496",
          600: "#b99b7d",
          700: "#a17c5f",
          800: "#7d5f48",
          900: "#5a4332",
          950: "#36281c",
        },
        // Neutral Colors for Light/Dark Mode
        neutral: {
          0: "#ffffff",
          50: "#fafafa",
          100: "#f5f5f5",
          200: "#e5e5e5",
          300: "#d4d4d4",
          400: "#a3a3a3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
          950: "#0a0a0a",
        },
        // Semantic Colors
        cream: "#fdfbf7",
        latte: "#f0e6d6",
        mocha: "#6b4423",
        espresso: "#3c2414",
        // Accent Colors
        gold: {
          50: "#fffbeb",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#f59e0b",
          600: "#d97706",
          700: "#b45309",
          800: "#92400e",
          900: "#78350f",
        },
        emerald: {
          50: "#ecfdf5",
          100: "#d1fae5",
          200: "#a7f3d0",
          300: "#6ee7b7",
          400: "#34d399",
          500: "#10b981",
          600: "#059669",
          700: "#047857",
          800: "#065f46",
          900: "#064e3b",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Playfair Display", "Georgia", "serif"],
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        26: "6.5rem",
        30: "7.5rem",
      },
      fontSize: {
        "2xs": "0.625rem",
        "6xl": "4rem",
        "7xl": "5rem",
        "8xl": "6rem",
        "9xl": "8rem",
      },
      backdropBlur: {
        xs: "2px",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out infinite 2s",
        "pulse-soft": "pulse-soft 3s ease-in-out infinite",
        steam: "steam 4s ease-in-out infinite",
        "bounce-slow": "bounce 2s infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-15px)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "0.6", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
        },
        steam: {
          "0%, 100%": {
            transform: "translateY(0px) scaleY(1)",
            opacity: "0.4",
          },
          "50%": { transform: "translateY(-15px) scaleY(1.2)", opacity: "0.8" },
        },
      },
      boxShadow: {
        soft: "0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)",
        brand: "0 4px 14px 0 rgba(237, 125, 60, 0.25)",
        "brand-lg":
          "0 10px 25px -3px rgba(237, 125, 60, 0.3), 0 4px 6px -2px rgba(237, 125, 60, 0.15)",
        "brand-dark": "0 4px 14px 0 rgba(237, 125, 60, 0.4)",
        "brand-dark-lg":
          "0 10px 25px -3px rgba(237, 125, 60, 0.5), 0 4px 6px -2px rgba(237, 125, 60, 0.25)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
