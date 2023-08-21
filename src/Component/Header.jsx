import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { useEffect } from "react"

const Header = () => {
     const {t,i18n}=useTranslation()
     const changL=(e)=>{
       i18n.changeLanguage(e.target.value)
     }
     useEffect(()=>{
      for(let i=0;i<document.getElementsByClassName('lang').length;i++){
        const element=document.getElementsByClassName('lang')[i]
        console.log(element)
        if(element.value===i18n.language){
          element.setAttribute('selected','true')
        }
       
      }
     },[])


  return (
    <nav className="flex justify-between items-center">
        <Link to='/'>
          <img className="sm:hidden h-[28px]" src="/public/assets/diatome-logo-symbole-05.png" alt='logo'/> 
          <img  className="hidden sm:inline-block   h-[18px] w-[124px]" src="/public/assets/diatome-logo-wordmark-01.png" alt='logo'/>
        </Link>
        <div className="sm:flex items-center hidden">
           <div className="ml-5 text-n-bold">
             <Link className="nav-link">{t('Header.link1')}</Link>
             <Link className=" nav-link mx-3 ">{t('Header.link2')}</Link>
            </div>
            <select className="text-n-bold form-select appearance-none pl-4 border-none focus:outline-none cursor-pointer bg-no-repeat" onChange={changL} >
              <option className="lang" value='en'>en</option>
              <option className="lang" value='fr'>fr</option>
           </select>
           <button className=" h-[56px] py-[16px] px-[26px] rounded-[50px] bg-[#F0FF1E] text-n-bold">{t('Header.btn-header')}</button>
         </div>
          <button className=" sm:hidden h-[56px] py-[16px] px-[26px] rounded-[50px] bg-[#F0FF1E] text-n-bold">{t('Header.btn-header')}</button>
          <img className="sm:hidden" src="/public/assets/burger.png" alt="menuMobil"/>
    
    </nav>
  )
}

export default Header
