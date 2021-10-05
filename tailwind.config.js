module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        header: '#EAEBED',
        'header-decorate': '#F1F1F2',
        white: '#FFF',
        primary: 'linear-gradient(180deg, #38D0B7 0%, #35B3EA 100%)',
        blue: '#35B3EA',
        dark: {
          500: '#373A43',
          400: '#646466'
        },
        light: '#F4F5F7',
        price: '#38D0B7'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
