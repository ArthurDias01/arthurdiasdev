/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          50: "#fafee7",
          100: "#f3fccb",
          200: "#e5f99d",
          300: "#d1f264",
          400: "#bee740",
          500: "#9ccc16",
          600: "#79a30d",
          700: "#5b7c0f",
          800: "#4a6212",
          900: "#3e5314",
          950: "#1f2e05",
        },
        neutral: {
          50: "#f6f7f9",
          100: "#eceef2",
          200: "#d6dae1",
          300: "#b1bac8",
          400: "#8795a9",
          500: "#68788f",
          600: "#536076",
          700: "#4a5568",
          800: "#3b4351",
          900: "#343a46",
          950: "#23272e",
        },
      },
    },
  },
  plugins: [],
};
