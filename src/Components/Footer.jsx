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
    <div className={`relative lg:h-[100vh] lg:w-full h-[305rem] w-[400vw] lg:overflow-visible overflow-hidden ${customClass}`}>
    <img className='h-[2.6rem] w-[84.3rem] absolute z-50 -top-1' src="https://fourlakes.in/assets/img/shape/white-shape-bottom.png" alt="" />
      <div className="h-[110vh] absolute ">
        <img className="lg:h-[110vh] lg:mt-0 mt-[125rem] h-[48rem] lg:scale-100 scale-[6.6] lg:ml-0 -ml-20" src="https://fourlakes.in/assets/img/footer-bg.jpg" alt="" />
      </div>
      <div className="bg-black lg:h-[110vh] h-[305rem] w-full absolute opacity-70"></div>
      <div className="flex lg:flex-row lg:gap-0 flex-col gap-16 absolute h-[80vh] mt-44 ml-20 mr-10 text-zinc-100">
      <div className="lg:mr-6 lg:ml-10 lg:w-[23%]">
        {data1.map((item, index) => (
            <div key={index} className="flex flex-col lg:gap-8 gap-16 relative text-zinc-100">
              <a href={'/Home'}><img className="lg:h-32 lg:w-60 h-[30rem] cursor-pointer" src={item.img} alt="" /></a>
              <p className="w-[100%] lg:font-normal lg:tracking-wide lg:leading-7 lg:text-sm font-light leading-loose text-[3.6rem]">{item.para}</p>
              <div className="flex lg:gap-3 gap-10 cursor-pointer ${style.SocialIcons}">
                <div className={`bg-[#ffffff4d] lg:h-7 lg:w-7 h-[9rem] w-[9rem] lg:text-xs text-[3.5rem] font-bold rounded-full flex items-center justify-center duration-300 ${style.SocialIcons}`}>{item.ic1}</div>
                <div className={`bg-[#ffffff4d] lg:h-7 lg:w-7 h-[9rem] w-[9rem] lg:text-xs text-[3.5rem] font-bold rounded-full flex items-center justify-center duration-300 ${style.SocialIcons}`}>{item.ic2}</div>
                <div className={`bg-[#ffffff4d] lg:h-7 lg:w-7 h-[9rem] w-[9rem] lg:text-xs text-[3.5rem] font-bold rounded-full flex items-center justify-center duration-300 ${style.SocialIcons}`}>{item.ic3}</div>
              </div>
            </div>
        ))}
      </div>

      <div className="relative lg:w-[25%]">
        <h1 className="playfair-display lg:text-[1.5rem] text-[5rem] text-zinc-100 lg:tracking-tighter mb-4">Quick Links</h1>
        <div className="flex flex-col lg:gap-0 gap-14">
          {[{ic: <FiChevronsRight />, text:'Home', url:'/home'}, {ic: <FiChevronsRight />, text:'About Us',url:'/about'}, {ic: <FiChevronsRight />, text:'The Leopard Hill Restro', url:'/restro'}, {ic: <FiChevronsRight />, text:'The Royale Yards Resort', url:'/resort'}, {ic: <FiChevronsRight />, text:'Water Park', url:'/waterPark'}, {ic: <FiChevronsRight />, text:'Contact', url:'/contactUs'}, {ic: <FiChevronsRight />, text:'Terms and conditions', url:'/termsAndCondition'}, {ic: <FiChevronsRight />, text:'Privacy policy', url:'/privacyPolicy'}].map((item, index)=>(
            <div key={index} className="w-fit lg:font-medium font-light flex gap-1 cursor-pointer hover:text-[#CC8C18] group" onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={() => handleMouseLeave(index)}>
              <div className="relative top-3 lg:text-sm text-6xl" ref={el => iconRefs.current[index] = el}>{item.ic}</div>
              <a href={item.url}>
              <h1 className={`lg:text-sm text-[3.5rem] lg:leading-10 group-hover:translate-x-2 group-hover:duration-300 transition-transform`}>{item.text}</h1>
              </a>
            </div>
          ))}
        </div>
      </div>
      
      <div className="relative lg:w-[20%]">
        <h1 className="playfair-display lg:text-[1.5rem] text-[6rem] text-zinc-100 tracking-tighter mb-4">Services</h1>
        <div className="flex flex-col lg:gap-0 gap-14 lg:font-medium font-light">
          {[{ic: <FiChevronsRight />, text:'Restaurant', url:'/restro'}, {ic: <FiChevronsRight />, text:'Adventure Park',}, {ic: <FiChevronsRight />, text:'Govardhan Hall', url:'/gallery'}, {ic: <FiChevronsRight />, text:'Conference Room',url:'/gallery'}, {ic: <FiChevronsRight />, text:'Events', url:'/gallery'}, {ic: <FiChevronsRight />, text:'Atari Cottages', url:'/restro'}].map((item, index)=>(
            <div key={index} className="w-fit flex gap-2 cursor-pointer hover:text-[#CC8C18] group" onMouseEnter={() => handleMouseEnter1(index)} onMouseLeave={() => handleMouseLeave1(index)}>
              <div className="relative top-3 lg:text-sm text-6xl" ref={el1 => icon1Refs.current[index] = el1}>{item.ic}</div>
              <a href={item.url}>
              <h1 className="lg:text-sm text-[3.5rem] lg:leading-10 group-hover:translate-x-2 group-hover:duration-300 transition-transform">{item.text}</h1>
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="relative lg:w-[20%]">
        <h1 className="playfair-display lg:text-[1.5rem] text-[5rem] text-zinc-100 lg:tracking-tighter mb-4">Contact Info</h1>
        <div className="flex flex-col lg:gap-0 gap-10">
          {[{ic: <IoLocationSharp />, text1:'Address', text2:'Sahara bypass road, katara hills extention, Bhopal, Madhya Pradesh 462022'}, {ic: <FaPhoneAlt />, text1:'Phone', text2:'+91 91114 79109'}, {ic: <IoMdMail />, text1:'Email', text2:'info@fourlakes.in'}].map((item, index)=>(
            <div key={index} className="flex lg:gap-2 gap-8">
              <div className="relative lg:top-1 top-5 lg:text-xl text-7xl">{item.ic}</div>
              <div className="flex flex-col lg:gap-2 gap-5">
              <h1 className="playfair-display lg:text-[1.1rem] text-[4.5rem]">{item.text1}</h1>
              <p className="lg:text-sm text-[3.5rem] lg:leading-7 lg:font-normal font-light ">{item.text2}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>

      <div className="absolute lg:top-[37rem] top-[288rem] flex lg:flex-row lg:gap-0 flex-col items-center text-zinc-100 lg:ml-28 lg:mr-14 ml-20 mr-20 lg:border-t border-t-4 border-zinc-700 py-5 lg:text-sm text-[3.9rem] lg:font-medium font-light">
        <h1 className="lg:mr-[30rem]">Copyright @2024 <a href='/home' className="hover:text-[#CC8C18] duration-500">Four Lakes</a>. All Rights Reserved</h1>
          <div className="flex">
          <h1 className="lg:mr-2 mr-10">Designed By</h1>
          <div className={`relative lg:top-1 top-5 text-[#CC8C18] ${style.heart} `}><FaRegHeart/></div>
          <a className="lg:ml-2 ml-10 text-[#CC8C18]" href="https://www.linkedin.com/in/amit-sharma-498757250/" target="_blank">Amit Sharma</a>
          </div>
      </div>
    </div>
  );
}

export default Footer;
