/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",

  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        black: {
          DEFAULT: "#06090b ",
          200: "#0c1116",
          300: "#131a21",
          400: "#19222c",
          500: "#202c39",
          600: "#3e556e",
          700: "#5c7fa4",
          800: "#93aac2",
          900: "#c9d4e1",
        },
        white: {
          DEFAULT: "#f1efe8",
          100: "#282519",
          200: "#504b32",
          300: "#78704b",
          400: "#9f9566",
          500: "#b8b08d",
          600: "#c6c0a5",
          700: "#d5d0bb",
          800: "#e3e0d2",
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
      },
    },
  },
  plugins: [],
};
