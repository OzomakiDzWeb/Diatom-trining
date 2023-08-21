
import { useTranslation } from 'react-i18next'

const Demendemo = () => {
   const {t}=useTranslation()
  return (
    <div className='absolute bg-scond w-[80%] h-screen mx-auto rounded-xl'>
      <div className='text-h3'>{t('form1')}</div>
      <form>
        <div>
          <input type='text' 
        </div>
      </form>
    </div>
  )
}

export default Demendemo