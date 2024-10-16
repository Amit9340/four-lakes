import React from 'react'
import Button from '../Components/Button'

function ForLakesWaterPark({title, Head1, Head2, para, img, url='', customClass='', customClassBtn='', customClassHead1='', customClassHead2='', customClassImg=''}) {
    return (
        <div className={`flex flex-col lg:h-[125vh] h-[645vh] lg:max-w-screen-xl lg:mx-auto w-[400vw] lg:px-20 lg:mb-24 lg:ml-16 relative lg:-top-4 top-16 ${customClass}`}>
          <div className='flex flex-col items-center lg:items-start gap-1 lg:w-[45%] w-full lg:text-start text-center'>
            <h2 className={`playfair-display text-[#CC8C18] tracking-widest font-extrabold lg:text-[0.9rem] text-[3.4rem] ${customClassHead1}`}>{Head1}</h2>
            <h1 className={`playfair-display w-[100%] lg:text-[1.85rem] text-[6rem] leading-tight font-extrabold text-[#24416B] mb-8 ${customClassHead2}`}>{Head2}</h1>
            
          </div>
          <div className='flex lg:flex-row flex-col gap-10'>
          <div className='lg:w-[31.3rem] w-[90%] lg:text-start lg:mx-0 text-center mx-auto lg:mt-0 mt-28'>
          <p className='poppins-medium w-full text-[#807c7d] leading-loose font-normal lg:text-[0.9rem] text-[3.55rem] lg:mb-9 mb-32'>
                {para}
              </p>
            <Button title={title} url={url} customClass1={`${customClassBtn}`}/>
          </div>
          <div className={`lg:w-[48%] lg:mx-0 w-[94%] mx-auto relative lg:-top-9 ${customClassImg}`}><img className='h-fit w-full' src={img} alt="" /></div>
          </div>
        </div>
      )
}

export default ForLakesWaterPark
