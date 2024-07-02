/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-theme-color": "#59C378",
        "secondary-theme-color": "#b3a206",
        "secondary-light-theme-color": "#dfca08",
        "third-theme-color": "#F1F1F1",
        "primary-text-color": "#585858",
        "light-text-color": "#7b7b7b",
        "heading-color": "#202020",
      },
      container: {
        center: true,
        padding: "80px",
      },
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
