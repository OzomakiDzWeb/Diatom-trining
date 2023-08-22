import { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { context } from '../context/AppContext'

const Footer = () => {
  const {setShowDomendFoem,setShowNavMobil }=useContext(context)
      const {t}=useTranslation()
  return (
    <div className='bg-primary flex flex-col items-center py-5'>
     <img className='w-[153px] h-[22px]' src='/public/assets/diatome-logo-wordmark-01.png' alt='logo'/>
     <ul className='flex flex-col md:flex-row  text-center justify-between mt-10 text-h6 w-[80%]'>
        <li> 
          <Link to='/'  
             className=" nav-link">
              {t('Header.home')}
            </Link>
         </li>
        <li> 
           <Link to='/wiewe-exist' 
              className=" nav-link">
              {t('Header.link1')}
            </Link>
         </li>
        <li>
          <Link to='/howit-work' 
                 onClick={() => setShowNavMobil(false)}
                 className=" nav-link">
              {t('Header.link2')}
         </Link>
         </li>
        <li>
          <Link to='' className=" nav-link">
            FAQs
          </Link>
        </li>
        <li>
          <Link to='/privacy-police' className=" nav-link">
            {t('form1.policy')}
          </Link>
          </li>
        <li>
          <Link 
            onClick={() => setShowDomendFoem(true)} className=" nav-link">
              Contact
          </Link>
          </li>
      </ul>
      <Link to='' className='my-5'>
         <img src='/public/assets/LinkedIN_black.png' alt='likIndIcon'/>
      </Link>
      <div>
        {t('footer.drio')}
      </div>
    </div>
  )
}

export default Footer