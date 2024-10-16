import React from 'react'
import HeadElem from './HeadElem'
import Button from './Button'
import style from './style.module.css'
import { FaRegEnvelope } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { BiLocationPlus } from "react-icons/bi";
import { FiPhoneCall } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";


function ContactUs({customClass1='', data1=null, customClassIcon=''}) {
    const handleClick = () => {
        alert("Thank you for your message. It has been sent."); 
      };
    const data = [
        {icon:<FaRegEnvelope/>, text:'Email Us:', para1:'info@fourlakes.in' },
        {icon:<FaGlobe/>, text:'Social Media Links:', ic1:<FaFacebook/>, ic2:<FaTwitter/>, ic3:<FaLinkedinIn/> },
        {icon:<BiLocationPlus/>, text:'Bhopal', para1:'Sahara bypass road, katara hills extention, Bhopal, MP 462022'},
        {icon:<FiPhoneCall/>, text:'Call Us:', para1:'+91 91 1147 9109', para2:'+91 91568 15340' }
    ]

    const datas = data1 || data
  return (
    <div className={`relative lg:h-[120vh] lg:w-full h-[420rem] w-[400vw] lg:mt-28 mt-80 ${customClass1} overflow-hidden`}>
      <HeadElem title1="Contact Us" title2="Get In Touch" />
      <div className='mt-14 flex lg:flex-row flex-col items-center lg:gap-[2.36rem] gap-[4rem] lg:max-w-screen-xl lg:mx-20'>
        <div className='lg:w-[50%] lg:h-[29rem] w-[99rem] h-[270vh] shadow-xl shadow-[#CFCFCF] flex items-center'>
            <form action="" className='flex flex-col lg:gap-0 gap-[25rem]' onSubmit={handleClick}>
                <div className='flex flex-col lg:gap-10 gap-[38rem] px-12'>
                <div className={`flex lg:flex-row flex-col lg:gap-5 gap-[6rem] ${style.formElem1}`}>
                    <input className={`bg-[#F9F9F9] text-black placeholder-[#9b9595] lg:text-[0.9rem] text-6xl lg:w-[13rem] w-[90rem] lg:p-[1.5rem] p-[4rem] lg:border border-4 border-[#e0dddd] lg:rounded-[0.6rem] rounded-[3rem]`} type="text" placeholder='Your Name' required /> 

                    <input className={`bg-[#F9F9F9] text-black placeholder-[#9b9595] lg:text-[0.9rem] text-6xl lg:w-[13rem] w-[90rem] lg:p-[1.5rem] p-[4rem] lg:border border-4 border-[#e0dddd] lg:rounded-[0.6rem] rounded-[3rem]`} type="email" placeholder='Your Email' required />
                </div>

                <div className={`flex lg:flex-row flex-col lg:gap-5 gap-[6rem] ${style.formElem1}`}>
                    <input className={`bg-[#F9F9F9] text-black placeholder-[#9b9595] lg:text-[0.9rem] text-6xl lg:w-[13rem] w-[90rem] lg:p-[1.5rem] p-[4rem] lg:border border-4 border-[#e0dddd] lg:rounded-[0.6rem] rounded-[3rem]`} type="number" placeholder='Your Phone' required />

                    <input className={`bg-[#F9F9F9] text-black placeholder-[#9b9595] lg:text-[0.9rem] text-6xl lg:w-[13rem] w-[90rem] lg:p-[1.5rem] p-[4rem] lg:border border-4 border-[#e0dddd] lg:rounded-[0.6rem] rounded-[3rem]`} type="text" placeholder='Your Subject' required />
                </div>

                <div className={`flex lg:flex-row flex-col ${style.formElem1} w-[27.5rem] mb-[7rem]`}>
                    <input className={`bg-[#F9F9F9] text-black placeholder-[#9b9595] lg:text-[0.9rem] text-6xl lg:w-[27.5rem] w-[90rem] lg:p-[4rem] p-[12rem] lg:border border-4 border-[#e0dddd] lg:rounded-[0.6rem] rounded-[3rem]`} type="text" placeholder='Your Message' required />
                </div>

                </div>
                <Button title="Send Message" customClass1='lg:w-[12rem] w-[45rem] lg:ml-44 ml-96' />
            </form>
        </div>

        <div className='flex flex-wrap lg:flex-row flex-col items-center lg:w-[60%] w-[400vw] gap-[2.36rem] lg:mt-0 mt-20'>
            {datas.map((item, index)=>(
                <div key={index} className='shadow-lg shadow-[#CFCFCF] lg:h-56 lg:w-72 h-[58rem] w-[99rem] flex flex-col items-center justify-center lg:gap-[0.3rem] gap-[2rem] hover:bg-[#CC8C18] group hover:text-zinc-100 duration-500'>
                    <div className={`contact2 flex items-center justify-center lg:h-[3rem] lg:w-[3rem] h-[14rem] w-[14rem] text-[#CC8C18] lg:border-2 border-[0.6rem] border-dotted border-[#CC8C18] rounded-full lg:group-hover:border-2 group-hover:border-[0.6rem] group-hover:border-zinc-100 lg:text-[1.6rem] text-[7rem] group-hover:text-zinc-100 duration-200`}>{item.icon}</div>
                    <h1 className='playfair-display lg:text-[1.2rem] text-[5rem] text-[#24416B] group-hover:text-zinc-100'>{item.text}</h1>     
                    <p className='text-[#7A7E9A] lg:text-sm text-[3.5rem] text-center lg:px-10 px-44 font-normal group-hover:text-zinc-100'>{item.para1}</p>             
                    <p className='text-[#7A7E9A] lg:text-sm text-[3.5rem] px-8 font-normal group-hover:text-zinc-100'>{item.para2}</p>
                    <div className={`flex lg:gap-[3rem] gap-[24rem] text-[#CC8C18] lg:text-2xl text-8xl group-hover:text-zinc-100 ${customClassIcon}`}>
                        <div>{item.ic1}</div>
                        <div>{item.ic2}</div>
                        <div>{item.ic3}</div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
    
  )
}

export default ContactUs
