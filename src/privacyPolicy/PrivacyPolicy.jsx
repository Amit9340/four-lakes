import React from 'react'
import FrontPage from '../CommonComponents/FrontPage'
import HotelRules from '../termsAndCondition/HotelRules'
import City from '../Components/City'
import Testimonials from '../Components/Testimonials'
import Footer from '../Components/Footer'
import CheckInPolicy from './CheckInPolicy'

function PrivacyPolicy() {
  return (
    <div>
      <FrontPage
        imgUrl="https://fourlakes.in/assets//images/slider/slider1.jpg"
        firstHead="Privacy Policy"
        secondHead="Home"
        url='/home'
        thirdHead="Privacy Policy"
        customClassImg="h-[125vh] -top-[9.2rem]"
        customClassDiv="h-[76vh]"
        customClassHeadDiv="absolute z-50 top-[12.1rem]"
      />

      <CheckInPolicy/>
      <City customClass='mt-1' />
      <Testimonials customClass='mt-24 mb-28'/>
      <Footer/>
    </div>
  )
}

export default PrivacyPolicy
