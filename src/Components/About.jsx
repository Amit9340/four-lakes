import React from 'react'
import Button from './Button'
import HeadElem from './HeadElem'

function About() {
  return (
    <div className='max-w-screen-xl mx-auto w-[83%] relative flex flex-col gap-16  items-center top-[52rem]'>
      <div className='flex flex-col items-center'>
        <HeadElem title1='About Us' title2='Where Relaxation and Adventure' />
        <h1 className='playfair-display text-[2.4rem] leading-tight font-extrabold text-[#24416B]'>Await</h1>
      </div>
      <div className='flex gap-12 '>
        <img className='h-[34.8rem] w-[34rem]' src="https://fourlakes.in/assets/images/about_home.jpg" alt="" />
        <div className=''>
            <h1 className='playfair-display text-[1.9rem] leading-tight mt-6 text-[#24416B] font-extrabold'>Discover an oasis of relaxation and excitement at the Four Lakes</h1>
            <p className='w-[90%] mt-7 text-[#756d6e] leading-loose text-sm'>Discover a world where exceptional dining meets unparalleled relaxation. Immerse yourself in the harmony of Flavors at our exquisite restaurants and unwind amidst nature’s embrace at our luxurious resorts..</p>
            <p className='w-[90%] mt-5 text-[#756d6e] mb-12 leading-loose text-sm'>Step into a realm where exceptional dining harmonizes with unmatched relaxation. Explore a world of culinary delights at our exquisite restaurants, where flavors come to life in every dish. Savor each moment as you embark on a delectable journey, with our talented chefs crafting gastronomic masterpieces to tantalize your taste buds.</p>

            <Button title='Take A Tour' url='/contactUs'/>
        </div>
      </div>
    </div>
  )
}

export default About
