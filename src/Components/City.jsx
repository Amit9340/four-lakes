import React from 'react'
import HeadElem from './HeadElem'

function City({customClass}) {
  return (
    <div className={`py-20 mt-20 overflow-hidden ${customClass}`}>
      <div className='relative w-full'>
        <img className=' scale-150' src="https://fourlakes.in/assets/img/city/city-bg2.jpg" alt="" />
        <div className='absolute top-2'>
           <div className='bg-white relative h-[32rem] w-[35rem] -my-4 left-[25%] translate-x-[50%] px-8 py-8'>
           <h1 className='text-[#CF9780] uppercase tracking-[0.6rem] text-sm'>The City View</h1>
            <h1 className='playfair-display text-2xl leading-tight font-extrabold text-[#24416B] mt-2'>A charming view of the city town</h1>
            <p className='mt-4 text-[#756d6e] leading-loose text-sm'>
              Welcome to FourLake Resort, where nature meets tranquility, and every moment is a retreat for your mindand soul. Nestled in the heart of pristine natural beauty, FourLake Resort is a haven for those seeking serenity and a break from the hustle and bustle of everyday life. Surrounded by lush greenery, towering trees, and the gentle embrace of four shimmering lakes, this resort is a symphony of peace and tranquility.
            </p>
            <p className='mt-4 text-[#756d6e] leading-loose text-sm'>
              Immerse yourself in the breathtaking landscapes that unfold at every turn. Take a leisurely stroll through our manicured gardens, where vibrant flowers bloom, and the air is filled with the sweet fragrance of nature. As you wander, you'll be accompanied by the soothing sounds of rustling leaves and the distant melody of birdsong, creating a harmony that resonates with the essence of relaxation.
            
            </p>
           </div>
        </div>
      </div>
    </div>
  )
}

export default City
