import React from 'react'
import Button from '../Components/Button'

function ForLakesWaterPark({title, Head1, Head2, para, img, url='', customClassBtn='', customClassHead1='', customClassHead2='', customClassImg=''}) {
    return (
        <div className='flex h-[125vh] max-w-screen-xl mx-auto px-20 mb-24 ml-16 gap-7 relative -top-4'>
          <div className='flex flex-col gap-1 w-[50%]'>
            <h2 className={`playfair-display text-[#CC8C18] tracking-widest font-extrabold text-[0.9rem] ${customClassHead1}`}>{Head1}</h2>
            <h1 className={`playfair-display w-[90%] text-[1.85rem] leading-tight font-extrabold text-[#24416B] mb-8 ${customClassHead2}`}>{Head2}</h1>
            <p className='w-full text-[#807c7d] leading-loose font-light text-[0.97rem] mb-6'>
                {para}
              </p>
            <Button title={title} url={url} customClass1={`${customClassBtn}`}/>
          </div>
          <div className={`w-[48%] relative top-12 mr-10 ${customClassImg}`}><img src={img} alt="" /></div>
        </div>
      )
}

export default ForLakesWaterPark
