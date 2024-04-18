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
      },
      keyframes: {
        pop: {
          '0%': { opacity: '0', transform: 'scale(0.5, 0.5)' },
          '100%': { opacity: '1', transform: 'scale(1, 1)' },
        },

      },
      animation: {
        'pop': 'pop 0.5s cubic-bezier(0.26, 0.53, 0.74, 1.48) forwards',
        'spin-slow': 'spin 10s linear infinite',
      },
    },
   
  },
  plugins: [],
}

