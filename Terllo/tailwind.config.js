/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens:{
        '2xs':'300px',
        'xs': '480px',   
        'sm': '640px',  
        'md': '768px',   
        'lg': '1024px',   
        'xl': '1280px',   
        '2xl': '1440px'
        
      }
    },
  },
  plugins: [],
}

