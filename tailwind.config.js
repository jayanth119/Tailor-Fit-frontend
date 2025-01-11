/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        main: ["Splash", "cursive"],
        shop: ["Monomaniac One", "sans-serif"],
        button: ["Jersey-15", "sans-serif"],
      },
      backgroundImage: {
        "radient-colour":
          "radial-gradient(circle, #92E0E4 0%, #63D7DB 50%, #0A999D 100%)",
      },
      colors: {
        button: "#6F276A",
        subhead: "#430A3F",
      },
    },
  },
  plugins: [],
};
