module.exports = {
  content: require('fast-glob').sync([
    './src/**/*.js',
    './*.php',
    './pages/**/*.php',
    './components/**/*.php',
  ]),
  theme: {
    extend: {
      fontFamily: {
        sans: ['Noto Sans JP', 'sans-serif'],
      },
      colors: {
        white: '#F7F9F7',
        light: '#9DB5C6',
        brand: '#61ADE1',
        accent: '#B3435F',
        dark: '#2A2B4E',
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
}
