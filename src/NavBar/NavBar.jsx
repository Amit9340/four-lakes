import React, { useEffect, useRef, useState } from "react";
import Button from "../Components/Button";
import style from "../Components/style.module.css";
import {BrowserRouter as Router, Routes, Route, NavLink, useLocation} from 'react-router-dom';
import Homes from "../Components/Homes";
import AboutUs from "../About/About";
import WaterPark from "../WaterPark/WaterPark";
import Hotel from "../Hotel/Hotel";
import Resort from "../Resort/Resort";
import Restro from "../Restro/Restro";
import Gallery from "../Gallery/Gallery";
import Contact from "../Contact/Contact";
import TermsAndCondition from "../termsAndCondition/TermsAndCondition";
import PrivacyPolicy from '../privacyPolicy/PrivacyPolicy';
import { IoMenu } from "react-icons/io5";

function NavBar() {

  const [isOpen, setisOpen] = useState(false);
  const toggleMenu = () => {
    setisOpen(!isOpen);
  }

  const menuRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        menuRef.current,
        { height: 0, opacity: 1 },
        { height: "73rem", opacity: 1, duration: 0.7, ease: "power3.out" }
      )} 
  }, [isOpen]);

  const data = [
    { text: "Home", path: "/home.jsx", Component: <Homes /> },
    { text: "About Us", path: "/about", Component: <AboutUs /> },
    { text: "Water Park", path: "/waterPark", Component: <WaterPark /> },
    { text: "Hotel", path: "/hotel", Component: <Hotel /> },
    { text: "Resort", path: "/resort", Component: <Resort /> },
    { text: "Restro", path: "/restro", Component: <Restro /> },
    { text: "Gallery", path: "/gallery", Component: <Gallery /> },
    { text: "Contact Us", path: "/contactUs", Component: <Contact /> }
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    });
  }

  return (
      <div
      className={`Nav lg:h-[6.8rem] h-[18rem] fixed ${style.navZIndex} w-full bg-[#fff] flex items-center p-12 shadow-md shadow-[#888888]`}
    >

      <div className="lg:flex lg:items-center lg:gap-28 lg:ml-12">
      
        <a href={'/Home'}>
        <img
          className="h-[32rem] w-[32rem] lg:h-[6.8rem] lg:w-[6.8rem] lg:ml-[1.3rem]"
          src="https://fourlakes.in/assets/img/mobile-manu-logo.png"
          alt="This is logo!"
        />
        </a>
        
        <div className='hidden lg:flex lg:items-center lg:gap-5 lg:ml-[0.17rem] lg:text-md'>
        {data.map((item, index)=>(
          <NavLink onClick={scrollToTop} key={index} className=' hover:text-[#244170]'
          style={(e)=>{
      return {
        color : e.isActive ? "#CC8C18" : "",
        }}}
        to={item.path}> {item.text} </NavLink>
        ))}
        </div>
    
      <div className="hidden lg:flex lg:absolute lg:ml-[55.9rem]"><Button url={"https://fourlakes.in/assets/img/page-1-merged_compressed.pdf"} /></div>
      </div>

      <div className="menu fixed ml-[90rem] text-[11rem] text-[#cc8c18] lg:hidden" onClick={toggleMenu}>{isOpen? <div className="text-[6rem] font-semibold -mt-10 ml-10">x</div> : <IoMenu/>}</div>

      {/* navbar for mobile devices */}

      <div ref={menuRef} className={`menu mobileNav lg:hidden fixed ${style.navZIndex} h-[73rem] w-[400vw] bg-[#fff] flex items-center shadow-md shadow-[#888888] top-[18rem] -ml-11 overflow-scroll ${isOpen? "flex" : "hidden"}`}>
        <div className='lg:hidden relative top-[15.4rem] w-[400vw] flex flex-col gap-10 text-6xl text-black font-normal opacity-60 text-center'>
        {data.map((item, index)=>(
          <NavLink onClick={() => {
        scrollToTop();
        setIsOpen(!isOpen);
      }} key={index} className=' hover:text-[#244170] pt-14 pb-14 border-t border-t-black'
          style={(e)=>{
      return {
        color : e.isActive ? "#CC8C18" : "",
        }}}
        to={item.path}> {item.text} </NavLink>
        ))}
        </div>
    
      <div className="w-full flex absolute mt-[150rem] justify-center"><Button title="E-Brochure" url={"https://fourlakes.in/assets/img/page-1-merged_compressed.pdf"} customClass1='h-[13rem] w-[64rem] text-[6rem]' /></div>
      </div>
    </div>
  );
}

export default NavBar;
