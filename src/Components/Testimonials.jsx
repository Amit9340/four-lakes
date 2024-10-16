import React from 'react'
import HeadElem from './HeadElem'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { FaStar } from "react-icons/fa";

function Testimonials({customClass=''}) {
  // useGSAP(()=>{
  //   gsap.to('.box',{
  //     x:-100,
  //     ease:"linear",
  //     duration:5,
  //     delay:1,
  //     // repeat:1
  //   })
  // })
    const data = [
      {imgStar1:<FaStar/>, imgStar2:<FaStar/>, imgStar3:<FaStar/>, imgStar4:<FaStar/>, imgStar5:<FaStar/>, text1:"Excellent hotel", para1:"My family and I recently spent a memorable weekend at Four Lakes Hotel and Resort. From the moment we checked in, we were blown away by the stunning surroundings and the warm welcome we received.", img2:"https://fourlakes.in/assets/img/testimonials/2.jpg", text2:"Nikhil Sharma", para2:"Guest", img3:"https://fourlakes.in/assets/img/testimonials/testimonials-bg.png"},

        {imgStar1:<FaStar/>, imgStar2:<FaStar/>, imgStar3:<FaStar/>, imgStar4:<FaStar/>, imgStar5:<FaStar/>,  text1:"Beautiful View", para1:"As an avid nature enthusiast, my stay at Four Lakes Hotel and Resort was a dream come true. The natural beauty and serenity of the four lakes and surrounding forests were awe-inspiring.", img2:"https://fourlakes.in/assets/img/testimonials/3.jpg", text2:"Shrikant Patel", para2:"Guest", img3:"https://fourlakes.in/assets/img/testimonials/testimonials-bg.png"},

        {imgStar1:<FaStar/>, imgStar2:<FaStar/>, imgStar3:<FaStar/>, imgStar4:<FaStar/>, imgStar5:<FaStar/>,  text1:"Nice Service", para1:"I recently celebrated my wedding anniversary at Four Lakes Hotel and Resort, and it was a magical experience.We also enjoyed a couples', The romantic setting, with the lakeside gazebo spa day and fine dining at their restaurant.", img2:"https://fourlakes.in/assets/img/testimonials/1.jpg", text2:"Abhinav Joshi", para2:"Guest", img3:"https://fourlakes.in/assets/img/testimonials/testimonials-bg.png"},

    ]
  return (
    <div className={`h-[110%] lg:max-w-screen-xl lg:mx-auto w-[400vw] ${customClass}`}>
      <HeadElem title1="Testimonials" title2="What customers say" />

      <div className='relative h-[80%] lg:max-w-screen-lg lg:mx-auto w-[400vw] flex lg:gap-10 lg:flex-row flex-col gap-32 justify-between items-center mt-14'>
        {data.map((item, index)=>(
            <div key={index} className='box flex'>
            <img className='lg:h-[26.5rem] lg:w-[20rem] h-[108rem] w-[108rem]' src={item.img3} alt="" />
            <div className='lg:h-[26.5rem] lg:w-[20rem] h-[90rem] w-[85rem] flex flex-col justify-between items-center gap-5 relative top-0 p-5 lg:-ml-[18.7rem] lg:mt-0 -ml-[92rem] mt-32'>
                <div className='flex text-[#F4A708] lg:text-lg text-[5rem] gap-1'>
                  {item.imgStar1}
                  {item.imgStar2}
                  {item.imgStar3}
                  {item.imgStar4}
                  {item.imgStar5}
                </div>
                <h1 className='playfair-display lg:text-[1.3rem] text-[6rem] tracking-tight font-extrabold text-[#24416B]'>{item.text1}</h1>
                <p className='text-[#756d6e] lg:leading-8 lg:tracking-wide lg:text-[0.78rem] text-[4rem]'>{item.para1}</p>
                <div className='flex gap-8'>
                    <img className='lg:h-12 lg:w-12 h-52 w-52 rounded-full' src={item.img2} alt="" />
                    <div>
                    <h1 className='playfair-display lg:text-[1.3rem] text-[5rem] tracking-tight font-extrabold text-[#24416B]'>{item.text2}</h1>
                    <p className='text-[#756d6e] lg:leading-7 lg:text-[0.932rem] text-[4rem]'>{item.para2}</p>
                    </div>
                </div>
            </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonials
""