import React from 'react'
import { useTranslation } from 'react-i18next'
import AboneComponent from '../Component/AboneComponent'

const WieWeexist = () => {
  const {t}=useTranslation()
  return (
    <div className=''>
     <header className='bg-heder-whi-exist  bg-cover bg-center h-[calc(100vh-200px)] flex justify-center sm:justify-start  items-end'>
        <div className='text-h1-pages-mobile sm:text-tit-h2 w-[80%] sm:w-[40%] sm:ml-[20%] -mb-5 text-center  rounded-[50px] flex flex-col rounded-bl-none rounded-br-none p-8 pb-0 bg-white absolute  '>{t('whyExist.ticket')}</div>
      </header>
      <div className='flex gap-5 my-10 mx-3'>
        <img className='md:block hidden -ml-3 w-[30%]' src='/public/assets/d.svg' alt='svg'/>
        <div className='grow'>
        <p className='text-p-main text-gray-darck mt-5'>{t('whyExist.p1')}</p>
        <p className='text-p-main text-gray-darck mt-5'>{t('whyExist.p2')}</p>
        <p className='text-p-main text-gray-darck mt-5'>{t('whyExist.p3')}</p>
        <p className='text-mobil-p-sm-bold w-[80%] mx-auto text-center text-gray-darck my-10  bg-sporting p-5 rounded-[50px] md:bg-transparent'>{t('whyExist.p4.p1')}<span className='text-fourth'>{t('whyExist.p4.span')}</span>{t('whyExist.p4.p2')}</p>
        <p className='text-p-main text-gray-darck mt-5'>{t("whyExist.p5")}</p>
        <p className='text-p-main text-gray-darck mt-5'>{t("whyExist.p6")}</p>
      </div>
       <img className='md:block hidden -mr-3 w-[30%]' src='/public/assets/g.svg' alt='svg'/>
      </div>
      <section className='flex flex-col justify-center md:px-[200px] sm:py-[30px]  items-center bg-gray-extrai'>
          <div className='text-mobil-h2 sm:text-subtitl-h4  text-center'>{t('subscrub.title')}</div>
          <p className='text-mobil-p text-gray-darck block text-center sm:hidden'>{t('subscrub.p')}</p>
          <div className='flex flex-col md:flex-row justify-around p-5  mt-5  min-w-full'>
        <input className=' px-2 py-3 text-mobil-p rounded-[30px] w-full focus:outline-none ' type='email' placeholder={t('subscrub.placholder')}/>
        <button className='flex  items-center justify-center bg-black rounded-[30px] px-10 py-3 mt-2 sm:mt-0 md:-ml-10 text-nav-small text-white'>{t('subscrub.button')}<img className='ml-2' src='/public/assets/Vector 1.svg'/>
        </button>
      </div>
        </section>
    </div>
  )
}

export default WieWeexist