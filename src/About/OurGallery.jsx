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
    <div className={`mt-40 flex flex-col gap-16 mb-36 ${customClass1}`}>
      <HeadElem title1="OUR GALLERY" title2="Captured Moments In Four Lake" />

      <div>
        {data.map((item, index) => (
          <div key={index} className="flex flex-col gap-10 items-center">
            {item.text && (
                <h1 className="mt-8 -mb-7 playfair-display text-[2rem] leading-tight font-extrabold text-[#24416B]">{item.text}</h1>
            )}
            <div className="flex flex-col gap-7">
              <div className="flex items-center justify-center gap-6">
                <div className="w-[22rem] overflow-hidden" ><img className=" h-[23.25rem]  w-[24rem] object-cover" src={item.img1} alt="" /></div>
                <div className="w-[22rem] overflow-hidden" ><img className=" h-[23.25rem]  w-[24rem] object-cover" src={item.img2} alt="" /></div>
                <div className="w-[22rem] overflow-hidden" ><img className=" h-[23.25rem]  w-[24rem] object-cover" src={item.img3} alt="" /></div>
              </div>
              {index===2 && (
                <div className="flex gap-6">
                <div className="w-[22rem] overflow-hidden"><img className=" h-[23.25rem]  w-[24rem] object-cover" src={item.img4} alt="" /></div>
                <div className="w-[22rem] overflow-hidden"><img className=" h-[23.25rem]  w-[24rem] object-cover" src={item.img5} alt="" /></div>
                <div className="w-[22rem] overflow-hidden"><img className=" h-[23.25rem]  w-[24rem] object-cover" src={item.img6} alt="" /></div>
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
