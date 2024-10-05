import React from "react";
import { FaDiamond } from "react-icons/fa6";

function Slider() {
  return (
    <div className="relative">
      <div className="absolute top-[32rem] text-zinc-100 text-xl h-20 w-full z-50 flex justify-center items-center gap-5">
      <FaDiamond />
      <FaDiamond />
      <FaDiamond />
      </div>
      <div className="Slider relative top-20">
        {["https://fourlakes.in/assets/images/slider/slider3.jpg", "https://fourlakes.in/assets/images/slider/slider2.jpg", "https://fourlakes.in/assets/images/slider/slider1.jpg",].map((elem, index) => (
          <img key={index} className=" w-screen h-screen object-cover absolute" src={elem}/>))}
      </div>

      <div className="bg-black h-[113.4vh] w-full absolute opacity-30"></div>
  </div>
  );
}

export default Slider;
