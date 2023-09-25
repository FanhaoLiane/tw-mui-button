/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/Components/*.{js, ts, jsx, tsx}',
    './src/Components/**/*.{js, ts, jsx, tsx}',
    './src/Pages/*.{js, ts, jsx, tsx}',
    './src/*.{js, ts, jsx, tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#151933',
        'primary': {
          10: "#3663FB1A",
          'light': '#3663FB',
        },
        'error': {
          'light': '#EF4B7C',
          'dark': '#C6294D',
        }
      },
},
  },
  plugins: [],
}

