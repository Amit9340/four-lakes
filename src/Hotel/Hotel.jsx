import React from "react";
import FrontPage from "../CommonComponents/FrontPage";
import ForLakesWaterPark from "../CommonComponents/ForLakesWaterPark";
import { Para3 } from "../About/Content";
import OurGallery from "../CommonComponents/OurGallery";
import Footer from "../Components/Footer";

function Hotel() {
  const ourGalleryData = [
    { img: "https://fourlakes.in/assets/images/hotel/hotel-3.jpg" },
    { img: "https://fourlakes.in/assets/images/hotel/hotel-4.jpg" },
    { img: "https://fourlakes.in/assets/images/hotel/hotel-5.jpg" },
    { img: "https://fourlakes.in/assets/images/hotel/hotel-6.jpg" },
    { img: "https://fourlakes.in/assets/images/hotel/hotel-7.jpg" },
    { img: "https://fourlakes.in/assets/images/hotel/hotel-8.jpg" },
    { img: "https://fourlakes.in/assets/images/hotel/hotel-9.jpg" },
    { img: "https://fourlakes.in/assets/images/hotel/hotel-10.jpg" },
    { img: "https://fourlakes.in/assets/images/hotel/hotel-11.jpg" },
    { img: "https://fourlakes.in/assets/images/hotel/hotel-12.jpg" },
    { img: "https://fourlakes.in/assets/images/hotel/hotel-13.jpg" },
    { img: "https://fourlakes.in/assets/images/hotel/hotel-14.jpg" },
  ];
  return (
    <div className="absolute top-24">
      <FrontPage
        firstHead="Hotel (Comming Soon)"
        imgUrl="https://fourlakes.in/assets/images/hotel/hotel-1.jpg"
        customClassDiv="h-[63.5vh]"
        customClassImg="h-[145vh] -top-[18.3rem]"
        customClassFirstHead="relative top-10"
      />

      <ForLakesWaterPark
        Head1="Enjoy at Hotel"
        Head2="Four Lake - Hotel"
        para={Para3}
        title='Discover More'
        url="/About"
        customClassBtn="w-[12rem]"
        img="https://fourlakes.in/assets/images/hotel/hotel-2.jpg"
        customClassHead2="text-[2rem]"
        customClassImg="relative top-28"
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

export default Hotel;
