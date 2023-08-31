import { useState, useEffect } from 'react'



const Aco = ({title,number,p}) => {
      const [accordionOpen, setAccordionOpen] = useState(false)

  useEffect(() => {
    setAccordionOpen(false)
  }, [])

  

 
    return(
    <div className="py-2">
      <h2>
        <button
          className="flex items-center  w-full  font-semibold py-2"
          onClick={(e) => { e.preventDefault(); setAccordionOpen(!accordionOpen); }}
          aria-expanded={accordionOpen}
          aria-controls={`accordion-text-01`}
        > 
        <div className={`${accordionOpen?'opacity-0':'opacity-100'} text-mobil-h3 text-primary`}>{number}</div>
           <div className='text-left ml-5 mr-auto'>{title}</div>
           <img className={`${accordionOpen?'opacity-0':'opacity-100'} transition-all duration-300 ease-in-out`} src='/public/assets/Plus.svg' alt='svgPlus'/>          
        </button>        
      </h2>
      <div
        id={`accordion-text-01`}
        role="region"
        aria-labelledby={`accordion-title-01`}
        className={`grid text-sm text-slate-600 overflow-hidden transition-all duration-300 ease-in-out ${accordionOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden flex items-center gap-5">
          <div className='text-mobil-h3 text-primary text'>{number}</div>
          <p className="pb-3 text-nav-small text-gray-darck">
            If you go over your organisations or user limit, a member of the team will reach out about bespoke pricing. In the meantime, our collaborative features won't appear in accounts or users that are over the 100-account or 1,000-user limit.
          </p>
           <img onClick={(e) => { e.preventDefault(); setAccordionOpen(!accordionOpen); }} className={`${accordionOpen?'opacity-100':'opacity-0 '} rotate-45 cursor-pointer transition-all duration-300 ease-in-out`} src='/public/assets/Plus.svg' alt='svgPlus'/> 
        </div>
      </div>
    </div>)}
  

export default Aco