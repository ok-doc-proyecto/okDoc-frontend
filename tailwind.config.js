/*[]*/
module.exports = {
  content: [
    './index.html', 
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  
  theme: {
    extend: {
      animation:{
        'open-button-tilt': 'openButtonAnimation 2s infinite',
      },
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
        },
        'bodyWhite' : {
          DEFAULT: 'rgb(242 242 242)'
        }
      },
        
      container:{
        padding:"2rem",
        center:true,
      }
    },
    screens: {
      'xxs':{'max':'170px'},
      'xs': {'max':'320px'},
      'sm': {'max':'600px'},
      'md': {'max':'768px'},
      'lg': {'max':'992px'},
      'xl': {'max':'1200px'},
      '2xl':{'max': '1440px'},
      '3xl':{'max': '1600px'},
      '4xl':{'max': '1920px'},
    },
  },
  plugins: [],
};