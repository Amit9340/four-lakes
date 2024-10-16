import React from 'react'
import NavBar from './NavBar/NavBar'
import Routing from './NavBar/Routing'
import {BrowserRouter as Router} from 'react-router-dom';
import { IoCall } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa6";
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


function App() {
  
  useGSAP(()=>{
    gsap.from(".arrow", {
      y:-200,
      opacity: 0 ,
      duration:1,
    })
    gsap.from(".childArrow", {
      y:10,
      opacity:0,
      duration:1,
      repeat:-1
    })
  })

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
    <div className='app poppins-medium w-[400vw] lg:w-full'>
      <div className='w-full fixed z-20 lg:pl-2 pl-24 lg:pr-5 pr-10 top-[176rem] lg:top-[29.5rem]'>
      <div className='flex justify-between'>
        <div className='callIcon h-[12rem] w-[12rem] text-8xl lg:h-[3.7rem] lg:w-[3.7rem] lg:text-4xl rounded-full flex items-center justify-center text-zinc-100 shadow-md shadow-[#B5B5B5] left-4 z-20 bg-[#13BFFD]'><IoCall/></div>
        <div className='whatsappIcon h-[12rem] w-[12rem] text-8xl lg:h-[3.7rem] lg:w-[3.7rem] lg:text-4xl rounded-full flex items-center justify-center text-zinc-100 shadow-md shadow-[#B5B5B5] right-4 z-20 bg-[#25D366]'><FaWhatsapp/></div>
      </div>
      <div className='flex justify-end lg:mt-5 mt-10'>
      <div onClick={scrollToTop} className='arrow lg:h-10 lg:w-10 lg:text-lg h-[9rem] w-[9rem] text-7xl flex items-center justify-center text-zinc-100 left-60 top-[48rem] z-20 bg-[#24416B]'>
        <div className='childArrow'><MdOutlineKeyboardDoubleArrowUp/></div>
      </div>
      </div>
      </div>
      <Router>
      <NavBar />
      <Routing />
    </Router>
    </div>
  )
}

export default App

