/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // or 'media'
  content: ['./src/**/*.{html,js,svelte,ts}'],
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
        colors: {
          'brown-900' : '#FFE5D4',
          'nav' : '#EFC7C2',
          'button-1' : '#985F6F',
          'button-2': '#4E4C67',
              },
    },
  },
  plugins: [],
}