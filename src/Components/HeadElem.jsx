import React from 'react'

function HeadElem({title1="About Us", title2="Where Relaxation and Adventure Await", title3='', customClass=''}) {
  return (
    <div className={`lg:w-full flex flex-col items-center justify-center text-center ${customClass}`}>
      <p className='lg:text-[#CF9780] lg:text-sm uppercase tracking-[0.8rem] text-[3.8rem] text-[#CC8C18]'>{title1}</p>
      <h1 className='playfair-display lg:text-[2.4rem] text-[7.2rem] leading-tight font-extrabold text-[#24416B] mt-2'>{title2}</h1>
      <h1 className='playfair-display lg:text-[2.4rem] text-[7.2rem] leading-tight font-extrabold text-[#24416B] -mt-1'>{title3}</h1>
    </div>
  )
}

export default HeadElem
