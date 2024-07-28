/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-theme-color": "#59C378",//green
        "golden-theme-color": "#b3a206", 
        "third-theme-color": "#F1F1F1", //red
        "primary-text-color": "#585858", //dark gray
        "light-text-color": "#7b7b7b", //light gray
        "heading-color": "#202020", //black
        "work-position-color":"#dd584f",
        "border-color":"#ebebeb",
        "border-color-s2":"#e4ebf2",
        "footer-line-color":"rgb(255 255 255 / 5%)",
        "service-golden-color":"#dfca08"
        
      },
      backgroundColor:{
          "primary-bgColor":"#F8F8F8",
          "service-bgColor":"#FFFBFB",
          "section-bgColor":"#f3f8ff",
          "footer-bgColor":"#202020"
      },
      container: {
        center: true,
        // padding: "80px",
      },
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
