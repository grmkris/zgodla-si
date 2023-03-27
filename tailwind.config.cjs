/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#ffd387',
        secondary: '#ffa200',
      },
      fontFamily: {
        body: ['Open Sans']
      }
    },
  },
  plugins: [],
};

module.exports = config;
