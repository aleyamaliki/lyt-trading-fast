/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#25c866",
        interactive: "#0076f3",
        white: "#fff",
        secondary: "#7e8088",
        secondary2: "#D9D9D9",
        surface: "#11150f",
        red: "#d33535",
        critical: "#f53966",
        remake: "#f5c738",
        line: "#393737",
        menuDark: "#222223",
        backdrop: "#161616",
      },
      boxShadow: {
        custom: "0px 5.31717px 13.29293px 0px rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [],
};
