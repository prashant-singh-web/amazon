"use client"
import React from 'react'
import Product_search_page from './Product_search_page'
import Relative_product_page from './Relative_product_page'

function Prouduct_relative_info() {
  
  
  return (
    <div className='flex flex-col w-full'>
        <Product_search_page/>
        <Relative_product_page/>
        
    </div>
  )
}

export default Prouduct_relative_info