// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class', // ✅ Enables dark mode using class
  theme: {
    xtend: {
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
    },
  },
  },
  plugins: [],
};
