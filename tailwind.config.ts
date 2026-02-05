import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#D4AF37',
          light: '#F4E6C3',
          dark: '#B8941F',
        },
        purple: {
          light: '#E6D9F2',
          DEFAULT: '#B19CD9',
          dark: '#9B7EC9',
        },
      },
      fontFamily: {
        sans: ['Roboto', 'Open Sans', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
