import React from 'react'
import FrontPage from '../CommonComponents/FrontPage'
import OurGallery from '../About/OurGallery'
import Footer from '../Components/Footer'

function Gallery() {
  return (
    <div className='absolute top-24'>
      <FrontPage url='/Home' imgUrl='https://fourlakes.in/assets//images/slider/slider1.jpg' firstHead='Gallery' secondHead='Home' thirdHead='Gallery' />

      <OurGallery customClass1='relative lg:-top-16 -top-48'/>
      
      <Footer/>
    </div>
  )
}

export default Gallery
