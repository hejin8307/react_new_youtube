/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#FF0000',
        black: '#000000',
        white: '#ffffff',
        lightGrey: '#f8f8f8',
        mediumGrey: '#f2f2f2',
        darkGrey: '#d2d2d2',
        login: '#2b7cdd',
        loginGrey: '#e9e9e9',
        hashtagGrey: '#a6a6a6',
        darkBlack: '#0f0f0f',
        dark_darkGrey: '#272727',
        darkSearch: '#222222',
        darkLine: '#2b2b2b',
      },
      fontFamily: {
        kenyc: ['kenyc', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
