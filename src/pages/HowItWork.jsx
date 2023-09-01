import React, { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Accordion from '../Component/Accordion'
import { Link } from 'react-router-dom'
import Aco from '../Component/Aco'

const HowItWork = () => {
  const faqs = [
    {
      title: "How can your solution be integrated into our e-commerce site?",
      text: "Our implementation team will need only a few days to configure your solutions, while we provide you the tools you can adapt the look and feel based on your brand guidelines completely coding-free. Our solution is completely transparent to your clients.",
      number: '01'
    },
    {
      title: "What level of control do brands have over resold products?",
      text: "You can specify the items and/or conditions under which customers can resell your products on your site. We can assist you in the approval and vetting of products before they are listed publicly.",
      number: '02',
    },
    {
      title: "Who determines the resale price?",
      text: "The resale price is set by your customer. As a brand, you establish the maximum and minimum price range and suggest an optimal resale price for each item.",
      number: '03',
    },
    {
      title: "Who is responsible for shipping?",
      text: "Diatome partners with a courier provider. Once an online sale is completed, the reseller receives a paperless shipping label and sends the item directly to the buyer's specified address.",
      number: '04'
    },
    {
      title: "What security measures are in place for the buyer post-purchase?",
      text: "Each item listed for resale is reviewed and vetted by a moderator. In the rare event of a dispute, a buyer can reach out to customer support for assistance. Please note that no warranty or returns are allowed after the purchase of a product.",
      number: '05',
    },
    {
      title: "How is a customer compensated once an item is sold?",
      text: "Diatome sends a voucher, equal to the selling price of the resold item, via email to the reseller. Once the item is confirmed as received by the buyer, the reseller can then use this credit on your e-commerce site.",
      number: '06',
    },
  
  ]






const {t}=useTranslation()

  return (
    <div className='my-6'>
      <header className=' bg-hero-top bg-cover bg-center h-[calc(100vh-100px)] flex justify-center sm:justify-start  items-end'>
        <div className='text-h1-pages-mobile w-[80%] sm:w-[40%] sm:ml-10 text-center sm:text-mobil-h1 rounded-[50px] flex flex-col rounded-bl-none rounded-br-none p-8 pb-0 bg-white absolute  '><span>End-to-End</span> <span>Resale Solution</span></div>
      </header>
      {/* section1 */}
      <section>
        <div className='text-center mt-12'>
          <h1 className='text-mobil-h3 sm:text-tit-h3 tracking-[2px]'>Key features</h1>
          <p className='sm:w-[50%] mx-auto text-mobil-p sm:text-p-main my-4 text-gray-darck'>Our solution lets you launch your resale program in just a few weeks. With minimal technical effort, it seamlessly integrates into your existing stack.</p>
        </div>
        <div className='flex flex-col gap-4'>
          <div className='relative flex flex-col sm:flex-row  gap-3 justify-center'>
          <img className='sm:block hidden absolute sm:-top-[100px] md:-top-[150px] left-0' src='/public/assets/line left.svg' alt='left'/>
             <div className='bg-third p-10 rounded-[50px] sm:w-[30%] hover:shadow-2xl transition z-10'>
              <h1 className='text-tit-h3 sm:text-subtitl-h4'>Full-on support. </h1>
              <p className='mt-4 text-mobil-p text-gray-darck'>We can manage everything, from approving listings to resolving disputes.</p>
            </div>
             <div className='bg-fifth p-10 rounded-[50px] sm:w-[30%] hover:shadow-2xl transition  z-10'>
              <h1 className='text-tit-h3 sm:text-subtitl-h4'>Full-on support. </h1>
              <p className='mt-4 text-mobil-p text-gray-darck'>We can manage everything, from approving listings to resolving disputes.</p>
            </div>
            <img className='sm:block hidden absolute right-0 sm:-top-[40px] md:-top-[90px]' src='/public/assets/line right.svg' alt='left'/>
          </div>
          <div className='flex sm:flex-row flex-col gap-3 sm:px-10'>
            <div className='bg-scond p-10 rounded-[50px] hover:shadow-2xl transition'>
              <h1 className='text-tit-h3 sm:text-subtitl-h4'>Full-on support. </h1>
              <p className='mt-4 text-mobil-p text-gray-darck'>We can manage everything, from approving listings to resolving disputes.</p>
            </div>
            <div className='bg-fourth p-10 rounded-[50px] hover:shadow-2xl transition'>
              <h1 className='text-tit-h3 sm:text-subtitl-h4'>Headless technology! </h1>
              <p className='mt-4 text-mobil-p text-gray-darck'>This means you can introduce the resale channel on your website without any backend work.</p>
            </div>
            <div className='bg-primary p-10 rounded-[50px] hover:shadow-2xl transition'>
              <h1 className='text-tit-h3 sm:text-subtitl-h4'>Full-on support. </h1>
              <p className='mt-4 text-mobil-p text-gray-darck'>We can manage everything, from approving listings to resolving disputes.</p>
            </div>
          </div>
        </div>
      </section>
      {/* slider */}
       {/* section2 */}
       <section className='bg-white text-gray-darck my-12  flex flex-col sm:grid grid-cols-3 sm:p-20 gap-10'>
        <div>
          <h1 className='text-mobil-h2 sm:text-typg text-sporting'>{t('section2-p-2.div1.title')}</h1>
          <p className='text-mobil-p sm:text-p-main mt-4'>{t('section2-p-2.div1.p')}</p>
        </div>
        <div>
          <h1 className='text-mobil-h2 sm:text-typg text-sporting'>{t('section2-p-2.div2.title')}</h1>
          <p className='text-mobil-p sm:text-p-main mt-4'>{t('section2-p-2.div2.p')}</p>
        </div>
        <div>
          <h1 className='text-mobil-h2 sm:text-typg text-sporting'>{t('section2-p-2.div3.title')}</h1>
          <p className='text-mobil-p sm:text-p-main mt-4'>{t('section2-p-2.div3.p')}</p>
        </div>
       </section>
       {/* according */}
       <section className='relative overflow-hidden flex flex-col sm:flex-row w-full gap-5 py-12  justify-between'>
        <div className=' flex flex-col items-center w-full   '>
           <div className='text-center sm:text-left  '>
             <h1 className='text-mobil-h2 sm:text-tit-h3 flex flex-col mb-10 '>
                <div>Frequently asked </div>
                <div>question</div>
              </h1>
             <Link className='bg-black  py-[16px] px-[26px] rounded-[50px] text-white '>book Call</Link>
           </div>
        </div>
          <main className="relative px-4 pb-10 flex flex-col justify-center bg-slate-50 overflow-hidden">
            <div className="divide-y divide-[#9CA2A4]">
                {faqs.map((faq, index) => (
                 <Aco key={index} title={faq.title} p={faq.text} number={faq.number}>
                  {faq.text}
                </Aco>
                   ))}
           </div>
           </main>
           <img className='absolute -bottom-10 right-0 rotate-[30deg] sm:block hidden' src='/public/assets/9.svg' alt='svg'/>
           <img className='absolute top-[50%] w-[30%] sm:block hidden' src='/public/assets/10.svg' alt='svg'/>
        </section>
        {/* section  */}
        <section className='flex flex-col justify-center md:px-[200px] sm:py-[30px]  items-center bg-gray-extrai'>
          <div className='text-mobil-h2 sm:text-subtitl-h4  text-center'>Abonnez-vous à notre newsletter</div>
          <p className='text-mobil-p text-gray-darck block text-center sm:hidden'>Recevez les dernières tendances de l'économie circulaire et bien plus encore.</p>
          <div className='flex flex-col md:flex-row justify-center  mt-5 w-full'>
        <input className=' px-2 py-3 rounded-[30px] focus:outline-none ' type='email' placeholder={t('subscrub.placholder')}/>
        <button className='flex  items-center justify-center bg-black rounded-[30px] px-10 py-3 mt-2 sm:mt-0 md:-ml-10 text-nav-small text-white'>{t('subscrub.button')}<img className='ml-2' src='/public/assets/Vector 1.svg'/>
        </button>
      </div>
        </section>
    </div>
  )
}

export default HowItWork
