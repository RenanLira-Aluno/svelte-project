/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['Outfit Variable', 'sans-serif'],
    },
    colors: {
      'white': '#FFFFFF',
      'burgundy': '#660000',
      'slate-blue': '#29434E',
      'light-gray': '#F5F5F5',
      'dark-gray': '#333333',
      'gold': '#FFD700',
      'medium-gray': '#616161',
      'light-blue': '#B3E5FC',
    }
  },
  plugins: [],
}

