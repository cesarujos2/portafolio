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
          background: "#a8dadc",
          primary: {
            DEFAULT: "#264653",
            foreground: "#232529",
          },
          focus: "#000814",
          secondary: {
            DEFAULT: "#ff7514",
            foreground: "#F0BB07",
          }
        }
      },
      dark: {
        colors: {
          primary: {
            DEFAULT: "#2a9d8f",
            foreground: "#000814",
          },
          focus: "#ffc300",
          secondary: {
            DEFAULT: "#ff7514",
            foreground: "#000814",
          }
        },
      },
    }
  })],
  darkMode: 'class',
}

