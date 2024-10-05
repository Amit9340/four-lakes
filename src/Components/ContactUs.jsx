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
        {icon:<BiLocationPlus/>, text:'Bhopal', para1:'Sahara bypass road, katara hills extention, Bhopal MP', para2:'462022' },
        {icon:<FiPhoneCall/>, text:'Call Us:', para1:'+91 91 1147 9109', para2:'+91 91568 15340' }
    ]

    const datas = data1 || data
  return (
    <div className={`relative h-[120vh] mt-52 ${customClass1}`}>
      <HeadElem title1="Contact Us" title2="Get In Touch" />
      <div className='mt-14 flex gap-[2.36rem] max-w-screen-xl mx-20'>
        <div className='w-[50%] h-[29rem] shadow-xl shadow-[#CFCFCF] flex items-center'>
            <form action="" className='' onSubmit={handleClick}>
                <div className='flex flex-col gap-10 px-12'>
                <div className={`${style.formElem1}`}>
                    <input className={`${style.formElem2}`} type="text" placeholder='Your Name' required />
                    <input className={`${style.formElem2}`} type="email" placeholder='Your Email' required />
                </div>
                <div className={`${style.formElem1}`}>
                    <input className={`${style.formElem2}`} type="number" placeholder='Your Phone' required />
                    <input className={`${style.formElem2}`} type="text" placeholder='Your Subject' required />
                </div>
                <div className={`${style.formElem1} w-[27.5rem] mb-[7rem]`}>
                    <input className={`${style.formElem2} h-28 w-[27.5rem]`} type="text" placeholder='Your Message' required />
                </div>
                </div>
                <Button title="Send Message" customClass1='w-[11.5rem] ml-44' />
            </form>
        </div>

        <div className='flex flex-wrap w-[60%] gap-[2.36rem]'>
            {datas.map((item, index)=>(
                <div key={index} className='shadow-lg shadow-[#CFCFCF] h-56 w-72 flex flex-col items-center justify-center gap-[0.3rem] hover:bg-[#CC8C18] group hover:text-zinc-100 duration-500'>
                    <div className={`contact2 flex items-center justify-center ${style.contact1} group-hover:border-2 group-hover:border-zinc-100 text-[1.6rem] group-hover:text-zinc-100 duration-200`}>{item.icon}</div>
                    <h1 className='playfair-display text-[1.2rem] text-[#24416B] group-hover:text-zinc-100'>{item.text}</h1>
                    <p className='text-[#7A7E9A] text-sm px-10 font-normal leading-6 group-hover:text-zinc-100'>{item.para1}</p>
                    <p className='text-[#7A7E9A] text-sm px-8 font-normal group-hover:text-zinc-100'>{item.para2}</p>
                    <div className={`flex gap-[3rem] text-[#CC8C18] text-2xl group-hover:text-zinc-100 ${customClassIcon}`}>
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
