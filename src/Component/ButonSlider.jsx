import { color } from 'framer-motion'
import React, { useRef } from 'react'

const ButonSlider = ({index,bg,handelClik,classs}) => {
return (
    <button 
      onClick={handelClik} 
      className={`  px-[30px] mx-3 my-5 py-[10px] rounded-[50px] text-p-main text-gray-darck `}  
      style={{border:`2px solid ${bg}`,
              backgroundColor:`${classs?`${bg}`:''}`,
              color:`${classs?'black':''}`
      }}>step {index}</button>
  )
}

export default ButonSlider