import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { useEffect } from "react"

const Nav = () => {
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
    <nav className=" text-typg bg-slate-950 text-white flex justify-between mx-5">
     <div>
     <Link >i18</Link>
     <Link className="ml-3" to='/'>{t("title")}</Link>
     <Link className="ml-3" to='/contact'>Countact</Link>
     </div>
     <select onChange={changL} className=" bg-slate-950 text-white">
          <option className="lang" value='en'>en</option>
          <option className="lang" value='fr'>fr</option>
          <option className="lang" value='ar'>ar</option>
     </select>
    </nav>
  )
}

export default Nav