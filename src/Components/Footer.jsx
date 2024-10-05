import React, { useEffect, useRef, useState } from "react";
import style from './style.module.css';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FiChevronsRight } from "react-icons/fi";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LocomotiveScroll from "locomotive-scroll";
import 'locomotive-scroll/dist/locomotive-scroll.css';

function Footer({customClass=''}) {
  const iconRefs = useRef([]);
 const handleMouseEnter = (index)=>{
  gsap.killTweensOf(iconRefs.current[index]);
  gsap.from(iconRefs.current[index], {
    x: -20,
    opacity: 0,
    duration: 0.7,
    ease: "power1.out"
  });
  gsap.killTweensOf(iconRefs.current[index]);
  gsap.to(iconRefs.current[index], {
    x: 10,
    opacity: 1,
    duration: 0.7,
    ease: "power1.out"
  });

  }

  const handleMouseLeave = (index)=>{
    gsap.killTweensOf(iconRefs.current[index]);
    gsap.to(iconRefs.current[index], {
      x: 0,
      opacity: 1,
      duration: 0.3,
      ease: "power1.out",
    });
  }

  const icon1Refs = useRef([]);
 const handleMouseEnter1 = (index)=>{
  gsap.killTweensOf(icon1Refs.current[index]);
  gsap.from(icon1Refs.current[index], {
    x: -20,
    opacity: 0,
    duration: 0.7,
    ease: "power1.out"
  });
  gsap.killTweensOf(icon1Refs.current[index]);
  gsap.to(icon1Refs.current[index], {
    x: 10,
    opacity: 1,
    duration: 0.7,
    ease: "power1.out"
  });

  }

  const handleMouseLeave1 = (index)=>{
    gsap.killTweensOf(icon1Refs.current[index]);
    gsap.to(icon1Refs.current[index], {
      x: 0,
      opacity: 1,
      duration: 0.3,
      ease: "power1.out",
    });
  }

  const data1=[
    {
      img: "https://fourlakes.in/assets/images/logo.png",
      para: "Experience exceptional dining and unmatched relaxation. Indulge in exquisite restaurant flavors and unwind in our luxurious natural resorts.",
      ic1: <FaFacebookF />,
      ic2: <FaInstagram />,
      ic3: <FaWhatsapp />,
    },
  ]
  

  return (
    <div className={`relative h-fit ${customClass}`}>
    <img className=' h-[2.6rem] w-[84.3rem] absolute z-10 -top-1' src="https://fourlakes.in/assets/img/shape/white-shape-bottom.png" alt="" />
      <div className="h-[110vh] absolute ">
        <img className="h-[110vh]" src="https://fourlakes.in/assets/img/footer-bg.jpg" alt="" />
      </div>
      <div className="bg-black h-[110vh] w-full absolute opacity-70"></div>
      <div className="flex absolute h-[80vh] mt-44 ml-20 mr-10 text-zinc-100">
      <div className="mr-6 ml-10  w-[23%]">
        {data1.map((item, index) => (
            <div key={index} className="flex flex-col gap-8 relative text-zinc-100">
              <a href={'/Home'}><img className="h-32 w-60 cursor-pointer" src={item.img} alt="" /></a>
              <p className="w-[100%] font-normal tracking-wide leading-7 text-sm">{item.para}</p>
              <div className="flex gap-3 cursor-pointer ${style.SocialIcons}">
                <div className={`bg-[#ffffff4d] h-7 w-7 text-xs font-bold rounded-full flex items-center justify-center duration-300 ${style.SocialIcons}`}>{item.ic1}</div>
                <div className={`bg-[#ffffff4d] h-7 w-7 text-xs font-bold rounded-full flex items-center justify-center duration-300 ${style.SocialIcons}`}>{item.ic2}</div>
                <div className={`bg-[#ffffff4d] h-7 w-7 text-xs font-bold rounded-full flex items-center justify-center duration-300 ${style.SocialIcons}`}>{item.ic3}</div>
              </div>
            </div>
        ))}
      </div>

      <div className="relative w-[25%]">
        <h1 className="playfair-display text-[1.5rem] text-zinc-100 tracking-tighter mb-4">Quick Links</h1>
        <div>
          {[{ic: <FiChevronsRight />, text:'Home', url:'/home'}, {ic: <FiChevronsRight />, text:'About Us',url:'/about'}, {ic: <FiChevronsRight />, text:'The Leopard Hill Restro', url:'/restro'}, {ic: <FiChevronsRight />, text:'The Royale Yards Resort', url:'/resort'}, {ic: <FiChevronsRight />, text:'Water Park', url:'/waterPark'}, {ic: <FiChevronsRight />, text:'Contact', url:'/contactUs'}, {ic: <FiChevronsRight />, text:'Terms and conditions', }, {ic: <FiChevronsRight />, text:'Privacy policy'}].map((item, index)=>(
            <div key={index} className="w-fit flex gap-1 cursor-pointer hover:text-[#CC8C18] group" onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={() => handleMouseLeave(index)}>
              <div className="relative top-3" ref={el => iconRefs.current[index] = el}>{item.ic}</div>
              <a href={item.url}>
              <h1 className={`text-sm leading-10 group-hover:translate-x-2 group-hover:duration-300 transition-transform`}>{item.text}</h1>
              </a>
            </div>
          ))}
        </div>
      </div>
      
      <div className="relative w-[20%]">
        <h1 className="playfair-display text-[1.5rem] text-zinc-100 tracking-tighter mb-4">Services</h1>
        <div>
          {[{ic: <FiChevronsRight />, text:'Restaurant', url:'/restro'}, {ic: <FiChevronsRight />, text:'Adventure Park',}, {ic: <FiChevronsRight />, text:'Govardhan Hall', url:'/gallery'}, {ic: <FiChevronsRight />, text:'Conference Room',url:'/gallery'}, {ic: <FiChevronsRight />, text:'Events', url:'/gallery'}, {ic: <FiChevronsRight />, text:'Atari Cottages', url:'/restro'}].map((item, index)=>(
            <div key={index} className="w-fit flex gap-2 cursor-pointer hover:text-[#CC8C18] group" onMouseEnter={() => handleMouseEnter1(index)} onMouseLeave={() => handleMouseLeave1(index)}>
              <div className="relative top-3" ref={el1 => icon1Refs.current[index] = el1}>{item.ic}</div>
              <a href={item.url}>
              <h1 className=" text-sm leading-10 group-hover:translate-x-2 group-hover:duration-300 transition-transform">{item.text}</h1>
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="relative w-[20%]">
        <h1 className="playfair-display text-[1.5rem] text-zinc-100 tracking-tighter mb-4">Contact Info</h1>
        <div>
          {[{ic: <IoLocationSharp />, text1:'Address', text2:'Sahara bypass road, katara hills extention, Bhopal, Madhya Pradesh 462022'}, {ic: <FaPhoneAlt />, text1:'Phone', text2:'+91 91114 79109'}, {ic: <IoMdMail />, text1:'Email', text2:'info@fourlakes.in'}].map((item, index)=>(
            <div key={index} className="flex gap-2">
              <div className="relative top-1 text-xl">{item.ic}</div>
              <div className="flex flex-col gap-2">
              <h1 className="playfair-display text-[1.1rem]">{item.text1}</h1>
              <p className="text-sm leading-7 font-normal ">{item.text2}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>

      <div className="absolute top-[37rem] flex text-zinc-100 ml-28 mr-14 border-t border-zinc-700 py-5 text-sm">
        <h1 className="mr-[30rem]">Copyright @2024 <a href='/home' className="hover:text-[#CC8C18] duration-500">Four Lakes</a>. All Rights Reserved</h1>
          <h1 className="mr-2">Designed By</h1>
          <div className={`relative top-1 text-[#CC8C18] ${style.heart} `}><FaRegHeart/></div>
          <a className="ml-2 text-[#CC8C18]" href="https://www.linkedin.com/in/amit-sharma-498757250/" target="_blank">Amit Sharma</a>
      </div>
    </div>
  );
}

export default Footer;
