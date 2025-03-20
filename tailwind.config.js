// /** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backdropBlur: {
        xs: "2px",
        sm: "4px",
        md: "8px",
        lg: "12px",
        xl: "16px",
      },
      fontFamily: {
        caliber: ['Caliber', 'sans-serif'],
        ZapfHumanist: ['ZapfHumanist', 'sans-serif'],
        main: ["Alex Brush", "cursive"],
        subhead: ["Lato", "mono"],
        shop: ["Monomaniac One", "sans-serif"],
        buttonf: ['"Jersey 25"', "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        urbanist: ["Urbanist","sans-serif"],
      },
      backgroundImage: {
        "radient-colour":"radial-gradient(circle, #92E0E4 0%, #63D7DB 50%, #0A999D 100%)",
        "circular-color": "radial-gradient(circle 360px at center bottom, #FAEDFC, #F4F4F6)",
        "circular-slider" : "radial-gradient(circle at center bottom, #0B024D, #C2C1C5)"
      },
      colors: {
        homebasic:"#183F3D",
        button: "#6F276A",
        subhead: "#430A3F",
        navitem: "#80292A",
        forgot: "#1854AD",
        success: "#1B7D3F",
      },
      keyframes: {
        zoomIn: {
          "0%": { opacity: "0.8", transform: "scale(0.5)" },
          "50%": { opacity: "1", transform: "scale(1)" },
          "100%": { opacity: "1", transform: "scale(1.5)" },
        },
      },
      animation: {
        zoomIn: "zoomIn 1s ease-in forwards",
      },
    },
  },
  plugins: [],
};
