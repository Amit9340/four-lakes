import React from 'react'
import Slider from '../Components/Slider'
import About from '../Components/About'
import Featured from '../Components/Featured'
import Galleries from '../Components/Galleries'
import City from '../Components/City'
import Booking from '../Components/Booking'
import Marquees from '../Components/Marquees'
import Testimonials from '../Components/Testimonials'
import ContactUs from '../Components/ContactUs'
import Footer from '../Components/Footer'

function Homes() {
  return (
    <div className='poppins-medium'>
      <Slider />
      <About/>
      <Featured/>
      <Galleries/>
      <City/>
      <Booking/>
      <Marquees/>
      <Testimonials/>
      <ContactUs/>
      <Footer/>
      
    </div>
  )
}

export default Homes
