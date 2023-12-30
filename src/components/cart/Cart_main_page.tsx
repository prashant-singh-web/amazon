"use client"
import React from 'react'
import Cart_detail_page from './Cart_detail_page'
import { useGlobalContext } from '@/app/Context/store'

function Cart_main_page() {
  const {cart}:any=useGlobalContext()
 
  console.log(cart)
  return (
    <div className="w-full" >
        <div className='p-5 w-full grid grid-cols-[75%_25%] gap-x-5  bg-gray-200'>
        <div className="w-full">
        <Cart_detail_page data={cart}/>
            <div className="w-full py-10 bg-white my-5"></div>
            <div className="w-full text-xs">
                <p>The price and availability of items at Amazon.in are subject to change. The shopping cart is a temporary place to store a list of your items and reflects each item most recent price.</p>
                <p>Do you have a promotional code? We ask you to enter your claim code when it time to pay.</p>
            </div>
        </div>
        <div className="w-full h-[200px] bg-white "></div>
        </div>
    </div>
  )
}

export default Cart_main_page