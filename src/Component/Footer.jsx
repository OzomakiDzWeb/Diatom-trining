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
     <ul className='flex flex-col  w-full sm:flex-row  text-center justify-around mt-10 text-nav-small '>
        <li className='mt-5 sm:mt-0'> 
          <Link to='/'  
             className=" nav-link sm:text-nav-small w-fit px-1">
              {t('Header.home')}
            </Link>
         </li>
        <li className='mt-5 sm:mt-0'> 
           <Link to='/wiewe-exist' 
              className=" nav-link sm:text-nav-small w-fit px-1">
              {t('Header.link1')}
            </Link>
         </li>
        <li className='mt-5 sm:mt-0'>
          <Link to='/howit-work' 
                 onClick={() => setShowNavMobil(false)}
                 className=" nav-link sm:text-nav-small w-fit px-1">
              {t('Header.link2')}
         </Link>
         </li>
        <li className='mt-5 sm:mt-0'>
          <Link to='' className=" nav-link sm:text-nav-small w-fit px-1">
            FAQs
          </Link>
        </li>
        <li className='mt-5 sm:mt-0'>
          <Link to='/privacy-police' className=" nav-link sm:text-nav-small w-fit px-1">
            {t('form1.policy')}
          </Link>
          </li>
        <li className='mt-5 sm:mt-0'>
          <Link 
            onClick={() => setShowDomendFoem(true)} className=" nav-link sm:text-nav-small w-fit px-1">
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