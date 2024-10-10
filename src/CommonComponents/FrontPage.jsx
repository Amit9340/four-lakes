import React from 'react'

function FrontPage({url, imgUrl, firstHead, secondHead, thirdHead, customClassImg='', customClassDiv='', customClassFirstHead='', customClassHeadDiv}) {
    return (
        <div className={`h-[60vh] overflow-hidden text-zinc-100 mb-28 ${customClassDiv}`}>
        <div className={`h-[60vh] w-full bg-black opacity-50 absolute z-40 ${customClassDiv}`}></div>
          <img className={`relative h-[125vh] w-[105vw] -top-[15.04rem] ${customClassImg}`} src={imgUrl} alt="" />
          <div className={`w-full absolute z-50 top-[6.3rem] flex flex-col items-center gap-8 ${customClassHeadDiv} `}>
          <h1 className={`playfair-display text-[2.3rem] font-900 ${customClassFirstHead}`}>{firstHead}</h1>
          <div className='flex relative gap-2 -top-[0.2rem]'>
            <a href={url}><h2>{secondHead}</h2></a>
            <h2 className='text-3xl relative -top-[0.8rem] text-[#CC8C18]' >.</h2>
            <h2 className='text-[#CC8C18]'>{thirdHead}</h2>
          </div>
          </div>
        </div>
      )
}

export default FrontPage
