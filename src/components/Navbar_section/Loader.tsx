"use client"
import { useGlobalContext } from '@/app/Context/store'
import React from 'react'
// for loading animation
function Loader() {
    const {loading}:any = useGlobalContext()
  return (
    <div className='w-full bg-[#131921]  grid place-items-center'>
           <div className={loading ? " loader  bg-red-700 h-full py-[0.10rem]" : ""}></div>
    </div>
  )
}

export default Loader