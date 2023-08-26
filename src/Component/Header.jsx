import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { useContext, useEffect } from "react"
import { context } from "../context/AppContext"

const Header = () => {
     const {t,i18n}=useTranslation()
     useEffect(()=>{
      for(let i=0;i<document.getElementsByClassName('lang').length;i++){
        const element=document.getElementsByClassName('lang')[i]
        console.log(element)
        if(element.value===i18n.language){
          element.setAttribute('selected','true')
        }}},[])

    const {setShowDomendFoem,changL,setShowNavMobil} = useContext(context)
  return (
    <nav className="flex justify-between items-center  lg:mx-[80px] px-[6px] lg:mt-6">
      <div className=" flex justify-between items-center ">
         <Link to='/'>
          <img className="sm:hidden h-[28px]" src="/public/assets/diatome-logo-symbole-05.png" alt='logo'/> 
          <img  className="hidden sm:inline-block   h-[18px] " src="/public/assets/diatome-logo-wordmark-01.png" alt='logo'/>
         </Link>
         <div className="hidden text-nav-caps sm:flex justify-between ml-4 ">
          <Link to='/wiewe-exist' className="nav-link ">{t('Header.link1')}</Link>
          <Link to='/howit-work' className=" nav-link  ml-4  ">{t('Header.link2')}</Link>
         </div>
      </div>
        <div className="sm:flex justify-between items-center  hidden">
           <select className="text-typg form-select appearance-none pl-4 border-none focus:outline-none cursor-pointer bg-no-repeat" onChange={changL} >
              <option className="lang" value='en'>en</option>
              <option className="lang" value='fr'>fr</option>
           </select>
           <button onClick={()=>setShowDomendFoem(true)} className=" h-[56px] py-[16px] px-[26px] rounded-[50px] bg-[#F0FF1E] text-typg">{t('Header.btn-header')}</button>
        </div>
        <button onClick={()=>setShowDomendFoem(true)} className=" sm:hidden h-[56px] py-[16px] px-[26px] rounded-[50px] bg-[#F0FF1E] text-typg">{t('Header.btn-header')}</button>
        <img onClick={()=>setShowNavMobil(true)} className="sm:hidden cursor-pointer" src="/public/assets/burger.png" alt="menuMobil"/>
    </nav>
  )
}

export default Header
