/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "palette-accent": "#2244CB",
        "light-palette-offwhite": "#F7F3F3",
        "light-palette-black": "#050609",
        "light-palette-gray": "#EFE7E7",
        "light-palette-white": "#FFFFFF",
        "dark-palette-offblack": "#1C1D21",
        "dark-palette-white": "#FDFFF7",
        "dark-palette-gray": "#26272C",
        "dark-palette-black": "#131316",
      },
    },
  },
  plugins: [],
};
