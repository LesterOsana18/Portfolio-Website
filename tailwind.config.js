/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'sm': '480px',
      },
      spacing: {
        'big': '48rem',
      },
      colors: {
        deepGreenBlue: '#264653', // Primary
        mutedTeal: '#2A9D8F', // Secondary
        warmGold: '#E9C46A', // Accent
        paleOrange: '#F4A261', // Neutral
      },
      fontFamily: {
        poppins: ['Poppins'],
      },
    },
  },
  plugins: [],
}

