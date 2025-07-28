/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        teal: '#4DB6AC',
        gold: '#FFD700',
        'spiritual-green': '#3B945E',
      },
    },
  },
  plugins: [],
};
