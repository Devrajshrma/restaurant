/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*'],
  theme: {
    extend: {
      colors: {
        customGold: 'rgb(222, 177, 80)',
        customGray: '#C0BEBF'
      },
      screens: {
        'xsm': '530px',
      },
    },
  },
  plugins: [],
}
