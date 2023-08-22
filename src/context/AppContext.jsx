import { createContext, useState } from "react";
import { useTranslation } from "react-i18next";

export const context=createContext()

export const AppContext=(props)=>{
     const {i18n}=useTranslation()
  const [showDomendForm,setShowDomendFoem]=useState(false)
  const [shoNavMobil,setShowNavMobil]=useState(false)
   const changL=(e)=>{
       i18n.changeLanguage(e.target.value)
     }
     return(
          <context.Provider value={{
             showDomendForm,
             setShowDomendFoem,
             changL,
             shoNavMobil,setShowNavMobil}}>
          {props.children}
          </context.Provider>
     )
}