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
        customClassImg="h-[150vh] -top-[19.2rem]"
        customClassDiv="h-[63.5vh]"
        customClassFirstHead="relative top-12"
      />

      <ForLakesWaterPark
        Head1="Enjoy at waterpool"
        Head2="Four Lake - Water Park"
        para={Para2}
        title='Discover More'
        url="/About"
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
