import React from 'react'
import { HiArrowRight } from "react-icons/hi2";

function Button({url, title="E-Brochure", customClass1='', customClass2=''}) {
  return (
    <div className='btn cursor-pointer mb-2 lg:mt-0 mt-10'>
      <a href={url} target="_self" >
      <button>
      <div className={`bg-[#CC8C18] flex items-center justify-center py-[9px] pl-4 pr-1 lg:gap-4 gap-8 rounded-full text-[#fff] font-light lg:text-[0.95rem] lg:h-[3.2rem] lg:w-[9.8rem] text-[4rem] h-[12rem] w-[40rem] ${customClass1} ${customClass2}`}>
      <span>{title}</span>
      <div className={`h-fit w-fit px-2 py-2 rounded-full bg-[#FFFFFF] text-[#CC8C18] lg:text-[0.95rem] text-[6.5rem] flex items-center justify-center ${customClass2}`}>
        <HiArrowRight />
      </div>
    </div>
      </button>
      </a>
    </div>
  )
}

export default Button
