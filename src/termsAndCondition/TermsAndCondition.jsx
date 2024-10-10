import React from 'react'
import FrontPage from '../CommonComponents/FrontPage'
import HotelRules from './HotelRules'
import City from '../Components/City'
import Testimonials from '../Components/Testimonials'
import Footer from '../Components/Footer'

function TermsAndCondition() {
  return (
    <div>
      <FrontPage
        imgUrl="https://fourlakes.in/assets//images/slider/slider1.jpg"
        firstHead="Terms and Conditions"
        secondHead="Home"
        url='/home'
        thirdHead="Terms and conditions"
        customClassImg="h-[125vh] -top-[9.2rem]"
        customClassDiv="h-[76vh]"
        customClassHeadDiv="absolute z-50 top-[11.9rem]"
      />

      <HotelRules/>
      <City customClass='mt-1' />
      <Testimonials customClass='mt-24 mb-28'/>
      <Footer/>

    </div>
  )
}

export default TermsAndCondition
