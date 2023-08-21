/*[]*/
module.exports = {
  content: [
    './index.html', 
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  
  theme: {
    extend: {
      fontFamily:{
        'Inter':['"inter"','inter'],
        'Roboto':['Roboto', 'sans-serif'] 
      },
      colors:{
        'great-blue': {
          DEFAULT: '#2A669F',
          50: '#E4F7F8',
          100: '#D7E5E7',
          200: '#9CD7E5',
          300: '#6CB9D8',
          400: '#3B94CB',
          500: '#2A669F',
          600: '#234B83',
          700: '#1B3366',
          800: '#14204A',
          900: '#0C102E',
          950: '#080A20'
        },
        'holy-gray':{
          DEFAULT:'#F2F2F2'
        }
      },
        
      container:{
        padding:"2rem",
        center:true,
      }
    },
    screens: {
      'xs': '320px',
      'sm': '480px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',
      '2xl': '1440px',
      '3xl': '1600px',
      '4xl': '1920px',
    },
  },
  plugins: [],
};