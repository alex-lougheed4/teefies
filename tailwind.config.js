/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px'
      },
      colors: {
        primaryTeal: '#228C8C',
        secondaryTeal: '#86A9A7',
        baseGrey: '#494949',
        white: '#FFFFFF',
        christmasRedLight: '#EA3B3B',
        christmasRedDark: '#CC3333',
        blue: '#1fb6ff',
        purple: '#7e5bef',
        pink: '#ff49db',
        orange: '#ff7849',
        green: '#13ce66',
        yellow: '#ffc82c',
        'gray-dark': '#273444',
        gray: '#8492a6',
        'gray-light': '#d3dce6'
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif']
      },
      extend: {
        spacing: {
          128: '32rem',
          144: '36rem'
        },
        borderRadius: {
          '4xl': '2rem'
        }
      }
    }
  },
  plugins: []
}
