/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      'primary':'#9B92F8',
      'scond':'#EFFE53',
      'third':'#9AD3E0',
      'fourth':'#4EADC3',
      'fifth':'#F19F76',
      'white':'#F6F5F4',
      'black':'#071C25',
      'gray-darck':'#505658',
      'gray-lghit':'#9CA2A4',
      'gray-extrai':'#DDE3E6',
      },
     fontSize:{
      'h1':['65px',{
        lineHeight:'71.5px',
        fontWeight:'400'
      }],
      'h2':['56px',{
        lineHeight:'61.6px',
        fontWeight:'400'
      }],
      'h3':['40px',{
        lineHeight:'46.64px',
        fontWeight:'400'
      }],
      'h4':['30px',{
        lineHeight:'36px',
        fontWeight:'400'
      }],
       'h5':['24px',{
        lineHeight:'33.6px',
        fontWeight:'600'
      }],
      'p':['20px',{
        lineHeight:'28px',
        fontWeight:'600'
      }],
      'n-bold':['17px',{
        lineHeight:'20px',
        fontWeight:'600'
      }],
      'n-small':['17px',{
        lineHeight:'20px',
        fontWeight:'400'
      }],
    },
   
    extend: {},
  },
  plugins: [],
}