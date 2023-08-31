

import { BsFillArrowDownCircleFill, BsFillArrowUpCircleFill } from 'react-icons/bs'

// eslint-disable-next-line react/prop-types
const AccordingLoyout = ({ title, children, index, activeIndex, setActiveIndex }) => {
  const handleSetIndex = (index) => (activeIndex !== index) && setActiveIndex(index);

  return (
    <>
        <div  className='flex w-1/2 justify-between p-2 mt-2 rounded bg-green-400'>
            <div className='flex'>
                <div className='text-white font-bold'>{title}</div>
            </div>
            <div className="flex items-center justify-center">
                {
                (activeIndex === index) 
                ? <img  onClick={() => handleSetIndex(!index)} src='/public/assets/Plus.svg' className='w-8 h-8 cursor-pointer' />
                : <img onClick={() => handleSetIndex(!index)} src='/public/assets/Plus.svg' className='w-8 h-8 rotate-45 cursor-pointer' />
                }
            </div>
        </div>

        {(activeIndex === index) && (
            <div className="shadow-3xl rounded-2xl shadow-cyan-500/50 p-4 mb-6">
              {children}
            </div>
        )}
    </>
  );
};


export default AccordingLoyout;

