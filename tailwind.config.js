/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'platinum': '#DBDFE6',
        'vermillon': '#EA4E48',
        'seasalt': '#FCFAFA',
        'cadet-gray': '#9FA9BC',
        'space-cadet': '#2B2b42',
        'dark-purple': '#160c28',
      },

    },
  },
  plugins: [],
}