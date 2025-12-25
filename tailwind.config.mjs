import { plumagePlugin } from './src/themes/plugin';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./docs/**/*.{md,vue,js,ts,jsx,tsx}",
    "./docs/.vitepress/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Geist', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      },
      zIndex: {
        'surface-1': '10',
        'surface-2': '20',
        'surface-3': '30',
      },
    },
  },
  plugins: [
    plumagePlugin,
  ],
}
