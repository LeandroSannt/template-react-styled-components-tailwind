/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins"],
        Inter: ["Inter"],
      },
      boxShadow: {
        "3xl-personalized": "0px 0px 24px rgba(0, 0, 0, 0.16)",
        inputShadow: "0px 0px 4px rgba(13, 16, 35, 0.32)",
      },
      colors: {
        // Status
        // General-colors
        // Input
      },
    },
  },
  daisyui: {
    themes: ["business"],
  },
  plugins: [require("daisyui")],
};
