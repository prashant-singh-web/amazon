"use client"
import Image from 'next/image'
import React, { useState } from 'react'

function Main_item_colur_page(varient:any) {
  
    const [itemName, setItemName] = useState("pastel lime")
  return (
    <div className='w-full flex flex-col'>
        <div className="w-full flex flex-row justify-between">
            <p className='text-xl font-bold capitalize'>colurs: <span className='text-gray-500 text-lg font-semibold'>{itemName}</span></p>
            <>/</>
        </div>
        <div className="flex flex-row mt-4 border-b border-gray-400 pb-3">
           {varient?.varient?.map((elem:any,ind:number)=>{
            return(
              <Image key={ind} src={elem?.url} unoptimized width={100} height={100} onClick={()=>setItemName(elem?.option)} alt='hii' className='py-2 border-[0.5px] border-gray-500 rounded-md w-16 h-16 mr-3 hover:border-orange-600'/>
              
            )
           })}
        </div>
    </div>
  )
}

export default Main_item_colur_page