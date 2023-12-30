"use client"
import React from "react";

function Bottom_4() {
  return (
    <div className="bg-[#131A22] py-5 grid place-items-center text-white">
      <div className="w-[80%] grid grid-cols-4 gap-y-3 text-xs">
        <ul className="w-fit hover:underline cursor-pointer">
          <li className="font-semibold text-xs ">Abebooks</li>
          <li>books & arts</li>
          <li>communication</li>
        </ul>
        <ul className="w-fit hover:underline cursor-pointer">
          <li className="font-semibold text-xs ">Amazon Web Services</li>
          <li>Scalable Cloud</li>
          <li>Computing Services</li>
        </ul>
        <ul className="w-fit hover:underline cursor-pointer">
          <li className="font-semibold text-xs ">Audible</li>
          <li>Download</li>
          <li>Computing Services</li>
        </ul>
        <ul className="w-fit hover:underline cursor-pointer">
          <li className="font-semibold text-xs ">Imdb</li>
          <li>Movies, TV</li>
          <li>& Celebrities</li>
        </ul>
        <ul className="w-fit hover:underline cursor-pointer">
          <li className="font-semibold text-xs ">Shopbop</li>
          <li>Designer</li>
          <li>Fashin Brands</li>
        </ul>
        <ul className="w-fit hover:underline cursor-pointer">
          <li className="font-semibold text-xs ">Amazon Business</li>
          <li>Everthing For</li>
          <li>your bussiness</li>
        </ul>
        <ul className="w-fit hover:underline cursor-pointer">
          <li className="font-semibold text-xs ">Prime Now</li>
          <li>2-hour Delivery</li>
          <li>on everything items</li>
        </ul>
        <ul className="w-fit hover:underline cursor-pointer">
          <li className="font-semibold text-xs ">Amazon Prime Music</li>
          <li>100 million songs, ad-free</li>
          <li>Over 15 million podcast episodes</li>
        </ul>
      </div>
      <div className="w-full grid grid-rows-2 place-items-center pt-6 text-xs">
        <div className="flex flex-row">
          <p className="pl-3">Conditions of Use & Sale</p>
          <p className="pl-3">Privacy Notice</p>
          <p className="pl-3">Interest-Based Ads</p>
        </div>
        <p>© 1996-2023, Amazon.com, Inc. or its affiliates</p>
      </div>
    </div>
  );
}

export default Bottom_4;
