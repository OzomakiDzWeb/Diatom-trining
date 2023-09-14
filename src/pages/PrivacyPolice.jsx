import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const PrivacyPolice = () => {
  const {t}=useTranslation()
  return (
    <div className=''>
     <header className='bg-hero-policy  bg-cover bg-center h-[calc(100vh-200px)] flex justify-center sm:justify-start  items-end'>
        <div className='text-h1-pages-mobile sm:text-tit-h2 w-[80%] sm:w-[40%] sm:ml-[20%] -mb-5 text-center  rounded-[50px] flex flex-col rounded-bl-none rounded-br-none p-8 pb-0 bg-white absolute  '>Privacy Policy</div>
      </header>
      <div className='flex gap-5 mt-10 mx-3 text-gray-darck'>
        <div className='self-center'>
           <img className='md:block hidden -ml-3 ' src='/public/assets/leftpolyc.svg' alt='svg'/>
        </div>
          <div className='sm:basis-3/5'>
            <div>
              <h1 className='text-mobil-h3 sm:text-tit-h3 mt-10 mb-5'>1. Introduction</h1>
              <p className='text-mobil-p sm:text-p-main text-gray-darck'>Welcome to Diatome. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our service.</p>
            </div>
            <div>
              <h1 className='text-mobil-h3 sm:text-tit-h3 mt-10 mb-5'>2. Information We Collect</h1>
              <p className='text-mobil-p sm:text-p-main text-gray-darck'>We collect personal information when you register with us, or when you express an interest in obtaining information about us or our products and services.</p>
            </div>
            <div>
              <h1 className='text-mobil-h3 sm:text-tit-h3 mt-10 mb-5'>3. Use of Your Information</h1>
              <p className='text-mobil-p sm:text-p-main text-gray-darck'>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. We may use information collected about you via the Site to:</p>
                <ul className='ml-10 list-disc list-outside text-mobil-p mt-5 sm:text-p-main text-gray-darck'>
                  <li> Present tailored content,</li>
                  <li> Contact you regarding potential business opportunities,</li>
                  <li>Send personalized email sequences</li>
                </ul>
              </div>
              <div>
              <h1 className='text-mobil-h3 sm:text-tit-h3 mt-10 mb-5'>4. Sharing your information with 3rd parties</h1>
              <p className='text-mobil-p sm:text-p-main text-gray-darck'>We may share information we have collected about you in certain situations. Your information may be disclosed as follows:</p>
                <ul className='ml-10 list-disc list-outside text-mobil-p mt-5 sm:text-p-main text-gray-darck'>
                  <li> when you have given us your consent to share this information;</li>
                  <li> when we need to share this information with other involved service providers, especially with technical service providers to provide you with the service you have requested;</li>
                  <li>when we receive a request from a judicial authority or any administrative authority empowered by law, asking for the communication of this information under the legal provisions in force.</li>
                </ul>
              </div>
              <div>
              <h1 className='text-mobil-h3 sm:text-tit-h3 mt-10 mb-5'>5. Security of Your Information</h1>
              <p className='text-mobil-p sm:text-p-main text-gray-darck'>We use administrative, technical, and physical security measures to protect your personal information.</p>
              </div>
              <div>
               <h1 className='text-mobil-h3 sm:text-tit-h3 mt-10 mb-5'>6. GDPR Rights</h1>
               <p className='text-mobil-p sm:text-p-main text-gray-darck'>If you are a resident of the European Economic Area (EEA), you have certain data protection rights. In certain circumstances, you have the following data protection rights:</p>
                <ul className='ml-10 list-disc list-outside text-mobil-p mt-5 sm:text-p-main text-gray-darck'>
                  <li> The right to access, update or delete the information we have on you.</li>
                  <li> The right of rectification.</li>
                  <li>The right to object.</li>
                  <li>The right of restriction.</li>
                  <li>The right to data portability.</li>
                  <li>The right to withdraw consent.</li>
                </ul>
              </div>
              <div>
              <h1 className='text-mobil-h3 sm:text-tit-h3 mt-10 mb-5'>7. Contact Us</h1>
              <p className='text-mobil-p sm:text-p-main text-gray-darck'>If you have any questions or comments about this Privacy Policy, please contact us at <Link className='text-sporting'>contact@diatome.fr</Link> </p>
              </div>
              </div>
          <div className='mt-10'>
            <img className='md:block hidden -mr-3 ' src='/public/assets/policRght.png' alt='svg'/>
          </div>
      </div>
       <section className='flex flex-col justify-center md:px-[200px] py-[40px] mt-20  items-center bg-gray-extrai'>
          <div className='text-mobil-h2 sm:text-subtitl-h4  text-center'>{t('subscrub.title')}</div>
          <p className='text-mobil-p text-gray-darck block text-center sm:hidden'>{t('subscrub.p')}</p>
          <div className='   w-screen  flex flex-col md:flex-row justify-center  p-5  mt-5'>
                 <input className=' px-2 py-3 text-mobil-p rounded-[30px] md:w-[50%] focus:outline-none ' type='email' placeholder={t('subscrub.placholder')}/>
                 <button className='flex  items-center justify-center bg-black rounded-[30px] px-10 py-3 mt-2 md:mt-0 md:-ml-10 text-nav-small text-white'>{t('subscrub.button')}<img className='ml-2' src='/public/assets/Vector 1.svg'/>
             </button>
         </div>
        </section>
    </div>
  )
}

export default PrivacyPolice