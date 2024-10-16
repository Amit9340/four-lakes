import React from 'react'
import Button from './Button'
import { RiSailboatFill } from "react-icons/ri";
import { RiCupFill } from "react-icons/ri";
import { RiHotelFill } from "react-icons/ri";
import HeadElem from './HeadElem';

function Featured({customClass=''}) {
  return (
    <div className={`lg:max-w-screen-xl lg:mx-auto w-[400vw] flex items-center justify-center flex-col flex-wrap gap-14 ${customClass}`}>
      <div className='flex flex-col items-center justify-center'>
        <HeadElem title1='Featured Places' title2='Discover Our Diverse Destinations' />
      </div>

      <div className='lg:flex lg:flex-row flex flex-col items-center justify-center lg:gap-10 gap-44 mt-20 lg:mt-0'>
        <div className='lg:h-64 lg:w-fit h-[58rem] contain1 group'>
        <div className='group-hover:-translate-y-1 transition-all duration-300 '>
        <img className='absolute z-10 lg:h-64 lg:w-[22rem] h-[58rem] w-[100rem] object-cover opacity-0 group-hover:opacity-100 transition-all duration-500' src="https://fourlakes.in/assets/images/waterpark/water_park-1.jpg" alt="" />
        <div className='bg-black lg:h-64 lg:w-[22rem] h-[58rem] w-[100rem] absolute z-40 opacity-0 group-hover:opacity-30'></div>
        <div className='lg:h-64 lg:w-[22rem] h-[58rem] w-[100rem] shadow-xl shadow-[#cfcfcf] px-6 py-2 flex flex-col items-center justify-center gap-5'>
        
          <div className='absolute z-50 flex flex-col justify-center items-center lg:gap-3 gap-12 px-6 py-2'>
          <div className='text-[#CC8C18] lg:text-3xl text-[7rem] group-hover:text-zinc-100 group-hover:animate-slideDownLong'>
            <RiSailboatFill className=''/>
          </div>
          <h1 className='playfair-display font-[900] lg:text-[1.3rem] text-[4.5rem] text-[#24416B] group-hover:text-zinc-100'>Water park</h1>
          <div className='flex flex-col lg:w-[18rem] w-[90rem] leading-[2] lg:leading-7 lg:text-sm text-center text-[3.5rem] text-[#7A7E9A] group-hover:text-zinc-100 font-normal'>
            <p>Dive into a world of aquatic fun at our thrilling waterpark.</p>
          </div>
          <Button title='Take A Tour' url='/WaterPark'/>
          </div>
        </div>
        </div>
        </div>
       <div className='contain2 lg:h-64 lg:w-fit h-[58rem] group'>
       <div className='group-hover:-translate-y-1 transition-all duration-300 '>
       <img className='absolute z-10 lg:h-64 lg:w-[22rem] h-[58rem] w-[99rem] object-cover opacity-0 group-hover:opacity-100 transition-all duration-500' src="https://fourlakes.in/assets/images//leopard_restro/leopard_restro-1.jpg" alt="" />
       <div className='bg-black lg:h-64 lg:w-[22rem] h-[58rem] w-[99rem] absolute z-40 opacity-0 group-hover:opacity-30'></div>
       <div className='lg:h-64 lg:w-[22rem] h-[58rem] w-[99rem] shadow-2xl shadow-[#cfcfcf] px-6 flex flex-col items-center justify-center gap-5'>
          <div className='absolute z-50 flex flex-col justify-center items-center lg:gap-3 gap-12 px-6 py-2'>
          <div className='text-[#CC8C18] lg:text-3xl text-[7rem] group-hover:text-zinc-100 group-hover:animate-slideDownLong'>
            <RiCupFill/>
          </div>
          <h1 className='playfair-display font-[900] lg:text-[1.3rem] text-[4.5rem] text-[#24416B] group-hover:text-zinc-100'>The Leopard Hill Restaurant</h1>
          <div className='flex flex-col lg:w-[20rem] w-[80rem] leading-[2] lg:leading-7 text-center lg:text-sm text-[3.5rem] text-[#7A7E9A] group-hover:text-zinc-100 font-normal'>
            <p>Indulge your taste buds at our signature lakeside restaurant.</p>
          </div>
          <Button title='Take A Tour' url='/Restro'/>
          </div>
        </div>
       </div>
       </div>
       <div className='contain3 lg:h-64 lg:w-fit h-[58rem] group'>
       <div className='group-hover:-translate-y-1 transition-all duration-300'>
       <img className='absolute z-10 lg:h-64 lg:w-[22rem] h-[58rem] w-[99rem] object-cover opacity-0 group-hover:opacity-100 transition-all duration-500' src="https://fourlakes.in/assets/images/royal_yard/royal_yard-1.jpg" alt="" />
       <div className='bg-black lg:h-64 lg:w-[22rem] h-[58rem] w-[99rem] absolute z-40 opacity-0 group-hover:opacity-30'></div>
       <div className='lg:h-64 lg:w-[22rem] h-[58rem] w-[99rem] shadow-2xl shadow-[#cfcfcf] px-6 flex flex-col items-center justify-center gap-5'>
          
          <div className='absolute z-40 flex flex-col justify-center items-center lg:gap-3 gap-12 px-6 py-2'>
          <div className='text-[#CC8C18] lg:text-3xl text-[7rem] group-hover:text-zinc-100 group-hover:animate-slideDownLong'>
            <RiHotelFill/>
          </div>
          <h1 className='playfair-display font-[900] lg:text-[1.3rem] text-[4.5rem] text-[#24416B] group-hover:text-zinc-100'>The Royale Yards resort</h1>
          <div className='flex flex-col lg:w-[18rem] w-[80rem] text-center leading-[2] lg:leading-7 lg:text-sm text-[3.5rem] text-[#7A7E9A] group-hover:text-zinc-100 font-normal'>
            <p>Our resort offers a serene escape from the hustle and bustle of daily life.</p>
          </div>
          <Button title='Take A Tour' url='/Resort'/>
          </div>
        </div>
       </div>
       </div>
      </div>
    </div>
  )
}

export default Featured
