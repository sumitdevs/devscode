/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/*.jsx',
    './src/components/*.jsx',
    './src/pages/*.jsx'

  ],
  theme: {
    extend: {
      fontFamily:{
        mulish:['Mulish', 'sans-serif'],
        inter:['Inter', 'sans-serif']
      }
    },
  },
  plugins: [require('tailwind-scrollbar'),],
}

