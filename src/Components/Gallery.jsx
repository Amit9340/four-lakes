import React, { useState } from 'react'

function Gallery({data, showImage, id}) {
    
  return (
      <div className='relative h-32 max-w-screen-xl mx-auto px-20 flex gap-6'>
        <div className='h-fit'  style={{ backgroundColor: data.isImage ? '#CC8C18' : '#fff'}}>
        <div onClick={()=> (showImage(id))} className='w-96 h-fit shadow-lg shadow-[#cfcfcf] group hover:bg-[#CC8C18] transition ease-in-out duration-700 cursor-pointer'>
            <div className='h-24 w-[24rem] flex items-center px-4 gap-7'>
                <img className='h-24 w-44 min-w-44 ' src={data.url} alt="" />
                <h1 className='text-[#244170] text-xl font-extrabold group-hover:text-zinc-100 playfair-display'>{data.text}</h1>
            </div>
        </div>
        </div>
      </div>
  )
}

export default Gallery
