import React, { useState } from 'react'


const SliderCercle = () => {
     
const [deg,setDeg]=useState({pertDeg:'',childDeg:''})
const content=(e)=>{
        switch (e) {
     case e=0:
          return '4'
     case e=90:
     return '1'
     
     case e=180:
     return '3'
     case e=270:
          return '2'
     default:
          return '4';
   }
}
     
  return (
    <div className='flex justify-between bg-gray-extrai w-full sm:w-[40%] '>
     <div style={{transform:`rotate(${deg.pertDeg}deg)`}} className={`  transition-all z-20 ease-in duration-100 rounded-full relative aspect-square w-[100%]  -ml-[30%]  flex  justify-center items-center`}>
          <div onClick={()=>setDeg({pertDeg:90,childDeg:-90})} 
               className='flex bg-white shadow  cursor-pointer z-20 ry absolute w-20 h-20 rounded-full top-0 left-[50%] -translate-y-[50%] -translate-x-[50%]'>
               <img style={{transform: `rotate(${deg.childDeg}deg)`}} src='/public/assets/Logo1.svg'/>
          </div>
          <div onClick={()=>setDeg({pertDeg:270,childDeg:90})} 
               className='flex bg-white shadow  cursor-pointer z-20  absolute w-20 h-20 rounded-full bottom-0 right-[50%] translate-y-[50%] translate-x-[50%]'>
               <img style={{transform: `rotate(${deg.childDeg}deg)`}} src='/public/assets/Logo2.svg'/>
          </div>
          <div onClick={()=>setDeg({pertDeg:180,childDeg:180})}  
               className='flex bg-white  shadow cursor-pointer z-20  absolute w-20 h-20 rounded-full left-0 top-[50%] -translate-x-[50%] -translate-y-[50%]'>
               <img style={{transform: `rotate(${deg.childDeg}deg)`}} src='/public/assets/Logo3.svg'/>
          </div>
          <div onClick={()=>setDeg({pertDeg:0,childDeg:0}) } 
               className='flex bg-white shadow  cursor-pointer z-20  absolute w-20 h-20 rounded-full right-0 top-[50%] translate-x-[50%] -translate-y-[50%]'>
               <img style={{transform: `rotate(${deg.childDeg}deg)`}} src='/public/assets/Logo4.svg'/>
          </div>
          <div   style={{transform: `rotate(${deg.childDeg}deg)`}} className='bg-white w-[50%] h-[50%] rounded-full flex items-center justify-center shadow-xl'>
               <img src={`/public/assets/Logo${content(deg.pertDeg)}.svg`}/>
          </div>
          <div style={{transform:`rotate(-${deg.pertDeg}deg)`,transition:'100ms'}} className={` absolute w-full h-full  rounded-full border-r-4 border-r-primary`}></div>
     </div>
    </div>
  )
}

export default SliderCercle