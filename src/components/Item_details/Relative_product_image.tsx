"use client"
import Image from 'next/image'
import React from 'react'
import { IoMdStar } from 'react-icons/io';

function Relative_product_image() {
    const formatter = new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
      });
  return (
    <div className='grid grid-cols-5 w-full'>
        <div className="w-full ">1</div>
        <div className="w-full flex flex-col">
        <Image
        src="/server/nord_3lite/nord_3lite_1.jpg"
        alt="img"
        width={100}
        height={100}
        unoptimized
        className="rounded-md mb-3 w-[100%] "
      />
      <p className='text-sm'><span className='font-semibold'>You are viewing: </span>OnePlus Nord CE 3 Lite 5G (Pastel Lime, 8GB RAM, 128GB Storage)</p>
      <p className='font-bold text-2xl text-[#B12704] mt-10'>{formatter.format(19999)}</p>
      <p className="text-lg text-cyan-600 flex flex-row my-2">
              <IoMdStar className="text-yellow-500" />
              <IoMdStar className="text-yellow-500" />
              <IoMdStar className="text-yellow-500" />
              <IoMdStar className="text-yellow-500" />
              <IoMdStar className="text-yellow-500" />
            </p>
            <button className='bg-[#F7CA00] rounded-md shadow-lg ml-5 my-5 py-1 w-[40%]'>Add to Cart</button>
        </div>
    </div>
  )
}

export default Relative_product_image