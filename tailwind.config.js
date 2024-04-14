/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGold: '#b3a058',
       
      },
      fontFamily: {
        'poppins': ['poppins', 'sans-serif'],
        'anton': ['Anton', 'sans-serif'],
        'sedan': ['Sedan', 'sans-serif'],
      }
    },
   
  },
  plugins: [],
}

