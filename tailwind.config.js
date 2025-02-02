/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        marquee: 'marquee 30s linear infinite'
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(50%)' },
          '100%': { transform: 'translateX(-450%)' }
        }
      },
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px'
      },
      backgroundImage: {
        hero: "url('/hero.png')"
      },
      colors: {
        primaryTeal: '#228C8C',
        secondaryTeal: '#86A9A7',
        baseGrey: '#494949',
        white: '#FFFFFF',
        christmasRedLight: '#EA3B3B',
        christmasRedDark: '#CC3333',
        purple: '#7e5bef',
        pink: '#ff49db',
        orange: '#ff7849',
        green: '#13ce66',
        yellow: '#ffc82c',
        grayDark: '#273444',
        gray: '#8492a6',
        grayLight: '#d3dce6'
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
