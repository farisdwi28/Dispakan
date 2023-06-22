/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "ui-sans-serif", "system-ui"]
      },
      colors: {
        primary1: "#D36B16",
        primary2: "#E4283D",
        primary3: "#515D6A",
        bgColor1: "#D36B16",
        bgColor2: "#E4283D",
        bgColor3: "#515D6A"
      }
    }
  },
  plugins: [require("flowbite/plugin")]
};
