import React from 'react'
import HeadElem from './HeadElem'
import { GiCoffeeCup } from "react-icons/gi";
import { GiPodiumWinner } from "react-icons/gi";
import { PiComputerTower } from "react-icons/pi";
import { CiAirportSign1 } from "react-icons/ci";
import { RiSlowDownFill } from "react-icons/ri";

function Booking() {
    let data = [
        {img:<PiComputerTower/>, text1:'Free cost', text2:'No booking fee'},
        {img:<GiPodiumWinner/>, text1:'Free cost', text2:'Best rate guarantee'},
        {img:<CiAirportSign1/>, text1:'Free cost', text2:'Reservations 24/7'},
        {img:<RiSlowDownFill/>, text1:'Free cost', text2:'High-speed Wi-Fi'},
        {img:<GiCoffeeCup/>, text1:'Free cost', text2:'Free breakfast'}
    ]
  return (
    <div className='mt-8 lg:h-[20rem] h-[280rem] flex flex-col gap-10'>
      <HeadElem title1='Booking' title2='Direct booking benefits' />
      <div className='flex lg:flex-row flex-col w-full items-center justify-center lg:gap-6 gap-64'>
        {data.map((item,index) => (
           <div key={index} className='lg:h-36 lg:w-52 h-[38rem] w-[98rem] px-4 py-4 flex flex-col items-center justify-center gap-1 shadow-lg shadow-[#CFCFCF] group hover:bg-[#CC8C18] transition ease-in-out duration-500'>
            <div className='opacity-60 lg:text-4xl text-[15rem] group-hover:text-zinc-100 group-hover:opacity-100 group-hover:animate-slideDownShort'>{item.img}</div>
            <h1 className='text-[#756d6e] lg:text-sm text-[3.5rem] group-hover:text-zinc-100 font-medium'>{item.text1}</h1>
            <h1 className='playfair-display lg:text-[1.2rem] text-[5rem] leading-tight font-extrabold text-[#24416B] group-hover:text-zinc-100'>{item.text2}</h1>
           </div>
        ))}
      </div>
      
    </div>
  )
}

export default Booking
