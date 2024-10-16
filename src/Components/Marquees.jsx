import React from 'react'
import Marquee from './Marquee';
import { GiCoffeeCup } from "react-icons/gi";
import { GrSwim } from "react-icons/gr";
import { GiPublicSpeaker } from "react-icons/gi";
import { GiPodiumWinner } from "react-icons/gi";
import HeadElem from './HeadElem';

function Marquees() {
    const data = [
        {
          img1: "https://fourlakes.in/assets/img/facilities/1.png",
          img2: <GiCoffeeCup />,
          text: "Kid's Play Ground",
        },
        {
          img1: "https://fourlakes.in/assets/img/facilities/2.png",
          img2: <GrSwim/>,
          text: "govardhan hall",
        },
        {
          img1: "https://fourlakes.in/assets/img/facilities/3.png",
          img2: <GiPublicSpeaker/>,
          text: "leopard hill view",
        },
        {
          img1: "https://fourlakes.in/assets/img/facilities/4.png",
          img2: <GiPodiumWinner/>,
          text: "wedding",
        },


        {
            img1: "https://fourlakes.in/assets/img/facilities/1.png",
            img2: <GiCoffeeCup />,
            text: "Kid's Play Ground",
          },
          {
            img1: "https://fourlakes.in/assets/img/facilities/2.png",
            img2: <GrSwim/>,
            text: "govardhan hall",
          },
          {
            img1: "https://fourlakes.in/assets/img/facilities/3.png",
            img2: <GiPublicSpeaker/>,
            text: "leopard hill view",
          },
          {
            img1: "https://fourlakes.in/assets/img/facilities/4.png",
            img2: <GiPodiumWinner/>,
            text: "wedding",
          },
      ];
  return (
    
    <div className='lg:h-screen h-[110rem] overflow-hidden'>
      <div className='lg:w-[42%] lg:mx-auto  flex flex-col items-center justify-center'>
      <HeadElem title1='Restaurants' title2='The area we cover under Four Lakes' />
      </div>
      <div className='flex lg:w-[267%] w-[831%] lg:mt-12 mt-32'>
      {data.map((item, index)=>(<Marquee data={item} key={index} />))}
      </div>
    </div>
  )
}

export default Marquees
