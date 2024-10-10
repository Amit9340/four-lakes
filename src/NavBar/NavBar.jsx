import React from "react";
import Button from "../Components/Button";
import style from "../Components/style.module.css";
import {BrowserRouter as Router, Routes, Route, NavLink} from 'react-router-dom';
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

function NavBar() {
  const data = [
    { text: "Home", path: "/home.jsx", Component: <Homes /> },
    { text: "About Us", path: "/about", Component: <AboutUs /> },
    { text: "Water Park", path: "/waterPark", Component: <WaterPark /> },
    { text: "Hotel", path: "/hotel", Component: <Hotel /> },
    { text: "Resort", path: "/resort", Component: <Resort /> },
    { text: "Restro", path: "/restro", Component: <Restro /> },
    { text: "Gallery", path: "/gallery", Component: <Gallery /> },
    { text: "Contact Us", path: "/contactUs", Component: <Contact /> },
    { path: "/termsAndCondition", Component: <TermsAndCondition /> },
      { path: "/privacyPolicy", Component: <PrivacyPolicy /> }
  ];
  return (
      <div
      className={`Nav fixed ${style.navZIndex} h-[6.8rem] w-full bg-[#fff] flex items-center shadow-md shadow-[#888888]`}
    >
      <div className="flex items-center gap-28 ml-24">
        <a href={'/Home'}>
        <img
          className=" h-[6.8rem] w-[6.8rem] ml-[1.3rem]"
          src="https://fourlakes.in/assets/img/mobile-manu-logo.png"
          alt="This is logo!"
        />
        </a>
        
        <div className='flex items-center gap-5 ml-[0.17rem] text-md'>
        {data.map((item, index)=>(
          <NavLink key={index} className=' hover:text-[#244170]'
          style={(e)=>{
      return {
        color : e.isActive ? "#CC8C18" : "",
        }}}
        to={item.path}> {item.text} </NavLink>
        ))}
        </div>
      </div>
      <div className="ml-[0.65rem]"><Button url={"https://fourlakes.in/assets/img/page-1-merged_compressed.pdf"} /></div>
    </div>
  );
}

export default NavBar;
