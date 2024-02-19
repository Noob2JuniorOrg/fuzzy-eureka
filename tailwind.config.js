/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},

    fontSize: {
      '8xl': ['88px', '82px'],
      tablet: ['6.5vw', '6vw'],
      '2xl': ['20px', '34px'],
      '3xl': ['30px', '35px'],
      '1xl': ['1.5vw', '2.5vw'],
      '0xl': ['15px', '26px'],
    },
    fontFamily: {
      body: ['IBM Plex Sans', 'sans-serif'],
    },
    backgroundImage: {
      'body-pattern':
        "url('src/projects/equalizer/assets/bg-main-desktop.png')",
    },
    height: {
      telephone: '40rem',
    },
    minWidth: {
      'custom-width': '27rem',
    },
    screens: {
      '2xl': { max: '1535px' },
      // => @media (max-width: 1535px) { ... }

      xl: { max: '1379px' },
      // => @media (max-width: 1279px) { ... }

      lg: { max: '1023px' },
      // => @media (max-width: 1023px) { ... }

      md: { max: '867px' },
      // => @media (max-width: 767px) { ... }

      sm: { max: '639px' },
      // => @media (max-width: 639px) { ... }
      mobile: { max: '426px' },
    },
  },
  plugins: [],
};
