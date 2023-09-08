import React from 'react'
import { useTranslation } from 'react-i18next'

const AboneComponent = () => {
  const {t}=useTranslation()
  return (
    <div className=' bg-scond flex justify-between items-center py-5 sm:py-0  px-10 my-10 rounded-[60px]'>
      <div className='text-center sm:text-left '>
        <h1 className='text-mobil-h2  sm:text-mobil-h3 md:text-tit-h3'>{t('subscrub.title')}</h1>
         <p className=' text-mobil-p sm:text-p-main my-5 text-gray-darck'>{t('subscrub.p')}</p>
         <div className='flex flex-col sm:flex-row w-full '>
            <input className='w-full px-2 py-3 rounded-[30px] focus:outline-none' type='email' placeholder={t('subscrub.placholder')}/>
            <button className='flex  items-center justify-center bg-black rounded-[30px] px-10 py-3 mt-2 sm:mt-0 sm:-ml-10 text-nav-small text-white'>{t('subscrub.button')}<img className='ml-2' src='/public/assets/Vector 1.svg'/>
            </button>
         </div>
      </div>
    <div className='h-full hidden sm:block' >
        <img src='/public/assets/Vector.svg' alt='atomImg'/>
    </div>
    </div>
  )
}

export default AboneComponent