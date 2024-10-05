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
    <div className='app poppins-medium'>
      <div>
        <div className='h-[3.7rem] w-[3.7rem] rounded-full flex items-center justify-center text-4xl text-zinc-100 shadow-md shadow-[#B5B5B5] left-4 fixed top-[30rem] z-20 bg-[#13BFFD]'><IoCall/></div>
        <div className='h-[3.7rem] w-[3.7rem] rounded-full flex items-center justify-center text-4xl text-zinc-100 shadow-md shadow-[#B5B5B5] right-4 fixed top-[30rem] z-20 bg-[#25D366]'><FaWhatsapp/></div>
        <div onClick={scrollToTop} className='arrow h-10 w-10 flex items-center justify-center text-lg text-zinc-100 right-4 fixed top-[34.5rem] z-20 bg-[#24416B]'><div className='childArrow'><MdOutlineKeyboardDoubleArrowUp/></div></div>
      </div>
      <Router>
      <NavBar />
      <Routing />
    </Router>
    </div>
  )
}

export default App

