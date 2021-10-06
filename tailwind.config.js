module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        header: '#EAEBED',
        'header-decorate': '#F1F1F2',
        white: '#FFF',
        bluegreen: '#38D0B7',
        blue: '#35B3EA',
        dark: {
          500: '#373A43',
          400: '#646466',
          300: '#C4C4C4'
        },
        light: {
          DEFAULE: '#F4F5F7',
          400: '#D7D7D9',
          300: '#D6D7D9'
        },
        price: '#38D0B7'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
