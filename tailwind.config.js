/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pastel: {
          pink: '#FFD1DC',
          vanilla: '#F3E5AB',
          mint: '#AAF0D1',
          blue: '#AEC6CF',
        },
        gelarte: {
          dark: '#2C1A1D',
          primary: '#FF9BAA',
          secondary: '#82D1B8'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif']
      }
    },
  },
  plugins: [],
}
