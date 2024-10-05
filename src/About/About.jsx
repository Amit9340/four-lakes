import React from "react";
import Featured from "../Components/Featured";
import Galleries from "../Components/Galleries";
import OurGallery from "./OurGallery";
import City from "../Components/City";
import Testimonials from "../Components/Testimonials";
import Footer from "../Components/Footer";
import FrontPage from "../CommonComponents/FrontPage";
import ForLakesWaterPark from "../CommonComponents/ForLakesWaterPark";
import { Para1 } from "./Content";

function About() {
  return (
    <div className="absolute top-24">
      <FrontPage
        imgUrl="https://fourlakes.in/assets//images/slider/slider1.jpg"
        firstHead="About Us"
        secondHead="Home"
        url='/Home'
        thirdHead="About Us"
      />
      <ForLakesWaterPark
        Head1="WELCOME TO FOUR LAKES"
        Head2="Explore, Relax, Indulge: Your FourLakes Experience Awaits"
        para={Para1}
        url='/contactUs'
        title='Contact Us'
        img="https://fourlakes.in/assets/images/about_home.jpg"
        customClassImg="relative top-24"
      />
      <Featured customClass="relative -mt-0" />
      <Galleries />
      <OurGallery />
      <City />
      <Testimonials customClass="relative top-24" />
      <Footer customClass="relative top-56" />
    </div>
  );
}

export default About;
