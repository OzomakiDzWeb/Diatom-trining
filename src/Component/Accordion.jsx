import  { useState } from 'react';
import AccordionLayout from './AccordingLoyout';

const Accordion = ({nember,title,p}) => {
  const [accordionOpen, setAccordionOpen] = useState(false)

  return (
     <div className='flex justify-between items-center transition-all duration-300'>
       <p className='text-mobil-h3 text-primary'>{nember}</p>
      <div
        id={`accordion-text-01`}
        role="region"
        aria-labelledby={`accordion-title-01`}
        className={`grid text-sm text-slate-600 overflow-hidden transition-all duration-300 ease-in-out ${accordionOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
          <p className="pb-3">
            If you go over your organisations or user limit, a member of the team will reach out about bespoke pricing. In the meantime, our collaborative features won't appear in accounts or users that are over the 100-account or 1,000-user limit.
          </p>
        </div>
      </div>
       <img aria-expanded={accordionOpen}
          aria-controls={`accordion-text-01`}  onClick={(e) => { e.preventDefault(); setAccordionOpen(!accordionOpen); }} src='/public/assets/Plus.svg' className={sho?'w-8 h-8':'w-8 h-8 rotate-45'}/>
     </div>
     
  );
};
export default Accordion;