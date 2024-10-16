import React, { useState } from 'react'

function Gallery({data, showImage, id}) {
    
  return (
      <div className='relative lg:h-32 h-[38rem] lg:max-w-screen-xl lg:mx-auto w-full lg:px-20 px-10 flex'>
        <div className='h-fit'  style={{ backgroundColor: data.isImage ? '#CC8C18' : '#fff'}}>
        <div onClick={()=> (showImage(id))} className='lg:w-96 w-fit h-fit shadow-lg shadow-[#cfcfcf] group hover:bg-[#CC8C18] transition ease-in-out duration-700 cursor-pointer'>
            <div className='lg:h-24 lg:w-[24rem] h-[35rem] w-[30rem] flex lg:flex-row flex-col items-center justify-center lg:justify-normal text-center px-4 gap-7'>
                <img className='lg:h-24 lg:w-44 lg:min-w-44 h-[22rem] w-[26rem]' src={data.url} alt="" />
                <h1 className='text-[#244170] lg:text-xl text-5xl font-extrabold group-hover:text-zinc-100 playfair-display'>{data.text}</h1>
            </div>
        </div>
        </div>
      </div>
  )
}

export default Gallery
