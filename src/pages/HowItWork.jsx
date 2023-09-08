import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import Aco from '../Component/According'
import {faqs} from '../constans/objAccording'

const HowItWork = () => {
 
const {t}=useTranslation()

  return (
    <div className='my-6'>
      <header className=' bg-hero-top bg-cover bg-center h-[calc(100vh-100px)] flex justify-center sm:justify-start  items-end'>
        <div className='text-h1-pages-mobile w-[80%] sm:w-[40%] sm:ml-10 text-center sm:text-mobil-h1 rounded-[50px] flex flex-col rounded-bl-none rounded-br-none p-8 pb-0 bg-white absolute  '> <span>{t('howItWork.ticket')}</span></div>
      </header>
      {/* section1 */}
      <section>
        <div className='text-center mt-12'>
          <h1 className='text-mobil-h3 sm:text-tit-h3 tracking-[2px]'>{t('howItWork.hederSection.title')}</h1>
          <p className='sm:w-[50%] mx-auto text-mobil-p sm:text-p-main my-4 text-gray-darck'>{t('howItWork.hederSection.p')}</p>
        </div>
        <div className='flex flex-col gap-4'>
          <div className='relative flex flex-col sm:flex-row  gap-3 justify-center'>
          <img className='sm:block hidden absolute sm:-top-[100px] md:-top-[150px] left-0' src='/public/assets/line left.svg' alt='left'/>
             <div className='bg-third p-10 rounded-[50px] sm:w-[30%] hover:shadow-2xl transition z-10'>
              <h1 className='text-tit-h3 sm:text-subtitl-h4'>{t('howItWork.div1.title')} </h1>
              <p className='mt-4 text-mobil-p text-gray-darck'>{t('howItWork.div1.p')}</p>
            </div>
             <div className='bg-fifth p-10 rounded-[50px] sm:w-[30%] hover:shadow-2xl transition  z-10'>
              <h1 className='text-tit-h3 sm:text-subtitl-h4'>{t('howItWork.div1.title')} </h1>
              <p className='mt-4 text-mobil-p text-gray-darck'>{t('howItWork.div1.p')}</p>
            </div>
            <img className='sm:block hidden absolute right-0 sm:-top-[40px] md:-top-[90px]' src='/public/assets/line right.svg' alt='left'/>
          </div>
          <div className='flex sm:flex-row flex-col gap-3 sm:px-10'>
            <div className='bg-scond p-10 rounded-[50px] hover:shadow-2xl transition'>
              <h1 className='text-tit-h3 sm:text-subtitl-h4'>{t('howItWork.div1.title')} </h1>
              <p className='mt-4 text-mobil-p text-gray-darck'>{t('howItWork.div1.p')}</p>
            </div>
            <div className='bg-fourth p-10 rounded-[50px] hover:shadow-2xl transition'>
              <h1 className='text-tit-h3 sm:text-subtitl-h4'>{t('howItWork.div1.title')} </h1>
              <p className='mt-4 text-mobil-p text-gray-darck'>{t('howItWork.div1.p')}</p>
            </div>
            <div className='bg-primary p-10 rounded-[50px] hover:shadow-2xl transition'>
              <h1 className='text-tit-h3 sm:text-subtitl-h4'>{t('howItWork.div1.title')} </h1>
              <p className='mt-4 text-mobil-p text-gray-darck'>{t('howItWork.div1.p')}</p>
            </div>
          </div>
        </div>
      </section>
       {/* section2 */}
       <section className='bg-white text-gray-darck my-12  flex flex-col sm:grid grid-cols-3 sm:p-20 gap-10'>
        <div>
          <h1 className='text-mobil-h2 sm:text-typg text-sporting'>{t('howItWork.section2-p-2.div1.title')}</h1>
          <p className='text-mobil-p sm:text-p-main mt-4'>{t('howItWork.section2-p-2.div1.p')}</p>
        </div>
        <div>
          <h1 className='text-mobil-h2 sm:text-typg text-sporting'>{t('howItWork.section2-p-2.div2.title')}</h1>
          <p className='text-mobil-p sm:text-p-main mt-4'>{t('howItWork.section2-p-2.div2.p')}</p>
        </div>
        <div>
          <h1 className='text-mobil-h2 sm:text-typg text-sporting'>{t('howItWork.section2-p-2.div3.title')}</h1>
          <p className='text-mobil-p sm:text-p-main mt-4'>{t('howItWork.section2-p-2.div3.p')}</p>
        </div>
       </section>
       {/* according */}
       <section className='relative overflow-hidden flex flex-col sm:flex-row w-full gap-5 py-12  justify-between'>
        <div className=' flex flex-col items-center w-full   '>
           <div className='text-center sm:text-left  '>
             <h1 className='text-mobil-h2 text-darkBleu sm:text-tit-h3 flex flex-col mb-10 '>
                <div>Frequently asked </div>
                <div>question</div>
              </h1>
             <Link className='bg-black  py-[16px] px-[26px] rounded-[50px] text-white '>book Call</Link>
              <img className='absolute w-[30%] -right-10 top-12 -rotate-[50deg] block sm:hidden ' src='/public/assets/9.svg' alt='svg'/>
           <img className='absolute  w-[30%] sm:hidden left-0 top-40 ' src='/public/assets/10.svg' alt='svg'/>
           </div>
        </div>
          <main className="relative px-4 pb-10 flex flex-col justify-center bg-slate-50 overflow-hidden">
            <div className="divide-y divide-[#9CA2A4]">
                {faqs.map((faq, index) => (
                 <Aco key={index} title={faq.title} p={faq.text} number={faq.number}/>
                   ))}
           </div>
           </main>
           <img className='absolute -bottom-10 right-0 rotate-[30deg] sm:block hidden' src='/public/assets/9.svg' alt='svg'/>
           <img className='absolute top-[50%] w-[30%] sm:block hidden' src='/public/assets/10.svg' alt='svg'/>
        </section>
        {/* section  */}
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

export default HowItWork
