/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      'background': '#D9D9D9',
      'white': '#FFFFFF',
      'black': '#000000',
      'blue': '#002857',
      'yellow': '#EDD500',
      'orange': '#FE8025',
      'green': '#00CE15',
      'grey': 'rgba(119, 119, 119, 0.66)'
    },
    extend: {},
  },
  plugins: [],
}
