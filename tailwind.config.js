/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          sans: ['Source Code Pro', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif'],
        },
        colors: {
          primary: '#333333',
          secondary: '#dbdbdb',
          card: '#444',
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