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
        primary: {
          100: 'rgba(108, 169, 251, 1)',
          200: 'rgba(126, 161, 214, 1)',
          300: 'rgba(54, 71, 131, 1)',
          400: 'rgba(53, 89, 210, 1)',
          500: 'rgba(54, 99, 251, 1)',
          600: 'rgba(0, 157, 255)',
          700: 'rgba(25, 36, 91, 1)',
          800: 'rgba(30, 44, 93, 1)',
          900: 'rgba(12, 16, 45, 1)',
        },
        warning: {
          dark: 'rgba(198, 41, 77, 1)',
          light: 'rgba(239, 75, 124, 1)',
        },
        alert: {
          100: 'rgba(148, 88, 7, 1)',
          200: 'rgba(202, 147, 71, 1)',
          300: 'rgba(227, 171, 95, 1)',
        },
      },
      zIndex: {
        100: 100,
      },
      boxShadow: {
        input: '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 1px 2px rgba(0, 0, 0, 0.06), 0px 0px 0px 4px rgba(126, 161, 214, 0.3)',
      }
    },
  },
  plugins: [],
}
