/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line no-undef
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    letterSpacing: {
      tightest: "-.075em",
      tighter: "-.05em",
      tight: "-.025em",
      normal: "0",
      wide: ".025em",
      wider: ".05em",
      widest: ".25em",
    },
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        sans2: ["Poppins", ...defaultTheme.fontFamily.sans],
        serif: ["Playfair Display", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        xs: "0.75rem", //12px
        sm: "0.8125rem", //13px
        md: "0.875rem", //14px
        base: "1rem", //16px
        lg: "1.25rem", //20px
        xl: "1.5rem", //24px
        "2xl": "2rem", //32px
        "3xl": "3rem", //48px
        "4xl": "4rem", //64px
        "5xl": "5rem", //80px
      },
      colors: {
        primary: {
          pipe: "#1E5DFC",
          chocolate: "#261E16",
          "soft-lime": "#D9FA98",
        },
      },
    },
  },
  plugins: [],
};
