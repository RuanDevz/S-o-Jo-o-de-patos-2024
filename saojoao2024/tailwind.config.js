/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        Pink: '#FF009F',
        Orange: '#F0B400',
        Ocean: '#00B978',
        placeholder: '#3E3E3E'
      },
      fontFamily:{
        rockwell: ['Rockwell', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

