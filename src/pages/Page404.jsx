import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router'


const Page404 = () => {
  const navigat=useNavigate()
  const {t}=useTranslation()
  return (
    <div className='flex flex-col  justify-center items-center py-5'>
       <div>
        <img src='/public/assets/404.svg'alt=''/>
       </div>
       <h2 className='text-mobil-h2 sm:text-tit-h2 text-[#1B2534]'>{t('404.title')}</h2>
      <p className='text-mobil-p text-gray-darck text-center py-5'>{t('404.p')}</p>
       <button onClick={()=>navigat('/') } className='flex cursor-pointer  items-center justify-center bg-black rounded-[30px] px-10 py-3 mt-2 sm:mt-0 sm:-ml-10 text-nav-small text-white'>{t('404.button')}<img className='ml-2' src='/public/assets/Vector 1.svg'/>
      </button>
            
    </div>
  )
}

export default Page404