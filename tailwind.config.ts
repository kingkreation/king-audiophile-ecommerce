import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-brown': '#101010',
        'light-brown': '#F1F1F1',
        'peach': '#D87D4A',
        'pale-peach': '#FBAF85',
        'almost-black': '#000000',
        'light-grey': '#F1F1F1',
        'very-light-grey': '#FAFAFA',
        'darker-grey': '#979797',
      },
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
