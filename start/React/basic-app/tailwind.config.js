/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#262626',         
        secondary: '#38BDF8',  
      },
      container: {
        center: true, 
        padding: '1rem', 
        screens: {
          'sm': '640px',
          'md': '768px',
          'lg': '1024px', 
          'xl': '1280px',
        },
      },

    }
  },
  plugins: [],
}