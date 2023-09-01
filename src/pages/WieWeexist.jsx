import React from 'react'
import { useTranslation } from 'react-i18next'

const WieWeexist = () => {
  const {t}=useTranslation()
  return (
    <div className=''>
     <header className='bg-heder-whi-exist  bg-cover bg-center h-[calc(100vh-200px)] flex justify-center sm:justify-start  items-end'>
        <div className='text-h1-pages-mobile w-[80%] sm:w-[40%] sm:ml-[20%] -mb-5 text-center sm:text-mobil-h1 rounded-[50px] flex flex-col rounded-bl-none rounded-br-none p-8 pb-0 bg-white absolute  '>Notre raison d'être</div>
      </header>
      <div className='flex gap-5 mt-10 mx-3'>
        <img className='md:block hidden -ml-3 w-[30%]' src='/public/assets/d.svg' alt='svg'/>
        <div className='grow'>
        <p className='text-p-main text-gray-darck mt-5'>Nous aimons la technologie ici chez Diatome, et nous avons aussi un grand rêve.</p>
        <p className='text-p-main text-gray-darck mt-5'>L industrie de la mode a une empreinte environnementale significative et nous voulons aider à changer cela. Adopter un modèle d'affaires circulaire peut aider les marques à relever ce défi, car il permet de maximiser la valeur de chaque pièce de vêtement pendant et après sa durée de vie. Et cela ne s'applique pas seulement à la mode, cela concerne toute marque vendant des biens durables ! </p>
        <p className='text-p-main text-gray-darck mt-5'>Cependant, orienter votre modèle d'affaires vers la durabilité peut sembler une tâche gigantesque. Cela peut être coûteux et prendre du temps. C'est pourquoi nous avons créé une technologie qui peut aider plus de marques à faire de l'économie circulaire une réalité !</p>
        <p className='text-mobil-p-sm-bold w-[80%] mx-auto text-center my-10  bg-sporting p-5 rounded-[50px] md:bg-transparent'>Notre technologie C2C est conçue pour être une étape abordable et pratique pour toute marque axée sur le commerce électronique qui souhaite faire le premier pas vers l'économie circulaire.</p>
        <p className='text-p-main text-gray-darck mt-5'>Notre solution ? Aider les marques, grandes et petites, à mettre en place leurs propres programmes de revente C2C dirigés par la marque qui s'intègrent facilement à leur offre de produits existante. Et il ne s'agit pas seulement d'être plus vert. Avec notre technologie, vous pouvez maintenir le contrôle sur la qualité de vos articles revendus, préservant ainsi la réputation solide de votre marque et la satisfaction de vos clients.</p>
        <p className='text-p-main text-gray-darck mt-5'>Nous ne sommes pas là pour bouleverser le monde du jour au lendemain, mais nous nous engageons à faire notre part pour rendre la mode plus durable, pas à pas. Ce n'est pas une course, mais un voyage et nous aimerions que vous vous joigniez à nous</p>
      </div>
       <img className='md:block hidden -mr-3 w-[30%]' src='/public/assets/g.svg' alt='svg'/>
      </div>
      <section className='flex flex-col justify-center md:px-[200px] mt-5 sm:py-[30px]  items-center bg-gray-extrai'>
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

export default WieWeexist