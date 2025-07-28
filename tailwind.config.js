/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        teal: '#4DB6AC',
        gold: '#FFD700',
        spiritual: '#3B945E'
      }
    },
  },
  plugins: [],
}
