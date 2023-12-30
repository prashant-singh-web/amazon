"use client"
import Image from "next/image";
import React from "react";

function Bottom_3() {
  const contry = [
    "Australia",
    "Brazil",
    "Canada",
    "China",
    "France",
    "Germany",
    "Italy",
    "Japan",
    "Mexico",
    "Netherlands",
    "Poland",
    "Singapore",
    "Spain",
    "Turkey",
    "United Arab Emirates",
  ];
  return (
    <div className="grid grid-rows-2 py-6 w-full place-items-center bg-[#232F3E]">
      <div className="flex flex-row w-full justify-center items-center">
        <Image
          src="/img/amazon_logo.png"
          alt="logo"
          width={100}
          height={100}
          className="w-36 h-14 p-2 "
        />
        <div className="div ml-20 py-1 px-2 border-white border-[1px] text-white capitalize rounded-sm">
          english
        </div>
      </div>
      <div className="grid grid-rows-2 place-items-center">
        <div className="flex flex-row justify-center items-center">
          {contry.map((elem, ind) => {
            return (
              <p className="px-2 text-xs text-white hover:underline cursor-pointer" key={ind}>
                {elem}
              </p>
            );
          })}
        </div>
        <div className="flex flex-row justify-center items-center">
          {" "}
          <p className="px-2 text-xs text-white hover:underline cursor-pointer">United Kingdom</p>
          <p className="px-2 text-xs text-white hover:underline cursor-pointer">United States</p>
        </div>
      </div>
    </div>
  );
}

export default Bottom_3;
