/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // Enable dark mode
  theme: {
    extend: {
      colors: {
        // Light theme colors
        "main-bg": "#f4f7fe",
        "primary-bg": "#fff",
        text: "#1b254b",
        text2: "#abb4cb",
        "text-dark": "#000000",
        "primary-color": "#422afb",
        "primary-color-dark": "#11047a",
        danger: "#ff0000",

        // Dark theme colors
        "dark-main-bg": "#1a1c23",
        "dark-primary-bg": "#2c2f3a",
        "dark-text": "#f0f4fc",
        "dark-text2": "#c2c8d1",
        "dark-primary-color": "#8a71fd",
        "dark-primary-color-dark": "#422afb",
        "dark-danger": "#ff5252",
      },
    },
  },
  plugins: [],
};
