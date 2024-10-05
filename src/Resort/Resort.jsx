import React from "react";
import FrontPage from "../CommonComponents/FrontPage";
import ForLakesWaterPark from "../CommonComponents/ForLakesWaterPark";
import { Para4 } from "../About/Content";
import OurGallery from "../CommonComponents/OurGallery";
import Footer from "../Components/Footer";

function Resort() {
  const ourGalleryData = [
    {img:'https://fourlakes.in/assets/images/royal_yard/resort-2.jpg'},
    {img:'https://fourlakes.in/assets/images/royal_yard/resort-3.jpg'},
    {img:'https://fourlakes.in/assets/images/royal_yard/resort-4.jpg'},
    {img:'https://fourlakes.in/assets/images/royal_yard/resort-5.jpg'},
    {img:'https://fourlakes.in/assets/images/royal_yard/resort-6.jpg'},
    {img:'https://fourlakes.in/assets/images/royal_yard/resort-12.jpg'},
    {img:'https://fourlakes.in/assets/images/royal_yard/resort-13.jpg'},
    {img:'https://fourlakes.in/assets/images/royal_yard/resort-9.jpg'},
    {img:'https://fourlakes.in/assets/images/royal_yard/resort-10.jpg'},
    {img:'https://fourlakes.in/assets/images/royal_yard/resort-11.jpg'},
    {img:'https://fourlakes.in/assets/images/royal_yard/resort-12.jpg'},
    {img:'https://fourlakes.in/assets/images/royal_yard/resort-13.jpg'}  
  ]
  return (
    <div className="absolute top-24">
      <FrontPage
        imgUrl="https://fourlakes.in/assets/images/royal_yard/resort-1.jpg"
        firstHead="The Royal Yard Resort"
        customClassImg="h-[120vh] -top-[14.6rem]"
        customClassDiv="h-[63.5vh]"
        customClassFirstHead="relative top-12"
      />

      <ForLakesWaterPark
        Head1="Enjoy at Resort"
        Head2="Four Lake - Resort"
        para={Para4}
        title='Discover More'
        url='/About'
        customClassBtn='w-[12rem]'
        img="https://fourlakes.in/assets/images/royal_yard/royal_yard-2.jpg"
        customClassHead1="text-[0.9rem]"
        customClassHead2="text-[2rem]"
        customClassImg="relative top-40"
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

export default Resort;
