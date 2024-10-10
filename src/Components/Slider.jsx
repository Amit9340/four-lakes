import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useState } from "react";
import { FaDiamond } from "react-icons/fa6";
import { TbArrowBigUpFilled } from "react-icons/tb";

function Slider() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleIconClick = (index) => {
    setCurrentImageIndex(index);
  };

  const images = [
    "https://fourlakes.in/assets/images/slider/slider1.jpg",
    "https://fourlakes.in/assets/images/slider/slider2.jpg",
    "https://fourlakes.in/assets/images/slider/slider3.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [images.length]); 

  return (
    <div className="relative">
      <div className="absolute top-[31.5rem] text-zinc-100 text-xl h-20 w-full z-50 flex justify-center items-center gap-3">
        {images.map((_, index) => (
          <div key={index} onClick={() => handleIconClick(index)} className="cursor-pointer">
            {currentImageIndex === index ? 
            (<TbArrowBigUpFilled className="text-[#CC8C18] text-2xl" />) : (<FaDiamond />)}
          </div>
        ))}
      </div>
      <div className="Slider relative top-20">
       {images.map((elem, index) => (
          <img 
          key={index} 
          className={`w-screen h-screen object-cover absolute ${
              currentImageIndex === index ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
           src={elem}
           />))}
      </div>

      <div className="bg-black h-[113.4vh] w-full z-10 absolute opacity-30"></div>
  </div>
  );
}

export default Slider;
