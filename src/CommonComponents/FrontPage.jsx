import React from 'react'

function FrontPage({url, imgUrl, firstHead, secondHead, thirdHead, customClassImg='', customClassDiv='', customClassFirstHead='', customClassthirdHead='', customClassHeadDiv}) {
    return (
        <div className={`lg:h-[60vh] h-[78rem] overflow-hidden text-zinc-100 mb-28 ${customClassDiv}`}>
        <div className={`lg:h-[60vh] h-[78rem] w-full bg-black flex opacity-50 absolute z-40 ${customClassDiv}`}></div>
          <img className={`relative lg:h-[125vh] lg:w-[105vw] w-full h-[59.989rem] lg:scale-100 scale-[1.4] lg:-top-[15.04rem] top-[6rem] ${customClassImg}`} src={imgUrl} alt="" />
          <div className={`w-full absolute z-50 lg:top-[6.3rem] top-[30rem] flex flex-col items-center gap-8 ${customClassHeadDiv} `}>
          <h1 className={`playfair-display lg:text-[2.3rem] text-[9rem] text-center font-900 ${customClassFirstHead}`}>{firstHead}</h1>
          <div className='flex relative lg:gap-2 gap-5 lg:text-[0.9rem] text-6xl'>
            <a href={url}><h2>{secondHead}</h2></a>
            <h2 className={`flex lg:text-3xl text-[9rem] relative lg:-top-[1.1rem] -top-[5rem] text-[#CC8C18] ${customClassthirdHead}`} >.</h2>
            <h2 className='text-[#CC8C18]'>{thirdHead}</h2>
          </div>
          </div>
        </div>
      )
}

export default FrontPage
