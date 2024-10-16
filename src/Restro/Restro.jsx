import React from 'react'
import FrontPage from "../CommonComponents/FrontPage";
import ForLakesWaterPark from "../CommonComponents/ForLakesWaterPark";
import { Para5 } from "../About/Content";
import OurGallery from "../CommonComponents/OurGallery";
import Footer from "../Components/Footer";
function Restro() {
  const ourGalleryData = [
    {img:'https://fourlakes.in/assets/images/leopard_restro/restro-3.jpg'},
    {img:'https://fourlakes.in/assets/images/leopard_restro/restro-4.jpg'},
    {img:'https://fourlakes.in/assets/images/leopard_restro/restro-5.jpg'},
    {img:'https://fourlakes.in/assets/images/leopard_restro/restro-6.jpg'},
    {img:'https://fourlakes.in/assets/images/leopard_restro/restro-7.jpg'},
    {img:'https://fourlakes.in/assets/images/leopard_restro/restro-8.jpg'},
    {img:'https://fourlakes.in/assets/images/leopard_restro/restro-9.jpg'},
    {img:'https://fourlakes.in/assets/images/leopard_restro/restro-10.jpg'},
    {img:'https://fourlakes.in/assets/images/leopard_restro/restro-11.jpg'},
    {img:'https://fourlakes.in/assets/images/leopard_restro/restro-12.jpg'},
    {img:'https://fourlakes.in/assets/images/leopard_restro/restro-13.jpg'},
    {img:'https://fourlakes.in/assets/images/leopard_restro/restro-14.jpg'},  
    {img:'https://fourlakes.in/assets/images/leopard_restro/restro-15.jpg'}, 
    {img:'https://fourlakes.in/assets/images/leopard_restro/restro-16.jpg'}
  ]
  return (
    <div className="absolute top-24">
      <FrontPage
        imgUrl="https://fourlakes.in/assets/images/leopard_restro/restro-2.jpg"
        firstHead="The Leopard Hill Restro"
        customClassDiv="lg:h-[63.5vh] h-[93rem]"
        customClassImg="lg:h-[125vh] h-[90rem] scale-[1.65] lg:-top-[14.5rem] top-[14rem]"
        customClassFirstHead="relative lg:top-11 top-44 lg:text-[2.4rem] text-[9rem]"
        customClassthirdHead='hidden'
      />

      <ForLakesWaterPark
        Head1="Enjoy at The Leopard Hill Restro"
        Head2="FourLakes - The Leopard Hill Restro"
        para={Para5}
        url='/contactUs'
        title='Contact Us'
        img="https://fourlakes.in/assets/images/leopard_restro/restro-1.jpg"
        customClass='lg:h-[115vh] h-[585vh]'
        customClassHead1="text-[0.9rem]"
        customClassHead2="text-[5rem]"
        customClassImg="relative top-24"
      />

      <OurGallery
        data={ourGalleryData}
        Head1="OUR GALLERY"
        Head2="Captured Moments In Four Lake"
      />

      <Footer />
    </div>
  )
}

export default Restro
