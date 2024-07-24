/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {},
  plugins: [nextui({
    themes: {
      light:{
        colors: {
          background: "#F7F9F9",
          primary: {
            DEFAULT: "#FFC300",
            foreground: "#000814",
          },
          focus: "#000814",
        }
      },
      dark: {
        colors: {
          background: "#000814",
          primary: {
            DEFAULT: "#ffc300",
            foreground: "#000814",
          },
          focus: "#ffc300",
        },
      },
    }
  })],
  darkMode: 'class',
}

