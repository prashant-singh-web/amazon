"use client"
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

function Top_mobile_page(data:any) {
   
    const formatter = new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
      });
  return (
    <div className="flex flex-col w-full p-4">
      <p className='text-2xl font-bold capitalize'>top mobile</p>
      <div className="w-full grid grid-cols-6 my-4">
       <Link href={`/mobile/${data?.data?.sendData[0]?._id}`}>
       <div className="w-full flex flex-col p-3">
       <Image
          src={data?.data?.sendData[0]?.productImgUrl[0]}
          alt="jj"
          width={100}
          height={100}
          className="h-[140px] min-w-full"
        />
        <p className='line-clamp-2 text-sm font-semibold'>{data?.data?.sendData[0]?.productModel}</p>
        <p>{formatter.format(data?.data?.sendData[0]?.productPrice)}</p>
       </div></Link>
        
      </div>
    </div>
  )
}

export default Top_mobile_page