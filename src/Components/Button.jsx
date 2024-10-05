import React from 'react'
import { HiArrowRight } from "react-icons/hi2";

function Button({url, title="E-Brochure", customClass1='', customClass2=''}) {
  return (
    <div className='btn cursor-pointer mb-2'>
      <a href={url} target="_self" >
      <button>
      <div className={`bg-[#CC8C18] flex items-center justify-center py-[9px] pl-4 pr-1 h-[3.2rem] w-[9.8rem] gap-4 rounded-full text-[#fff] font-light text-[0.95rem] ${customClass1} ${customClass2}`}>
      <span>{title}</span>
      <div className={`h-fit w-fit px-2 py-2 rounded-full bg-[#FFFFFF] text-[#CC8C18] flex items-center justify-center ${customClass2}`}>
        <HiArrowRight />
      </div>
    </div>
      </button>
      </a>
    </div>
  )
}

export default Button
