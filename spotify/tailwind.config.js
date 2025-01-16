/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary':'#000',
        'secondary':'#2A2A2A',
        'secondary2': '#1F1F1F',
        'secondary3':'#7D4B32'
      }
    },
  },
  plugins: [],
}
