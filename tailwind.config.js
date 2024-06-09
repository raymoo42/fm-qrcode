/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'white': '#FFFFFF',
        'gray': '#D6E2F0',
        'grayblue': '#7B879D',
        'darkblue': '#1F3251'
      },
      fontFamily: {
        sans: ['"Outfit"', 'sans-serif'],
        serif: ['"Outfit"', 'serif'],
      },
    },
  },
  plugins: [],
}

