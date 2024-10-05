import React from 'react'
import Button from './Button'
import { RiSailboatFill } from "react-icons/ri";
import { RiCupFill } from "react-icons/ri";
import { RiHotelFill } from "react-icons/ri";
import HeadElem from './HeadElem';

function Featured({customClass=''}) {
  return (
    <div className={`max-w-screen-xl mx-auto mt-[60rem] py-6 flex flex-col gap-14 ${customClass}`}>
      <div className='flex flex-col items-center'>
        <HeadElem title1='Featured Places' title2='Discover Our Diverse Destinations' />
      </div>

      <div className='  flex justify-center gap-10'>
        <div className='h-64 contain1 group'>
        <div className='group-hover:-translate-y-1 transition-all duration-300 '>
        <img className='absolute z-10 h-64 w-[22rem] object-cover opacity-0 group-hover:opacity-100 transition-all duration-500' src="https://fourlakes.in/assets/images/waterpark/water_park-1.jpg" alt="" />
        <div className='bg-black h-64 w-[22rem] absolute z-40 opacity-0 group-hover:opacity-30'></div>
        <div className='h-64 w-[22rem] shadow-xl shadow-[#cfcfcf] px-6 py-2 flex flex-col items-center justify-center gap-5'>
        
          <div className='absolute z-50 flex flex-col justify-center items-center gap-3 px-6 py-2'>
          <div className='text-[#CC8C18] text-3xl group-hover:text-zinc-100 group-hover:animate-slideDownLong'>
            <RiSailboatFill className=''/>
          </div>
          <h1 className='playfair-display font-[900] text-[1.3rem] text-[#24416B] group-hover:text-zinc-100'>Water park</h1>
          <div className='flex flex-col items-center gap-3 text-sm text-[#7A7E9A] group-hover:text-zinc-100'>
            <p>Dive into a world of aquatic fun at our</p>
            <p>thrilling waterpark.</p>
          </div>
          <Button title='Take A Tour' url='/WaterPark'/>
          </div>
        </div>
        </div>
        </div>
       <div className='contain2 h-64 group'>
       <div className='group-hover:-translate-y-1 transition-all duration-300 '>
       <img className='absolute z-10 h-64 w-[22rem] object-cover opacity-0 group-hover:opacity-100 transition-all duration-500' src="https://fourlakes.in/assets/images//leopard_restro/leopard_restro-1.jpg" alt="" />
       <div className='bg-black h-64 w-[22rem] absolute z-40 opacity-0 group-hover:opacity-30'></div>
       <div className='h-64 w-[22rem] shadow-2xl shadow-[#cfcfcf] px-6 flex flex-col items-center justify-center gap-5'>
          <div className='absolute z-50 flex flex-col justify-center items-center gap-3 px-6 py-2'>
          <div className='text-[#CC8C18] text-3xl group-hover:text-zinc-100 group-hover:animate-slideDownLong'>
            <RiCupFill/>
          </div>
          <h1 className='playfair-display font-[900] text-[1.3rem] text-[#24416B] group-hover:text-zinc-100'>The Leopard Hill Restaurant</h1>
          <div className='flex flex-col items-center gap-3 text-sm text-[#7A7E9A] group-hover:text-zinc-100'>
            <p>Indulge your taste buds at our signature</p>
            <p>lakeside restaurant.</p>
          </div>
          <Button title='Take A Tour' url='/Restro'/>
          </div>
        </div>
       </div>
       </div>
       <div className='contain3 h-64 group'>
       <div className='group-hover:-translate-y-1 transition-all duration-300'>
       <img className='absolute z-10 h-64 w-[22rem] object-cover opacity-0 group-hover:opacity-100 transition-all duration-500' src="https://fourlakes.in/assets/images/royal_yard/royal_yard-1.jpg" alt="" />
       <div className='bg-black h-64 w-[22rem] absolute z-40 opacity-0 group-hover:opacity-30'></div>
       <div className='h-64 w-[22rem] shadow-2xl shadow-[#cfcfcf] px-6 flex flex-col items-center justify-center gap-5'>
          
          <div className='absolute z-40 flex flex-col justify-center items-center gap-3 px-6 py-2'>
          <div className='text-[#CC8C18] text-3xl group-hover:text-zinc-100 group-hover:animate-slideDownLong'>
            <RiHotelFill/>
          </div>
          <h1 className='playfair-display font-[900] text-[1.3rem] text-[#24416B] group-hover:text-zinc-100'>The Royale Yards resort</h1>
          <div className='flex flex-col items-center gap-3 text-sm text-[#7A7E9A] group-hover:text-zinc-100'>
            <p>Our resort offers a serene escape from</p>
            <p>the hustle and bustle of daily life.</p>
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
