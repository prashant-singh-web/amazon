"use client"
import { useGlobalContext } from "@/app/Context/store";
import Link from "next/link";
import React, { useState } from "react";

function Product_Exchange_page(data:any) {
  const{setCart,cart}:any=useGlobalContext()
  const [dropdoen, setDropdoen] = useState(true)
  const addToCart = () => {
    let newCart = [...cart]; // copy the existing cart
    newCart.push(data); // add the new data to the cart
    setCart(newCart); // update the cart state
  }
  
  console.log(cart)
  return (
    <div className="w-full rounded-md border-gray-300  border flex flex-col  overflow-hidden">
      <div className={!dropdoen ? "flex flex-row justify-between p-4" : "flex flex-row justify-between p-4 bg-gray-100"} onClick={()=>setDropdoen(false)}>
        <p className="flex flex-col font-bold cap capitalize text-sm">
          with Exchange <span className="text-[#B12704]">upto 12 off</span>
        </p>
        <p className={dropdoen ? "p-2 w-fit h-fit  border-gray-500 border rounded-full ring-inset ring-cyan-600 hover:ring-2 " : "p-2 w-fit h-fit  border-cyan-600  border rounded-full ring-inset ring-cyan-600 ring-4 "}></p>
      </div>
      <div className={dropdoen ? "w-full flex-col border-b border-gray-300 h-0 bg-blue-800 hidden" : "w-full flex flex-col p-3 border-b border-gray-300 "}>
        <button className="w-full rounded-lg py-1 text-sm border-gray-300 border-[0.5px] shadow-[0px_0px_3px_gray] shadow-gray-400">Choose phone to exchange</button>
        <p className="text-cyan-700 text-sm mt-3">How does Exchange work?</p>
      </div>
      <div className={dropdoen ? "flex flex-row justify-between p-4" : "flex flex-row justify-between p-4 bg-gray-100"} onClick={()=>setDropdoen(true)}>
        <p className="flex flex-col font-bold cap capitalize text-sm">
          without Exchange <span className="text-[#B12704]">upto 12 off</span>
        </p>
        <p className={!dropdoen ? "p-2 w-fit h-fit  border-gray-500 border rounded-full ring-inset ring-cyan-600 hover:ring-2 " : "p-2 w-fit h-fit  border-cyan-600  border rounded-full ring-inset ring-cyan-600 ring-4 "}></p>
      </div>
      <div className={dropdoen ? "w-full flex flex-col px-3 " :"w-full flex flex-col px-3 h-0 "}>
        <p className="text-sm">
          <span className="font-bold">Tuesday, 26 December</span>. Order within{" "}
          <span className="text-green-500">8 hrs 31 mins</span>.
          <span className="text-cyan-700 hover:underline hover:text-[#B12704]">
            {" "}
            Details
          </span>
        </p>
        <p className="text-xs my-2 font-medium text-cyan-600">
          Delivering to Varanasi 221010 - Update location
        </p>
        <p className="text-green-800 text-lg font-semibold my-2">In stock</p>
        <p className="text-base font-normal leading-5">
          Sold by{" "}
          <span className="text-cyan-600 hover:underline hover:text-[#B12704]">
            Darshita Electronics
          </span>{" "}
          and Fulfilled by{" "}
          <span className="text-cyan-600 hover:underline hover:text-[#B12704]">
            Amazon
          </span>
          .
        </p>
        <p className="font-bold text-black/80 text-sm mt-4">Add a Protection Plan:</p>
        <p className="flex text-sm medium text-cyan-700 ">
          <p className="p-[0.32rem] mt-1 mr-2 w-fit h-fit border-gray-500 border-[1.5px] rounded-sm"></p>
          Extended Warranty by OneAssist for ₹649.00
        </p>
        <p className="flex text-sm text-cyan-700">
          <p className="p-[0.32rem] mt-1 mr-2 w-fit h-fit border-gray-500 border-[1.5px] rounded-sm"></p>
          Acko 1-year Total Damage Protection for ₹1,099.00
        </p>
        <p className="flex text-sm text-cyan-700">
          <p className="p-[0.32rem] mt-1 mr-2 w-fit h-fit border-gray-500 border-[1.5px] rounded-sm"></p>
          Total Protection Plan by Quess for ₹799.00
        </p>
        <Link href={`/cart`} onClick={addToCart} className="w-full my-4 text-sm rounded-xl py-1 text-center bg-yellow-500 shadow-lg">
        Add to Cart
      </Link>
        <button className="w-full rounded-xl py-1 text-sm text-center bg-orange-500 shadow-lg">
          Buy Now
        </button>
        <p className="texxt-sm text-cyan-700 my-3"> Secure transaction</p>
        <p className="flex text-sm medium text-cyan-700 ">
          <p className="p-[0.32rem] mt-1 mr-2 w-fit h-fit border-gray-500 border-[1.5px] rounded-sm mb-4"></p>
          add gift option
        </p>
      </div>
    </div>
  );
}

export default Product_Exchange_page;
