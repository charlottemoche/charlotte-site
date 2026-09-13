/** @type {import('tailwindcss').Config} */

let theme = {
  lake: '#4e75bd',
  forest: '#093c2e',
  sea: '#0f6d5b',
  cream: '#fbfaf7',
  white: '#ffffff',
}

module.exports = {
  darkMode: 'selector',
  content: ['./**/*.html', './src/**/*.js'],
  theme: {
    colors: {
      theme
    },
    container: {
      center: true
    },
    extend: {
      fontSize: {
        sm: '0.875rem',
        standard: '0.938rem',
        base: '1rem',
        med: '1.125rem',
        lg: '1.25rem',
        xl: '1.5rem',
        '2xl': '1.875rem',
        '3xl': '2.275rem',
        '4xl': '3.25rem'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}