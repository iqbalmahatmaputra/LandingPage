/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'hijau': '#21594E',
      },
      borderWidth: {
        '7': '7px',
      },
    },
  },
  plugins: [require("@tailwindcss/typography"),require("daisyui")],
}

