import React from "react";
import FrontPage from "../CommonComponents/FrontPage";
import ForLakesWaterPark from "../CommonComponents/ForLakesWaterPark";
import { Para2 } from "../About/Content";
import OurGallery from "../CommonComponents/OurGallery";
import Footer from "../Components/Footer";

function WaterPark() {
  const ourGalleryData = [
    { img: "https://fourlakes.in/assets/images/waterpark/water_park-4.jpg" },
    { img: "https://fourlakes.in/assets/images/waterpark/water_park-5.jpg" },
    { img: "https://fourlakes.in/assets/images/waterpark/water_park-6.jpg" },
    { img: "https://fourlakes.in/assets/images/waterpark/water_park-7.jpg" },
    { img: "https://fourlakes.in/assets/images/waterpark/water_park-1.jpg" },
    { img: "https://fourlakes.in/assets/images/waterpark/water_park-8.jpg" },
    { img: "https://fourlakes.in/assets/images/waterpark/water_park-9.jpg" },
    { img: "https://fourlakes.in/assets/images/waterpark/water_park-10.jpg" },
    { img: "https://fourlakes.in/assets/images/waterpark/water_park-11.jpg" },
    { img: "https://fourlakes.in/assets/images/waterpark/water_park-12.jpg" },
    { img: "https://fourlakes.in/assets/images/waterpark/water_park-13.jpg" },
    { img: "https://fourlakes.in/assets/images/waterpark/water_park-14.jpg" },
  ];
  return (
    <div className="absolute top-24">
      <FrontPage
        imgUrl="https://fourlakes.in/assets/images/waterpark/water_park-4.jpg"
        firstHead="Water Park"
        customClassImg="lg:h-[145vh] h-[156vh] scale-[1.04] lg:-top-[18.04rem] -top-[3rem]"
        customClassDiv="lg:h-[62vh] h-[152vh]"
        customClassFirstHead="relative lg:top-12 top-36"
        customClassthirdHead='hidden'
      />

      <ForLakesWaterPark
        Head1="Enjoy at waterpool"
        Head2="Four Lake - Water Park"
        para={Para2}
        title='Discover More'
        url="/About"
        customClass='h-[580vh]'
        customClassBtn="w-[12rem]"
        img="https://fourlakes.in/assets/images/about_home.jpg"
        customClassHead1="text-[1rem]"
        customClassHead2="text-[1.9rem]"
        customClassImg="relative "
      />

      <OurGallery
        data={ourGalleryData}
        Head1="OUR GALLERY"
        Head2="Captured Moments In Four Lake"
      />

      <Footer />
    </div>
  );
}

export default WaterPark;
