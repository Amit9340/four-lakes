import React, { useState } from 'react'
import Gallery from './Gallery'
import HeadElem from './HeadElem';

function Galleries() {
    let data = [
        {url: "https://fourlakes.in/assets/images/waterpark/water_park-3.jpg", text:"Water Park", isImage:true},
        {url: "https://fourlakes.in/assets/images/royal_yard/royal_yard_cottages.jpg", text:"Cottages", isImage:false},
        {url: "https://fourlakes.in/assets/images/party_pool.jpg", text:"Pool side sitting area", isImage:false},
        {url: "https://fourlakes.in/assets/images/royal_yard/royal_yard-2.jpg", text:"The Royale Yards Resorts", isImage:false},
        {url: "https://fourlakes.in/assets/img/gallery/gallery-5.png", text:"The Leopard Hill Resturant", isImage:false}
    ]
    
    const [data2, setData2] = useState(data);

    const imageHandler = (id) => {
        setData2(data2.map((item, i) => i === id? {...item, isImage: true } : {...item, isImage: false }))
    };

    const mainImage = data2.find((item) => item.isImage);

  return (
    
    <div className='relative mt-[9rem]'>
        <div className='flex flex-col items-center mb-10'>
            <HeadElem title1='Gallery' title2='Explore different Venus' />
        </div>

        <div className='absolute z-10 top-32 w-[45rem] h-[38rem] mx-[33rem]'>
        {mainImage && (
          <img className='h-[38rem] w-full object-cover' src={mainImage.url} alt={mainImage.text} />
        )}
      </div>
      
      {data2.map((elem, index)=>(<Gallery data={elem} showImage={imageHandler} id={index} main={mainImage} key={index} />))}
    </div>
  )
}

export default Galleries
