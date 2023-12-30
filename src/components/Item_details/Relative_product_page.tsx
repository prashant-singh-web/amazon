"use client"
import React from 'react'
import Relative_product_image from './Relative_product_image'
import Prouduct_relative_info from './Prouduct_relative_info'
import Reletive_product_info from './Reletive_product_info'

function Relative_product_page() {
  return (
    <div className='w-full flex flex-col'>
        <p className='text-2xl font-bold text-[#C45518]'>Compare with similar items</p>
        <div className="w-full border-t border-b py-5 my-4 border-gray-300 flex flex-col">
            <Relative_product_image/>
           <Reletive_product_info/>
        </div>
    </div>
  )
}

export default Relative_product_page