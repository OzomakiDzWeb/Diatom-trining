import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const CurselComponent = ({title,p,img}) => {
  const {t}=useTranslation()
  console.log(Object.values(img)[0])
  return (
     <div className="flex items-center flex-col sm:flex-row gap-12 relative w-[100vw] px-5 sm:px-0">
        <img className="rounded-[50px] h-[431px] md:h-[440px] lg:h-[629px] -z-10 sm:ml-12  w-[438px] md:w-[342px] lg:w-[609px]" src={Object.values(img)[0]} alt="imgSlid"/>
         <div className="z-20  " >
            <h1 className="text-mobil-h3 lg:text-tit-h3 my-3">{t(title)}</h1>
            <p className="text-p text-gray-darck mb-3">{t(p)}</p>
            <Link className="flex text-gray-darck text-mobil-p-sm-bold underline linkSlider mb-5">
              {t('homeSlider.button')}
              <img className="" src="/public/assets/Arrow Right.png" alt="arow"/>
            </Link>
         </div>
         <div className="bg-fourth absolute h-[300px] -z-20 w-full hidden sm:block"></div>
      </div>
  )
}

export default CurselComponent