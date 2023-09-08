/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      'primary':'#9B92F8',
      'scond':'#F0FF1E',
      'third':'#9AD3E0',
      'fourth':'#4EADC3',
      'fifth':'#FA9F76',
      'sporting':'#4AAEC3',
      'white':'#F6F5F4',
      'black':'#071C25',
      'darkBleu':'#282938',
      'gray-darck':'#505658',
      'gray-lghit':'#9CA2A4',
      'gray-extrai':'#DDE3E6',
      },
     fontSize:{
      'tit-h1':['65px',{
        lineHeight:'71.5px',
        fontWeight:'400'
      }],
      'tit-h2':['56px',{
        lineHeight:'61.6px',
        fontWeight:'400'
      }],
       'tit-h3':['40px',{
        lineHeight:'46.64px',
        fontWeight:'400'
      }],
      'mobil-h1':['40px',{
        lineHeight:'45.6px',
        fontWeight:'400'
      }],
       'mobil-h2':['32px',{
        lineHeight:'37.31px',
        fontWeight:'400'
      }],
       'mobil-h3':['24px',{
        lineHeight:'28.8px',
        fontWeight:'400'
      }],
       'mobil-p':['18px',{
        lineHeight:'25.2px',
        fontWeight:'400'
      }],
      'mobil-p-sm-bold':['18px',{
        lineHeight:'23.4px',
        fontWeight:'600'
      }],
      'subtitl-h5':['24px',{
        lineHeight:'33.6px',
        fontWeight:'400'
      }],
      'subtitl-h4':['30px',{
        lineHeight:'36px',
        fontWeight:'400'
      }],
      'p-main':['20px',{
        lineHeight:'29px',
        fontWeight:'400'
      }],
       'typg':['26px',{
        lineHeight:'30px',
        fontWeight:'700'
      }],
      'nav-caps':['17px',{
        lineHeight:'20px',
        fontWeight:'600'
      }],
       'nav-small':['17px',{
        lineHeight:'20px',
        fontWeight:'400'
      }],
      'h1-pages-mobile':['36px',{
        lineHeight:'41.04px',
        fontWeight:'400'
      }],
     
    },
   
    extend: {
      backgroundImage: {
        'hero-top': "url('/public/assets/img.png')",
        'heder-whi-exist': "url('/public/assets/Death_to_Stock_Photography_JejuIsland2_1.png')",
        'hero-policy':"url('/public/assets/DeathtoStock_CookingTogether-02.png')"
      }
    },
  plugins: [],
}
}