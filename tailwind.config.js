const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        gray: colors.zinc,
        // brand: colors.blue,
        brand: {
          '100': '#00A8E4',
          '200': '#00B2EC',
          '300': '#00BDF4',
          '400': '#00C8FC',
          '500': '#009ED9',
          '600': '#008EC2',
          '700': '#007EAC',
          '800': '#006E96',
          '900': '#005E80',
        },
        red: colors.red,
        pink: colors.pink,
        blue: colors.blue,
        green: colors.emerald,
        yellow: colors.yellow
      }
    },
  },
  plugins: [],
}
