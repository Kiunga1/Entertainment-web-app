/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'Orange': '#FC4747',
        'primaryDark': '#10141E',
        'primaryGray' : '#5A698F',
        'secondaryDark' : '#161d2F',
        'white' : '#FFFF'
      },
      fontFamily: {
        'outfit' : ["Outfit", 'sans-serif']
      }
    },
  },
  plugins: [],
}

