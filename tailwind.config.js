const colors = require('tailwindcss/colors')
module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx}', './components/**/*.{js,ts,jsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      serif: ['OrpheusW05-Regular','Times New Roman','ui-serif', 'Georgia','serif'],
    },
    colors: {
      blue:{
        50:'#38B1ED'
      },
      red:{
        50:'#FAEDF0',
        100:'#DD4A48',
        200:'#FF9999'
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
