const colors = require('tailwindcss/colors')
module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx}', './components/**/*.{js,ts,jsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      green: {
        50: "#CFFFEF",
        100: "#AAFFE2",
        200: "#80FFD4",
        300: "#38FFBC",
        400: "#00FEA8",
        500: "#00F1A0",
        600: "#02D88F",
        700: "#02B77A",
        800: "#018759",
        900: "#026342"
      },
      blue:{
        50:'#38B1ED'
      },
      dark:{
        50:'#1558C4',
        100:'#0A5ADA'
      },
      indigo: colors.indigo,
      white: colors.white,
      gray: colors.coolGray,
      yellow: colors.amber,
      transparent: 'transparent',
      current: 'currentColor',

    }
  },
  fontSize:{
    '9xl': '12rem',
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio')
  ]
}
