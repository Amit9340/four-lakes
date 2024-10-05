import React from 'react'

function HeadElem({title1="About Us", title2="Where Relaxation and Adventure Await", title3=''}) {
  return (
    <div className='flex flex-col items-center justify-center'>
      <p className='text-[#CF9780] uppercase tracking-[0.6rem] text-sm'>{title1}</p>
      <h1 className='playfair-display text-[2.4rem] leading-tight font-extrabold text-[#24416B] mt-2'>{title2}</h1>
      <h1 className='playfair-display text-[2.4rem] leading-tight font-extrabold text-[#24416B] mt-2'>{title3}</h1>
    </div>
  )
}

export default HeadElem
