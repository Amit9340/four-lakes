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
        customClassDiv="lg:h-[63.5vh] h-[81rem]"
        customClassImg="lg:h-[125vh] h-[63rem] scale-[1.45] lg:-top-[14.5rem] top-[7.5rem]"
        customClassFirstHead="relative lg:top-11 top-44 lg:text-[2.41rem] text-[7rem]"
        customClassthirdHead='hidden'
      />

      <ForLakesWaterPark
        Head1="Enjoy at Resort"
        Head2="Four Lake - Resort"
        para={Para4}
        title='Discover More'
        url='/About'
        customClass='lg:h-[115vh] h-[545vh]'
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
