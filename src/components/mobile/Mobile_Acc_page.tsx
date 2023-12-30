"use client"
import Image from "next/image";
import React from "react";

function Mobile_Acc_page() {
    
  return (
    <div className="grid grid-cols-5 px-14 py-10">
        
      <ul className="text-xs">
        <li className="text-xs font-bold">Mobiles</li>
        <li className="text-xs font-bold mt-1">Mobile accessories</li>
        <li className="mt-1 hover:underline w-fit hover:text-[#e77600] cursor-pointer text-gray-700">Cases & Covers</li>
        <li className="mt-1 hover:underline w-fit hover:text-[#e77600] cursor-pointer text-gray-700">Screen guards</li>
        <li className="mt-1 hover:underline w-fit hover:text-[#e77600] cursor-pointer text-gray-700">Power Banks</li>
        <li className="mt-1 hover:underline w-fit hover:text-[#e77600] cursor-pointer text-gray-700">Headsets</li>
        <li className="mt-1 hover:underline w-fit hover:text-[#e77600] cursor-pointer text-gray-700">Data Cables</li>
        <li className="mt-1 hover:underline w-fit hover:text-[#e77600] cursor-pointer text-gray-700">Chargers</li>
        <li className="mt-1 hover:underline w-fit hover:text-[#e77600] cursor-pointer text-gray-700">Selfie Sticks</li>
        <li className="mt-1 hover:underline w-fit hover:text-[#e77600] cursor-pointer text-gray-700">Skin Stickers</li>
        <li className="mt-1 hover:underline w-fit hover:text-[#e77600] cursor-pointer text-gray-700">Internal Batteries</li>
        <li className="mt-1 hover:underline w-fit hover:text-[#e77600] cursor-pointer text-gray-700">Mounts & Stands</li>
        <li className="mt-1 hover:underline w-fit hover:text-[#e77600] cursor-pointer text-gray-700">Lens Kits</li>
        <li className="mt-1 hover:underline w-fit hover:text-[#e77600] cursor-pointer text-gray-700">Replacement Parts</li>
      </ul>
      <ul className="text-xs">
        <li className="text-xs font-bold">Mobile brands</li>
        <li className="mt-1 hover:underline w-fit hover:text-[#e77600] cursor-pointer text-gray-700">Mi</li>
        <li className="mt-1 hover:underline w-fit hover:text-[#e77600] cursor-pointer text-gray-700">OnePlus</li>
        <li className="mt-1 hover:underline w-fit hover:text-[#e77600] cursor-pointer text-gray-700">Samsung</li>
        <li className="mt-1 hover:underline w-fit hover:text-[#e77600] cursor-pointer text-gray-700">Huawei</li>
        <li className="mt-1 hover:underline w-fit hover:text-[#e77600] cursor-pointer text-gray-700">Apple</li>
        <li className="mt-1 hover:underline w-fit hover:text-[#e77600] cursor-pointer text-gray-700">Motorola</li>
        <li className="mt-1 hover:underline w-fit hover:text-[#e77600] cursor-pointer text-gray-700">Nokia</li>
        <li className="mt-1 hover:underline w-fit hover:text-[#e77600] cursor-pointer text-gray-700">Vivo</li>
        <li className="mt-1 hover:underline w-fit hover:text-[#e77600] cursor-pointer text-gray-700">10.or</li>
        <li className="mt-1 hover:underline w-fit hover:text-[#e77600] cursor-pointer text-gray-700">Coolpad</li>
        <li className="mt-1 hover:underline w-fit hover:text-[#e77600] cursor-pointer text-gray-700">Honor</li>
        <li className="mt-1 hover:underline w-fit hover:text-[#e77600] cursor-pointer text-gray-700">Lenovo</li>
        <li className="mt-1 hover:underline w-fit hover:text-[#e77600] cursor-pointer text-gray-700">LG</li>
        <li className="mt-1 hover:underline w-fit hover:text-[#e77600] cursor-pointer text-gray-700">Micro</li>
      </ul>
      <ul className="text-xs">
        <li className="text-xs font-bold">Accessories brand</li>
        <li className="mt-1 hover:underline w-fit hover:text-[#e77600] cursor-pointer text-gray-700">OnePlus</li>
        <li className="mt-1 hover:underline w-fit hover:text-[#e77600] cursor-pointer text-gray-700">AmazonBasics</li>
        <li className="mt-1 hover:underline w-fit hover:text-[#e77600] cursor-pointer text-gray-700">Intex</li>
        <li className="mt-1 hover:underline w-fit hover:text-[#e77600] cursor-pointer text-gray-700">Ambrane</li>
        <li className="mt-1 hover:underline w-fit hover:text-[#e77600] cursor-pointer text-gray-700">Lenovo</li>
        <li className="mt-1 hover:underline w-fit hover:text-[#e77600] cursor-pointer text-gray-700">Spigen</li>
        <li className="mt-1 hover:underline w-fit hover:text-[#e77600] cursor-pointer text-gray-700">Jabra</li>
        <li className="mt-1 hover:underline w-fit hover:text-[#e77600] cursor-pointer text-gray-700">Apple</li>
        <li className="mt-1 hover:underline w-fit hover:text-[#e77600] cursor-pointer text-gray-700">Syska</li>
        <li className="mt-1 hover:underline w-fit hover:text-[#e77600] cursor-pointer text-gray-700">Boat</li>
        <li className="mt-1 hover:underline w-fit hover:text-[#e77600] cursor-pointer text-gray-700">Mivi</li>
        <li className="mt-1 hover:underline w-fit hover:text-[#e77600] cursor-pointer text-gray-700">iVoltaa</li>
      </ul>
      <div className="flex flex-col text-center cursor-pointer hover:underline">
        <Image src="/img/IN_WLME_OnePlus7Pro_Miscellaneous_472x674.jpg" alt="ffffff" width={100} height={100} className="h-[300px] w-[200px]" />
        <p className=" mt-3 font-bold ">Mobile</p>
        <p>See more</p>
      </div>
      <div className="flex flex-col text-center cursor-pointer hover:underline">
        <Image src="/img/CEPC_Megasubnav_Mobiles_access.jpg" alt="ffffff" width={100} height={100} className="h-[300px] w-[200px]" />
        <p className="font-bold mt-3">Mobile accessories</p>
        <p>see more</p>
      </div>
    </div>
  );
}

export default Mobile_Acc_page;
