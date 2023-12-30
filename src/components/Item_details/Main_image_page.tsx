"use client"
import Image from 'next/image'
import React, { useState } from 'react'

function Main_image_page(data: any) {
 
    const [url, setUrl] = useState(data?.data[0]);
  return (
    <div className="w-full grid grid-cols-[10%_90%] ">
    <div className="w-full h-full  flex flex-col">
     {
      data?.data?.map((elem:any,ind:number)=>{
        return(
          <Image
        src={elem}
        
        onClick={() => setUrl(elem)}
        alt="img"
        width={100}
        height={100}
        className="rounded-md  border border-black p-1 mb-3 w-[70%] h-14"
        key={ind}
      />
        )
      
      })
     }
      
    </div>
    <div className="w-full h-full">
      <Image
        src={url}
        alt="img"
        width={100}
        height={100}
        unoptimized
        className="rounded-md mt-8  px-3 h-[500px] w-full"
      />
    </div>
  </div>
  )
}

export default Main_image_page