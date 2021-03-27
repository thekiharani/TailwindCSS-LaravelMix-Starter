const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './src/**/*',
    './dist/**/*',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'lato': 'Lato',
        'nunito': 'Nunito',
        'sacramento': 'Sacramento',
      },
      colors: {
        cyan: colors.cyan
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
