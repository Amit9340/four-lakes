import React from 'react'
import HeadElem from '../Components/HeadElem';

function OurGallery({data, Head1, Head2}) {
  const datas = data
  return (
    <div className="mt-24 flex flex-col lg:gap-16 gap-32 mb-36">
      <HeadElem title1={Head1} title2={Head2} />

      <div className='lg:w-full w-[95%] mx-auto flex lg:flex-row flex-col flex-wrap justify-center items-center lg:gap-6 gap-28'>
        {datas.map((item, index) => (
                <div className=''>
                <img className="lg:h-[24.1rem] lg:w-[34rem] h-[97rem] w-[105rem] object-cover" src={item.img} alt="" />
                </div>
        ))}
      </div>
    </div>
  );
}

export default OurGallery
