module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      white: '#FFFFFF',
      black: '#000000',
      grey: '#F8F5F1',
      mediumGrey: '#C9CCD5',
      darkGrey: '#343A40',
      orange: '#F05945',
    },
    screens: {
      tablet: '768px',
      // => @media (min-width: 768px) { ... }
      laptop: '1366px',
      // => @media (min-width: 1366px) { ... }
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
