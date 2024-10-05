import React from 'react'
import HeadElem from '../Components/HeadElem';

function OurGallery({data, Head1, Head2}) {
  const datas = data
  return (
    <div className="mt-24 flex flex-col gap-16 mb-36">
      <HeadElem title1={Head1} title2={Head2} />

      <div className='w-full flex flex-wrap justify-center items-center gap-6'>
        {datas.map((item, index) => (
                <div className=''>
                <img className=" h-[24.1rem] w-[34rem] object-cover" src={item.img} alt="" />
                </div>
        ))}
      </div>
    </div>
  );
}

export default OurGallery
