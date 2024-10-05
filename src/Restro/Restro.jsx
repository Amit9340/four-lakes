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
        customClassImg="h-[120vh] -top-[14.6rem]"
        customClassDiv="h-[63.5vh]"
        customClassFirstHead="relative top-12"
      />

      <ForLakesWaterPark
        Head1="Enjoy at The Leopard Hill Restro"
        Head2="FourLakes - The Leopard Hill Restro"
        para={Para5}
        url='/contactUs'
        title='Contact Us'
        img="https://fourlakes.in/assets/images/leopard_restro/restro-1.jpg"
        customClassHead1="text-[0.9rem]"
        customClassHead2="text-[1.9rem] w-[101%]"
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
