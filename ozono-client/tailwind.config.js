/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/preline/preline.js",
  ],
  theme: {
    extend: {
      animation: {
        'fade-in-down': 'fadeInDown .6s ease-in-out'
      },
      keyframes: {
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translate3d(0, -5%, 0)' },
          '100%': { opacity: '1', transform: 'none' }
        }
      }
    },
  },
  plugins: [require("preline/plugin"), require("daisyui")],
};
