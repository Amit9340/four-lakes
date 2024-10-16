import React from 'react'
import HeadElem from './HeadElem'

function City({customClass}) {
  return (
    <div className={`py-20 mt-20 overflow-hidden ${customClass}`}>
      <div className='relative w-full'>
        <img className='lg:scale-150 lg:h-[80vh] lg:w-[100vw] h-[300vh] w-[400vw]' src="https://fourlakes.in/assets/img/city/city-bg2.jpg" alt="" />
        <div className='absolute top-2'>
           <div className='bg-white relative lg:h-[32rem] lg:w-[35rem] h-[250vh] w-[350vw] lg:-my-4 my-52 lg:left-[25%] lg:translate-x-[50%] translate-x-[8%] px-8 py-8 lg:block flex flex-col items-center'>
           <h1 className='text-[#CF9780] uppercase lg:tracking-[0.6rem] tracking-[2rem]  lg:text-sm text-6xl'>The City View</h1>
            <h1 className='playfair-display lg:text-2xl lg:text-start text-8xl text-center leading-tight font-extrabold text-[#24416B] lg:mt-2 mt-10'>A charming view of the city town</h1>
            <p className='mt-4 lg:text-[#756d6e] lg:leading-loose lg:text-sm text-[#7b7b7c] text-[3.4rem] px-14 text-center lg:px-0 lg:text-start lg:font-medium font-light'>
              Welcome to FourLake Resort, where nature meets tranquility, and every moment is a retreat for your mindand soul. Nestled in the heart of pristine natural beauty, FourLake Resort is a haven for those seeking serenity and a break from the hustle and bustle of everyday life. Surrounded by lush greenery, towering trees, and the gentle embrace of four shimmering lakes, this resort is a symphony of peace and tranquility.
            </p>
            <p className='mt-4 lg:text-[#756d6e] lg:leading-loose lg:text-sm text-[#7b7b7c] text-[3.4rem] px-14 text-center lg:px-0 lg:text-start lg:font-medium font-light'>
              Immerse yourself in the breathtaking landscapes that unfold at every turn. Take a leisurely stroll through our manicured gardens, where vibrant flowers bloom, and the air is filled with the sweet fragrance of nature. As you wander, you'll be accompanied by the soothing sounds of rustling leaves and the distant melody of birdsong, creating a harmony that resonates with the essence of relaxation.
            
            </p>
           </div>
        </div>
      </div>
    </div>
  )
}

export default City
