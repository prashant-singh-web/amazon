"use client"
import React from 'react'

function Product_search_page() {
  return (
    <div className='flex w-full flex-col border-t border-b py-5 my-4 border-gray-300'>
        <p className='font-bold text-2xl'>What in the box?</p>
        <ul className='list-disc ml-7 text-sm'>
            <li>Adapter</li>
            <li>Phone case</li>
            <li>SIM Tray Ejector</li>
            <li>USB Cable</li>

        </ul>
        <p className='font-bold text-2xl mt-4 border-t border-gray-300 '>Looking for specific info?</p>
       <input type="text" name="" id="" placeholder='Search in reviews, Q&A...' className='w-[60%] border mt-4 border-gray-500 rounded-md outline-none p-1 placeholder:text-gray-500 focus-within:border-blue-600 text-sm focus-within:shadow-[0px_3px_0px_lightblue] ' />
    </div>
  )
}

export default Product_search_page