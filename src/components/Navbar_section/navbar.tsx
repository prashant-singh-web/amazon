"use client";

import Image from "next/image";
import React, { useState } from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { FaCaretDown } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";

import { useGlobalContext } from "@/app/Context/store";
import Nav_user_profile from "./Nav_user_profile";
import Link from "next/link";

function Navbar() {
  const { user, setDropdown1 }: any = useGlobalContext();

  const cat = ["all", "mobile", "tablet", "laptop", "fridged", "wow", "etc"];
  const [category, setCategory] = useState("all");
  const [dropdown, setDropdown] = useState(true);

  const handleDrop = () => {
    setDropdown((dropdown) => !dropdown);
  };
  const handleDrop1 = () => {
    setDropdown1(false);
  };

  return (
    <div className="w-full px-2 bg-[#131921] flex flex-row items-center  z-50">
      <Link href={`/`}>
        {" "}
        <Image
          src="/img/amazon_logo.png"
          alt="logo"
          width={100}
          height={100}
          className="w-36 h-14 p-0 m-1 hover:border-white hover:border-[1px]"
        />
      </Link>
      <div className=" w-fit grid grid-cols-[20%_80%] place-items-center text-white overflow-hidden border-transparent border-[1px] mr-2 hover:border-white p-2">
        <HiOutlineLocationMarker className="font-bold text-lg w-[60%] h-[60%] text-end" />
        <div className="w-fitcontent w-fit grid grid-rows-[0.3fr_0.3fr] leading-4">
          <p className="w-fit text-xs text-gray-300 capitalize">delivi to me</p>
          <p className="w-[150px]">update locat</p>
        </div>
      </div>
      <div className="w-[500px] rounded-md group  flex flex-rows justify-center h-fit bg-[#ff9900] ">
        <div
          className="w-fit p-[6px] rounded-l-md bg-gray-300  flex flex-row items-center text-gray-500 relative"
          onClick={handleDrop}
        >
          <p>{category}</p>
          <FaCaretDown className="ml-1 text-sm text-gray-500" />
          <ul
            className={
              !dropdown
                ? "w-[200px] h-[400px] top-11 rounded-sm right-0 absolute bg-white border border-black text-base text-black overflow-y-scroll z-0 "
                : "w-[200px] h-[400px] ease-linear duration-500 -translate-y-[200%] -z-10 top-11 rounded-sm right-0 absolute bg-white border border-black text-base text-black overflow-y-scroll"
            }
          >
            {cat.map((item, indexedDB) => {
              return (
                <li
                  key={indexedDB}
                  onClick={() => setCategory(`${item}`)}
                  className="pl-2 p-[1px] hover:bg-blue-800 hover:text-white text-black capitalize"
                >
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
        <input
          type="text"
          className="w-full focus-within:outline-none pl-2 py-2 placeholder:text-gray-600 font-semibold group-focus-within:outline-none"
          placeholder="Search Amazon.in"
        />
        <div className="w-10 h-full grid place-items-center p-3 bg-white/40 hover:bg-transparent rounded-r-md">
          <AiOutlineSearch className="w-[1rem] font-black  h-[1rem] text-center text-gray-600 " />
        </div>
      </div>
      <div className="text-white hover:border-white ml-2 flex flex-row items-end cursor-pointer border-[1px] p-2 border-transparent">
        eng <FaCaretDown className="ml-2 text-end text-gray-500" />
      </div>
      <div
        className="flex flex-col text-white leading-3 hover:border-white cursor-pointer border-[1px] p-2 border-transparent relative"
        onMouseOver={handleDrop1}
      >
        <p className="mb-[2px] text-gray-100 font-medium text-xs capitalize">
          hello,{user[0]?.name ? user[0]?.name : "sign in"}
        </p>
        <p className="flex flex-row font-semibold">
          Account & Lists <FaCaretDown className="ml-2 text-gray-500" />
        </p>
        <Nav_user_profile data={user} />
      </div>
      <div className="flex flex-col text-white leading-3 hover:border-white cursor-pointer border-[1px] p-2 border-transparent">
        <p className="mb-[2px] text-gray-100 font-medium text-xs capitalize">
          return
        </p>
        <p className=" font-semibold text-white">& order </p>
      </div>
      <div className="flex relative border-transparent hover:border-white cursor-pointer border-[1px]">
        <PiShoppingCartSimpleBold className="w-10 h-10 text-white relative" />
        <p className="ab absolute -top-1 left-3 w-4 text-sm text-center font-bold text-[#F08804] bg-[#131921]">
          {user[0]?.cart}
        </p>
        <p className="ab absolute top-3 -right-6 text-white font-bold capitalize">
          cart
        </p>
      </div>
    </div>
  );
}

export default Navbar;
