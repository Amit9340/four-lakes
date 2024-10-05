import React from "react";
import Button from "./Button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import style from './style.module.css';

function Marquee({ data }) {
  useGSAP(()=>{
    gsap.to('.marquee',{
      x:-1810,
      ease:"linear",
      duration:20,
      delay:1,
      repeat:-1
    })
  })

  return (
    <div className="marquee relative">
      <div className="">
        <img className="h-72 w-[28.1rem] object-cover" src={data.img1} alt="" />
      </div>
      <div className={`group flex items-center justify-center absolute top-0 group ${style.box} duration-500`}>
        <div className= "bg-black h-72 w-[28.1rem] opacity-50 group-hover:opacity-0 duration-700"></div>
        <div className="flex items-center justify-center flex-col absolute gap-4 ">
          <div className="text-6xl text-[#CC8C18] group-hover:text-zinc-100">{data.img2}</div>
          <h1 className="playfair-display uppercase tracking-[0.6rem] text-xl text-zinc-100">
            {data.text}
          </h1>
          <Button url='/Home' customClass1='group-hover:bg-zinc-100' customClass2='group-hover:text-[#CC8C18]' />
        </div>
      </div>
    </div>
  );
}

export default Marquee;
