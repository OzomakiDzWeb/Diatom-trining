import React from 'react'

const SectionPhone = ({index,p,img,bg}) => {
  
  return (
    <div className=' flex flex-col items-center'>
          <div style={{backgroundColor:bg}}  className='flex justify-center items-center text-[46px] font-[1100] rounded-full w-[76px] my-6'>{index}</div>
          <p className='text-mobil-p-sm-bold text-gray-darck mb-6 text-center'>{p}</p>
          <img src={img}/>
    </div>
  )
}

export default SectionPhone