import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { context } from '../context/AppContext'
import { useContext } from 'react'

const Demendemo = () => {

  const {showDomendForm,setShowDomendFoem}=useContext(context)
  const {t}=useTranslation()

  return (
    <div className={`absolute bg-black/[0.4]  h-[100vh] top-0 w-full mx-auto ${showDomendForm?'block':'hidden'}`}>
      <form className='relative bg-third sm:bg-scond md:w-[65%] w-full h-screen mx-auto p-[10px] sm:px-[60px] overflow-y-auto overflow-x-hidden'>
         <div className='flex justify-end z-10 relative'>
          <img onClick={()=>setShowDomendFoem(false)} className='h-[71px] cursor-pointer' src='/public/assets/Plus.png' alt='close'/>
         </div>
        <div className='relative z-10 text-mobil-h2 sm:text-tit-h3 text-center'>{t('form1.title')}</div>
        <div className='flex flex-col sm:flex-row justify-between gap-[24px] my-4 relative z-10'>
          <input className=' inpt' placeholder={t('form1.name')} type='text' required />
          <input className=' inpt' placeholder='Email' type='text' required />
        </div>
        <div className='flex flex-col sm:flex-row justify-between gap-[24px] my-4'>
          <input className=' inpt' placeholder={t('form1.tel')} type='text' required />
          <input className=' inpt' placeholder={t('form1.company')} type='text' required />
        </div>
        <input className=' inpt my-4' placeholder={t('form1.qustion')} type='text' required />
        <textarea className=' inpt rounded-xl h-[142px] my-4'  placeholder={t('form1.qustion')} type='text' required/>
        
          <div className='flex  items-center'>
           <input className='w-[28px] ' type='checkbox' required/>
           <div className='text-n-small text-gray-darck ml-4'>{t('form1.chkbox1')}</div>
        </div>
        <div className='flex items-center mt-2'>
           <input className='w-[28px] -ml-1 ' type='checkbox' required/>
           <div className=' text-gray-darck  ml-4'>{t('form1.chkbox2')}<Link className='underline'>{t('form1.policy')}</Link></div>
        </div>
        <div className='text-center'>
          <button onClick={()=>setShowDomendFoem(true)} className='hover:bg-primary transition-all mt-4 w-full sm:w-[50%] px-[26px] py-[16px] bg-black text-white rounded-full'>{t('form1.title')}</button>
        </div>
        <img className='-z-0 absolute -top-6 -right-10 w-[312px] h-[217px]' src='/public/assets/asset top.png' alt='img'/>
        <img className='absolute left-[25%]' src='/public/assets/asset bottom.png' alt='img'/>      
      </form>
    </div>
  )
}

export default Demendemo