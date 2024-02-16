/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",

  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        black: {
          DEFAULT: "#06090b ",
        },
        white: {
          DEFAULT: "#f1efe8",
        },
        primary: {
          DEFAULT: "#eab84c",
          200: "#8b6410",
          300: "#d09618",
          400: "#f2d492",
        },
        secondary: {
          DEFAULT: "#f29559",
          100: "#3d1c05",
          200: "#7b370a",
          300: "#b8530f",
          400: "#ed701d",
          500: "#f29559",
          600: "#f4ab7b",
          700: "#f7c09c",
          800: "#fad5bd",
          900: "#fceade",
        },
        accent: {
          DEFAULT: "#f29559",
          100: "#3d1c05",
          200: "#7b370a",
          300: "#b8530f",
          400: "#ed701d",
          500: "#f29559",
          600: "#f4ab7b",
          700: "#f7c09c",
          800: "#fad5bd",
          900: "#fceade",
        },
      },
    },
  },
  plugins: [],
};
