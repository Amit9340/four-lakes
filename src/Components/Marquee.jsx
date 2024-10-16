import React from "react";
import Button from "./Button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import style from './style.module.css';

function Marquee({ data }) {
  useGSAP(()=>{
    gsap.to('.marqueeDesktop',{
      x:-1810,
      ease:"linear",
      duration:20,
      delay:1,
      repeat:-1
    })
  })

  // useGSAP(()=>{
  //   gsap.to('.marqueeMobile',{
  //     x:-5500,
  //     ease:"linear",
  //     duration:20,
  //     delay:1,
  //     repeat:-1
  //   })
  // })

  return (
    <div className="marqueeMobile marqueeDesktop relative">
      <div className="">
        <img className="lg:h-72 lg:w-[28.1rem] h-[60rem] w-[107rem] object-cover" src={data.img1} alt="" />
      </div>
      <div className={`group flex items-center justify-center absolute top-0 group ${style.box} duration-500`}>
        <div className= "bg-black lg:h-72 lg:w-[28.1rem] h-[60rem] w-[107rem] opacity-50 group-hover:opacity-0 duration-700"></div>
        <div className="flex items-center justify-center flex-col absolute gap-4 ">
          <div className="lg:text-6xl text-[11rem] text-[#CC8C18] group-hover:text-zinc-100">{data.img2}</div>
          <h1 className="playfair-display uppercase tracking-[0.6rem] lg:text-xl text-[5.5rem] text-zinc-100">
            {data.text}
          </h1>
          <Button title='Explore More' url='/Home' customClass1='group-hover:bg-zinc-100 lg:w-[11rem]' customClass2='group-hover:text-[#CC8C18]' />
        </div>
      </div>
    </div>
  );
}

export default Marquee;
