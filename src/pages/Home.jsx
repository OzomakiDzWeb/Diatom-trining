import { useContext,useEffect,useRef, useState } from "react"
import {sliderArr} from '/src/constans/slidHom'
import { useTranslation } from "react-i18next"
import { context } from "../context/AppContext"
import {motion} from 'framer-motion'
import CurselComponent from "../Component/CurselComponent"
import AboneComponent from "../Component/AboneComponent"


const Home = () => {
  const {setShowDomendFoem}=useContext(context)
  const {t}=useTranslation()
const carselRef=useRef()
const [witdth,setwidth]=useState(0)
useEffect(()=>{
  console.log(carselRef.current.scrollWidth)
  console.log(carselRef.current.offsetWidth)
  setwidth(carselRef.current.scrollWidth-carselRef.current.offsetWidth)
},[])


  return (
  <div>
    <section className="flex flex-col  sm:flex-row justify-between gap-2 items-center py-[16px] lg:mx-[80px] px-[6px]">
      <div className="text-left flex flex-col justify-around sm:w-[50%]">
        <div className="inline text-mobil-h1 md:text-tit-h1 lg:text-tit-h1  my-4">{t('home.title1')} <p className="text-primary inline">{t('home.span')}</p> {t('home.title2')}
         </div>
         <div className="text-mobil-p lg:text-subtitl-h5 my-4">
           {t('home.p')}
         </div>
        <button onClick={()=>setShowDomendFoem(true)} className=' hover:bg-primary transition-all mt-4 py-[24px] px-[10px] w-[50%]  sm:px-[26px] sm:py-[16px] bg-black text-white rounded-full'>{t('form1.title')}</button>
      </div>
      <img className=" my-5 sm:my-0  rounded-[60px]" src="/public/assets/DTS_AgustinFarias_community-24.png" alt="imghome"/>
      </section>
      {/* section2 */}
      <section className="mt-4 flex flex-col md:flex-row items-center justify-between relative py-[16px] lg:mx-[80px] px-[6px]">
         <div className="text-center lg:text-start lg:w-[150%] ">
          <h1 className="text-mobil-h2 lg:text-tit-h2">{t('section2.title')}</h1>
          <p className="text-mobil-p lg:text-p-main text-gray-darck">{t('section2.p')}</p>
         </div>
         <div className="flex flex-col sm:flex-row gap-5 p-5 z-20 " >
          <div className="flex flex-col items-end gap-5 ">
            <div className="bg-third p-10 rounded-[50px] grow hover:shadow-2xl transition cursor-pointer">
              <h1 className="text-mobil-h3 sm:text-subtitl-h4">{t('section2.div1.title')}</h1>
              <p className=" text-gray-darck">{t('section2.div1.p')}</p>
            </div>
            <div className="bg-[#4AAEC3] p-10 rounded-[50px] h-fit hover:shadow-2xl transition cursor-pointer">
              <h1 className="text-mobil-h3 sm:text-subtitl-h4">{t('section2.div3.title')}</h1>
              <p className=" text-gray-darck">{t('section2.div3.p')}</p>
           </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="bg-fifth p-10 rounded-[50px]  h-fit hover:shadow-2xl transition cursor-pointer">
              <h1 className="text-mobil-h3 sm:text-subtitl-h4">{t('section2.div2.title')}</h1>
              <p className=" text-gray-darck">{t('section2.div2.p')}</p>
            </div>
            <div className="bg-primary p-10 rounded-[50px] hover:shadow-2xl transition cursor-pointer">
              <h1 className="text-mobil-h3 sm:text-subtitl-h4">{t('section2.div4.title')}</h1>
              <p className=" text-gray-darck">{t('section2.div4.p')}</p>
            </div>
            </div>
          </div>

         <img className="absolute bottom-0 -left-[200px] hidden lg:block   " src="/public/assets/diatome-filet-violet-02.png" alt="diomt"/>
         <img className="absolute top-0  -right-[100px] hidden lg:block -rotate-6" src="/public/assets/Vector.png" alt="vector"/>
      </section>
      {/* section 3 */}
      <section>
        <div className="text-center mb-10">
          <h1 className="text-mobil-h2 lg:text-tit-h2">Why should you launch P2P resale now?</h1>
          <p className=" sm:w-[50%] mx-auto text-mobil-p lg:text-p-main text-gray-darck">Resale is an excellent entry point for brands to join this circular journey. It s easy to launch and offers immediate learning opportunities!</p>
        </div>
        <motion.div ref={carselRef} className="crsel">
          <motion.div drag='x' dragConstraints={{right:0,left:-witdth}} className="iner-cursel z flex flex-col sm:flex-row cursor-grab">
            {sliderArr.map((itm,idx)=>(
              <motion.div key={idx}>
              <CurselComponent {...itm}/>
                </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>
      <AboneComponent/>
  </div>
  )
}

export default Home