/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          sans: ['Source Code Pro', 'Roboto', 'Helvetica Neue', 'Noto Sans', 'sans-serif'],
        },
        colors: {
          primaryDark: '#333333',
          primaryLight: '#ffffff',
          secondary: '#dbdbdb',
          card: '#444',
          cardLight: '#ECECEC',
          heading: '#808080',
          text: '#ECECEC',
          accent: '#169137'
        }
      },
    },
    plugins: [
      require('tailwind-scrollbar')
    ],
  }