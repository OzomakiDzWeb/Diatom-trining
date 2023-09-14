import { useContext,useEffect,useRef, useState } from "react"
import {sliderArr} from '/src/constans/slidHom'
import { useTranslation } from "react-i18next"
import { context } from "../context/AppContext"
import {motion} from 'framer-motion'
import CurselComponent from "../Component/CurselComponent"
import AboneComponent from "../Component/AboneComponent"
import SliderCercle from "../Component/SliderCercle"

const Home = () => {
  const {setShowDomendFoem}=useContext(context)
  const {t}=useTranslation()
  const carselRef=useRef()
  const [witdth,setwidth]=useState(0)

useEffect(()=>{
setwidth(carselRef.current.scrollWidth-carselRef.current.offsetWidth)
},[])

  return (
  <div>
    <section className="flex flex-col  sm:flex-row justify-between gap-2 items-center py-[16px] mx-5 lg:mx-[80px] ">
      <div className="text-left flex flex-col justify-around sm:w-[50%]">
        <div className="inline text-mobil-h1 md:text-tit-h1 lg:text-tit-h1  my-4">{t('home.title1')} <p className="text-primary inline">{t('home.span')}</p> {t('home.title2')}
         </div>
           <div className="text-mobil-p lg:text-subtitl-h5 my-4">
            {t('home.p')}
         </div>
        <button onClick={()=>setShowDomendFoem(true)} className=' hover:bg-primary transition-all mt-4 py-[24px] px-[10px] w-fit  sm:px-[26px] sm:py-[16px] bg-black text-white rounded-full'>{t('form1.title')}</button>
      </div>
      <img className=" my-5 sm:my-0  rounded-[60px]" src="/public/assets/DTS_AgustinFarias_community-24.png" alt="imghome"/>
      </section>
        <ul className="bg-gray-extrai hidden sm:flex  justify-around ">
          <li><img src="/public/assets/Logo1.svg"/></li>
          <li><img src="/public/assets/Logo2.svg"/></li>
          <li><img src="/public/assets/Logo3.svg"/></li>
          <li><img src="/public/assets/Logo4.svg"/></li>
        </ul>
      
      {/* slider cercle */}

      <section className="flex flex-col sm:flex-row justify-between items-center my-10 bg-gray-extrai py-10 gap-10 ">
      <SliderCercle/>
      <div className="w-[100%] sm:w-[60%] order-first sm:order-1 px-4">
        <h1 className="text-mobil-h2 md:text-tit-h2">{t('sliderCercle.title1')}</h1>
        <h2 className="text-mobil-h3 md:text-subtitl-h4 my-4">“An amazing service”</h2>
        <p className="text-mobil-p md:text-subtitl-h5 text-gray-darck">Lorem ipsum dolor sit amet consectetur adipiscing elit ultrices scelerisque mi sed interdum lacus tellus in mi orc, netus nisl laoreet phasellus. Pellentesque non nunc placerat mi quis vitae cursus ornare.</p>
        <p className="text-mobil-p-sm-bold md:text-p-main mt-4">John Carter</p>
        <p className="text-mobil-p md:text-subtitl-h5 text-gray-darck mb-5 ">CTO at Hugo Boss</p>
      </div>
      </section>
       
       {/* section2 */}

      <section className="mt-4  flex flex-col md:flex-row items-center justify-between relative py-[16px] lg:mx-[80px] px-[6px]">
         <div className="text-center lg:text-start lg:w-[150%] z-50 mx-5">
          <h1 className="text-mobil-h2 lg:text-tit-h2">{t('section2.title')}</h1>
          <p className="text-mobil-p sm:text-mobil-p md:text-subtitl-h5 mt-3  text-gray-darck">{t('section2.p')}</p>
         </div>
         <div className="flex flex-col sm:flex-row gap-5 p-5 z-20 " >
          <div className="flex flex-col items-end gap-5 ">
            <div className="bg-third p-10 rounded-[50px] grow hover:shadow-2xl transition cursor-pointer">
              <h1 className="text-mobil-h3 sm:text-mobil- md:text-subtitl-h4">{t('section2.div1.title')}</h1>
              <p className=" text-gray-darck md:text-p-main">{t('section2.div1.p')}</p>
            </div>
            <div className="bg-[#4AAEC3] p-10 rounded-[50px] h-fit hover:shadow-2xl transition cursor-pointer">
              <h1 className="text-mobil-h3 sm:text-mobil-h3 md:text-subtitl-h4">{t('section2.div3.title')}</h1>
              <p className=" text-gray-darck md:text-p-main">{t('section2.div3.p')}</p>
           </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="bg-fifth p-10 rounded-[50px]  h-fit hover:shadow-2xl transition cursor-pointer">
              <h1 className="text-mobil-h3 sm:text-mobil-h3 md:text-subtitl-h4">{t('section2.div2.title')}</h1>
              <p className=" text-gray-darck md:text-p-main">{t('section2.div2.p')}</p>
            </div>
            <div className="bg-primary p-10 rounded-[50px] hover:shadow-2xl transition cursor-pointer">
              <h1 className="text-mobil-h3 sm:text-mobil-h3 md:text-subtitl-h4">{t('section2.div4.title')}</h1>
              <p className=" text-gray-darck md:text-p-main">{t('section2.div4.p')}</p>
            </div>
            </div>
          </div>
        <img className="absolute bottom-0 -left-[200px] hidden lg:block   " src="/public/assets/diatome-filet-violet-02.png" alt="diomt"/>
         <img className="absolute top-0  -right-[100px] hidden lg:block -rotate-6" src="/public/assets/Vector.png" alt="vector"/>
      </section>

      {/* section 3 */}
      
      <section>
        <div className="text-center mb-10 px-[6px] mx-5">
          <h1 className="text-mobil-h2 lg:text-tit-h2">{t('sectionTitle.title')}</h1>
          <p className=" sm:w-[50%] mx-auto text-mobil-p lg:text-p-main text-gray-darck">{t('sectionTitle.p')}</p>
        </div>
        <motion.div ref={carselRef} className="crsel">
          <motion.div drag='x' dragConstraints={{right:0,left:-witdth}}  className="iner-cursel z flex flex-col sm:flex-row cursor-grab">
            {sliderArr.map((itm,idx)=>(
              <motion.div key={idx}>
              <CurselComponent {...itm}/>
                </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>
       {/* section4 */}
      <div> 
        <AboneComponent/>
      </div>
  </div>
  )
}

export default Home