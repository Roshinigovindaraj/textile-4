/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        cream: '#fdf6ee',
        gold: '#b8934a',
        'gold-light': '#d4a855',
        rose: '#c9748f',
        'dark-charcoal': '#1a1a1a',
      },
    },
  },
  plugins: [],
}
