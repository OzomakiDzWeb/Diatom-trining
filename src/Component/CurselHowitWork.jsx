import React from 'react'

const CurselHowitWork = ({index,bg,p,img}) => {
  return (
    <div className='w-[100vw] flex justify-around items-center relative'>
     <div className='relative flex lg:flex-row sm:flex-col gap-4 justify-between items-center w-[40%]'>
       <div style={{backgroundColor:bg}} className='absolute sm:hidden lg:block top-[0%] w-[235px] h-[235px] rounded-full -left-5 z-10'></div>
       <h1 className='z-10 hidden lg:text-[240px] rounded-full lg:flex items-center justify-center'>{index}</h1>
       <h1 className='z-10 sm:text-[60px] bg-primary w-[110px] h-[110px] lg:hidden lg:text-[240px] rounded-full flex items-center justify-center'>{index}</h1>
       <p className='z-10 text-center'>{p}</p>
     </div>
     <div className=' z-10'>
          <img className='h-[760px] w-[375px]' src={img}/>
     </div>
     <div className='absolute w-[100vw] h-[40%] bg-gray-extrai top-[] '></div>
    </div>
  )
}

export default CurselHowitWork