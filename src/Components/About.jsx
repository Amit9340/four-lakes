import React from 'react'
import Button from './Button'
import HeadElem from './HeadElem'

function About() {
  return (
    <div className='lg:max-w-screen-xl mx-auto lg:w-[83%] lg:h-[130vh] w-[94%] h-[530vh] relative flex flex-col gap-16 items-center mt-60 lg:-top-[4rem] '>
      <div className='lg:w-[60%] flex flex-col items-center justify-center'>
        <HeadElem title1='About Us' title2='Where Relaxation and Adventure Await'/>
      </div>
      <div className='lg:flex gap-12 relative lg:top-0 top-24'>
        <img className='h-[102rem] w-[98rem] lg:h-[34.8rem] lg:w-[34rem]' src="https://fourlakes.in/assets/images/about_home.jpg" alt="" />
        <div className='max-w-screen-xl mx-auto lg:block flex flex-col items-center justify-center'>
            <h1 className='playfair-display lg:w-[34rem] w-[98rem] lg:text-[1.9rem] text-[5.9rem] lg:text-start text-center lg:leading-tight lg:mt-6 lg:ml-0 mt-16 text-[#24416B] font-extrabold'>Discover an oasis of relaxation and excitement at the Four Lakes</h1>
            <p className='lg:w-[90%] w-[98rem] mt-16 lg:mt-7 text-[#9C909D] lg:leading-7 leading-loose text-[3.7rem] text-center lg:text-start lg:text-sm font-normal'>Discover a world where exceptional dining meets unparalleled relaxation. Immerse yourself in the harmony of Flavors at our exquisite restaurants and unwind amidst nature’s embrace at our luxurious resorts..</p>
            <p className='lg:w-[90%] w-[98rem] mt-16 lg:mt-5 text-[#9C909D] mb-12 lg:leading-7 leading-loose text-[3.55rem] text-center lg:text-start lg:text-sm font-normal'>Step into a realm where exceptional dining harmonizes with unmatched relaxation. Explore a world of culinary delights at our exquisite restaurants, where flavors come to life in every dish. Savor each moment as you embark on a delectable journey, with our talented chefs crafting gastronomic masterpieces to tantalize your taste buds.</p>

            <Button title='Take A Tour' url='/contactUs'/>
        </div>
      </div>
    </div>
  )
}

export default About
