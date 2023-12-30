"use client"
import Image from "next/image";
import React, { useEffect, useState } from "react";

function Cart_detail_page(data:any) {
  const formatter = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
  });
  const [price,setPrice]:any = useState(0)
  const [cartItems, setCartItems] = useState(data.data); // Maintain a state for cart items
 
  const deleteIndex = (index:number) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  }
  return (
    <div className="w-full bg-white flex flex-col p-5 ">
      <p className="text-3xl border-b border-gray-300 pb-3">Shopping Cart</p>
      {
       data ? (
        data.data.map((item:any, index:number) => {return(
          <div key={index} className="w-full grid grid-cols-[20%_60%_20%] p-5">
        <Image
          src={item.data.data[0].productImgUrl[0]}
          alt="img"
          width={100}
          height={100}
          unoptimized
          className=" mb-3 w-[100%] "
        />
        <div className="w-full text-[0.65rem]">
          <p className="text-lg font-medium">
            {item.data.data[0].productModel}
          </p>
          <p className="text-xs font-bold my-1 text-green-800">In Stock</p>
          <p className="text-xs text-gray-600 my-1">Eligible for FREE Shipping</p>
          <p className="text-xs font-medium my-1 flex justify-start items-start w-full">
            <input type="checkbox" name="" id="" className="mr-1" />
            This will be a giftThis is a gift <span className="text-cyan-700 ml-1">Learn more</span>
          </p>
          <p className="my-1 text-xs font-[450]"><span className="font-bold">Size:</span> 8GB RAM, 128GB Storage</p>
          <p className="my-1 text-xs font-[450]"><span className="font-bold">Colour:</span> Pastel Lime</p>
          <ul className="text-[0.65rem] text-center flex flex-row">
            <li onClick={()=>setPrice(item.data.data[0].productPrice)} className="text-sm px-3 bg-gray-200 shadow-[0px_2px_2px_gray] cursor-pointer border border-gray-400 shadow-gray-300 w-fit rounded-sm mr-3 ">add</li>
            
            <li className="text-cyan-700 border-l px-3 border-gray-400 cursor-pointer" onClick={() => deleteIndex(index)} >Delete</li>
            <li className="text-cyan-700 border-l px-3 border-gray-400">Save for later</li>
            <li className="text-cyan-700 border-l px-3 border-gray-400">See more like this</li>
            <li className="text-cyan-700 border-l px-3 border-gray-400">Share</li>
          </ul>
        </div>
        <div className="w-full flex-col font-bold text-base text-right">
          <p> {formatter.format(item.data.data[0].productPrice)}</p>
        </div>
      </div>
        )})
       ):(<div className="w-full h-32 grid place-items-center">
        <p className="text-xl font-semibold">Please add some item to checkout</p>
       </div>)
      }
      <p className="w-full text-right text-lg border-t border-gray-300 mb-5">
        Subtotal (1 item): <span className="font-bold">{formatter.format(price)}</span>
      </p>
    </div>
  );
}

export default Cart_detail_page;
