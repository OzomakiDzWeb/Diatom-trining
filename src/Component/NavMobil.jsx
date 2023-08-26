import  { useContext } from 'react'
import { Link } from 'react-router-dom'
import { context } from '../context/AppContext'
import { useTranslation } from 'react-i18next'

const NavMobil = () => {
      const {setShowDomendFoem,shoNavMobil,setShowNavMobil ,changL}=useContext(context)
      const {t}=useTranslation()
      
      
  return (
    <div className={`w-[100vw] h-[100vh] bg-scond absolute top-0 ${shoNavMobil?'block':'hidden'}`}>
     <div className='flex justify-end z-10 relative'>
       <img 
         onClick={()=>setShowNavMobil(false)} 
         className='h-[71px] cursor-pointer' 
         src='/public/assets/Plus.png' alt='close'/>
     </div>
     <div 
           className="flex flex-col items-center justify-around text-typg h-[70%] relative z-40 ">
           <Link to='/'  
           onClick={()=>setShowNavMobil(false)} 
           className=" nav-link">
              {t('Header.home')}
         </Link>
           <Link to='/wiewe-exist' 
           onClick={()=>setShowNavMobil(false)} 
           className=" nav-link">
              {t('Header.link1')}
         </Link>
           <Link to='/howit-work' 
           onClick={()=>setShowNavMobil(false)}
           className=" nav-link mx-3 ">
              {t('Header.link2')}
         </Link>
         <select className="text-typg  bg-scond form-select appearance-none pl-4 border-none focus:outline-none cursor-pointer bg-no-repeat" onChange={changL} >
                  <option className="lang" value='en'>en</option>
                  <option className="lang" value='fr'>fr</option>
         </select>
         <button onClick={()=>{
                   setShowNavMobil(false)
                   setShowDomendFoem(true)}} 
                   className=" h-[56px] py-[16px] px-[26px] rounded-[50px] bg-black text-typg text-white">{t('Header.btn-header')}</button>
     </div>
          <img className='-z-0 absolute -top-6 -right-10 w-[312px] h-[217px]' src='/public/assets/asset top.png' alt='img'/>
          <img className='absolute left-[25%]' src='/public/assets/asset bottom.png' alt='img'/>   
    </div>
  )
}

export default NavMobil