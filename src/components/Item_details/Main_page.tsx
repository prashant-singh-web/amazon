"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { IoMdStar } from "react-icons/io";
import Main_image_page from "./Main_image_page";
import Main_offer_page from "./Main_offer_page";
import Main_diliveray_Page from "./Main_diliveray_Page";
import Main_item_colur_page from "./Main_item_colur_page";
import Main_Item_Info_page from "./Main_Item_Info_page";
import Product_Exchange_page from "./Product_Exchange_page";
import Product_Manu_page from "./Product_Manu_page";
import Prouduct_relative_info from "./Prouduct_relative_info";
import { useGlobalContext } from "@/app/Context/store";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";
import Loading from "../Navbar_section/Loading";

function Main_page(data: any) {
  const formatter = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  });

  return (
    <div className="w-full flex flex-col p-4">

      <div className="w-full grid grid-cols-2 ">
        <Main_image_page data={data.data[0].productImgUrl} />
        <div className="w-full grid grid-cols-[60%_40%]">
          <div className="w-full h-full flex flex-col pr-5 ">
            <p className="text-2xl line-clamp-3">{data?.data[0]?.productModel}</p>

            <p className="text-sm text-cyan-600">Visit the OnePlus Store</p>
            <p className="text-sm text-cyan-600 flex flex-row">
              <IoMdStar className="text-yellow-500" />
              <IoMdStar className="text-yellow-500" />
              <IoMdStar className="text-yellow-500" />
              <IoMdStar className="text-yellow-500" />
              <IoMdStar className="text-yellow-500" />
            </p>
            <p className="text-sm text-cyan-600 ">
              <span className="w-[2px] text-gray-600 mr-3">|</span>1000+
              answered questions
            </p>
            <p className="text-xs w-full border-b border-gray-500 pb-2 ">
              5K+ bought in past month
            </p>
            <p className="text-2xl py-2 font-semibold">
              {formatter.format(data?.data[0]?.productPrice)}
            </p>
            <p>Inclusive of all taxes</p>
            <p className="text-sm w-full border-b border-gray-500 pb-2">
              <span className="font-semibold">EMI</span> starts at ₹970. No Cost
              EMI available{" "}
              <span className="font-semibold text-cyan-600">EMI options</span>
            </p>
            <div className="my-3 text-sm font-bold capitalize">offers</div>
            <Main_offer_page />
            <Main_diliveray_Page />
            <Main_item_colur_page varient={data?.data[0]?.productColurOption} />
            <Main_Item_Info_page InfoData={data?.data[0]} />
          </div>
          <div className="w-full flex flex-col ">
            <Product_Exchange_page data={data} />
            <hr className="p-[0.5px] my-4 bg-gray-400 w-full"></hr>
            <div className="w-full border border-gray-600 rounded-lg p-2 py-1 ">
              Add to WishList
            </div>
          </div>
        </div>
      </div>
      <Prouduct_relative_info />
      <Product_Manu_page />
    </div>
  );
}

export default Main_page;
