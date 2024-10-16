import React from "react";
import HeadElem from "../Components/HeadElem";

function OurGallery( {customClass1=''}) {
  const data = [
    {
      img1: "https://fourlakes.in/assets/images/waterpark/water_park-3.jpg",
      img2: "https://fourlakes.in/assets/images/waterpark/water_park-4.jpg",
      img3: "https://fourlakes.in/assets/images/waterpark/water_park-5.jpg",
    },
    {
      text: "The Leopard Hill",
      img1: "https://fourlakes.in/assets/images/leopard_restro/restro-1.jpg",
      img2: "https://fourlakes.in/assets/images/leopard_restro/restro-2.jpg",
      img3: "https://fourlakes.in/assets/images/leopard_restro/restro-3.jpg",
    },
    {
      text: "The Royale Yard",
      img1: "https://fourlakes.in/assets/images/royal_yard/resort-1.jpg",
      img2: "https://fourlakes.in/assets/images/royal_yard/resort-2.jpg",
      img3: "https://fourlakes.in/assets/images/royal_yard/resort-3.jpg",
      img4: "https://fourlakes.in/assets/images/royal_yard/resort-4.jpg",
      img5: "https://fourlakes.in/assets/images/royal_yard/resort-5.jpg",
      img6: "https://fourlakes.in/assets/images/royal_yard/resort-6.jpg",
    },
  ];
  return (
    <div className={`lg:mt-[11.5rem] mt-[24rem] flex flex-col gap-16 lg:mb-36 mb-56 ${customClass1}`}>
      <HeadElem title1="OUR GALLERY" title2="Captured Moments In Four Lake" />

      <div>
        {data.map((item, index) => (
          <div key={index} className="flex flex-col gap-10 items-center">
            {item.text && (
                <h1 className="lg:mt-8 mt-24 lg:-mb-7 playfair-display lg:text-[2rem] text-[6rem] leading-tight font-extrabold text-[#24416B]">{item.text}</h1>
            )}
            <div className="flex flex-col lg:gap-7 gap-28">
              <div className="flex lg:flex-row flex-col items-center justify-center lg:gap-6 gap-28">
                <div className="lg:w-[22rem] w-[95%] overflow-hidden bg-black" ><img className="lg:h-[23.25rem] lg:w-[24rem] h-[97rem] w-[105rem] object-cover" src={item.img1} alt="" /></div>
                <div className="lg:w-[22rem] w-[95%] overflow-hidden" ><img className="lg:h-[23.25rem] lg:w-[24rem] h-[97rem] w-[105rem] object-cover" src={item.img2} alt="" /></div>
                <div className="lg:w-[22rem] w-[95%] overflow-hidden" ><img className="lg:h-[23.25rem] lg:w-[24rem] h-[97rem] w-[105rem] object-cover" src={item.img3} alt="" /></div>
              </div>
              {index===2 && (
                <div className="flex lg:flex-row flex-col lg:gap-6 gap-28 lg:w-full w-[95%] mx-auto">
                <div className="lg:w-[22rem] w-full overflow-hidden"><img className="lg:h-[23.25rem] lg:w-[24rem] h-[97rem] w-[105rem] object-cover" src={item.img4} alt="" /></div>
                <div className="lg:w-[22rem] w-full overflow-hidden"><img className="lg:h-[23.25rem] lg:w-[24rem] h-[97rem] w-[105rem] object-cover" src={item.img5} alt="" /></div>
                <div className="lg:w-[22rem] w-full overflow-hidden"><img className="lg:h-[23.25rem] lg:w-[24rem] h-[97rem] w-[105rem] object-cover" src={item.img6} alt="" /></div>
              </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurGallery;
